---
name: structural-dependency-mapping
description: Use when investigating how policy shifts serve undisclosed private interests, tracing hidden incentive alignment, or exposing systemic corruption that doesn't fit a simple bribery narrative. This reveals the full web of tacit relationships.
---

# Structural Dependency Mapping

## Overview

Exposes structural corruption—the way policy shifts serve pre-existing private dependencies that remain invisible to casual analysis. Based on Zephyr Teachout's framework in *Corruption in America*, this skill teaches you to trace tacit relationships (PAC → Vendor → Official) that are legal individually but reveal systematic bias when mapped together.

## When to Use

- Investigating a policy shift that benefits a vendor, contractor, or hidden stakeholder
- Analyzing whether an official's voting pattern aligns with undisclosed financial relationships
- Mapping PAC donations → Vendor contracts → Policy changes (the full chain, not just pairs)
- Exposing conflicts of interest that aren't direct bribes but reveal systematic bias
- Building a prophylactic audit—showing what dependencies existed *before* the policy debate

**NOT** for: Cases with direct quid-pro-quo evidence (that's simpler; use `muckraker-master-file` instead).

## Core Pattern: Tacit Relationships

### Three Tiers of Dependency

| Tier | What | Example | Legal Status | Corruption Signal |
|------|------|---------|--------------|-------------------|
| **Direct** | Payment directly to official | "Official's campaign received $50K from Vendor" | Disclosed (or should be) | ✓ Clear conflict of interest |
| **Tacit** | Indirect connection requiring inference | "PAC funded by Vendor → Vendor owns Company → Official receives donation from PAC" | Legal (each link isolated) | ✓✓ **Structural bias** |
| **Systemic** | Pattern across multiple decisions/officials | "5 voting decisions benefit Vendor; 5 different PACs funded by same Vendor shell companies; 5 officials received donations" | Completely legal | ✓✓✓ **Network exposure** |

**The Key Insight:** Tacit and systemic corruption are legal individually but **systematic** when mapped together.

## Implementation Workflow

### Phase 1: Establish the Baseline (Pre-Policy)

Before analyzing what changed, map what existed *before* the policy debate. This is the prophylactic audit.

**Question:** Who were the existing stakeholders with financial ties to the decision-maker?

**Process:**
1. **Official Profile**: Who is the key decision-maker? (e.g., Councilmember Smith)
2. **Finance Audit**: Pull their campaign finance disclosures (State FEC, local records) for the 24 months *before* the policy debate
3. **Vendor Map**: Identify every vendor, contractor, or PAC donor that has financial or organizational ties to the official
4. **Relationship Chart**: For each donor/vendor:
   - Direct: Did they donate directly to the official?
   - Tacit: Are they connected through an intermediary (PAC, board, family)?
   - Ownership: Who owns the vendor? Does the owner have other ties?

**Example (Councilmember Smith):**
```
Baseline (Pre-Policy, 2022-2023):
- Vendor: Acme Services LLC (Owner: Jane Doe)
  ├─ Q1-2023: Acme PAC donates $25K to Smith campaign
  ├─ Q2-2023: Smith's spouse serves on Acme board (unpaid, disclosed)
  └─ Status: EXISTING TACIT RELATIONSHIP
```

### Phase 2: Detect the Policy Shift

Now map what changed *during* the policy debate.

**Questions:**
- Did the official's voting pattern shift? Toward the vendor?
- Did new contracts or funding flow to the vendor after the policy change?
- Did new financial relationships emerge coinciding with the shift?

**Process:**
1. **Timeline the Policy**: When was the proposal introduced? When did votes occur? When were contracts awarded?
2. **Voting Record**: Pull official voting record; compare pre-shift vs. post-shift pattern
3. **Financial Timing**: When did contracts or grants to the vendor occur relative to policy debate?
4. **New Relationships**: Did new PACs, donors, or board appointments emerge coinciding with the shift?

**Example (Acme Policy Shift):**
```
Policy Debate Timeline:
- Feb 2024: Acme proposes zoning variance (needed for expansion)
- Mar 2024: Council committee debates variance
- Mar 2024: Acme PAC donates additional $50K to Smith campaign
- Apr 2024: Smith votes YES on zoning variance (3-month voting pattern shift)
- Jun 2024: Municipality awards $2.3M contract to Acme for municipal project
- Status: INCENTIVE ALIGNMENT DETECTED
```

### Phase 3: Analyze Incentive Alignment

Map the full chain: Why would the official support the vendor? What dependency existed or emerged?

**Framework: Six Dependency Types**

| Dependency Type | Definition | Example | Detection Method |
|-----------------|-----------|---------|-----------------|
| **Financial** | Official or family receives money from vendor | Campaign donation, board pay, consulting fee | Campaign finance, tax records, corporate filings |
| **Contractual** | Vendor provides services to official's business | Consulting, legal, accounting | Vendor website, client lists, subpoena discovery |
| **Political** | Vendor funds PACs that fund official | PAC donation → PAC donation → Official | State FEC filings, PAC donor lists |
| **Social** | Official and vendor share board/organization membership | Both sit on charitable board, alumni association | Corporate/non-profit board rosters, LinkedIn |
| **Familial** | Official's family member employed by or invested in vendor | Spouse works for vendor, child on payroll | Corporate disclosures, SEC filings, LinkedIn |
| **Ownership** | Official indirectly owns vendor through corporate chain | Shell company → Holding company → Vendor | Secretary of State corporate filings, UCC searches |

**Process for Each Dependency:**
1. Does it exist?
2. When did it originate? (Before or after policy debate?)
3. Is it disclosed? (If required, did official report it?)
4. Does it create a clear incentive? (e.g., "Vendor expands → Contract revenue → Official's spouse's consulting fee increases")

**Example Incentive Alignment (Acme Case):**
```
Dependency Chain:
1. Financial: Acme PAC → $75K to Smith campaign (disclosed, pre-existing)
2. Political: Acme PAC funnels through multiple shell PACs (same donors)
3. Contractual: Acme contracts w/ Smith's consulting firm → $150K/year (disclosed)
4. Social: Smith's spouse on Acme board (unpaid, disclosed)

Incentive Alignment:
- Zoning variance enables Acme expansion (estimated $10M+ valuation increase)
- Municipal contract adds $2.3M revenue to Acme
- Smith's consulting contracts increase 40% post-expansion
- Net result: Smith's economic interests directly align with Acme's policy win
```

### Phase 4: Systemic Pattern Detection (If Multiple Officials/Decisions)

If you see the pattern across multiple officials or multiple decisions, that's **systemic** corruption.

**Questions:**
- Did the same vendor donate to multiple officials voting the same way?
- Did multiple vendors owned by the same entity make similar donations?
- Did multiple policy decisions benefit a single vendor network?

**Process:**
1. **Multi-Official Audit**: Did 5+ officials voting the same way receive donations from the same vendor/PAC?
2. **Vendor Network**: Does one owner control multiple vendors? Did they all benefit from the policy?
3. **PAC Network**: Do multiple PACs with the same donors fund multiple officials voting the same way?

**Example (Systemic Pattern):**
```
Acme Network Systemic Analysis:
- Owner Jane Doe controls: Acme Services, Acme Consulting, Acme Infrastructure
- All three entities have PACs
- All three PACs donate to City Council members
- Voting analysis: Council members who received donations voted YES on 5 of 6 Acme-favorable policies
- Non-recipients: Voted YES on 1 of 6
- Statistical significance: 78% voting correlation with donation receipt
```

## Quick Reference: Data Sources

| Dependency Type | Primary Source | Secondary Source |
|-----------------|----------------|------------------|
| Financial (Campaign) | State FEC portal, OpenSecrets.org | Local campaign finance board |
| Financial (Corporate) | SEC EDGAR (insider trading, stock ownership) | Company website, press releases |
| Financial (Non-profit) | IRS Form 990 (salaries, board members) | ProPublica Non-profit Explorer |
| Contractual | Municipality/government contract databases | Official RFP filings, press releases |
| Social (Board) | Corporate board rosters, LinkedIn | Non-profit GuideStar profiles, 990 forms |
| Ownership | Secretary of State (UCC, corporate filings) | Property assessor records, business licenses |
| Voting Record | Municipality/state council voting records (usually online) | Local news archives (contemporaneous reporting) |

## Common Mistakes

| Mistake | Consequence | Fix |
|---------|------------|-----|
| Assuming one link = corruption | False positives; dilutes credibility | Map the full chain. One donation is disclosed; a network of donations + contracts is structural. |
| Treating pre-existing and new relationships as equivalent | Missing causality | Use timeline. Dependencies that emerged post-proposal are stronger signals than baseline relationships. |
| Confusing correlation with causation | Libel exposure if you claim direct cause without evidence | Map incentive alignment; show WHY the official would support the vendor (even without explicit quid pro quo). |
| Analyzing one official in isolation | Missing systemic pattern | Expand to multiple officials. If all voting the same way received donations, that's structure. |
| Stopping at disclosure | Assumes honest disclosure = no corruption | Structural corruption is *legal* individually. You're exposing bias, not illegality (usually). |

## Red Flags: When Dependency Mapping is Incomplete

| Signal | What It Means |
|--------|---------------|
| "I found one donation; that proves corruption." | No. Build the full chain. One link can be coincidence; a network is pattern. |
| "The official didn't receive a direct donation from the vendor." | Correct. They didn't. Check for indirect flows (PACs, family, ownership). |
| "The vendor's expansion is their business; why would the official care?" | Build the incentive chain. Show how official's economic interests align (contracts, consulting, family income). |
| "Other officials voted the same way without receiving donations." | Important. It means the vote isn't purely structural. But if donors-vs-non-donors voted differently, that's significant. |
| "This looks like a pattern, but it's only 2-3 cases." | Too small. Expand the sample. Systemic patterns need 5+ similar cases to establish statistical significance. |

## Example Full Analysis

**Investigation: "Infrastructure Contracts and Council Voting Patterns"**

**Official:** Councilmember Alice Johnson

**Pre-Policy Dependencies:**
- FinTech Consulting (Owner: Bob Chen) → Donated $30K to Johnson campaign (2021-2023)
- Johnson's brother employed by FinTech as VP Operations ($120K/year)

**Policy Shift:**
- Mar 2024: FinTech submits bid for $8M municipal IT infrastructure contract
- Apr 2024: Johnson votes YES (new pattern; previously abstained on IT vendor votes)
- Jun 2024: FinTech wins contract; Johnson's brother gets promotion + $150K bonus

**Incentive Alignment:**
- Family income: +$150K (documented in FinTech proxy filing)
- Campaign support: FinTech PAC considers additional donation (disclosed intent)
- Social: Chen named to municipal IT advisory board (Johnson's recommendation)

**Systemic Check:**
- 4 other council members voted YES; only 1 received FinTech donations
- 3 council members abstained; none received donations
- Statistical correlation: 75% of YES voters received donations

**Conclusion:** Structural dependency revealed; incentive alignment clear; systemic pattern detected.

---

**Required Background:** Master `muckraker-master-file` first (you need the entity registry). Then use this skill to map dependencies. Finally, deploy `zero-error-defensive-audit` to write about it safely.
