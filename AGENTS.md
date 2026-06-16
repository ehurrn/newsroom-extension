# Newsroom — Agent Instructions

Cross-platform entry point for OpenAI Codex, Cursor, and any other AGENTS.md-aware agent.

## What This Is

**Newsroom** is a full-stack AI toolkit for investigative journalism and editorial operations. It provides 18 specialized skills organized into sequential desks: research, archival, copy review, social distribution, editorial sign-off, publication, and workflow management.

Version: **3.2.0**

## How to Load Skills

Skill files live in the `skills/` directory. Each desk has a `SKILL.md`. The investigative-journalist desk has additional sub-skill files in `skills/investigative-journalist/`.

### Investigative Desk

| File | Sub-skill |
|------|-----------|
| `skills/investigative-journalist/SKILL.md` | Main desk: scope, claims, strategic planning |
| `skills/investigative-journalist/muckraker-master-file.md` | Entity mapping and `master-file.json` construction (schema: `schemas/master-file.schema.json`) |
| `skills/investigative-journalist/evidence-preservation-protocol.md` | **MANDATORY** — write-once `evidence/` store, append-only collection log, legal hold; runs at every desk handoff |
| `skills/investigative-journalist/evidence-grading.md` | Shared Admiralty grading scale (source A–F × credibility 1–6) and publication rule used by every sourcing desk |
| `skills/investigative-journalist/subject-dossier-construction.md` | PI-grade public records sweep and structured dossier per named subject |
| `skills/investigative-journalist/structural-dependency-mapping.md` | Indirect flows, board ties, fund flows, tacit relationships |
| `skills/investigative-journalist/osint-source-inversion.md` | Open-source intelligence curation and publication-risk assessment |
| `skills/investigative-journalist/precision-foia-engineering.md` | FOIA/public records request drafting with strategic sequencing |
| `skills/investigative-journalist/corporate-veil-piercing.md` | Shell companies, beneficial ownership, nominee structures |
| `skills/investigative-journalist/temporal-anomaly-sequencing.md` | Timeline sequencing; surface suspicious chronological patterns |
| `skills/investigative-journalist/zero-error-defensive-audit.md` | Libel-proof fact verification with Admiralty-graded source attribution |

### Newsroom Operations

| File | Desk |
|------|------|
| `skills/data-archivist/SKILL.md` | Convert raw research into structured, queryable databases |
| `skills/copy-review/SKILL.md` | Line-edit: readability, accessibility, SEO, ad compliance |
| `skills/social-distributor/SKILL.md` | Platform-ready social posts with legally defensible copy |
| `skills/final-editor-review/SKILL.md` | Adversarial pre-publication review — libel, ethics, editorial sign-off |
| `skills/publish-article/SKILL.md` | Safe single-article deployment with pre-/post-publish checks |
| `skills/publish-series/SKILL.md` | Coordinated multi-part series with sequential editorial gates |
| `skills/managing-editor/SKILL.md` | Assignments, deadlines, blockers, legal-hold authority |

## Operating Rules

**1. Structured data first.**
All investigation state lives in a single `master-file.json` conforming to `skills/investigative-journalist/schemas/master-file.schema.json`. Markdown reports are rendered from it, never maintained separately.

**2. Grade at intake.**
Every evidence item must carry an Admiralty grade (`evidence-grading.md`) — source reliability (A–F) × information credibility (1–6) — plus a chain-of-custody block (where obtained, when, how, SHA-256 hash) before it may be cited in any claim.

**3. Preserve everything, delete nothing.**
Collected items go into a write-once `evidence/` directory (named `DOC-NNN`). Web sources are archived to a third party (Wayback/archive.today) at collection time. Notes, negative search results, dead-end leads, and draft versions are retained. Legal hold is on by default; deletion requests escalate to managing-editor, never silently complied with.

**4. Publication rule.**
A claim is publishable only when corroborated by two independent sources, OR single-sourced to an A1/A2 official record. Two outlets repeating the same wire story = ONE source.

**5. Right of reply.**
Any claim carrying `defamation_risk: high` requires a documented comment request (logged in `collection_log[]`) before the draft is finalized.

**6. Legal boundary.**
Public records and lawful FOIA requests only. No pretexting, no unauthorized account access, no impersonation, no non-consensual recording.

**7. Sequential desks.**
No desk executes in parallel with another. Each desk runs the `evidence-preservation-protocol` handoff checklist before passing work downstream. This ensures accountability, traceability, and error-catching at every stage.

## Desk Order

```
investigative-journalist → data-archivist → copy-review
  → social-distributor → final-editor-review
  → publish-article / publish-series → managing-editor
```

## Slash Commands (Claude Code / Cowork)

| Command | Desk triggered |
|---------|---------------|
| `/investigate` | investigative-journalist (full framework) |
| `/archive` | data-archivist |
| `/copy-review` | copy-review |
| `/distribute` | social-distributor |
| `/editor-review` | final-editor-review |
| `/publish` | publish-article |
| `/publish-series` | publish-series |

## Author

**GitHub:** `ehurrn`  
**License:** Unlicense (public domain)  
**Last Updated:** 2026-06-15
