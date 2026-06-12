---
name: subject-dossier-construction
description: Use when a named person or company becomes a subject of an investigation — runs a private-investigator-grade public records sweep, builds a structured dossier (identity, assets, litigation, affiliations, digital footprint), and grades every finding before it enters the Master File.
---

# Subject Dossier Construction

## Overview

The discipline of a licensed private investigator applied to journalism: before theorizing about a subject, exhaust the *routine* record. Most "hidden" facts are sitting in public registries no one swept. A dossier is complete when every row of the records sweep below is marked retrieved, blocked, or confirmed-nonexistent — not when you feel done.

**Legal boundary (non-negotiable):** Public records, paid aggregators of public records, and what the subject voluntarily published are in scope. Pretexting to obtain financial/phone records, accessing accounts, tracking devices, recording without consent, and impersonation are out of scope — they are crimes in most jurisdictions and destroy the story's admissibility and the outlet's defense. If a record is private, the route is FOIA, litigation discovery, or a willing human source — never deception.

## Step 1: Identity Resolution

Before any sweep, lock the subject's identity. Wrong-person errors are the #1 cause of retractions.

- Collect: full legal name, AKAs/maiden/DBA names, approximate age or DOB range, known addresses (current + historical), known associates.
- Disambiguate against same-name individuals using **two independent anchors** (e.g., address + employer; DOB + license number).
- Register the subject in the Master File (`entities[]`) with all aliases and identifiers populated — see `schemas/master-file.schema.json`. The `identifiers` block (EIN, SOS filing numbers, CIK, license numbers, domains) is your deduplication key for everything that follows.

## Step 2: The Records Sweep (the PI checklist)

Run every applicable row. Log each as a `DOC-` evidence item (retrieved) or `GAP-` entry (pending/blocked). Skipping a row silently is a red flag.

| # | Record class | Where | What it reveals |
|---|--------------|-------|-----------------|
| 1 | Corporate registrations | Secretary of State (every jurisdiction in `entities[].jurisdictions`), OpenCorporates | Officer/agent roles, shell overlap, shared addresses |
| 2 | UCC filings | State SOS UCC portals | Secured debts, asset collateral, lender relationships |
| 3 | Property | County assessor/recorder | Holdings, transfers, LLC ownership, mortgage history |
| 4 | Civil litigation | PACER, state unified court portals | Disputes, judgments, sworn statements, exhibits |
| 5 | Criminal/traffic | County clerk, state repositories (where public) | Priors, pending matters |
| 6 | Bankruptcy | PACER (BK courts) | Full asset/liability schedules under oath |
| 7 | Liens & judgments | County recorder, state tax lien registries | Financial distress, IRS/state actions |
| 8 | Campaign finance | FEC, state disclosure portals | Donations given/received, PAC ties |
| 9 | Regulatory/licensing | State licensing boards, FINRA BrokerCheck, medical/bar registries | Discipline history, suspensions |
| 10 | Securities | SEC EDGAR (full-text + CIK), Form 4s, 13D/G | Holdings, insider transactions, related parties |
| 11 | Nonprofit | IRS 990s (ProPublica Nonprofit Explorer) | Compensation, related-org transactions, board overlap |
| 12 | Government contracts | USAspending, state procurement portals | Award timing vs. donations/votes |
| 13 | Professional footprint | LinkedIn, conference bios, alumni records | Employment timeline, claimed credentials to verify |
| 14 | Digital infrastructure | WHOIS history, DNS records, certificate transparency | Domain ownership, shared infrastructure between entities |
| 15 | Deleted/changed web | Wayback Machine, archive.today, cached pages | Scrubbed bios, edited press releases |
| 16 | Social media (public) | Native search, geotagged posts, follower-graph overlap | Associations, location/timeline corroboration, statements against interest |
| 17 | Vital/genealogy | County vital records (where public), obituaries, genealogy indexes | Family relationships behind nominee arrangements |

**Sweep ordering:** rows 1–3 first (they generate new entity names and addresses that seed every other row), then 4–7 (sworn financial detail), then the rest in parallel.

## Step 3: Grade Everything

Every finding gets an Admiralty grade before it enters the Master File (`evidence[].reliability` + `evidence[].credibility`):

| | Meaning | Example |
|---|---------|---------|
| **A1** | Certified official record, independently confirmed | Recorded deed matching assessor data |
| **B2** | Usually-reliable source, probably true | PACER docket entry not yet cross-checked |
| **C3** | Fairly reliable, possibly true | Trade-press report citing unnamed sources |
| **D4–E5** | Weak | Anonymous social post, single uncorroborated tip |
| **F6** | Cannot be judged | New source, no track record |

**Publication rule:** a claim is `publishable: true` only if **corroborated by two independent sources**, or single-sourced to an **A1/A2 official record**. Two outlets citing the same wire story are ONE source. A subject's own sworn filing is an A-grade source *against* that subject.

## Step 4: Associate Network Expansion

For each new entity surfaced by the sweep (registered agents, co-officers, co-litigants, shared addresses):
1. Register it (`ENT-`) and the edge (`REL-` with `evidence_ids`).
2. Decide: full dossier (if it touches money flow or decision power) or thin entry (context only).
3. Flag **convergence patterns**: same registered agent across "unrelated" LLCs, shared suite numbers, officer rotations, sequential filing dates. These are leads (`LEAD-`), not claims, until documented.

## Step 5: Dossier Output

Produce `dossiers/ENT-XXX-dossier.md` containing:
1. **Identity block** — resolved identity, anchors used, confidence.
2. **Asset summary** — property, business interests, secured positions (each line cites a `DOC-`).
3. **Litigation history** — table of matters with outcomes.
4. **Affiliation map** — relationships with grades.
5. **Timeline extract** — subject's events merged into the master timeline.
6. **Open gaps** — what's still pending or blocked, with retrieval strategy.
7. **Right-of-reply log** — when/how the subject was contacted for comment (required before publishing any `defamation_risk: high` claim).

## Red Flags

| Thought | Reality |
|---------|---------|
| "The aggregator (Spokeo/TLO-style) report is enough." | Aggregators are pointers, not evidence. Pull the underlying record. |
| "It's obviously the same John Smith." | Two anchors or it isn't resolved. |
| "I'll skip the UCC/bankruptcy rows, probably nothing there." | Bankruptcy schedules are the single richest sworn financial document available. Run every row. |
| "A source can get me their bank records." | Stop. That's likely a crime and kills the story. Route through FOIA, discovery, or documents the source lawfully possesses. |
| "Their socials are private, I'll make an account to follow them." | Deceptive access. Use what's public and what archives captured. |

---

**Pipeline position:** Run after `muckraker-master-file` initializes the registry, before `structural-dependency-mapping` (the dossiers supply the nodes and edges that mapping analyzes). Feed all graded evidence to `zero-error-defensive-audit` before drafting.
