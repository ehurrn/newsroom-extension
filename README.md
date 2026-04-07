# Newsroom

![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Unlicense-brightgreen.svg)
![Gemini](https://img.shields.io/badge/Gemini_CLI-supported-4285F4.svg)
![Cowork](https://img.shields.io/badge/Cowork-supported-D97757.svg)

An AI-powered investigative journalism toolkit. 15 skills covering OSINT, FOIA engineering, corporate veil piercing, libel defense, and full editorial workflow — from first lead to published story.

Works with **Gemini CLI** and **Claude** (Cowork, Claude Code).

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

## How It Works

Skills are markdown files in the `skills/` directory. Each desk has a `SKILL.md` with operational guidelines. The investigative-journalist desk has additional sub-skill files for specialized techniques.

Skills are designed to run in sequence — each one builds on the previous:

```
Define investigation → Gather intelligence → Map connections
  → Verify claims → Edit and review → Publish → Track what's next
```

See [GEMINI.md](GEMINI.md) for the full sub-agent delegation protocol and desk ordering.

## License

[Unlicense](LICENSE) — free to use, modify, and share. No restrictions.

**Important:** You are responsible for all legal, ethical, and professional standards in your jurisdiction. Consult legal counsel before publishing sensitive investigations.
