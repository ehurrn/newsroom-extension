---
name: Corporate Veil Piercing
description: Break down anonymous corporate structures to attach real human names to shell companies or ghost vendors through OSINT techniques, UCC filings, and cross-jurisdictional mapping.
---

# Corporate Veil Piercing

## Overview

Corporate Veil Piercing is the art of translating opaque corporate structures into human accountability. Shell companies, ghost vendors, and anonymous LLCs exist precisely to obscure ownership—they create plausible deniability for contractors, front-companies for embezzlement networks, and liability shields for fraud. Your job is to pierce that veil and attach names to entities.

The core insight: **Registered agents are decoys.** When you encounter a shell company with a registered agent address at a mail-drop service or a law firm (a classic anonymity tactic), you must bypass the registered agent entirely. Real ownership traces through:

1. **Formation documents** (articles of organization): Look for the *signatory*—the actual human who signed the papers, not the registered agent
2. **UCC filings**: Secured creditors demand guarantors. Cross-reference guarantor names across entities
3. **WHOIS historical lookups**: Domain registration records sometimes contain real names despite privacy masking
4. **Cross-jurisdictional mapping**: The same person often appears as manager across multiple state DBAs or LLCs

This skill converts an opaque entity into a step-by-step OSINT checklist, taking you from "Unknown LLC" to "John Smith, managing multiple shell companies across five states."

---

## When to Use

Deploy Corporate Veil Piercing when:

- You have identified an opaque entity in your Entities Table (shell company, ghost vendor, subsidiary)
- The entity's stated registered agent is a mail-drop service, law firm, or trust company (anonymity signal)
- You need to connect the entity to a real person or beneficial owner
- Multiple related entities appear in your investigation but lack clear ownership links
- A vendor with limited track record won the contract (suggests shell company structure)
- You're preparing for publication or litigation and need to prove beneficial ownership

**Do NOT use** when:
- The entity is clearly legitimate and publicly held (Fortune 500, major nonprofits)
- The entity's beneficial ownership is already public and verified
- You're seeking attorney-client privileged information (will be protected regardless)
- You lack any starting point (need at least entity name and state of incorporation)

---

## Core Pattern: Opacity Layers

Legitimate entities disclose ownership; shell companies obscure it. Each layer you pierce reveals the next.

| Layer | Opacity Type | What Hides | How to Pierce | Red Flag Indicator |
|---|---|---|---|---|
| **Layer 1: Registered Agent** | Mail-drop proxy | Real manager/owner | Ignore registered agent; find signatory on formation docs | Registered agent at "1234 [Service] LLC, Inc." |
| **Layer 2: Formation Documents** | Signatory obfuscation | Who actually signed articles | Order formation documents from state; verify signatory name | Signatory is shell entity, not individual |
| **Layer 3: UCC Search** | Guarantor anonymity | Real guarantor of debt | Search Uniform Commercial Code database; cross-reference guarantor names | Guarantor name matches other entities' officers |
| **Layer 4: WHOIS** | Domain privacy masking | Website owner | Use historical WHOIS lookup (ICANN archive) to find original registrant | Domain renewed under different names over time |
| **Layer 5: State Database Cross-Reference** | Manager multiplication | How many entities controlled by one person | Search all 50 state LLC/corporation databases for manager names | Same manager listed across 5+ entities in different states |

---

## Implementation Workflow

### Phase 1: Formation Document Mining

**Objective**: Find the actual signatory (human being) who signed the formation documents, not the registered agent.

**Steps**:

1. **Identify the entity's state of incorporation** (from your evidence)
   - Example: "Widget Holdings LLC, Delaware incorporation"

2. **Access the state's Secretary of State database**
   - Delaware: https://delaware.gov/corporations/
   - New York: https://dos.ny.gov/corporations
   - Search each state's official corporate filing repository (every state has one)

3. **Request / Download the entity's "Articles of Organization" or "Articles of Incorporation"**
   - Most states make these searchable online; some require a certified copy order ($15–$50)
   - Look for:
     - **Signatory line**: "Signed by [NAME], [TITLE]"
     - **Manager name**: Often listed separately as "Manager: [NAME]"
     - **Organizer**: The person who filed the formation
   - Example red flag: Signatory is "John Smith, Registered Agent Service, Inc." → This is a proxy; dig deeper

4. **If signatory is another legal entity (proxy), find the next layer**:
   - Cross-reference the proxy entity (e.g., "Law Firm LLC") to find its registered agent
   - Repeat step 3 for the proxy entity
   - Continue until you reach a human name

5. **Verify the signatory is a real person, not another shell**:
   - Search public records for the signatory name + state
   - Check if the name appears as manager/officer in other entities (note for Phase 5)

**Example: Layer 1 → Layer 2**:
```
Widget Holdings LLC (Delaware)
  Registered Agent: "Delaware Corporate Services, Inc., 123 Main St, Wilmington, DE"
  Signatory: "John Smith, Manager" ← THIS IS YOUR REAL LEAD

Formation document shows:
  Manager Name: John Smith (Individual)
  Address: 456 Oak Ave, New York, NY 10001
```

---

### Phase 2: UCC Search and Guarantor Cross-Referencing

**Objective**: Use Uniform Commercial Code (UCC) filings to identify guarantors and cross-reference them across entities.

**Why UCC matters**: When a company borrows money or finances equipment, creditors demand guarantees. Those guarantees require the guarantor's name on the UCC-1 filing. Guarantor names are often real people, and those names often appear across multiple entities in your veil.

**Steps**:

1. **Access your state's UCC search database**
   - Every state maintains a UCC database (usually at Secretary of State or UCC filing office)
   - Example: New York UCC database: https://www.ny.gov/ucc/ucc-search
   - Most searches are free; some states charge $2–$10 per search

2. **Search by debtor name (the shell company)**
   - Enter entity name: "Widget Holdings LLC"
   - Search returns all UCC filings where this entity is the debtor

3. **Review each UCC-1 filing for guarantor information**
   - UCC-1 form, Section 5: "Secured Party" (creditor)
   - UCC-1 form, often attached UCC financing statement addendum (UCC-1a): Lists guarantors
   - Example:
     ```
     Debtor: Widget Holdings LLC
     Secured Party: Capital Finance Corp
     Guarantor: John Smith (Individual)
     ```

4. **Extract all guarantor names; note their addresses and dates**
   - Create a guarantor list from all UCC filings related to the entity

5. **Cross-reference guarantor names in your state's LLC/corporation database**
   - Search for each guarantor name as manager/officer of other entities
   - Example:
     ```
     John Smith appears as manager in:
       - Widget Holdings LLC (Delaware)
       - Capital Growth Fund LP (New York)
       - Strategic Ventures Inc. (Nevada)
     ```

6. **Map the guarantor network**
   - If "John Smith" manages 5+ entities, especially across different states, it's a coordinated structure
   - Check formation dates: Are entities incorporated in rapid sequence (Layer Layer pattern)?

**Example: UCC Layer**:
```
Widget Holdings LLC (Delaware) – Opaque entity with registered agent proxy

Search: UCC Database for "Widget Holdings LLC"
Result: UCC Financing Statement 1234567890 (filed 2023-06-15)
  Debtor: Widget Holdings LLC
  Secured Party: Tech Equipment Finance, Inc.
  Guarantor: John Smith, 456 Oak Ave, New York, NY 10001
  Guarantor Signature: ✓ (Signed and dated)

Action: Search NY LLC database for "John Smith" as manager
Result: Three additional entities with John Smith as manager:
  - Capital Growth Fund LP (incorporated 2023-03-01)
  - Strategic Ventures Inc. (incorporated 2023-05-15)
  - Digital Solutions LLC (incorporated 2023-08-22)
```

---

### Phase 3: WHOIS Historical Lookups and Domain Analysis

**Objective**: If the entity operates a website, use domain registration history to identify the original registrant (often the beneficial owner).

**Why WHOIS matters**: Modern domain registrants can use privacy masking (ICANN-approved privacy services), but domain registration history reveals the original, unmasked registrant. If "Widget Corp" registered its domain in 2023 under "John Smith's" name, then switched to privacy masking in 2024, you've found a connection.

**Steps**:

1. **Identify the entity's website domain**
   - From your evidence: Widget Corp operates www.widget-holdings.com
   - Or search: "[Entity Name] website" in Google

2. **Access WHOIS historical archive (Wayback Machine or ICANN-approved tool)**
   - Wayback Machine (Internet Archive): https://archive.org/
   - Use the "Way Back Machine" to view previous snapshots of the domain
   - Alternative: Use ICANN WHOIS historical lookup (limited by privacy policies)
   - Example archive tool: DomainTools WHOIS history, archive.is, historicwhois.com

3. **Query current WHOIS record**
   - Use online WHOIS tool (e.g., whois.com, arin.net) to get current registrant info
   - Modern WHOIS shows:
     ```
     Registrant: John Smith (or privacy masking: "Privacy Services Inc.")
     Email: john.smith@email.com (or masked: "privacy@privacyservice.com")
     Address: 456 Oak Ave, New York, NY 10001 (or masked address)
     ```

4. **Cross-reference the email address**
   - If email is revealed: john.smith@email.com, note the domain for cross-referencing
   - If email is masked: Continue to historical lookup

5. **Look at historical WHOIS snapshots (Wayback Machine)**
   - Navigate to the domain's Wayback snapshot (2023 or earlier)
   - Check if older versions of the site contain owner information or "About Us" pages
   - Example: www.widget-holdings.com/about-us (archived 2023) might list "Founded by John Smith"

6. **Search for email address across the web**
   - If WHOIS reveals an email: john.smith@email.com
   - Search public records, LinkedIn, news archives for that email
   - Email often appears in business filings, social media, or news articles

**Example: WHOIS Layer**:
```
Domain: widget-holdings.com

Current WHOIS (2024):
  Registrant: Privacy Services Inc. (masking)
  Email: privacy@privacyservice.com
  Address: [Privacy Masking Address]

Historical WHOIS (2023, from archive):
  Registrant: John Smith
  Email: john.smith.business@gmail.com
  Address: 456 Oak Ave, New York, NY 10001
  Registration Date: 2023-03-10

Action: Cross-reference email "john.smith.business@gmail.com" in:
  - Google search for email + company name
  - LinkedIn search for email
  - Pacer (federal court filings, if any)
  - News archives

Result: LinkedIn profile found for "John Smith, Founder, Widget Holdings LLC"
```

---

### Phase 4: Cross-Jurisdictional Database Mapping

**Objective**: Build a complete map of all entities controlled by the same person(s) across all 50 states.

**Why it matters**: A person controlling 20+ shell companies across different states is a red flag. This phase connects all the dots.

**Steps**:

1. **Create a master tracking table**:
   ```
   Manager Name | Entity Name | State | Inc. Date | Status | Notes
   John Smith | Widget Holdings LLC | DE | 2023-03-10 | Active | Primary entity
   John Smith | Capital Growth Fund LP | NY | 2023-03-15 | Active | Guarantor on UCC
   John Smith | Strategic Ventures Inc. | NV | 2023-05-20 | Active | Officer (from Phase 1)
   ```

2. **For each manager name identified in Phases 1–3, search all 50 state LLC/corporation databases**
   - Most states offer free online searches at their Secretary of State websites
   - Use the manager's full name, last name, or combination
   - Note: Searches may be name-variant sensitive (John vs. Jon)

3. **For each state, record**:
   - Entity name
   - State of incorporation
   - Incorporation date
   - Manager/officer name as it appears
   - Current status (active, dissolved, suspended)
   - Any known addresses from filings

4. **Identify patterns**:
   - **Temporal clustering**: Are entities incorporated within 30-day windows? (Rapid deployment signal)
   - **Geographic clustering**: Are entities concentrated in specific states (Delaware, Nevada, Wyoming for privacy)?
   - **Name patterns**: Do entity names follow a pattern (all starting with "Strategic," all ending with "Holdings")?
   - **Address clustering**: Do multiple entities share the same address or mail-drop service?

5. **Build a network diagram**:
   ```
   John Smith (individual)
       ├── Widget Holdings LLC (DE)
       │   ├── UCC guarantor: John Smith
       │   └── Manager: John Smith
       ├── Capital Growth Fund LP (NY)
       │   └── Officer: John Smith
       ├── Strategic Ventures Inc. (NV)
       │   └── Manager: John Smith
       └── [Additional entities...]
   ```

6. **Cross-reference all networks**:
   - Does John Smith also appear as officer/manager in other people's entities?
   - Does another person appear across John Smith's entities? (Potential co-conspirator)
   - Do any entities share addresses or mail-drop services?

**Example: Cross-Jurisdictional Mapping**:
```
Search Results for "John Smith" in all state databases:

State | Entity Name | Role | Inc. Date | Address
------|-------------|------|-----------|--------
DE    | Widget Holdings LLC | Manager | 2023-03-10 | Mail drop: Rapid Corp Services
NY    | Capital Growth Fund LP | Officer | 2023-03-15 | 456 Oak Ave, New York, NY
NV    | Strategic Ventures Inc. | Manager | 2023-05-20 | Mail drop: Nevada Corp Services
CA    | Digital Solutions LLC | Manager | 2023-08-22 | Same CA address as another entity
WA    | Tech Innovations GP | Officer | 2023-11-01 | Mail drop: [Service]
TX    | Lone Star Ventures LP | Guarantor | 2024-02-15 | UCC filing only

Pattern Analysis:
  ✓ 6 entities across 6 states
  ✓ Incorporated within 12-month window
  ✓ Preference for Delaware, Nevada (privacy states)
  ✓ Multiple entities use mail-drop services (anonymity signal)
  ✓ CA and NY entities share geography (possible operational hubs)
  ✓ Rapid-fire incorporation (30-60 day intervals)

Assessment: COORDINATED MULTI-STATE SHELL NETWORK
```

---

## Quick Reference: State-Specific Databases and Access

| State | LLC/Corp Database | UCC Database | Website | Free Search | Notes |
|---|---|---|---|---|
| **Delaware** | Division of Corporations | Delaware UCC (part of DCIS) | https://delaware.gov/corporations/ | Yes | Preferred incorporation state; formation docs available online |
| **Nevada** | Secretary of State, Corporations | Nevada UCC | https://sos.nv.gov/business/cis/ | Yes | Popular for privacy; limited UCC integration |
| **New York** | Department of State, Division of Corporations | UCC Division | https://dos.ny.gov/corporations | Yes | Large state; detailed filings; FOIL available |
| **California** | Secretary of State, Business Programs | UCC | https://bpd.sos.ca.gov/ | Yes | Large registry; limited privacy options |
| **Texas** | Secretary of State, Business Filings | UCC | https://capitol.texas.gov/statutes/ | Yes | Efficient database; good manager disclosures |
| **Wyoming** | Secretary of State, Corporations | Wyoming UCC | https://sos.wyo.gov/Business/Corporations/ | Yes | Privacy-friendly; minimal disclosure |
| **Colorado** | Secretary of State, Division of Professions and Licensing | UCC | https://www.sos.state.co.us/ | Yes | Good cross-referencing |
| **Florida** | Department of State, Division of Corporations | UCC | https://www.sunbiz.org/ | Yes | Large state; quick access |
| **Illinois** | Secretary of State, Department of Business Services | UCC | https://sos.illinois.gov/ | Yes | Illinois FOIA strong compliance |
| **All States** | Unified Secretary of State portal (most) | UCC (state-specific) | [State SOS Website] | Varies | Every state offers free LLC/corp searches; UCC search fees $2–$25 |

**WHOIS Tools**:
- Current WHOIS: whois.com, arin.net, icann.org
- Historical WHOIS: archive.org (Wayback Machine), domaintools.com, historicwhois.com

---

## Common Mistakes

**Mistake 1: Trusting the Registered Agent as the Real Owner**
- *Error*: Accepting "Delaware Corporate Services, Inc." as the entity's owner
- *Correction*: Registered agents are decoys by design. Always find the signatory on the formation documents (real owner is usually listed there)

**Mistake 2: Stopping After Formation Documents**
- *Error*: Finding "John Smith, Manager" on the LLC articles and stopping there
- *Correction*: Cross-reference John Smith across all state databases; he may control 10+ entities

**Mistake 3: Ignoring UCC Filings as Evidence of Guarantor Identity**
- *Error*: Not searching UCC database for debtor entity
- *Correction*: UCC filings often reveal guarantor names; guarantors are real people (or other entities you then pierce)

**Mistake 4: Assuming Privacy Masking is Permanent**
- *Error*: Accepting current WHOIS privacy masking without checking historical records
- *Correction*: Historical WHOIS (archive.org, domaintools) often shows original unmasked registrant from 2–3 years prior

**Mistake 5: Not Searching All 50 States**
- *Error*: Only searching the entity's home state for the manager name
- *Correction*: People managing shell networks often incorporate in 5–10 different states; run the manager's name through all 50 state databases

**Mistake 6: Confusing Manager with Registered Agent**
- *Error*: Confusing two different fields on the formation document
- *Correction*: "Manager" or "Officer" = real person; "Registered Agent" = mail-drop proxy (usually)

**Mistake 7: Missing Name Variations**
- *Error*: Searching only "John Smith" and missing "J. Smith," "Jon Smith," "John Smyth"
- *Correction*: Run multiple name variations through state databases; many databases are name-sensitive

**Mistake 8: Not Documenting the Chain of Evidence**
- *Error*: Finding connections but not recording the documentation path
- *Correction*: For each connection, note: source document name, date accessed, URL/location, specific quote proving link

---

## Red Flags

**High-Confidence Red Flags** (Strong evidence of veil piercing):
- Same individual listed as manager across 5+ entities in different states
- Formation documents signed by the same person for multiple shell companies
- UCC guarantor name matches manager of another entity in your investigation
- WHOIS domain registration shows individual name, later switched to privacy masking
- Registered agent is a mail-drop service (not a law firm, CPA firm, or legitimate corporate services company)
- Entity incorporated in Delaware, Nevada, or Wyoming (privacy-preference states) with mail-drop registered agent

**Medium-Confidence Red Flags**:
- Registered agent is a law firm or trust company (could be legitimate, but check formation documents anyway)
- Manager address is a mail-drop or temporary address (suggests anonymity)
- Formation documents show signatory as another LLC/corporation (one-layer proxy)
- Multiple entities share the same address
- Entities incorporated within 30 days of each other by same person

**Low-Confidence Red Flags** (Require additional context):
- Same manager across 2–3 entities in same state (could be legitimate portfolio company management)
- Address shared by multiple entities but explained by business office location
- Mail-drop address but entity conducts transparent public business

---

## Example: Multi-Layer Shell Company Network Piercing

### Scenario
Your investigation encounters "Strategic Holdings LLC," a vendor that won a $5M city contract despite having no track record. The corporate veil is thick: Delaware incorporation, registered agent at a mail-drop service, no transparent officers. You need to pierce the veil and attach names.

### Phase 1: Formation Document Mining

**Action**: Access Delaware Secretary of State database; request Strategic Holdings LLC articles.

**Finding**:
```
State of Delaware
Certificate of Formation

Entity: Strategic Holdings LLC
Date of Formation: 2023-05-15
Registered Agent: "Rapid Corporate Services, LLC" (mail-drop at 123 Corporation Lane, Wilmington, DE)
Manager Name: Richard Powell (Individual)
Manager Address: 789 Executive Drive, Suite 400, Chicago, IL 60601
Signatory: Richard Powell
```

**Result**: Registered agent is a decoy; real manager is Richard Powell, Chicago address.

---

### Phase 2: UCC Search and Guarantor Cross-Referencing

**Action**: Search Delaware UCC database for "Strategic Holdings LLC" as debtor.

**Findings**:
```
UCC Financing Statement 2023-034567

Debtor: Strategic Holdings LLC
Secured Party: Midwest Capital Finance
Guarantor: Richard Powell (Individual, same address as manager)
Filing Date: 2023-06-10

Additional UCC Filings for Strategic Holdings LLC:
  - UCC #2023-045678: Guarantor = Richard Powell
  - UCC #2023-056789: Guarantor = Robert Chen (Second individual)
```

**Result**: Two guarantors identified: Richard Powell and Robert Chen. Now search for Robert Chen.

**Action**: Search all state LLC/corp databases for "Robert Chen" as manager/officer.

**Findings**:
```
Robert Chen appears as manager in:
  - Growth Capital Partners LP (New York, Inc. 2023-04-20)
  - Midwest Development Corp (Illinois, Inc. 2023-03-15)
  - Pacific Ventures LLC (California, Inc. 2023-08-10)
```

---

### Phase 3: WHOIS Historical Lookups

**Action**: Strategic Holdings LLC operates website: www.strategicholdings.us

**Current WHOIS**:
```
Registrant: Privacy Services, Inc. (masking)
Email: privacy@privacyservice.com
```

**Historical WHOIS (from Wayback Machine, 2023 snapshot)**:
```
Registrant: Richard Powell
Email: rpowell@strategicholdings.us
Address: 789 Executive Drive, Suite 400, Chicago, IL 60601
Registration Date: 2023-05-10
```

**Result**: Confirms Richard Powell as domain registrant. Email "rpowell@strategicholdings.us" is new lead for cross-referencing.

---

### Phase 4: Cross-Jurisdictional Database Mapping

**Action**: Search all 50 states for "Richard Powell" as manager/officer.

**Findings**:
```
Richard Powell Entities Network:

State | Entity Name | Role | Inc. Date | Address | Status
------|-------------|------|-----------|---------|-------
DE    | Strategic Holdings LLC | Manager | 2023-05-15 | Mail-drop | Active
NY    | Growth Capital Partners LP | Officer | 2023-04-20 | 789 Exec Dr | Active
IL    | Midwest Development Corp | Manager | 2023-03-15 | 789 Exec Dr | Active
CA    | Pacific Ventures LLC | Manager | 2023-08-10 | Mail-drop | Active
WA    | Tech Innovation Fund GP | Guarantor (UCC) | 2023-11-05 | Mail-drop | Active
TX    | Lone Star Capital Partners | Manager | 2024-01-20 | Mail-drop | Active

Total: 6 entities across 6 states, incorporated within 10 months
Pattern: Preference for Delaware, mail-drop services, rapid formation
```

**Cross-Entity Analysis**:
```
Richard Powell Network:
  ├── Strategic Holdings LLC (Delaware) ← PRIMARY ENTITY (city contract winner)
  │   └── Co-guarantor: Robert Chen
  │
  ├── Growth Capital Partners LP (New York)
  │   └── Officer: Richard Powell
  │
  ├── Midwest Development Corp (Illinois)
  │   └── Manager: Richard Powell
  │
  ├── Pacific Ventures LLC (California)
  │   └── Manager: Richard Powell
  │
  ├── Tech Innovation Fund GP (Washington)
  │   └── Guarantor: Richard Powell (UCC filing)
  │
  └── Lone Star Capital Partners (Texas)
      └── Manager: Richard Powell

Co-Conspirator: Robert Chen
  ├── Strategic Holdings LLC (Delaware) ← Co-guarantor
  │
  └── Growth Capital Partners LP (New York) ← Cross-reference
```

---

### Phase 5: Final Veil-Piercing Summary

**Veil Pierced: Strategic Holdings LLC → Richard Powell (Primary) + Robert Chen (Secondary)**

**Evidence Chain**:
1. **Formation documents**: Richard Powell named as manager (Delaware SOS filing)
2. **UCC filings**: Richard Powell and Robert Chen as guarantors (2 separate filings)
3. **WHOIS history**: Richard Powell as domain registrant (archive.org snapshot, 2023)
4. **Cross-state network**: Richard Powell manages 6 entities across 6 states (all state SOS databases)
5. **Address clustering**: Multiple entities at same Chicago office address (789 Executive Drive, Suite 400)

**Network Characteristics**:
- Rapid entity formation (10 entities in 10 months)
- Preference for privacy jurisdictions (Delaware, Nevada)
- Use of mail-drop services (anonymity signal)
- Cross-state coordination (same manager, overlapping timelines)
- Co-guarantor relationship (Richard Powell + Robert Chen appear together)

**Red Flags Triggered**:
- ✓ Same manager across 5+ entities
- ✓ Entities in Delaware + mail-drop registered agent
- ✓ UCC guarantor identity confirmed across filings
- ✓ Domain registrant in WHOIS matches formation documents
- ✓ Rapid incorporation sequence (temporal clustering)

**Publication-Ready Summary**:
> Strategic Holdings LLC, which won a $5M city contract, is controlled by Richard Powell and Robert Chen, according to Delaware formation documents and UCC filings obtained through state records searches. Powell, based in Chicago, manages six companies across six states incorporated within a 10-month period—a pattern consistent with coordinated shell company deployment.

---

## Checklist for Corporate Veil Piercing

- [ ] Entity name, state of incorporation, and registration date identified
- [ ] Formation documents (Articles of Organization / Incorporation) obtained from state SOS
- [ ] Registered agent noted; signatory on formation documents identified
- [ ] Signatory confirmed as individual (not another legal entity)
- [ ] All manager/officer names extracted from formation documents
- [ ] UCC database searched for entity as debtor
- [ ] Guarantor names extracted from all UCC filings
- [ ] WHOIS record obtained (current and historical via archive.org)
- [ ] Email address from WHOIS used for cross-referencing
- [ ] All manager/officer names searched across all 50 state LLC/corp databases
- [ ] Master tracking table created with all entities and managers
- [ ] Network diagram drawn showing relationships between entities and individuals
- [ ] Temporal clustering analyzed (formation date patterns)
- [ ] Address clustering analyzed (shared addresses across entities)
- [ ] Red flags documented (mail-drop services, privacy jurisdiction preference)
- [ ] Evidence chain documented with specific citations and dates accessed
- [ ] Cross-validation performed (same name appears across multiple independent sources)
- [ ] Publication-ready narrative written describing beneficial ownership
- [ ] Fact-checked against news archives and LinkedIn profiles
