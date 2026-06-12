# Newsroom — Agent Instructions

Cross-platform instructions for AI coding agents (OpenAI Codex, Cursor, and any AGENTS.md-aware tool). Claude Code reads the plugin manifest in `.claude-plugin/`; Gemini CLI reads `gemini-extension.json` + `GEMINI.md`. This file gives every other agent the same operating model.

## What this is

A full-stack investigative journalism toolkit: 16 skills covering subject dossiers, OSINT, FOIA engineering, corporate veil piercing, libel defense, and the full editorial pipeline from lead to publication.

## How to load skills

Skills are plain markdown. To activate a desk, read its file and follow it:

- `skills/investigative-journalist/SKILL.md` — research desk (start here for investigations)
  - Sub-skills in the same directory: `muckraker-master-file.md`, `evidence-preservation-protocol.md` (mandatory, always loaded), `subject-dossier-construction.md`, `structural-dependency-mapping.md`, `osint-source-inversion.md`, `temporal-anomaly-sequencing.md`, `precision-foia-engineering.md`, `corporate-veil-piercing.md`, `zero-error-defensive-audit.md`
  - Data schema: `skills/investigative-journalist/schemas/master-file.schema.json`
- `skills/data-archivist/SKILL.md` — structure raw findings into queryable data
- `skills/copy-review/SKILL.md` — readability/SEO/accessibility line edit
- `skills/social-distributor/SKILL.md` — platform-optimized distribution copy
- `skills/final-editor-review/SKILL.md` — adversarial libel and fact review
- `skills/publish-article/SKILL.md`, `skills/publish-series/SKILL.md` — deployment
- `skills/managing-editor/SKILL.md` — workflow coordination

## Operating rules (all platforms)

1. **Structured data first.** All investigation state lives in `master-file.json` conforming to the schema above. Markdown reports are rendered from it.
2. **Grade at intake.** Every evidence item gets an Admiralty grade (source reliability A–F × information credibility 1–6) and a chain-of-custody block.
2a. **Preserve everything, delete nothing.** Every collected item is saved to the write-once `evidence/` directory and hashed at intake; web sources also get a third-party archive capture immediately. Notes, negative results, dead-end leads, and drafts are retained under legal hold. Every evidentiary action is an entry in the append-only `collection_log[]`.
3. **Publication rule.** A claim is publishable only when corroborated by two independent sources, or single-sourced to an A1/A2 official record.
4. **Right of reply.** High defamation-risk claims require a documented comment request before drafting them.
5. **Legal boundary.** Public records and lawful FOIA only. No pretexting, account access, impersonation, or non-consensual recording — ever.
6. **Sequential desks.** Research → archive → copy → social → legal review → publish. No desk skips the one before it.
