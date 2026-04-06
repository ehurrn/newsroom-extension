# Newsroom

![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Unlicense-brightgreen.svg)
![Platforms](https://img.shields.io/badge/platforms-Gemini%20CLI%20%7C%20Claude-orange.svg)

A comprehensive AI-powered investigative journalism and newsroom operations toolkit. 15 complementary skills designed for journalists, editors, and news organizations who demand rigor, accountability, and workflow discipline.

## The Problem

AI agents have democratized powerful reasoning capabilities, but most lack the investigative discipline required for serious journalism. Traditional newsroom workflows—fact-checking, source verification, deadline management, editorial oversight—don't translate automatically to AI-assisted work. The result: excellent analysis with concerning blind spots, stories that miss structural vulnerabilities, and publishing decisions made without proper editorial guardrails.

This extension was built by journalists for journalists who use AI as a collaborator, not a replacement.

## The Solution

**Newsroom provides 15 purpose-built skills organized into two interconnected tiers:

### Investigative Desk (7 skills)
Designed for deep, rigorous investigation with built-in accountability:

- **Investigative Journalist Framework** — Structured approach to defining investigation scope, identifying claims, and mapping dependencies
- **Muckraker Master File** — Centralized project intelligence management: sources, findings, gaps, risk assessment
- **Structural Dependency Mapping** — Identifies hidden connections between actors, organizations, and events
- **Zero-Error Defensive Audit** — Systematic fact-checking with source attribution and confidence scoring
- **OSINT Source Inversion** — Reveals what information is publicly available and how easily it could be misused
- **Temporal Anomaly Sequencing** — Detects timeline inconsistencies, gaps, and suspicious patterns
- **Precision FOIA Engineering** — Drafts legally rigorous FOIA requests with strategic sequencing
- **Corporate Veil Piercing** — Maps corporate structures, ownership chains, and beneficial ownership

### Newsroom Operations (7 skills)
Manages editorial workflow from draft to publication:

- **Copy Review** — Line editing with attention to clarity, accuracy, and house style
- **Data Archivist** — Manages datasets, sources, and supplementary materials for publication
- **Social Distributor** — Generates platform-specific social media content and scheduling guidance
- **Final Editor Review** — Comprehensive pre-publication checklist covering legal, editorial, and ethical dimensions
- **Publish Article** — Formats and publishes individual articles with metadata and archival prep
- **Publish Series** — Manages multi-part investigations with cross-linking and sequential release planning
- **Managing Editor** — High-level assignment tracking, deadline management, and editorial oversight

## Installation

### Gemini CLI (Recommended)

**Option 1: Install from GitHub (Preferred)**
```bash
gemini extensions install https://github.com/ehurrn/newsroom-extension
```
*Note: The extension automatically installs its dependencies on the first run.*

**Option 2: Link from repository**
```bash
gemini extensions link /path/to/newsroom-extension
```

**Option 3: Manual installation**
Clone the repository and link it as above.

### Claude Code

The extension can be used as an MCP server in Claude Code. See [INSTALLATION.md](INSTALLATION.md) for complete setup instructions.

### Claude Desktop

For native integration with Claude Desktop via Node.js MCP server, see [INSTALLATION.md](INSTALLATION.md).

## Quick Start

1. **Define your investigation:** Use *Investigative Journalist Framework* to scope your story, identify core claims, and map information dependencies.

2. **Gather intelligence:** Build out your *Muckraker Master File* with sources, findings, and flagged gaps.

3. **Uncover structure:** Run *Structural Dependency Mapping* and *Corporate Veil Piercing* to identify hidden relationships.

4. **Verify facts:** Use *Zero-Error Defensive Audit* to systematically verify claims with source attribution.

5. **Find anomalies:** Apply *Temporal Anomaly Sequencing* to identify timeline inconsistencies and suspicious patterns.

6. **Engineer intelligence gathering:** Draft strategic FOIA requests with *Precision FOIA Engineering*.

7. **Draft & review:** Work through editorial process with *Copy Review* and *Final Editor Review*.

8. **Publish:** Use *Publish Article* or *Publish Series* with proper archival and cross-linking.

## Theoretical Foundations

This toolkit synthesizes principles and best practices from leading journalism organizations and scholars:

- **UNESCO Newsroom Safety and Journalism Ethics** — Institutional frameworks for editorial integrity
- **SBI (Stabile Institute at Harvard)** — Investigative rigor and structured methodology
- **Brant Houston (Knight Chair, UTSA)** — Modern investigative journalism techniques
- **Zephyr Teachout (Fordham Law)** — Corporate accountability and beneficial ownership research
- **Craig Silverman (Columbia/Facebook IIP)** — Misinformation detection and verification
- **ICIJ & Bellingcat** — Open-source intelligence and collaborative investigation methodology

## Core Principles

| Principle | Application |
|-----------|-------------|
| **Radical Documentation** | Every finding, source, and decision is recorded with context and confidence levels |
| **Structural Thinking** | Journalism reveals systems, not just incidents. Map actors, relationships, dependencies. |
| **Verification Over Speed** | Claims are only publishable when multiple sources confirm with documented attribution |
| **Defensive Auditing** | Pre-publication: assume you're wrong. Find the ways your story could fail. Fix them. |
| **Transparent Methodology** | Readers deserve to know *how* you know what you know. Show your work. |
| **Source Protection** | Confidential source agreements are sacred. Build in protection mechanisms at every stage. |
| **Institutional Accountability** | Track decisions collectively. Newsroom operations skills enable editorial oversight and continuity. |

## Example Workflow: City Contract Scandal

Suppose you're investigating a pattern of city contracts awarded to a politically connected contractor.

1. **Scope** (Investigative Journalist Framework): Define the timeframe, the officials involved, the contract types, and the key claims you need to verify.

2. **Intelligence** (Muckraker Master File): Gather public records—contracts, bids, financial disclosures—into a centralized project file with source attribution.

3. **Structure** (Structural Dependency Mapping + Corporate Veil Piercing): Map the relationships between contractors, officials, and related entities. Identify shell companies or complex ownership structures.

4. **Timeline** (Temporal Anomaly Sequencing): When were contracts awarded? When did the contractor establish relationships with city officials? Are there suspicious gaps or accelerations?

5. **FOIA** (Precision FOIA Engineering): Draft targeted FOIA requests for communications, internal deliberations, and decision-making records—in sequence to maximize disclosure.

6. **Verification** (Zero-Error Defensive Audit): For each core claim, document all supporting sources. What's the confidence level? Are there contradictions? What are the gaps?

7. **Social & Timeline** (OSINT Source Inversion): Identify what's already publicly visible. Could someone with bad intent misuse this information? How do you responsibly publish findings?

8. **Publication** (Copy Review → Final Editor Review → Publish Series): Move through editorial review. Publish as a series to tell the full story while managing legal and ethical dimensions.

## Best Practices

- **Run audits in sequence.** The skills are designed to work together. Running *Zero-Error Defensive Audit* before you've done *Structural Dependency Mapping* will reveal incomplete findings.
- **Revisit your master file regularly.** Add findings, update source confidence, flag new gaps. The file evolves with your investigation.
- **Use Final Editor Review before publication.** This is not optional. It's your last systematic check for legal, ethical, and editorial issues.
- **Document source confidence.** "Multiple sources confirm" is different from "one source claims." Be precise about what you know and how you know it.
- **Protect confidential sources.** Design your story to publish only public information. Confidential sources strengthen your verification, not your publication.

## Contributing

We welcome contributions from journalists, developers, and newsroom professionals. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Reporting bugs and suggesting improvements
- Contributing new skills or case studies
- Documenting journalism methodology
- Improving documentation and examples

## Version History

### v3.0.0 (Current)
- First public release
- 15 core skills across Investigative Desk and Newsroom Operations
- Multi-platform support (Gemini CLI, Claude Code, Claude Desktop)
- Comprehensive documentation and tutorials

## Legal & Ethics

This toolkit is released under the [Unlicense](LICENSE), meaning it's free to use, modify, and distribute with no restrictions.

**Important:** Journalists using this toolkit remain responsible for all legal, ethical, and professional standards in your jurisdiction. This includes:

- Laws governing libel, defamation, and privacy
- Public records and FOIA compliance
- Confidential source protection
- Cybersecurity and computer fraud laws (in OSINT work)
- Labor and employment law (in employment investigations)

Consult with your organization's legal counsel before publishing sensitive investigations.

## Acknowledgments

This extension was inspired by and learned from:

- The investigative journalism community, particularly practitioners at major newsrooms
- Academic research in journalism ethics and methodology
- Open-source intelligence communities (Bellingcat, ICIJ)
- The free and open-source software movement

Special thanks to all journalists fighting for truth and accountability. This toolkit exists to make that fight more rigorous and more sustainable.

---

**Questions?** Open an issue on GitHub. **Want to contribute?** See [CONTRIBUTING.md](CONTRIBUTING.md).
