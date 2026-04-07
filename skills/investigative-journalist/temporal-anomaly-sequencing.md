---
name: temporal-anomaly-sequencing
description: Detect suspicious chronological compression or unnatural delays in evidentiary timelines that signal coordinated malfeasance or cover-up activity.
---

# Temporal Anomaly Sequencing

## Overview

Temporal Anomaly Sequencing automates the detection of suspicious timing patterns in investigative timelines. Most legitimate business and government operations follow predictable procedural rhythms—regulatory reviews take standard durations, vendor selection processes compress across known phases, corporate formations follow filing windows. Anomalies emerge when these natural rhythms fracture.

This skill converts your Evidentiary Trace Table into a forensic timeline tool, flagging three signature patterns of malfeasance:

1. **The Miracle Bid**: Entity formation compressed into <30 days before contract award (signaling pre-arranged winning)
2. **The Premonition**: Asset movement <48 hours before negative public event (signaling advance knowledge)
3. **The Stall**: Unnatural procedural delays in standard processes (signaling deliberate obstruction)

The output is a Timeline Red Flag Report—a dated, delta-annotated document with DOC-IDs that holds up in editorial review and court filings.

---

## When to Use

Deploy Temporal Anomaly Sequencing when:

- You have extracted an Evidentiary Trace Table with dates and DOC-IDs
- The investigation spans 6+ months of activity
- You suspect coordination between two or more entities
- Contracts, permits, or asset transfers are central to your story
- Timeline compression is already your hypothesis, but you need quantified proof
- You're preparing findings for publication or legal review and need defensible deltas

**Do NOT use** if your timeline is sparse (<10 events) or if the subject operates in a seasonal or project-based industry where timing variance is normal (e.g., construction, agriculture).

---

## Core Pattern: Anomaly Types

| Pattern Name | Definition | Red Flag Delta | Common Context | Significance |
|---|---|---|---|---|
| **The Miracle Bid** | Entity formation to contract award | <30 days | Shell company procurement fraud | Pre-arranged winner; no fair competition |
| **The Premonition** | Asset movement to public disclosure | <48 hours | Market manipulation, embezzlement | Insider knowledge; planned exit |
| **The Stall** | Procedural step duration vs. standard | +300% baseline | FOIA delays, permit obstruction | Deliberate obstruction or cover-up |
| **The Layering** | Multiple entities incorporated within narrow window | 3+ in <60 days | Money laundering, shell network | Coordinated structure building |
| **The Retroactive** | Document date vs. filing date | Retroactive (negative) | Falsified records, backdating | Fraudulent documentation |

---

## Implementation Workflow

### Phase 1: Timeline Extraction and Normalization

1. Export your Evidentiary Trace Table (columns: Date, Entity, Action, DOC-ID, Source)
2. Verify all dates are in ISO 8601 format (YYYY-MM-DD)
3. Flag any dates marked "circa" or "estimated"—these reduce precision
4. Sort chronologically (oldest to newest)
5. Create a second column: "Days Since Previous Event"
6. Formula for Delta: `Current Date - Previous Date`
7. Example:
   ```
   2024-01-15 | Widget Corp incorporated    | DOC-001 | (baseline)
   2024-01-20 | License application filed   | DOC-002 | 5 days
   2024-02-10 | Contract awarded to Widget  | DOC-003 | 21 days
   ```

### Phase 2: Delta Analysis and Baseline Establishment

1. Identify "normal" deltas for each process type:
   - Corporate formation to first contract: typically 60-180 days
   - Government RFP to award: typically 30-90 days (federal); 14-60 days (municipal)
   - Permit application to approval: 30-120 days depending on jurisdiction
   - Asset sale to public disclosure: 30-90 days
2. Create a baseline document listing your jurisdiction's standard timelines
3. Flag any delta that deviates >200% from baseline or falls <20% of expected range
4. Example anomaly:
   ```
   Standard permit approval: 45-90 days (median 60)
   Widget Corp permit: 8 days
   Deviation: 87.5% below baseline → RED FLAG
   ```

### Phase 3: Pattern Clustering and Cross-Entity Correlation

1. Group events by entity (one timeline per key actor)
2. Overlay timelines on a single master calendar
3. Identify moments where multiple entities show anomalous deltas simultaneously
4. Check for causality: Did Entity A's action trigger Entity B's timing compression?
5. Example clustering:
   ```
   2024-01-15: Shell Corp A formed
   2024-01-18: Vendor approval expedited (parallel, 3-day gap)
   2024-01-22: Contract awarded (4 days later)
   → Coordinated structure (The Miracle Bid pattern)
   ```

### Phase 4: Red Flag Report Generation

1. Create a document titled "Timeline Red Flag Report"
2. Include header: Investigation name, date range, entities analyzed
3. For each anomaly, document:
   - **Pattern Name**: Which of the five types
   - **Entities Involved**: All actors in the compressed sequence
   - **Event Sequence**: List events with dates and deltas
   - **DOC-IDs**: Full citation chain for each event
   - **Baseline vs. Actual**: Standard delta vs. observed delta
   - **Deviation Magnitude**: Percentage or absolute days difference
   - **Probability Assessment**: Is this statistical outlier plausible? (narrative)
4. Append a summary table with all anomalies ranked by deviation magnitude
5. Example report entry:
   ```
   ANOMALY: The Miracle Bid (Widget Corp)
   Entities: Widget Corp, City Procurement Office
   Sequence:
     - 2024-01-15: Widget Corp incorporated (DOC-001)
     - 2024-02-10: Contract awarded (DOC-003)
   Delta: 26 days
   Baseline: 60-180 days
   Deviation: -71.4% (below normal range)
   DOC Chain: Formation notice (public records), RFP posting (municipal website), award letter (DOC-003)
   Significance: Widget Corp compressed timeline by 65% relative to baseline, suggesting pre-arrangement.
   ```

---

## Quick Reference: Standard Processing Timelines

**Corporate Formation → First Contract Award**
- Typical range: 60–180 days
- Shortcut threshold: <30 days (RED FLAG)

**Government RFP → Award**
- Federal: 30–90 days
- Municipal: 14–60 days
- Shortcut threshold: <14 days federal, <7 days municipal (RED FLAG)

**Permit Application → Approval**
- Standard: 30–120 days (jurisdiction-dependent)
- Shortcut threshold: <10 days (RED FLAG)

**Asset Sale → Public Disclosure**
- Expected: 30–90 days
- Shortcut threshold: <2 days (RED FLAG)

**Regulatory Review Cycle**
- Standard SEC review: 30 days minimum
- State licensing: 45–120 days
- Shortcut threshold: Approval before minimum review window closes (RED FLAG)

---

## Common Mistakes

**Mistake 1: Ignoring Seasonal or Cyclical Baselines**
- *Error*: Treating all contracts uniformly without accounting for emergency procurement vs. standard competitive bidding
- *Correction*: Establish separate baselines for emergency vs. competitive processes; flag only if delta contradicts the stated procurement type

**Mistake 2: Counting "Soft Dates" as Precise Events**
- *Error*: Using "circa January 2024" or "sometime in Q1" without pinpointing to a calendar day
- *Correction*: Only flag deltas of <7 days if all dates are confirmed to specific calendar days; exclude soft dates from anomaly analysis

**Mistake 3: Confusing Causality with Correlation**
- *Error*: Flagging two events with short deltas without establishing whether one triggered the other
- *Correction*: Verify causal linkage (e.g., Did Entity B receive advance notice of Entity A's action?) before assessing anomaly significance

**Mistake 4: Single-Entity Timeline Analysis**
- *Error*: Looking only at one actor's timeline without cross-referencing other actors' deltas
- *Correction*: Always overlay multiple entity timelines; coordinated compression across entities is more suspicious than isolated anomalies

**Mistake 5: Anchoring to Incorrect Baseline**
- *Error*: Using national average timelines for a locale with known expedited processes (e.g., using 90-day federal baseline for a state that typically completes in 14 days)
- *Correction*: Research jurisdiction-specific standard timelines; verify with agency counsel or public records search

---

## Red Flags

**High-Confidence Red Flags:**
- Entity formation <30 days before contract award (The Miracle Bid)
- Asset movement <48 hours before negative news event (The Premonition)
- Three or more entities incorporated within 60-day window (The Layering)
- Procedural review completed in <50% of stated statutory minimum
- Document filing date earlier than event date (The Retroactive)

**Medium-Confidence Red Flags:**
- Delta 40–60% below baseline but still within realm of fast-track processes
- Compressed timeline only for one entity in a multi-entity procurement
- Delays in FOIA response or records production (suggests obstruction but not initial malfeasance)

**Low-Confidence Red Flags (Require Additional Context):**
- Deltas that compress timeline by 20–40% (may be efficient operations, not coordinated fraud)
- Single anomalous delta without cross-entity clustering
- Seasonal compression (e.g., year-end accelerations)

---

## Example: Multi-Layer Shell Company Rapid Deployment

### Scenario
Your investigation suspects a $15M municipal contract was pre-awarded to a shell company network. You extract this timeline:

| Date | Event | Entity | DOC-ID |
|---|---|---|---|
| 2024-01-08 | Strategic Logistics LLC formed | Strategic Logistics LLC | STATE-FORM-001 |
| 2024-01-11 | DBA "Regional Procurement Partners" registered | Strategic Logistics LLC | COUNTY-DBA-001 |
| 2024-01-15 | RFP posted by city | City Procurement Office | CITY-RFP-2024-Q1 |
| 2024-01-22 | Four bids submitted | (4 entities) | CITY-BIDS-RECEIVED |
| 2024-01-29 | Strategic Logistics awarded $15M contract | Strategic Logistics LLC | CITY-AWARD-LETTER |
| 2024-02-02 | Formation documents leak; shell company discovered | (media) | NEWSPAPER-ARTICLE |

### Analysis

**Phase 1 Extraction:**
```
Delta Column:
2024-01-08: baseline
2024-01-11: 3 days (formation to DBA)
2024-01-15: 4 days (DBA to RFP posting)
2024-01-22: 7 days (RFP to bids received)
2024-01-29: 7 days (bids to award)
```

**Phase 2 Baseline Comparison:**
- Standard RFP cycle: 30–60 days (municipal baseline)
- Standard formation to contract award: 60–180 days
- Observed cycle: 21 days (RFP to award)
- Deviation: -65% below baseline

**Phase 3 Pattern Clustering:**
- Entity A (Strategic Logistics) formed 7 days before RFP posting
- RFP posted 14 days later
- Award rendered 7 days after bids received
- **Signature Pattern: The Miracle Bid + The Layering** (compressed formation + compressed procurement)

**Phase 4 Red Flag Report Entry:**

```
ANOMALY: The Miracle Bid + The Layering (Strategic Logistics LLC)

Entities: Strategic Logistics LLC, City Procurement Office

Event Sequence:
  2024-01-08: Strategic Logistics LLC formed (STATE-FORM-001)
  2024-01-11: DBA registered (COUNTY-DBA-001)
  2024-01-15: RFP posted (CITY-RFP-2024-Q1)
  2024-01-22: Bids received, 4 entities competing (CITY-BIDS-RECEIVED)
  2024-01-29: Strategic Logistics awarded $15M (CITY-AWARD-LETTER)

Compression Analysis:
  - Formation to RFP posting: 7 days (RFP must have been drafted pre-formation)
  - RFP posting to award: 14 days (standard: 30–60 days)
  - Overall deviation: -65% below municipal baseline

Coordinated Indicators:
  - Formation occurred days before RFP, suggesting advance knowledge of solicitation
  - Compressed bidding cycle (14 days) vs. standard 30–60 days
  - DBA registration enables "fresh" entity appearance while leveraging pre-positioned relationships

DOC-ID Chain:
  STATE-FORM-001 (formation notice)
  COUNTY-DBA-001 (DBA registration)
  CITY-RFP-2024-Q1 (RFP posting date)
  CITY-BIDS-RECEIVED (bid summary)
  CITY-AWARD-LETTER (award notice, $15M value)

Probability Assessment:
  Formation 7 days before RFP posting is consistent with pre-arranged solicitation. Compressed 14-day bidding cycle is unusual but within realm of expedited municipal procurement. Combined pattern suggests entity was pre-positioned to win; recommend cross-check against formation documents for evidence of prior corporate dissolution or owner overlap with city officials.

Recommended Next Steps:
  1. Cross-reference Strategic Logistics LLC owners/managers against city contractor database for prior relationships
  2. Obtain formation documents (articles of organization) to check for pre-drafting date or backdating
  3. Interview competing bidders regarding RFP timeline awareness
  4. Trace ownership structure of Strategic Logistics LLC via UCC filings and registered agent bypasses
```

---

## Checklist for Timeline Analysis

- [ ] All events extracted and normalized to ISO 8601 dates
- [ ] Soft dates ("circa," "estimated") flagged separately
- [ ] Baseline timelines researched and documented for each process type
- [ ] Delta column calculated for all adjacent events
- [ ] Anomalies flagged (deltas >200% or <20% of expected baseline)
- [ ] Cross-entity timeline overlay completed
- [ ] Coordinated compression patterns identified (two+ entities with simultaneous anomalies)
- [ ] Red Flag Report generated with DOC-ID citations
- [ ] Probability narrative written for each major anomaly
- [ ] Report reviewed for fact accuracy and legal defensibility
