---
name: muckraker-master-file
description: Use when starting an investigation, building a multi-actor case, or before drafting conclusions to construct a relational registry of entities, evidence, and gaps. This is the foundation—build it before writing anything.
---

# Muckraker Master File

## Overview

A relational database schema for investigations. Before writing a single paragraph of narrative, establish a living registry that maps every entity to its role, every assertion to a source document, and every gap to a missing record. This prevents narrative drift and ensures no claim exists without an evidentiary anchor.

## When to Use

- **Starting phase**: Beginning an investigation involving 3+ actors or financial networks
- **Multi-document cases**: Integrating findings across SEC filings, court records, campaign disclosures, FOIA responses
- **Complexity check**: If your investigation involves indirect flows (PAC → Vendor → Official), build the file first
- **Draft phase**: Before writing conclusions, audit whether every paragraph maps to a Master File entry
- **Gaps analysis**: Identify what documents *should* exist but haven't been retrieved yet

**NOT** for: Quick fact-checks or single-document analysis. Start here only if you're building a systemic case.

## Core Pattern: Entity Registry

### Structure

Each investigation needs three tables:

#### 1. Entities Table
Register every actor with a distinct role. Never use a person's name without context.

| Entity ID | Name | Role | Organization | Relationship |
|-----------|------|------|--------------|--------------|
| `ENT-001` | John Smith | Initiator | Acme Corp Board | CEO; appointed 2023-03 |
| `ENT-002` | Jane Doe | Beneficiary | Acme Vendors LLC | Owner; receives contracts post-policy-shift |
| `ENT-003` | City Council | Decision-Maker | Municipal Government | Votes on contract approval |

**Role Definitions:**
- **Initiator**: Actor proposing or driving the action
- **Beneficiary**: Who profits or gains from the outcome
- **Victim**: Who is harmed or disadvantaged
- **Witness/Document Source**: Who observed or recorded evidence
- **Gatekeeper**: Who controls access (regulator, official, blocking party)

#### 2. Evidentiary Trace Table
Every assertion must have a File ID. No floating claims.

| Assertion ID | Assertion | Entity | File ID | Source Type | Date | Status |
|--------------|-----------|--------|---------|-------------|------|--------|
| `ASS-001` | "Jane Doe awarded $2.3M in contracts post-policy-shift" | ENT-002 | `DOC-045: City Contract Register 2024` | Official Record | 2024-06 | ✓ Confirmed |
| `ASS-002` | "Smith received $50K donation from Doe-affiliated PAC" | ENT-001 | `DOC-012: State FEC Filing Q2-2023` | Campaign Finance | 2023-06 | ✓ Confirmed |
| `ASS-003` | "Smith met Doe on dates X, Y, Z" | ENT-001, ENT-002 | `DOC-XXX` | TBD | TBD | ⚠️ Unconfirmed |

**Status Legend:**
- ✓ Confirmed: Document retrieved and reviewed
- ⚠️ Unconfirmed: Claimed but not yet documented
- 🔴 Contradiction: Different sources conflict; needs resolution
- ❌ Falsified: Document contradicts assertion

#### 3. Gap Analysis Table
List what documents *should* exist based on logic, but haven't been retrieved.

| Gap ID | Expected Document | Entity | Why It Should Exist | Search Status |
|--------|-------------------|--------|-----------------------|----------------|
| `GAP-001` | Board Meeting Minutes (2023-2024) | ENT-003 | Contract approval votes must have minutes | ⏳ FOIA Requested (Response Due: 2024-05) |
| `GAP-002` | Tax Returns (2022-2024) | ENT-002 | Vendor income shows policy-shift timing | 🔴 Not Public; Subpoena May Be Required |
| `GAP-003` | Communications (2023-Q2) | ENT-001, ENT-002 | Timing suggests coordination; need emails/texts | ⏳ Litigation Hold Review in Progress |

**Search Status:**
- ⏳ In Progress: FOIA request, subpoena, or court filing pending
- 🔴 Blocked: Private, privileged, or legally protected
- ✓ Retrieved: Document obtained and filed
- ❓ Not Yet Searched: Gap identified but search strategy TBD

## Implementation Workflow

### Phase 1: Bootstrap (Day 1-2)
1. Read existing news coverage and identify all actors
2. Create Entities table with roles (use "Unknown" if unclear; refine later)
3. Sketch preliminary Evidentiary Trace: What claims are already being made? What documents support them?
4. Identify obvious gaps (e.g., "I should have their emails but don't")

### Phase 2: Document Collection (Ongoing)
1. For each gap, assign a search strategy: FOIA request, subpoena, open records, WayBack Machine, trade publications
2. As documents arrive, populate Evidentiary Trace with File IDs and Status
3. Update Entity table if new actors emerge

### Phase 3: Audit Before Draft (Pre-Writing)
1. Review Evidentiary Trace: Are there unconfirmed assertions? Resolve them or remove from draft.
2. Check Entity table: Does the draft reference anyone without their role defined?
3. Gap analysis: Are you drafting around missing documents? Flag this in editor's note, or expand search first.

## Quick Reference: Document Naming

Assign each retrieved document a unique ID:

| ID Scheme | Example | Use Case |
|-----------|---------|----------|
| `DOC-### (sequential)` | `DOC-001, DOC-002` | Most common; chronological filing |
| `SEC-NNNN (metadata)` | `SEC-10K-2023, SEC-8K-20240315` | Financial filings; include form type + date |
| `PACER-NNNNN` | `PACER-2024CV12345` | Court records; include docket number |
| `FOIA-STATE-NNNNN` | `FOIA-CA-2024-001234` | FOIA responses; include state + request number |

## Common Mistakes

| Mistake | Consequence | Fix |
|---------|------------|-----|
| Skipping Master File; drafting directly from notes | Narrative drifts; assertions float unsourced | Stop. Build Master File before draft. |
| Using vague roles ("Person A", "Company B") | Can't trace dependencies or conflicts of interest | Use specific roles: Initiator, Beneficiary, Gatekeeper. |
| Leaving assertions unconfirmed in published draft | Libel exposure; editor pulls story | Mark status in Evidentiary Trace; remove unconfirmed claims before draft. |
| Confusing "I haven't found it yet" with "It doesn't exist" | False gap analysis; wastes search resources | Use Gap table: distinguish "not retrieved" from "not public" from "doesn't exist". |
| Assuming entity relationships from timing alone | Suggestive ≠ causal; narrative speculation | Require documentary evidence: emails, payments, meeting records. |

## Red Flags: When the Master File is Incomplete

| Signal | What It Means |
|--------|---------------|
| "I can write the draft without finishing the Master File." | You're drifting into narrative. Stop. Finish the file first. |
| "Two assertions point to the same entity but different documents." | Contradiction detected. Audit both documents; resolve discrepancy before drafting. |
| "I have a strong hunch about what happened, but no document yet." | Archive the hunch in Gap analysis. Don't draft until document retrieved. |
| "The Gap table is longer than the Evidentiary Trace table." | Too many unknowns. Expand search before drafting. |

## Example Master File (Abbreviated)

**Investigation: "Vendor Contracts and Municipal Government Voting Pattern"**

**Entities:**
- ENT-001: Councilmember Smith (Initiator/Gatekeeper)
- ENT-002: Acme Vendors LLC, Owner Jane Doe (Beneficiary)
- ENT-003: City Council (Decision-Maker)
- ENT-004: Smith's Campaign Committee (Intermediary)

**Key Evidentiary Traces:**
- ASS-001: "Doe's company awarded $2.3M in contracts after voting bloc shift" → `DOC-045: City Contract Register 2024` ✓
- ASS-002: "$50K donation from Doe-affiliated PAC to Smith's campaign in Q2-2023" → `DOC-012: State FEC Filing` ✓
- ASS-003: "Smith's voting pattern changed after donation" → `DOC-089: City Council Voting Record 2023-2024` ✓

**Gaps:**
- GAP-001: Board meeting minutes (2023) where contract discussion occurred → ⏳ FOIA Requested
- GAP-002: Direct communications (emails, texts) between Smith and Doe → 🔴 Subpoena Required

---

**Required Background:** You MUST use this BEFORE deploying `zero-error-defensive-audit`. The Master File is the evidentiary foundation for every defensible claim.
