---
name: precision-foia-engineering
description: Convert vague evidence gaps into surgically precise public records requests that prevent agency denial tactics and maximize retrieval of responsive documents.
---

# Precision FOIA Engineering

## Overview

Precision FOIA Engineering transforms gaps in your investigation into copy-paste ready public records requests that are mathematically difficult for agencies to deny. The goal is surgical specificity: narrow enough to avoid "overly broad" rejections, comprehensive enough to prevent agency workarounds, fortified with jurisdiction-specific legal citations and fee waiver language that survives administrative appeal.

Bad FOIA requests fail because they're too vague ("all records related to the project") or too broad ("everything from 2020 to 2024"). Agencies exploit these gaps with boilerplate denials: "Your request is overly broad," "Please narrow your scope," "No records responsive to your request." Your goal is to eliminate the gap between what you need and what an agency can claim not to have.

This skill converts your Gap Analysis Table into a multi-layered request that:
1. Targets specific entities and date ranges (no ambiguity)
2. Names exact record types (no misinterpretation)
3. Specifies precise custodians (no "wrong office" deflections)
4. Includes legal pre-emptive language (fee waiver, precedent citations)
5. Anticipates denial tactics and counters them in advance

---

## When to Use

Deploy Precision FOIA Engineering when:

- You have identified specific gaps in your evidence chain (Gap Analysis Table)
- You know which agency or office holds the records
- You can identify the specific person(s), date range, or project involved
- You've exhausted informal requests or source interviews
- You're preparing for potential FOIA litigation (precision matters for motions)
- You suspect the agency may intentionally over-scope or delay your request

**Do NOT use** for:
- Exploratory fishing expeditions (use a broad request first, then narrow)
- Requests where the custodian agency is truly unknown
- Requests seeking attorney-client privileged material (will be denied regardless)
- Non-U.S. jurisdictions without FOIA equivalents

---

## Core Pattern: Common Denial Tactics and Counters

| Denial Tactic | Agency Language | Your Counter | Prevention Language |
|---|---|---|---|
| **Overly Broad** | "Request is too broad to process" | Narrow to specific record types, date range, and custodian | "limited to records created by [specific office] between [date range] in the following formats: [list specific types]" |
| **No Records Exist** | "We have no responsive records" | Demand certification of search; name specific custodians who should have records | "Please confirm search of [specific systems/offices]; provide affidavit of search if no records located" |
| **Custodian Confusion** | "Try the other department" | Name exact office and decision-maker; cite organizational chart | "Records in custody of [specific title], [specific office code], located at [address]" |
| **Exemption Abuse** | "All records withheld under [exemption]" | Pre-emptively narrow to non-exempt categories; demand redaction logs | "Request excludes attorney-client communications and work product; provide redaction index" |
| **Cost Extortion** | "Fees estimated at $5,000; submit fee waiver" | Include fee waiver language upfront; cap request scope | "Request qualifies for statutory fee waiver per [statute]; newsroom mission statement enclosed" |
| **Delay/Indefinite Extension** | "We need more time" | Set statutory deadline language; cite deadline in request | "This request is subject to [statute] statutory deadline of [days]; any extension requires written consent" |
| **Scope Creep** | "Your request encompasses 10 different topics" | Use specific boolean logic; separate related requests | "This request is limited to: (1) [specific topic], AND (2) [specific date range], AND (3) [specific custodian]" |

---

## Implementation Workflow

### Phase 1: Gap Analysis to Request Specification

1. Review your Gap Analysis Table; identify the key evidence gap
2. Answer these questions:
   - **What document type** do I need? (emails, contracts, invoices, permits, meeting minutes)
   - **Who created it?** (specific office, title, or individual)
   - **When was it created?** (date range: be as narrow as possible)
   - **What keywords** define the topic? (names, project codes, contract numbers)
3. Example gap:
   ```
   Gap: "We don't know if City Hall approved the contractor before the award."
   Needed Document: Approval memorandum
   Creator: City Manager, Planning Office
   Date Range: January 1, 2024 – January 31, 2024
   Keywords: "Widget Corp" OR "Contract 2024-SC-001"
   ```

### Phase 2: Target Identification and Custodian Routing

1. Identify the primary government agency (federal, state, county, municipal)
2. Identify the specific office or department (not the entire agency)
3. Research the organization chart and find the exact title of the person who would custody such records
4. Example:
   ```
   Agency: City of Springfield
   Office: Procurement Department, Contract Administration Division
   Custodian Title: Procurement Officer, Manager
   Records System: Electronic contract filing system (CMS)
   Physical Location: 123 Main St., Springfield, IL, 4th Floor, Room 401
   ```
5. If unsure of custodian, make multiple requests to likely offices (but use Phase 3 to avoid "wrong office" deflections)

### Phase 3: Parameter Engineering and Denial Pre-Emption

1. **Specificity Lock**: Write your search parameters as a boolean formula
   ```
   Documents created by [specific office]
   AND
   (Author = [specific person] OR Author contains [specific title])
   AND
   (DateCreated between [start date] AND [end date])
   AND
   (Contains keyword: "Widget Corp" OR "Contract 2024-SC-001")
   AND
   (Format: email, memo, spreadsheet, or contract)
   AND
   (Exclude: attorney-client communications, work product, confidential trade secrets)
   ```

2. **Breadth Buffer**: Expand date range by 30 days on each end (to catch related records agency might miss)
   - Request range: 30 days before to 30 days after primary period
   - Cite reason in request: "expanded range captures pre- and post-implementation communications"

3. **Format Clarification**: List acceptable document formats
   - Email, memos, letters, contracts, invoices, spreadsheets, meeting minutes, video/audio, photographs
   - Cite format preference: "electronic formats preferred (PDF, XLSX, DOCX); paper copies acceptable if electronic unavailable"

4. **Exemption Carve-Out**: Pre-emptively exclude privileged material
   - "Request excludes attorney-client privileged communications and attorney work product prepared for litigation"
   - "Request excludes trade secrets if clearly marked as such in source document"
   - "Request excludes personal information (SSN, home address, health data) unless essential to document substance"

5. **Custodian Verification Language** (prevents "wrong office" deflection):
   ```
   "Please direct this request to the office with primary custody over [record type],
   consistent with your organizational structure outlined in [cite org chart location].
   If your office does not maintain such records, provide written explanation and
   the name and contact information of the office that does."
   ```

### Phase 4: Request Letter Composition and Legal Fortification

1. Use the template in the next section (copy-paste ready)
2. Customize placeholders: [AGENCY], [OFFICE], [REQUESTER NAME], [EMAILS], etc.
3. Add jurisdiction-specific citations (see "Jurisdiction-Specific Legal Citations" in Quick Reference)
4. Include fee waiver justification:
   - State your mission (journalism, advocacy, public interest)
   - Explain how records serve public interest
   - Request waiver under statutory criteria (usually: "public interest in disclosure outweighs government interest in fees")
5. Add deadline language:
   - Federal (20 days): "Pursuant to 5 U.S.C. § 552(a)(6)(A), response due by [date 20 days from now]"
   - State/municipal: Research statute and cite deadline
6. Sign and submit per agency requirements (email, online portal, certified mail)

---

## FOIA Request Letter Template (Copy-Paste Ready)

```
[DATE]

[AGENCY NAME]
FOIA Officer / Public Records Officer
[OFFICE ADDRESS]
[CITY, STATE ZIP]

Re: PUBLIC RECORDS REQUEST
Request Number: [YOUR TRACKING NUMBER, e.g., REQ-2024-001]
Requester: [YOUR NAME]
Email: [YOUR EMAIL]
Phone: [YOUR PHONE]

[AGENCY NAME]:

This is a request under the [APPLICABLE STATUTE: Freedom of Information Act (5 U.S.C. § 552) /
[State] Public Records Act (cite statute)] for the following records:

SCOPE OF REQUEST:

This request is limited to the following parameters:

1. CUSTODIAN(S): Records in the custody of:
   - [Specific office name, e.g., "Procurement Department, Contract Administration Division"]
   - [Specific title(s), e.g., "Procurement Officer," "City Manager," "Director of [Department]"]
   - Records maintained in: [Specific system, e.g., "Contract Management System (CMS)," "Email System"]

2. RECORD TYPES: The following document types, in any format:
   - Emails, memoranda, and letters
   - Contracts, purchase agreements, and amendments
   - Meeting minutes, meeting notes, and agendas
   - Invoices, payment records, and financial documents
   - Permits, approvals, and authorization records
   - [Any other specific document type relevant to your gap]

3. DATE RANGE: Records created, received, or filed between [START DATE: MM/DD/YYYY] and
[END DATE: MM/DD/YYYY], inclusive.

4. SUBJECT MATTER / KEYWORDS: Records relating to or containing the following:
   - [Specific entity name, e.g., "Widget Corp"]
   - [Specific project name, e.g., "Municipal Procurement Initiative 2024"]
   - [Specific contract number, e.g., "Contract 2024-SC-001"]
   - [Any other specific identifier]

5. EXCLUSIONS: This request explicitly excludes the following:
   - Attorney-client privileged communications
   - Attorney work product prepared for litigation purposes
   - Trade secrets clearly marked as confidential in the source document
   - Personal information (Social Security numbers, home addresses, medical information)
     unless material to the substance of the document

SEARCH METHODOLOGY:

To ensure a thorough and responsive search, please conduct the following:

1. Search all records (electronic and paper) maintained by [specific office/custodian]
2. Conduct search using keywords: [list keywords, e.g., "Widget Corp," "Contract 2024-SC-001,"
   "procurement," "award"]
3. Search all relevant systems, including but not limited to: [list specific systems,
   e.g., "Contract Management System (CMS)," email systems for [specific individuals],
   file shares, and physical archives]
4. If no responsive records exist, provide a signed certification of the search
   performed, the systems searched, and the date and time of the search

LEGAL AUTHORITY AND STATUTORY DEADLINE:

This request is submitted pursuant to [5 U.S.C. § 552 (federal) / cite applicable state statute].
Under [applicable statute], your office is required to respond within [statutory deadline:
20 days (federal) / cite state-specific deadline] of receipt of this request.

Response is due on or before [DATE: 20 days from submission date].

FEE WAIVER REQUEST:

I hereby request a waiver of all search, duplication, and review fees associated with this request.
This request qualifies for a statutory fee waiver under [5 U.S.C. § 552(a)(4)(A)(iii) (federal) /
cite applicable state statute] for the following reasons:

1. **Public Interest in Disclosure**: The requested records directly concern matters of significant
   public interest, including [briefly describe: e.g., "government contracting practices,"
   "allocation of public funds," "regulatory compliance"].

2. **Requester Mission**: The requester is a [journalist / news organization / public advocacy group /
   non-profit] engaged in research and reporting on matters of public concern. Disclosure of these
   records would contribute to public understanding and informed debate regarding [topic].

3. **Minimal Commercial Interest**: The requester has no commercial interest in these records;
   the purpose is to disseminate information to the general public.

4. **Cost Burden**: Imposition of search and duplication fees would impede the requester's ability
   to obtain and disseminate this information in the public interest.

In the alternative, if a fee waiver is not granted in full, please apply the following:

- Provide records in electronic format (PDF, XLSX, DOCX) to minimize duplication costs
- Waive search and review fees; charge only reproduction costs at the statutory minimum rate
- Provide an estimate of anticipated fees before conducting the search; requester will confirm
  authorization to proceed if fees exceed [amount, e.g., $100]

PREFERRED FORMAT AND DELIVERY:

Please provide responsive records in the following order of preference:

1. Electronic files (PDF, XLSX, DOCX, or native electronic format) via email to [YOUR EMAIL]
2. Scanned PDF images if original paper documents
3. Electronic media (USB drive, CD-ROM) mailed to [YOUR ADDRESS]
4. Paper copies only if electronic format unavailable

CONTACT AND CLARIFICATION:

If you have any questions regarding this request or need clarification on the scope, please contact me
at [PHONE] or [EMAIL]. I am available to discuss the request parameters and assist with narrowing
scope if necessary to ensure timely compliance.

CERTIFICATION OF REQUEST:

I certify that I am the person submitting this request, that the information provided above is accurate
and complete to the best of my knowledge, and that I am submitting this request in good faith to obtain
public records as authorized by [applicable statute].

Thank you for your prompt attention to this request.

Respectfully,

[YOUR SIGNATURE / TYPED NAME]
[YOUR TITLE, if applicable]
[YOUR EMAIL]
[YOUR PHONE]
[YOUR ORGANIZATION, if applicable]

Enclosures:
- Copy of this request (for agency records)
- [Optional: Fee waiver justification, if submitted separately]
- [Optional: Organizational chart or other supporting documentation]

---

Send via:
[ ] Email to [FOIA Officer email]
[ ] Online portal at [agency website]
[ ] Certified mail to [agency address]
[ ] In-person delivery to [agency location]

Date Submitted: [DATE]
Tracking Number: [YOUR REFERENCE NUMBER]
```

---

## Quick Reference: Federal vs. State Differences

| Feature | Federal (FOIA) | State/Local (Varies by Statute) |
|---|---|---|
| **Statutory Deadline** | 20 business days | 5–20 days (research your state) |
| **Appeal Process** | Administrative appeal (14 days to respond), then federal court | State administrative appeal, then state court |
| **Fee Waiver Standard** | "Disclosure in public interest + minimal commercial benefit" (5 U.S.C. § 552(a)(4)(A)(iii)) | Varies; typically "public interest" or "news gathering" |
| **Exemptions** | 9 federal exemptions (national security, privacy, attorney work product, etc.) | State-specific; typically 10–15 exemptions; less restrictive than federal |
| **Search Obligation** | Must search "all records in agency's possession" (broad) | Must search "all reasonable locations" (varies by state interpretation) |
| **Certification of Search** | Yes; must certify that reasonably diligent search performed | Yes; often required if denying records exist |
| **Fee Categories** | Search, duplication, review | Varies; some states charge only duplication; some add retrieval fees |
| **Request Format** | Any format acceptable; certified mail, email, online (agency-dependent) | Check agency website for preferred method; some require specific forms |
| **Estimated Cost** | Can be $0 with fee waiver; $50–$500 if fees apply | Typically $0–$200; state statute may cap fees |

### State-Specific Legal Citations (Examples; Verify for Your Jurisdiction)

- **California**: Public Records Act (Government Code § 6250 et seq.); deadline 10 days
- **New York**: Freedom of Information Law (Public Officers Law § 86 et seq.); deadline 20 business days
- **Illinois**: Freedom of Information Act (5 ILCS 140/1 et seq.); deadline 5 business days (fastest)
- **Texas**: Public Information Act (Texas Government Code § 552.001 et seq.); deadline 10 days
- **Federal**: Freedom of Information Act (5 U.S.C. § 552); deadline 20 business days

---

## Common Mistakes

**Mistake 1: Vague Keyword Searching**
- *Error*: "Records related to the project" or "correspondence about the contract"
- *Correction*: Use specific entity names, contract numbers, project codes, or person names: "Records containing the keyword 'Widget Corp' OR 'Contract 2024-SC-001'"

**Mistake 2: Overly Broad Date Ranges**
- *Error*: "All records from 2020 to present" (agencies claim this is too broad)
- *Correction*: Narrow to specific events: "Records created between January 15, 2024 and February 28, 2024" (6-week window)

**Mistake 3: Failing to Name Specific Custodians**
- *Error*: "All records in the city government"
- *Correction*: "Records in custody of the Procurement Department, Contract Administration Division, specifically maintained by the Procurement Officer or Contract Manager"

**Mistake 4: Including Exemption-Prone Requests**
- *Error*: "All emails between the City Manager and the Corporation Counsel"
- *Correction*: "All emails between the City Manager and the Procurement Officer regarding Contract 2024-SC-001, excluding attorney-client privileged communications"

**Mistake 5: Omitting Fee Waiver Language**
- *Error*: Submitting request without fee waiver clause; agency bills $2,000+
- *Correction*: Include fee waiver request with public interest justification; if denied, request fee estimate before search

**Mistake 6: Not Demanding Certification of Search**
- *Error*: Agency responds "No responsive records" without evidence of search
- *Correction*: Add language: "If no responsive records exist, provide signed certification identifying search performed, systems searched, and search date/time"

**Mistake 7: Failing to Specify Document Format**
- *Error*: Receiving 1,000-page printed stack when searchable PDF would work
- *Correction*: "Request electronic format (PDF) preferred; scanned images acceptable; paper only if no electronic version available"

---

## Red Flags

**Pre-Submission Red Flags:**
- Agency website has no FOIA officer contact listed (requires investigation; may not have formal FOIA program)
- Statute has very short deadline (Illinois: 5 days) requiring faster submission logistics
- Agency is known for serial delays (build in appeal prep time from the start)
- Fee waiver standard in your state is very restrictive (plan backup fee strategy)

**Post-Submission Red Flags:**
- "Request too broad" response to a narrow, specific request (suggests agency is obstructing; prepare for appeal/litigation)
- "No records exist" without signed certification (demand certification before accepting denial)
- Fees quoted at >$500 without explanation (request itemized breakdown; appeal)
- Response includes only redacted documents without redaction log (demand index; may violate statute)
- Agency requests "clarification" but continues counting statutory deadline (object; deadline should pause during clarification period)

---

## Example: Precision FOIA Request for Municipal Contract Red Flag

### Scenario
Your investigation suspects a $2M software contract was awarded without competitive bidding. The city claims an RFP was issued, but you suspect it was written to favor one vendor. You need the RFP drafting records.

### Gap Analysis
```
Gap: Did the city write the RFP before or after the vendor was pre-selected?
Needed: RFP draft versions, email communications between city and vendor during RFP drafting
Creator: City IT Director, Procurement Office
Date Range: 6 months before RFP posting
Key Entities: "Vendor Corp," "Contract RFP-2024-001"
```

### Custom Precision Request

```
[DATE]

City of Springfield
FOIA Officer
Procurement Department
123 Main Street
Springfield, IL 62701

Re: PUBLIC RECORDS REQUEST – RFP DRAFTING RECORDS
Request Number: REQ-2024-SOFTWARERFP-001
Requester: Jane Doe, Investigative Journalist
Email: jane.doe@newsorg.com
Phone: (217) 555-0123

City of Springfield:

This is a request under the Illinois Freedom of Information Act (5 ILCS 140/1 et seq.)
for the following records:

SCOPE OF REQUEST:

1. CUSTODIAN(S): Records in the custody of:
   - City IT Director
   - Procurement Office, Contract Administration Division
   - Records maintained in: Email system, shared file servers, contract management system

2. RECORD TYPES:
   - Email messages, drafts, and attachments
   - Memoranda and internal communications
   - RFP drafts, versions, and redlines
   - Meeting notes and meeting agendas
   - Vendor correspondence and communications

3. DATE RANGE: Between July 1, 2023 and March 15, 2024 (nine-month window
   preceding RFP publication on April 15, 2024)

4. KEYWORDS / SUBJECTS:
   - "Vendor Corp" OR "Software RFP" OR "Contract RFP-2024-001" OR "Enterprise Software Solution"
   - Communications between City IT Director and any outside vendor
   - Communications between Procurement Office and City IT Director regarding software RFP

5. EXCLUSIONS:
   - Attorney-client privileged communications
   - Attorney work product prepared for litigation
   - Personal information (SSNs, home addresses)
   - Trade secrets clearly marked as "Confidential – Trade Secret"

SEARCH METHODOLOGY:

Please conduct the following search:

1. Search email inboxes and sent folders of:
   - [City IT Director name]
   - [Procurement Officer name]
   - Any other individual with RFP drafting responsibility
2. Search shared file servers at: [File path or location] for folders containing "RFP," "Software," or project code
3. Search contract management system (CMS) for all versions and draft records related to RFP-2024-001
4. If no responsive records exist, provide a signed certification stating:
   - Which email accounts and systems were searched
   - Which individuals' records were reviewed
   - Specific date and time of search
   - Confirmation that no records matching the search parameters exist

STATUTORY DEADLINE AND APPEAL:

This request is submitted pursuant to 5 ILCS 140/1 et seq. Pursuant to 5 ILCS 140/3(e),
your office is required to respond within 5 business days of receipt of this request.

Response deadline: [DATE 5 BUSINESS DAYS FROM SUBMISSION]

FEE WAIVER REQUEST:

I hereby request a waiver of all search, duplication, and review fees. This request
qualifies for a statutory fee waiver under 5 ILCS 140/6(f) because:

1. The records directly concern the allocation of $2M in public funds (software contract)
2. Disclosure would inform public debate regarding municipal procurement transparency
3. The requester is a journalist investigating potential procurement impropriety
4. The public interest in disclosure significantly outweighs the government's interest in fees

If fee waiver is denied in full, please:
- Provide electronic PDF format to minimize costs
- Estimate total fees before searching; requester will authorize if <$100
- Charge only reproduction costs at statutory minimum rate

PREFERRED FORMAT:

Electronic files (PDF, XLSX, DOCX) via email to jane.doe@newsorg.com, or scanned
PDF images if original paper documents. Paper copies acceptable only if electronic
format unavailable.

CONTACT:

If you have questions regarding this request, please contact me at (217) 555-0123
or jane.doe@newsorg.com.

Respectfully,

Jane Doe
Investigative Journalist
Springfield News Bureau
jane.doe@newsorg.com
(217) 555-0123

---

Send via: Email to [foia@city.springfield.il.us] AND Certified Mail to address above
Date Submitted: [DATE]
```

### Expected Outcomes

**If Agency Complies (Best Case):**
- RFP draft versions showing evolution over time
- Emails between IT Director and Procurement Office during drafting
- Evidence of pre-RFP vendor contact (if present)
- Timeline showing when RFP was finalized

**If Agency Denies ("Too Broad"):**
- You have narrow search parameters to use in appeal
- You can cite specificity in administrative appeal motion
- You've established bad-faith obstruction if denial is issued anyway

**If Agency Responds ("No Records Exist"):**
- Demand signed certification
- If certifications show no search of email, demand supplemental search
- If certification is incomplete, file appeal under 5 ILCS 140/6.5

---

## Checklist for FOIA Request Submission

- [ ] Gap Analysis completed and documented
- [ ] Custodian agency and specific office identified
- [ ] Record types listed with specificity (not vague categories)
- [ ] Date range narrowed to <12 months if possible
- [ ] Keywords/search terms specified (exact entity names, contract numbers, project codes)
- [ ] Boolean search formula written out (AND/OR clauses)
- [ ] Exemptions pre-emptively excluded (attorney work product, trade secrets, personal info)
- [ ] Statute and deadline cited (with specific statute number and date)
- [ ] Fee waiver justification drafted and customized
- [ ] Document format specified (electronic preferred)
- [ ] Search methodology detailed (specific email accounts, systems, file locations)
- [ ] Certification of search language included
- [ ] Request letter proofread for typos and accurate agency/office names
- [ ] Request submitted via required agency method (email, portal, certified mail)
- [ ] Confirmation of receipt obtained
- [ ] Calendar reminder set for statutory deadline
- [ ] Appeal/litigation strategy prepared for likely denial scenarios
