# Newsroom Extension – Gemini CLI Configuration

## Overview

The **Newsroom Extension** is a full-stack AI toolkit for investigative journalism and editorial operations. It provides specialized sub-agents (desks) that coordinate sequentially to research, validate, format, and publish high-integrity journalism.

This configuration defines the delegation protocol and operational workflow for the Gemini CLI, enabling teams to orchestrate complex investigations through sequential desk operations.

## Architecture: Sub-Agent Delegation Protocol

All investigative and editorial work flows through a sequential desk-ordering system. 

**Loading Desk Instructions:** As an AI agent, you must fetch the specific operational guidelines for each desk before executing its work. You do this by calling the `get-skill` tool via the MCP server (e.g. `mcp_newsroom-extension_get-skill` or equivalent) with the desk's name.

Each desk:
- Receives artifacts from the previous desk
- Performs focused, high-stakes work (research, validation, formatting, review, deployment)
- Passes validated output to the next desk
- May escalate blockers to a managing editor

No desk executes in parallel; this ensures accountability, traceability, and error-catching at each stage.

## Desks (Sequential Order of Operations)

### 1. **investigative-journalist**
**Role:** Primary research and intelligence gathering
**Input:** Research brief, research objectives, leads, public records
**Output:** Raw findings documented in the Master File
**Skills:**
- Entity mapping and relationship graphing
- Dependency tracing (funds, board ties, contracts)
- Open-source intelligence (OSINT) curation
- Timeline sequencing of events
- Public records interpretation (filings, permits, contracts)
- FOIA request engineering
- Corporate veil piercing (shell companies, beneficial ownership)

---

### 2. **data-archivist**
**Role:** Convert raw research into structured, queryable databases
**Input:** Raw Master File findings, unstructured documents, scans
**Output:** Cleaned datasets (CSV, JSON), database schemas, entity tables
**Skills:**
- Optical character recognition (OCR) on scanned documents
- Data normalization and deduplication
- Entity reconciliation (matching variations of names across sources)
- Relationship graph construction (people, companies, transactions)
- Database schema design for journalistic queries
- Data quality auditing and source citation

---

### 3. **copy-review**
**Role:** Format, readability, and baseline ad validation
**Input:** Draft article or series from investigative-journalist
**Output:** Cleaned, readable copy; ad-compliant language; fact-checklist
**Skills:**
- Copy editing (AP style, clarity, flow)
- Readability scoring and audience targeting
- Ad platform validation (avoiding flagging algorithms)
- Headline optimization
- Image caption writing
- Fact-checking taxonomy creation

---

### 4. **social-distributor**
**Role:** Extract and craft social media distribution hooks
**Input:** Copy-reviewed article or series
**Output:** Social media assets, captions, scheduling recommendations
**Skills:**
- Hook extraction (strongest findings → tweet/post threads)
- Platform-specific adaptation (Twitter, Facebook, LinkedIn, Bluesky, Mastodon)
- Image selection and alt-text for accessibility
- Hashtag strategy and trend monitoring
- Posting schedule optimization
- Engagement prediction

---

### 5. **final-editor-review**
**Role:** Adversarial libel defense and editorial integrity
**Input:** Copy-reviewed article, social media assets
**Output:** Legal risk assessment, suggested revisions, sign-off
**Skills:**
- Libel/defamation risk assessment (true statements, fair comment, public interest)
- Opinion vs. fact demarcation
- Source attribution verification
- Harmful statement auditing
- Jurisdiction-specific legal frameworks
- Retraction risk modeling
- Editorial independence verification

---

### 6. **publish-article** / **publish-series**
**Role:** Deployment to live platforms
**Input:** Final-editor-approved article or series
**Output:** Live URL, metadata, distribution confirmation
**Skills:**
- CMS integration (WordPress, custom platforms, etc.)
- SEO optimization and metadata insertion
- Paywall / subscription logic
- Archive routing
- Update logging and version control
- Redirect chain management
- Feed generation (RSS, JSON, etc.)

---

### 7. **managing-editor**
**Role:** Workflow coordination and TODO management
**Input:** Multiple active investigations, resource constraints, deadlines
**Output:** Prioritized desk assignments, escalation decisions, workflow status
**Skills:**
- Task prioritization and resource allocation
- Blocker identification and escalation
- Deadline management
- Reporter workload balancing
- Multi-investigation orchestration
- Post-publish audit and corrections workflow
- Archival and library management

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

This extension runs on:
- **Gemini CLI** (MCP server integration - use the `get-skill` tool to load desk instructions)
- **Claude Desktop** (MCP server integration)
- **Claude Code** (direct workflow automation)

All desks are platform-agnostic and designed for human oversight at each stage.

## Author

**GitHub:** `ehurrn`
**License:** Unlicense (public domain)

---

**Last Updated:** 2026-04-05
