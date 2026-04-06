---
name: osint-source-inversion
description: Use when direct sources are blocked or opaque, when public records run dry, or when investigating subjects with strong information control—research via their adversaries instead. This flips the investigation vector to reveal what targets hide.
---

# OSINT Source Inversion

## Overview

When your target controls information (politicians, corporate executives, wealthy individuals), they also control their own narrative. Source inversion flips the research vector: instead of investigating the target directly, audit their adversaries. Their enemies' documents (lawsuits, regulatory complaints, trade competitors' filings) often reveal more than the target's own statements.

## When to Use

- **Public records exhausted**: SEC filings, campaign disclosures, and property records show only surface facts
- **Subject is information-controlling**: Government official, corporate executive, or wealthy individual with institutional PR machinery
- **Internal communications unavailable**: Emails, board minutes, and internal memos are private or behind legal protection
- **Seeking contradictions**: Audit sources that would contradict the target's narrative
- **Strategic advantage needed**: Competitors, enemies, and regulators have documents the target prefers hidden

**NOT** for: Simple fact-checks or subjects with transparent records. Use direct sources first; invert only when they're blocked.

## Core Pattern: The Adversary Matrix

### Who Are Your Target's Enemies?

Map this systematically:

| Adversary Type | Example | What They Reveal | Access Method |
|---|---|---|---|
| **Litigation Opponent** | Vendor sued by target; employee in wrongful termination suit | Disputes, admissions, discovery documents | PACER (federal), State Unified Courts, docket searches |
| **Regulatory Complaint** | Trade commission, labor board, environmental agency complaint against target | Violations, pattern of behavior, witness statements | Agency websites, FOIA requests, press releases |
| **Competitor** | Rival company in same industry; one-star reviews and complaints | Competitive intelligence, service failures, customer complaints | Press releases, SEC competitor analysis, industry journals |
| **Whistleblower** | Employee or insider with grievance (published, on file, or discoverable) | Internal operations, policy violations, misconduct | Regulatory databases, lawsuit discovery, news archives |
| **Creditor/Debt Collector** | Bank foreclosing on target; creditor suing | Financial distress, payment history, asset details | Court dockets, UCC searches, business credit reports |
| **Regulatory Body** | IRS audit, licensing board investigation, corporate regulator | Compliance failures, penalty history, admissions | FOIA responses, agency decision letters, public databases |
| **Political Opponent** | Opposing candidate, PAC, or advocacy group | Verified oppo research, on-record statements | Campaign websites, candidate filings, 501(c)(4) publications |
| **Industry Watchdog** | Trade association, non-profit monitor, standards body | Documented violations, certifications, complaints | Organization websites, published reports, member complaints |

### The Inversion Principle

```
Target's narrative:    "I'm transparent and ethical"
↓
Direct sources verify: Official filings, public statements (target-controlled)
↓
INVERSION APPROACH: Audit lawsuit discovery, regulatory complaints, competitor filings
(These are adversary-controlled, not target-controlled)
↓
Reveal: What the target AVOIDS disclosing
```

## Implementation Workflow

### Phase 1: Identify Adversary Categories

Brainstorm who has a stake in your target's failure or misconduct:

**Questions:**
1. Who has sued or been sued by the target?
2. Who has complained to regulators about the target?
3. Who competes with the target (business, politics, influence)?
4. Who has left the target (employees, board members, partners)?
5. Who holds debt against the target?

**Mapping Exercise:**
```
Target: Corporate Executive John Smith

Litigation Adversaries:
- 2008: Employee wrongful termination suit (Smith was CEO)
- 2015: Vendor breach of contract suit (Smith signed deal)
- 2018: Shareholder derivative suit (Smith as board member)

Regulatory Adversaries:
- 2010: IRS inquiry (company tax penalties)
- 2012: SEC examination (stock trading disclosures)
- 2020: Labor board complaint (wage/hour violations)

Competitor Adversaries:
- TechRival Inc. (published comparative analysis)
- Industry non-profit published violation reports

Creditor Adversaries:
- Bank of America (commercial loan defaults, 2008)
- UCC searches show secured creditor filings

Employee Adversaries:
- Anonymous Glassdoor reviews (detailed complaints)
- Regulatory complaints mentioning internal policy conflicts
```

### Phase 2: Locate Adversary Documents

Each adversary type has specific repositories:

| Adversary Type | Primary Repository | Search Method | Depth of Access |
|---|---|---|---|
| **Litigation** | PACER (federal court, pacer.uscourts.gov) | Search by party name, docket number | Full discovery (complaints, depositions, admissions) |
| | State Court Dockets | Each state has online system (varies) | Complaints, motions, judgments (discovery usually requires subpoena) |
| **Regulatory** | Agency FOIA portal (each agency has one) | Request records, complaints, determinations | Varies; some agencies publish decisions |
| | Regulatory Decision Databases | SEC.gov, FTC.gov, FINRA (BrokerCheck), state agencies | Disciplinary actions, violations, penalty letters |
| **Competitor** | SEC Filings (10-K competitive analysis section) | Search by company name, form type | Verified competitive claims |
| | Trade Publications | Industry journals (Lexis-Nexis, ProQuest) | Reported competitive comparisons |
| **Whistleblower** | Regulatory complaint databases (SEC, DOJ, state attorneys general) | Search by target name | Limited (privacy protections for complainants) |
| | Lawsuit discovery (if case is public) | PACER search, pull discovery materials | Full testimony and documentation |
| **Creditor** | UCC Filings (UCC Search, secretary of state) | Search by debtor name, state | Lender names, collateral, payment status |
| | Court Judgment Records | County court dockets | Judgment amount, payment history |
| **Political Opponent** | Campaign Finance Databases (OpenSecrets, state FEC) | Search target's name and opponents | Spending, donor overlaps, pattern analysis |
| | Candidate/PAC Websites | Direct access to published opposition research | Verified claims (campaign accountability) |

### Phase 3: Extract & Cross-Check

Once you've located documents, extract the claims:

1. **Claim from Adversary Document**: "Lawsuit says Smith received insider information before stock sale"
2. **Verify Against Target's Records**: Does Smith's SEC filing for that stock sale exist? When was it filed relative to the lawsuit date?
3. **Cross-Reference with Other Adversaries**: Do other sources (regulators, competitors) corroborate timing or allegations?

**Example Extraction:**
```
LAWSUIT (Smith v. Vendor LLC, 2015):
Claim: "Vendor alleges Smith misrepresented product performance in contract negotiation"
Files: Complaint, Smith's response, expert reports

CROSS-CHECK:
- SEC filing (if relevant): Does Smith's company report this dispute?
- Industry journals: Do competitors mention the product performance issue?
- Regulatory records: Did the IRS or FTC investigate the product claims?

RESULT: Lawsuit claim is isolated (only one source) vs. systemic (multiple sources)
```

### Phase 4: The Credibility Audit

Not all adversary documents are equally credible. Audit the source:

| Document Type | Credibility | Why | Use Case |
|---|---|---|---|
| **Lawsuit Discovery** | ✓✓✓ (Highest) | Signed under oath; subject to perjury; opposing counsel verifies | Use liberally; verify key facts |
| **Regulatory Determination** | ✓✓✓ | Government investigation; formal findings | Treat as fact unless overturned on appeal |
| **SEC Competitor Analysis** | ✓✓ | Verified by SEC; audited claims | Use; include context of which competitor filed |
| **SEC Disciplinary Decision** | ✓✓✓ | Formal ruling; public record | Treat as fact; cite exact determination |
| **Trade Publication Article** | ✓ | Editorial review; potential bias toward industry | Use as supporting, not primary; verify claims independently |
| **Anonymous Reviews (Glassdoor)** | ⚠️ | Unverified; could be disgruntled or competitor | Use only if corroborated by documents or other sources |
| **Political Opposition Research** | ⚠️ | Intentionally adversarial; verify every fact | Use sparingly; always verify claims; cite original documents, not the oppo brief |

## Quick Reference: Search Strategies by Adversary Type

### Litigation Search
```
PACER.uscourts.gov:
- Query: [Target Name] as party (plaintiff or defendant)
- Search range: Last 20 years
- Extract: All docket entries, complaint, summary judgment motions
- Review: How often is target a party? Patterns of disputes?

State Courts:
- Each state system varies (Google "[State] court dockets online")
- Often free; some charge per record
- Look for: Breach of contract, employment, negligence suits
```

### Regulatory Search
```
Agency FOIA Portals:
- SEC (sec.gov/cgi-bin): Type company name; pull 10-K, 8-K, enforcement actions
- FTC (ftc.gov): Search by company; pull complaint letters and settlements
- IRS (irs.gov): FOIA requests for examination results, penalties
- State Boards (varies): Search professional licensing, disciplinary actions

Each agency publishes enforcement decisions publicly; use their search first.
```

### UCC / Creditor Records
```
UCC Search (secretary of state, each state):
- Query: [Business Name]
- Look for: Secured creditor filings (bank, SBA, equipment lenders)
- Extract: Amount financed, collateral, lender name, payment status

How to interpret: Unsecured debt (personal loans, credit cards) doesn't appear;
only secured transactions show up. But they reveal who the company owes money to.
```

### Litigation Discovery (If Case is Active)
```
PACER docket details:
- Pull: Interrogatory responses (written questions answered under oath)
- Pull: Request for production of documents (what was actually produced)
- Pull: Deposition transcripts (oral testimony under oath)
- Pull: Expert reports (third-party analysis admitted in case)

Discovery documents = highest credibility; subject testified to avoid perjury liability.
```

## Common Mistakes

| Mistake | Consequence | Fix |
|---------|------------|-----|
| Citing adversary documents without verifying credibility | Reporting unsubstantiated allegations | Audit: Is the claim under oath? Does it appear in multiple sources? |
| Treating anonymous complaints as fact | Repeating unverified accusations | Use anonymous sources only if corroborated by documented evidence. |
| Confusing "lawsuit allegation" with "proven fact" | Lawsuit ≠ truth; losing party disputes everything | Distinguish: "Lawsuit claims X" vs. "Court found X" (if judgment exists). |
| Using oppo research without verifying original documents | Repeating potentially false attacks | Check the primary source; never cite a political brief without verifying the underlying facts. |
| Assuming all regulatory complaints are valid | Some complaints are filed but dismissed | Check the **outcome**, not just the complaint: Was there a settlement? Was it dismissed? |
| Mining FOIA responses for anything negative | FOIA returns lots of context; easy to quote out of context | Read the full document, not just the incriminating sentence. |
| Ignoring that creditors have financial motive | Debt collection bias; creditor wants maximum recovery | Verify creditor claim independently; check public records (court judgment, payment status). |

## Red Flags: When Source Inversion Goes Wrong

| Signal | What It Means |
|--------|---------------|
| "The only source is a lawsuit, and I can't find corroboration." | Isolated allegation, not systemic. Use cautiously or don't use. |
| "I found a regulatory complaint, but the agency dismissed it." | Complaint ≠ violation. Check the **outcome**. |
| "This adversary document is anonymous." | Can't verify who filed it or their motive. Need second source. |
| "The lawsuit was settled, which could mean innocence or guilt." | Settlement is neutral on guilt; proves only that parties agreed to end the dispute. Phrase carefully. |
| "The oppo research says X; I haven't verified the original document." | You're quoting a brief, not the evidence. Go find the original. |
| "Multiple lawsuits allege the same thing, but target denies all of them." | Pattern is notable, but each lawsuit alone isn't proof of guilt. Say "lawsuits allege" not "target did." |

## Example Source Inversion

**Target:** Corporate Executive Alice Johnson
**Claim Being Investigated:** Johnson mismanaged company finances; diverted funds to personal use

**Direct Sources (Blocked/Insufficient):**
- Company SEC filings: Approved by Johnson (target-controlled)
- Company press releases: Deny allegations (target-controlled)
- Johnson's personal financial disclosures: Minimal (intentionally vague)

**Source Inversion:**

| Adversary | Document | Reveal |
|---|---|---|
| **Shareholder Lawsuit** (PACER) | Derivative suit alleging breach of fiduciary duty | Discovery depositions show: Johnson paid personal expenses ($250K/year) from company account; board was unaware |
| **IRS Examination** (FOIA response) | 2018 audit of company tax deductions | IRS disallowed $500K in "consulting" expenses; consulting firm was Johnson's spouse's LLC |
| **Employee Lawsuit** (PACER) | Wrongful termination; plaintiff claims whistleblower retaliation | Deposition: Plaintiff reported to board that Johnson diverted funds; plaintiff was fired weeks later |
| **Creditor Filing** (UCC search) | Bank secured creditor filing shows company debt increased 40% 2018-2022 | Public record: Coincides with period IRS disallowed deductions and employee lawsuit; suggests cash drain |
| **Competitor SEC Filing** (SEC.gov 10-K) | Rival company's 10-K mentions market loss due to "competitor bankruptcy risk"; competitor was Johnson's company | Corroborates: Company in financial distress during period of alleged mismanagement |

**Result:** No single adversary source proves mismanagement; combined, they paint a systemic pattern with corroborating evidence.

---

**Required Background:** Complete `muckraker-master-file` first to understand entity mapping. Then deploy source inversion to fill gaps. Finally, audit findings with `zero-error-defensive-audit` before publication.
