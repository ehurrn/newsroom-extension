# Newsroom

![Version](https://img.shields.io/badge/version-3.2.0-blue.svg)
![License](https://img.shields.io/badge/license-Unlicense-brightgreen.svg)
![Gemini](https://img.shields.io/badge/Gemini_CLI-supported-4285F4.svg)
![Cowork](https://img.shields.io/badge/Cowork-supported-D97757.svg)

An AI-powered investigative journalism toolkit. 18 skills covering subject dossiers, OSINT, FOIA engineering, corporate veil piercing, evidence preservation, libel defense, and full editorial workflow — from first lead to published story.

Works with **Claude** (Cowork, Claude Code), **Gemini CLI**, and any **AGENTS.md-aware agent** (OpenAI Codex, Cursor — see [AGENTS.md](AGENTS.md)).

## Installation

### Gemini CLI

```bash
gemini extensions install https://github.com/ehurrn/newsroom-extension
```

### Cowork / Claude Code

Add `ehurrn/newsroom-extension` as a marketplace in Cowork settings, or:

```bash
claude plugins add ehurrn/newsroom-extension
```

## Commands (Cowork / Claude Code)

Slash commands for common workflows:

| Command | Description |
|---|---|
| `/investigate` | Launch an investigation — entity mapping, dependency tracing, OSINT, FOIA, libel-proof documentation |
| `/copy-review` | Line-edit for readability, accessibility, and SEO without touching facts |
| `/editor-review` | Final editorial review — fact verification, legal risk, sourcing, publication readiness |
| `/publish` | Safe single-article deployment with pre-flight checklist |
| `/publish-series` | Coordinated deployment of a multi-part investigative series |
| `/distribute` | Generate platform-optimized social posts from a published article |
| `/archive` | Ingest raw OSINT into a queryable database with chain of custody |

## Skills

Domain knowledge used automatically when relevant. On Gemini CLI, ask the agent to load a skill by name. On Cowork/Claude Code, skills trigger automatically or via slash commands.

### Investigative Desk

| Skill | What it does |
|---|---|
| `investigative-journalist` | Scope your investigation, define claims, map what you need to prove |
| `muckraker-master-file` | Build your central intelligence file — structured `master-file.json` of entities, evidence, claims, gaps |
| `evidence-preservation-protocol` | Mandatory: write-once evidence store, append-only collection log, legal hold — delete nothing |
| `evidence-grading` | One shared standard (Admiralty A–F × 1–6) and publication rule used by every sourcing desk |
| `subject-dossier-construction` | PI-grade public records sweep and structured dossier per subject |
| `structural-dependency-mapping` | Uncover hidden connections between people, organizations, and money |
| `corporate-veil-piercing` | Trace corporate structures, shell companies, and beneficial ownership |
| `zero-error-defensive-audit` | Fact-check every claim with source attribution and confidence scoring |
| `osint-source-inversion` | Assess what's publicly findable and evaluate publication risk |
| `temporal-anomaly-sequencing` | Spot timeline inconsistencies and suspicious chronological patterns |
| `precision-foia-engineering` | Draft legally rigorous public records requests with strategic sequencing |

### Newsroom Operations

| Skill | What it does |
|---|---|
| `copy-review` | Line-edit for readability, SEO, accessibility, and ad compliance |
| `data-archivist` | Turn raw documents into structured, queryable databases |
| `social-distributor` | Generate platform-ready social posts with legally defensible copy |
| `final-editor-review` | Adversarial pre-publication review — libel, ethics, editorial sign-off |
| `publish-article` | Safe single-article deployment with pre- and post-publish checks |
| `publish-series` | Coordinate multi-part series with sequential editorial gates |
| `managing-editor` | Track assignments, deadlines, blockers, and hand off tasks that need a human |

## How It Works

Skills are markdown files in the `skills/` directory. Each desk has a `SKILL.md` with operational guidelines. The investigative-journalist desk has additional sub-skill files for specialized techniques.

Skills are designed to run in sequence — each one builds on the previous:

```
Define investigation → Gather intelligence → Map connections
  → Verify claims → Edit and review → Publish → Track what's next
```

See [GEMINI.md](GEMINI.md) for the full sub-agent delegation protocol and desk ordering. AGENTS.md-aware tools (OpenAI Codex, Cursor) get the same operating model via [AGENTS.md](AGENTS.md).

## Data Schema & Evidence Discipline

All investigation state lives in a single `master-file.json` conforming to [`skills/investigative-journalist/schemas/master-file.schema.json`](skills/investigative-journalist/schemas/master-file.schema.json) — entities, typed relationships, graded evidence, claims, timeline, gaps, leads, and an append-only collection log. Markdown reports are rendered from it, never maintained separately.

Core invariants enforced across every desk:

- **Grade at intake** — every evidence item carries an Admiralty grade (source reliability A–F × information credibility 1–6) and a chain-of-custody block (where obtained, when, how, SHA-256 hash).
- **Preserve everything, delete nothing** — collected items go into a write-once `evidence/` directory; web sources are archived to a third party (Wayback/archive.today) at collection time. Notes, negative search results, dead-end leads, and drafts are retained under legal hold (on by default).
- **Append-only audit trail** — every collect/grade/cite/comment/publish action is a `collection_log[]` entry with a monotonic sequence number; the log is never edited, only amended.
- **Publication rule** — a claim is publishable only when corroborated by two independent sources, or single-sourced to an A1/A2 official record.
- **Right of reply** — high defamation-risk claims require a documented comment request before drafting.
- **Legal boundary** — public records and lawful FOIA only; no pretexting, account access, impersonation, or non-consensual recording.

## What's New in 3.2.0

- **One evidence-grading standard** (`evidence-grading.md`) — the Admiralty scale (source reliability A–F × information credibility 1–6) and a single publication rule, replacing the divergent HIGH/MEDIUM/LOW and PRIMARY/SECONDARY/TERTIARY scales that the audit and final-review desks used separately.
- **Reconciled workspace layout** — `managing-editor` and `evidence-preservation-protocol` now share one canonical session structure (`master-file.json` + `evidence/` + `working/` + `drafts/`); `managing-editor` is now the documented legal-hold authority that deletion requests escalate to, with a hash-mismatch tamper check.
- **Jurisdiction-aware libel defense** — `final-editor-review` now flags that U.S. actual-malice protections don't apply abroad (UK/Commonwealth reverse the truth burden; libel tourism) and defaults to the strictest plausible regime.
- **Legal boundary on `corporate-veil-piercing`** — explicit no-pretexting/public-records-only guardrail (parity with `subject-dossier-construction`), plus schema hooks (`ENT-`/`REL-` edges) and A1/A2 grading before naming a beneficial owner.

## What's New in 3.1.0

- **Fixed Claude Code installability** — `marketplace.json` now registers one plugin sourced from the repo root (it previously listed skill markdown files as plugins, which could not install); removed the unsupported inline commands array from `plugin.json` (commands are auto-discovered from `commands/`); unified name and version across all manifests.
- **New: machine-readable Master File schema** (`schemas/master-file.schema.json`) replacing markdown-only tables.
- **New skill: `subject-dossier-construction`** — PI-grade identity resolution and a 17-row public records sweep per subject.
- **New skill: `evidence-preservation-protocol`** — mandatory spoliation-proof record keeping with desk-handoff checklists.
- **New: `AGENTS.md`** — compatibility with OpenAI Codex, Cursor, and other AGENTS.md-aware agents.

## License

[Unlicense](LICENSE) — free to use, modify, and share. No restrictions.

**Important:** You are responsible for all legal, ethical, and professional standards in your jurisdiction. Consult legal counsel before publishing sensitive investigations.
