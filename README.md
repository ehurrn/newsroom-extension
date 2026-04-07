# Newsroom

![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Unlicense-brightgreen.svg)
![MCP](https://img.shields.io/badge/MCP-1.29.0-purple.svg)

An AI-powered investigative journalism toolkit. 15 skills covering OSINT, FOIA engineering, corporate veil piercing, libel defense, and full editorial workflow — from first lead to published story.

Works with **Gemini CLI**, **Claude Desktop**, and **Claude Code**.

## Install

### Gemini CLI

Paste this into your terminal:

```
gemini extensions install https://github.com/ehurrn/newsroom-extension
```

That's it. The extension handles everything else automatically.

### Claude Desktop

1. Open **Claude Desktop**
2. Go to **Settings** (gear icon) → **Extensions**
3. Click **Advanced settings**, then scroll to **Extension Developer**
4. Click **Install Extension...** and point it to the downloaded folder

If prompted for manual config, see the [detailed guide](INSTALLATION.md#claude-desktop).

### Claude Code (Desktop app)

1. Click the **+** button next to the prompt box
2. Select **Plugins** → **Add plugin**
3. Follow the prompts to add from a local folder

Or from the terminal: `claude mcp add newsroom -- node /path/to/newsroom-extension/server.js`

For step-by-step instructions with screenshots, see [INSTALLATION.md](INSTALLATION.md).

## What's Inside

### Investigative Desk (8 skills)

| Skill | What it does |
|-------|-------------|
| **Investigative Journalist** | Scope your investigation, define claims, map what you need to prove |
| **Muckraker Master File** | Build your central intelligence file — sources, findings, gaps, risks |
| **Structural Dependency Mapping** | Uncover hidden connections between people, organizations, and money |
| **Corporate Veil Piercing** | Trace corporate structures, shell companies, and beneficial ownership |
| **Zero-Error Defensive Audit** | Fact-check every claim with source attribution and confidence scoring |
| **OSINT Source Inversion** | Assess what's publicly findable and evaluate publication risk |
| **Temporal Anomaly Sequencing** | Spot timeline inconsistencies and suspicious chronological patterns |
| **Precision FOIA Engineering** | Draft legally rigorous public records requests with strategic sequencing |

### Newsroom Operations (7 skills)

| Skill | What it does |
|-------|-------------|
| **Copy Review** | Line-edit for readability, SEO, accessibility, and ad compliance |
| **Data Archivist** | Turn raw documents into structured, queryable databases |
| **Social Distributor** | Generate platform-ready social posts with legally defensible copy |
| **Final Editor Review** | Adversarial pre-publication review — libel, ethics, editorial sign-off |
| **Publish Article** | Safe single-article deployment with pre- and post-publish checks |
| **Publish Series** | Coordinate multi-part series with sequential editorial gates |
| **Managing Editor** | Track assignments, deadlines, blockers, and hand off tasks that need a human |

## How It Works

Ask your AI assistant to use a skill by name. For example:

> "Use the investigative-journalist skill to help me scope an investigation into city contract awards."

> "Load the muckraker-master-file skill and help me organize what we have so far."

> "Run the zero-error-defensive-audit on my draft before I send it to the editor."

Skills are designed to run in sequence — each one builds on the previous:

```
Define your investigation  →  Gather intelligence  →  Map hidden connections
    →  Verify every claim  →  Edit and review  →  Publish  →  Track what's next
```

## Requirements

- **Gemini CLI**: Just install it — everything else is automatic
- **Claude Desktop / Claude Code**: Requires [Node.js](https://nodejs.org/) 18 or newer (free download, takes 2 minutes)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to report bugs, suggest skills, or submit case studies.

## License

[Unlicense](LICENSE) — free to use, modify, and share. No restrictions.

**Important:** You are responsible for all legal, ethical, and professional standards in your jurisdiction. Consult legal counsel before publishing sensitive investigations.
