# Extension Manifest

Complete reference for the Newsroom Extension repository structure, skill metadata, and workflow patterns.

## Directory Structure

```
newsroom-extension/
├── README.md                    # Overview, install, skill list
├── INSTALLATION.md              # Detailed setup for all platforms
├── CONTRIBUTING.md              # Contribution guidelines
├── EXTENSION_MANIFEST.md        # This file
├── GEMINI.md                    # Gemini CLI delegation protocol
├── LICENSE                      # Unlicense (public domain)
├── package.json                 # Node.js config, MCP SDK dependency
├── package-lock.json            # Locked dependency versions
├── server.js                    # MCP server (stdio transport)
├── bootstrap.js                 # Auto-installs deps, then runs server.js
├── test-client.js               # MCP protocol test client
├── gemini-extension.json        # Gemini CLI extension manifest
│
└── skills/                      # All skill implementations (Markdown + YAML frontmatter)
    ├── copy-review/
    │   └── SKILL.md
    ├── data-archivist/
    │   └── SKILL.md
    ├── final-editor-review/
    │   └── SKILL.md
    ├── investigative-journalist/
    │   ├── SKILL.md                         # Main investigative framework
    │   ├── corporate-veil-piercing.md       # Sub-skill
    │   ├── muckraker-master-file.md         # Sub-skill
    │   ├── osint-source-inversion.md        # Sub-skill
    │   ├── precision-foia-engineering.md     # Sub-skill
    │   ├── structural-dependency-mapping.md  # Sub-skill
    │   ├── temporal-anomaly-sequencing.md    # Sub-skill
    │   └── zero-error-defensive-audit.md    # Sub-skill
    ├── managing-editor/
    │   └── SKILL.md
    ├── publish-article/
    │   └── SKILL.md
    ├── publish-series/
    │   └── SKILL.md
    └── social-distributor/
        └── SKILL.md
```

## Skill Format

Each skill is a Markdown file with YAML frontmatter:

```markdown
---
name: skill-name-kebab-case
description: One-line description of when to use this skill.
---

# Skill Title

[Full skill content...]
```

The MCP server discovers all `.md` files under `skills/` recursively and extracts `name` and `description` from the frontmatter.

## Skill Index

### Investigative Desk (8 skills)

| Name | File | Depends On |
|------|------|------------|
| investigative-journalist | `skills/investigative-journalist/SKILL.md` | None (entry point) |
| muckraker-master-file | `skills/investigative-journalist/muckraker-master-file.md` | investigative-journalist |
| structural-dependency-mapping | `skills/investigative-journalist/structural-dependency-mapping.md` | muckraker-master-file |
| corporate-veil-piercing | `skills/investigative-journalist/corporate-veil-piercing.md` | structural-dependency-mapping |
| zero-error-defensive-audit | `skills/investigative-journalist/zero-error-defensive-audit.md` | muckraker-master-file |
| osint-source-inversion | `skills/investigative-journalist/osint-source-inversion.md` | structural-dependency-mapping |
| temporal-anomaly-sequencing | `skills/investigative-journalist/temporal-anomaly-sequencing.md` | muckraker-master-file |
| precision-foia-engineering | `skills/investigative-journalist/precision-foia-engineering.md` | investigative-journalist |

### Newsroom Operations (7 skills)

| Name | File | Depends On |
|------|------|------------|
| copy-review | `skills/copy-review/SKILL.md` | None |
| data-archivist | `skills/data-archivist/SKILL.md` | muckraker-master-file |
| social-distributor | `skills/social-distributor/SKILL.md` | copy-review |
| final-editor-review | `skills/final-editor-review/SKILL.md` | copy-review, zero-error-defensive-audit |
| publish-article | `skills/publish-article/SKILL.md` | final-editor-review |
| publish-series | `skills/publish-series/SKILL.md` | final-editor-review |
| managing-editor | `skills/managing-editor/SKILL.md` | None |

## MCP Server

The server (`server.js`) uses the Model Context Protocol SDK v1.29.0 with stdio transport. It exposes:

**Tools:**
- `list-skills` — Returns all 15 skills with names and descriptions
- `get-skill` — Loads a skill by name (case-insensitive match)
- `search-skills` — Searches names, descriptions, and file content

**Resources:**
- Each `.md` file is exposed as a `file://` resource with its frontmatter name and description

**Config files:**
- `gemini-extension.json` — Gemini CLI discovers this to register the MCP server
- `bootstrap.js` — Entry point for Gemini CLI; auto-runs `npm install` if `node_modules` is missing, then imports `server.js`

## Workflow Sequencing

```
                     investigative-journalist
                        (scope & claims)
                              |
                    muckraker-master-file
                     (gather intelligence)
                              |
              +-------+-------+-------+-------+
              |       |       |       |       |
         structural  corp.   temporal  osint  precision
         dep.map     veil    anomaly  source  foia
              |       |       |       |       |
              +-------+-------+-------+-------+
                              |
                  zero-error-defensive-audit
                     (verify all claims)
                              |
                         copy-review
                              |
                     final-editor-review
                              |
                  +-----------+-----------+
                  |                       |
            publish-article         publish-series
                  |                       |
                  +-----------+-----------+
                              |
                      managing-editor
                  (track, archive, next)
```

## Version History

### v3.0.0 (Current)

- 15 skills across Investigative Desk and Newsroom Operations
- MCP server with stdio transport (SDK v1.29.0, protocol 2025-03-26)
- Multi-platform: Gemini CLI, Claude Desktop, Claude Code
- Auto-dependency bootstrap for Gemini CLI
- Full-text content search across skills
