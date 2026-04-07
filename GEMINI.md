# Newsroom – Gemini CLI Configuration

## Overview

The **Newsroom** is a full-stack AI toolkit for investigative journalism and editorial operations. It provides specialized sub-agents (desks) that coordinate sequentially to research, validate, format, and publish high-integrity journalism.

This configuration defines the delegation protocol and operational workflow for the Gemini CLI.

## Architecture: Sub-Agent Delegation Protocol

All investigative and editorial work flows through a sequential desk-ordering system.

**Loading Desk Instructions:** Each desk's instructions are stored as markdown files in the `skills/` directory. Read the relevant `SKILL.md` file to load a desk's operational guidelines. Sub-skills within the investigative-journalist desk are separate `.md` files in `skills/investigative-journalist/`.

Each desk:
- Receives artifacts from the previous desk
- Performs focused, high-stakes work (research, validation, formatting, review, deployment)
- Passes validated output to the next desk
- May escalate blockers to a managing editor

No desk executes in parallel; this ensures accountability, traceability, and error-catching at each stage.

## Desks (Sequential Order of Operations)

### 1. **investigative-journalist**
**Skill file:** `skills/investigative-journalist/SKILL.md`
**Role:** Primary research and intelligence gathering
**Input:** Research brief, research objectives, leads, public records
**Output:** Raw findings documented in the Master File
**Sub-skills** (each a separate file in `skills/investigative-journalist/`):
- `muckraker-master-file.md` — Entity mapping and Master File construction
- `structural-dependency-mapping.md` — Dependency tracing (funds, board ties, contracts)
- `osint-source-inversion.md` — Open-source intelligence curation
- `temporal-anomaly-sequencing.md` — Timeline sequencing of events
- `precision-foia-engineering.md` — FOIA request engineering
- `corporate-veil-piercing.md` — Shell companies and beneficial ownership
- `zero-error-defensive-audit.md` — Libel-proof fact verification

---

### 2. **data-archivist**
**Skill file:** `skills/data-archivist/SKILL.md`
**Role:** Convert raw research into structured, queryable databases
**Input:** Raw Master File findings, unstructured documents, scans
**Output:** Cleaned datasets (CSV, JSON), database schemas, entity tables

---

### 3. **copy-review**
**Skill file:** `skills/copy-review/SKILL.md`
**Role:** Format, readability, and baseline ad validation
**Input:** Draft article or series from investigative-journalist
**Output:** Cleaned, readable copy; ad-compliant language; fact-checklist

---

### 4. **social-distributor**
**Skill file:** `skills/social-distributor/SKILL.md`
**Role:** Extract and craft social media distribution hooks
**Input:** Copy-reviewed article or series
**Output:** Social media assets, captions, scheduling recommendations

---

### 5. **final-editor-review**
**Skill file:** `skills/final-editor-review/SKILL.md`
**Role:** Adversarial libel defense and editorial integrity
**Input:** Copy-reviewed article, social media assets
**Output:** Legal risk assessment, suggested revisions, sign-off

---

### 6. **publish-article** / **publish-series**
**Skill files:** `skills/publish-article/SKILL.md`, `skills/publish-series/SKILL.md`
**Role:** Deployment to live platforms
**Input:** Final-editor-approved article or series
**Output:** Live URL, metadata, distribution confirmation

---

### 7. **managing-editor**
**Skill file:** `skills/managing-editor/SKILL.md`
**Role:** Workflow coordination and TODO management
**Input:** Multiple active investigations, resource constraints, deadlines
**Output:** Prioritized desk assignments, escalation decisions, workflow status

---

## Workflow Example

```
research-brief (input)
  ↓
investigative-journalist [RESEARCH DESK]
  → Master File with findings, timelines, entity map
  ↓
data-archivist [ARCHIVE DESK]
  → Structured datasets, entity tables, queryable relationships
  ↓
copy-review [COPY DESK]
  → Article draft, cleaned copy, fact-checklist
  ↓
social-distributor [SOCIAL DESK]
  → Social assets, captions, scheduling recs
  ↓
final-editor-review [LEGAL REVIEW]
  → Risk assessment, sign-off or revisions needed
  ↓
publish-article / publish-series [DEPLOY]
  → Live article with metadata, social distribution queued
  ↓
managing-editor [COORDINATION]
  → Monitor corrections, archive, next story prioritization
```

## Escalation & Blockers

If any desk encounters a hard blocker:
1. Document the blocker in clear language
2. Escalate to **managing-editor**
3. Managing-editor decides: retry, reassign, or pause
4. Other desks may continue with unrelated work

## Platform Support

Newsroom runs on:
- **Gemini CLI** (`gemini extensions install` — reads skill files directly)
- **Cowork / Claude Code** (Cowork marketplace plugin — reads `skills/` and `commands/` natively)

All desks are platform-agnostic and designed for human oversight at each stage.

## Author

**GitHub:** `ehurrn`
**License:** Unlicense (public domain)

---

**Last Updated:** 2026-04-06
