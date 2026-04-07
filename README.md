# Newsroom

![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Unlicense-brightgreen.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18-green.svg)
![MCP](https://img.shields.io/badge/MCP-1.29.0-purple.svg)

An AI-powered investigative journalism and newsroom operations toolkit. 15 skills organized into an Investigative Desk and a Newsroom Operations desk, designed for journalists who demand rigor, accountability, and editorial discipline.

Works with **Gemini CLI**, **Claude Desktop**, and **Claude Code**.

## Install

### Gemini CLI

```bash
gemini extensions install https://github.com/ehurrn/newsroom-extension
```

### Claude Desktop

Add to `~/.claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "newsroom": {
      "command": "node",
      "args": ["/path/to/newsroom-extension/server.js"]
    }
  }
}
```

Then restart Claude Desktop. See [INSTALLATION.md](INSTALLATION.md) for detailed setup.

### Claude Code

```bash
claude mcp add newsroom -- node /path/to/newsroom-extension/server.js
```

## Skills

### Investigative Desk

| Skill | Purpose |
|-------|---------|
| **investigative-journalist** | Scope investigations, define claims, map information dependencies |
| **muckraker-master-file** | Centralized intelligence file — sources, findings, gaps, risk |
| **structural-dependency-mapping** | Hidden connections between actors, organizations, and events |
| **corporate-veil-piercing** | Map corporate structures, ownership chains, beneficial ownership |
| **zero-error-defensive-audit** | Systematic fact-checking with source attribution and confidence scoring |
| **osint-source-inversion** | Reveal public information and assess publication risk |
| **temporal-anomaly-sequencing** | Detect timeline inconsistencies and suspicious chronological patterns |
| **precision-foia-engineering** | Draft legally rigorous FOIA requests with strategic sequencing |

### Newsroom Operations

| Skill | Purpose |
|-------|---------|
| **copy-review** | Line editing for readability, accessibility, SEO, and ad compliance |
| **data-archivist** | Transform raw OSINT into queryable, structured databases |
| **social-distributor** | Platform-optimized social posts with legally defensible copy |
| **final-editor-review** | Adversarial pre-publication libel filter and editorial sign-off |
| **publish-article** | Safe single-article deployment with pre/post-deployment checks |
| **publish-series** | Coordinated multi-part series with sequential editorial gates |
| **managing-editor** | Workflow coordination, TODO tracking, escalation, and cross-desk ops |

## Usage

The extension exposes three MCP tools:

| Tool | Description |
|------|-------------|
| `list-skills` | List all 15 skills with descriptions |
| `get-skill` | Load a skill's full content by name |
| `search-skills` | Search skills by keyword (titles, descriptions, and content) |

Skills are also exposed as MCP resources, so clients that support resource browsing can discover them automatically.

### Gemini CLI

```
> Use the investigative-journalist skill to scope a new investigation into city contract awards.
```

Gemini will call `get-skill` to load the skill, then follow its methodology.

### Claude Desktop / Claude Code

Once configured, ask Claude to use a skill:

```
Load the muckraker-master-file skill and help me build an intelligence file for this investigation.
```

## Workflow

Skills are designed to run in sequence. A typical investigation flows through these stages:

```
investigative-journalist  →  Define scope, claims, dependencies
        ↓
muckraker-master-file     →  Gather intelligence, organize sources
        ↓
structural-dependency-mapping / corporate-veil-piercing / temporal-anomaly-sequencing
        ↓
zero-error-defensive-audit →  Verify every claim against primary sources
        ↓
copy-review               →  Line-edit for clarity, accuracy, style
        ↓
final-editor-review       →  Adversarial legal and ethical review
        ↓
publish-article / publish-series  →  Deploy to production
        ↓
managing-editor           →  Track corrections, archive, next story
```

## Requirements

- Node.js 18+ (for Claude Desktop and Claude Code)
- Gemini CLI (for Gemini CLI usage)

Dependencies install automatically on first run via `bootstrap.js`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on reporting bugs, submitting skills, and writing case studies.

## License

[Unlicense](LICENSE) — public domain. Use freely, no restrictions.

**Important:** Journalists using this toolkit remain responsible for all legal, ethical, and professional standards in their jurisdiction.
