# Extension Manifest & Directory Structure

Complete reference for the Newsroom Extension repository structure, skills metadata, and workflow patterns.

## Directory Structure

```
newsroom-extension/
├── README.md                              # Main documentation
├── INSTALLATION.md                        # Installation for all platforms
├── CONTRIBUTING.md                        # Contribution guidelines
├── EXTENSION_MANIFEST.md                  # This file
├── LICENSE                                # Unlicense
├── package.json                           # Node.js / npm configuration
├── mcp-server.js                          # Claude Desktop MCP server
│
├── skills/                                # All skill implementations
│   ├── investigative/                     # Investigative Desk skills
│   │   ├── investigative-journalist.yaml
│   │   ├── muckraker-master-file.yaml
│   │   ├── structural-dependency-mapping.yaml
│   │   ├── zero-error-defensive-audit.yaml
│   │   ├── osint-source-inversion.yaml
│   │   ├── temporal-anomaly-sequencing.yaml
│   │   ├── precision-foia-engineering.yaml
│   │   └── corporate-veil-piercing.yaml
│   │
│   └── operations/                        # Newsroom Operations skills
│       ├── copy-review.yaml
│       ├── data-archivist.yaml
│       ├── social-distributor.yaml
│       ├── final-editor-review.yaml
│       ├── publish-article.yaml
│       ├── publish-series.yaml
│       └── managing-editor.yaml
│
├── docs/                                  # Extended documentation
│   ├── SKILL_REFERENCE.md                 # Detailed skill documentation
│   ├── INVESTIGATION_TYPES.md             # Workflow by story type
│   ├── THEORETICAL_FOUNDATIONS.md         # Research and methodology
│   ├── PLATFORM_GUIDES.md                 # Platform-specific guidance
│   └── examples/
│       ├── city-contracts.md
│       ├── corporate-misconduct.md
│       ├── environmental-impact.md
│       └── political-funding.md
│
├── templates/                             # Reusable templates
│   ├── muckraker-master-file-template.md  # Intelligence file template
│   ├── foia-request-template.md           # FOIA request boilerplate
│   ├── fact-check-matrix.md               # Verification spreadsheet template
│   └── publication-checklist.md           # Pre-publication review guide
│
└── case-studies/                          # Real-world usage examples
    ├── city-corruption-investigation.md
    ├── corporate-ownership-research.md
    └── supply-chain-accountability.md
```

## Files At a Glance

| File | Purpose | Size | Platform |
|------|---------|------|----------|
| README.md | Main entry point, overview, quick start | ~800 lines | All |
| INSTALLATION.md | Setup for Gemini CLI / Claude Code / Desktop | ~400 lines | All |
| CONTRIBUTING.md | Contribution guidelines and code of conduct | ~350 lines | All |
| EXTENSION_MANIFEST.md | This file — detailed structure reference | ~500 lines | All |
| LICENSE | Unlicense (public domain) | ~25 lines | All |
| package.json | npm dependencies, scripts, metadata | ~20 lines | Claude Desktop |
| mcp-server.js | MCP server implementation | ~200 lines | Claude Desktop |
| skills/*.yaml | Individual skill definitions | 50–100 lines each | Gemini CLI / Claude |

## Platform Support

| Component | Gemini CLI | Claude Code | Claude Desktop |
|-----------|-----------|------------|-----------------|
| Skills (YAML) | ✓ Native | ✓ MCP | ✓ MCP |
| Documentation | ✓ Reference | ✓ In-context | ✓ In-context |
| Templates | ✓ Reference | ✓ Copy-paste | ✓ Copy-paste |
| Case Studies | ✓ Learning | ✓ Learning | ✓ Learning |
| MCP Server | — | ✓ Optional | ✓ Required |

---

## Skill Metadata Summary

### Investigative Desk

#### 1. Investigative Journalist Framework
- **File:** `skills/investigative/investigative-journalist.yaml`
- **Purpose:** Scope investigation, define claims, map information dependencies
- **When to use:** Start of any investigation
- **Depends on:** None (entry point)
- **Outputs:** Investigation brief, claim matrix, dependency map
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 2. Muckraker Master File
- **File:** `skills/investigative/muckraker-master-file.yaml`
- **Purpose:** Centralized project intelligence management
- **When to use:** After scoping; continuously updated throughout investigation
- **Depends on:** Investigative Journalist Framework
- **Outputs:** Structured intelligence file with sources, findings, gaps, risks
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 3. Structural Dependency Mapping
- **File:** `skills/investigative/structural-dependency-mapping.yaml`
- **Purpose:** Identifies hidden connections, ownership chains, relationships
- **When to use:** After gathering initial sources
- **Depends on:** Muckraker Master File
- **Outputs:** Dependency diagrams, relationship maps, connection matrices
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 4. Zero-Error Defensive Audit
- **File:** `skills/investigative/zero-error-defensive-audit.yaml`
- **Purpose:** Systematic fact-checking with source attribution
- **When to use:** Before publication; repeatedly throughout investigation
- **Depends on:** Muckraker Master File
- **Outputs:** Verified claims, confidence scoring, attribution spreadsheet
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 5. OSINT Source Inversion
- **File:** `skills/investigative/osint-source-inversion.yaml`
- **Purpose:** Reveals public information vulnerabilities and misuse risks
- **When to use:** When planning publication strategy
- **Depends on:** Structural Dependency Mapping
- **Outputs:** Public data inventory, risk assessment, publication guidance
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 6. Temporal Anomaly Sequencing
- **File:** `skills/investigative/temporal-anomaly-sequencing.yaml`
- **Purpose:** Detects timeline inconsistencies and suspicious patterns
- **When to use:** After gathering detailed chronological information
- **Depends on:** Muckraker Master File
- **Outputs:** Timeline analysis, anomaly flagging, pattern identification
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 7. Precision FOIA Engineering
- **File:** `skills/investigative/precision-foia-engineering.yaml`
- **Purpose:** Drafts legally rigorous FOIA requests with strategic sequencing
- **When to use:** When needing government records for verification
- **Depends on:** Investigative Journalist Framework, Structural Dependency Mapping
- **Outputs:** Draft FOIA requests, sequencing strategy, compliance guidance
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 8. Corporate Veil Piercing
- **File:** `skills/investigative/corporate-veil-piercing.yaml`
- **Purpose:** Maps corporate structures and beneficial ownership
- **When to use:** When investigating corporate entities or complex ownership
- **Depends on:** Structural Dependency Mapping
- **Outputs:** Corporate structure diagrams, beneficial ownership analyses
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

---

### Newsroom Operations

#### 1. Copy Review
- **File:** `skills/operations/copy-review.yaml`
- **Purpose:** Line editing with clarity, accuracy, and house style focus
- **When to use:** Draft stage before final review
- **Depends on:** None (can run anytime on draft text)
- **Outputs:** Edited copy with suggestions, clarity improvements
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 2. Data Archivist
- **File:** `skills/operations/data-archivist.yaml`
- **Purpose:** Manages datasets, sources, and supplementary materials
- **When to use:** Before publication to organize supporting materials
- **Depends on:** Muckraker Master File
- **Outputs:** Organized data directory, metadata documentation, archive structure
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 3. Social Distributor
- **File:** `skills/operations/social-distributor.yaml`
- **Purpose:** Generates platform-specific social media content
- **When to use:** During publication and promotion phase
- **Depends on:** Copy Review (article text is finalized)
- **Outputs:** Platform-specific social posts, scheduling calendar
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 4. Final Editor Review
- **File:** `skills/operations/final-editor-review.yaml`
- **Purpose:** Comprehensive pre-publication checklist (legal, editorial, ethical)
- **When to use:** Before any publication (required gate)
- **Depends on:** Copy Review, Zero-Error Defensive Audit
- **Outputs:** Review checklist, flagged issues, approval/revision notes
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 5. Publish Article
- **File:** `skills/operations/publish-article.yaml`
- **Purpose:** Formats and publishes individual articles with metadata
- **When to use:** For single-article publications
- **Depends on:** Final Editor Review (must be approved)
- **Outputs:** Published article, metadata, archive links
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 6. Publish Series
- **File:** `skills/operations/publish-series.yaml`
- **Purpose:** Manages multi-part investigations with cross-linking
- **When to use:** For investigations told across multiple articles
- **Depends on:** Final Editor Review (all articles must be approved)
- **Outputs:** Series publication plan, cross-linking structure, release schedule
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

#### 7. Managing Editor
- **File:** `skills/operations/managing-editor.yaml`
- **Purpose:** High-level assignment tracking and deadline management
- **When to use:** For newsroom-wide assignment coordination
- **Depends on:** None (can run independently)
- **Outputs:** Assignment tracking spreadsheet, deadline calendar, status reports
- **Platforms:** Gemini CLI, Claude Code, Claude Desktop

---

## Workflow by Investigation Type

### Local Government Accountability

**Optimal skill sequence:**

1. Investigative Journalist Framework — Define scope (city contracts, zoning decisions, etc.)
2. Structural Dependency Mapping — Map relationships (officials, contractors, donors)
3. Muckraker Master File — Gather public records and documents
4. Zero-Error Defensive Audit — Verify timeline and key claims
5. Temporal Anomaly Sequencing — Identify suspicious patterns in decisions
6. Precision FOIA Engineering — Request internal communications
7. Copy Review → Final Editor Review → Publish Article (or Publish Series)

### Corporate Misconduct

**Optimal skill sequence:**

1. Investigative Journalist Framework — Define misconduct allegations
2. Corporate Veil Piercing — Map corporate structures and beneficial ownership
3. Structural Dependency Mapping — Identify board interlocks, funding relationships
4. Muckraker Master File — Gather SEC filings, news, court documents
5. Zero-Error Defensive Audit — Verify claims with document evidence
6. OSINT Source Inversion — Assess publication risks and protections needed
7. Copy Review → Final Editor Review → Publish Article

### Environmental Impact

**Optimal skill sequence:**

1. Investigative Journalist Framework — Define specific environmental harm
2. Structural Dependency Mapping — Map regulatory oversight and corporate actors
3. Muckraker Master File — Gather regulatory filings, environmental data
4. Temporal Anomaly Sequencing — Identify timeline of violations or remediation delays
5. Zero-Error Defensive Audit — Verify technical claims with expert sources
6. Precision FOIA Engineering — Request agency inspection records
7. Copy Review → Final Editor Review → Publish Series

### Supply Chain Accountability

**Optimal skill sequence:**

1. Investigative Journalist Framework — Define supply chain and alleged issues
2. Corporate Veil Piercing — Map beneficial ownership across supply chain
3. Structural Dependency Mapping — Identify subcontractors and relationships
4. Muckraker Master File — Gather corporate documents, worker accounts
5. Zero-Error Defensive Audit — Verify working conditions and wages
6. OSINT Source Inversion — Plan source protection and anonymization
7. Copy Review → Final Editor Review → Publish Series

---

## Skill Sequencing Flowchart

```
                    START: Select Investigation Type
                                  |
                                  v
                   Investigative Journalist Framework
                         (Scope & Define Claims)
                                  |
                    +---+----------+----------+---+
                    |   |          |          |   |
                    v   v          v          v   v
                [Branch by investigation type — see above]
                    |   |          |          |   |
                    +---+----------+----------+---+
                                  |
                                  v
                        Muckraker Master File
                     (Gather Intelligence, Update)
                                  |
                    +----------+--+--+----------+
                    |          |     |          |
                    v          v     v          v
            Struct.Dep.Map  Corp.Veil  Temporal  OSINT
            (Relationships)  (Ownership) (Timeline) (Risks)
                    |          |     |          |
                    +----------+-----+----------+
                                  |
                                  v
                    Zero-Error Defensive Audit
                    (Verify All Core Claims)
                                  |
                    [Findings verified? → Return to Master File if not]
                                  |
                                  v
                            Copy Review
                           (Line Editing)
                                  |
                                  v
                        Final Editor Review
                        (Legal, Ethical Check)
                                  |
                    [Approved? → Yes → Continue / No → Revise]
                                  |
                    +---+----------+----------+---+
                    |   |          |          |   |
                    v   v          v          v   v
              Publish   Publish    Data      Social    Managing
              Article   Series     Archivist Distributor Editor
                    |   |          |          |   |
                    +---+----------+----------+---+
                                  |
                                  v
                            PUBLISHED
```

---

## Keywords for Discovery

These keywords help users find the right skill for their task:

**Investigative Desk:**
- investigative, journalist, framework, scope, claims, muckraker, intelligence, structural, dependency, mapping, relationships, connections, ownership, corporate, veil, piercing, verification, fact-checking, audit, defensive, OSINT, open source, source inversion, temporal, timeline, anomaly, sequencing, FOIA, engineering, precision

**Newsroom Operations:**
- copy, review, editing, data, archivist, archival, social, media, distributor, distribution, final, editor, review, pre-publication, publish, article, series, multi-part, managing, editor, assignment, tracking, deadline

**General:**
- newsroom, toolkit, journalism, investigative, rigor, accountability, verification, editorial, workflow, skill, extension, Gemini, Claude

---

## Version History & Changelog

### v3.0.0 (Current Release)

**Initial Public Release**

- 15 core skills (8 investigative, 7 operations)
- Multi-platform support (Gemini CLI, Claude Code, Claude Desktop)
- Comprehensive documentation and case studies
- Contribution guidelines and community support

**Skills included:**
- Investigative Journalist Framework
- Muckraker Master File
- Structural Dependency Mapping
- Zero-Error Defensive Audit
- OSINT Source Inversion
- Temporal Anomaly Sequencing
- Precision FOIA Engineering
- Corporate Veil Piercing
- Copy Review
- Data Archivist
- Social Distributor
- Final Editor Review
- Publish Article
- Publish Series
- Managing Editor

---

## Next Steps

- **For installation:** See [INSTALLATION.md](INSTALLATION.md)
- **For detailed skill docs:** See [docs/SKILL_REFERENCE.md](docs/SKILL_REFERENCE.md)
- **For examples:** See [docs/examples/](docs/examples/)
- **For contributions:** See [CONTRIBUTING.md](CONTRIBUTING.md)
