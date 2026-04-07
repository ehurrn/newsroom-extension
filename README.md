# Newsroom Extension

A newsroom plugin primarily designed for [Cowork](https://claude.com/product/cowork), Anthropic's agentic desktop application — though it also works in Claude Code. Full-stack AI newsroom toolkit covering investigative journalism (OSINT, entity mapping, FOIA, corporate veil piercing, libel defense) and newsroom operations (copy review, editorial review, publishing, social distribution, data archival).

## Installation

```bash
claude plugins add ehurrn/newsroom-extension
```

Or add `ehurrn/newsroom-extension` as a marketplace in Cowork settings.

## Commands

Explicit workflows you invoke with a slash command:

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

Domain knowledge Claude uses automatically when relevant:

### Investigative Desk

| Skill | What it does |
|---|---|
| `investigative-journalist` | Scope your investigation, define claims, map what you need to prove |
| `muckraker-master-file` | Build your central intelligence file — sources, findings, gaps, risks |
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

## Example Workflows

### Investigating a Lead

```
/investigate city contract awards to connected vendors
```

Launches the full investigative framework — master file construction, entity mapping, structural dependency tracing, FOIA request drafting, and defensive audit.

### Editorial Pipeline

```
/copy-review draft-article.md
/editor-review draft-article.md
/publish final-article.md
/distribute final-article.md
```

Run articles through the full editorial pipeline: technical copy review, editorial sign-off, safe deployment, and social distribution.

### Archiving Evidence

```
/archive ./foia-responses/
```

Ingest a batch of FOIA response documents into a structured, queryable database with chain of custody tracking.

## License

[Unlicense](LICENSE) — free to use, modify, and share. No restrictions.

**Important:** You are responsible for all legal, ethical, and professional standards in your jurisdiction. Consult legal counsel before publishing sensitive investigations.
