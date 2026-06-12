---
name: evidence-preservation-protocol
description: Use at the start of every investigation and continuously throughout — mandatory rules for preserving evidence, notes, drafts, and tangential records, and for maintaining the append-only collection log. This protocol exists to minimize legal and financial exposure; it is never optional.
---

# Evidence Preservation Protocol

## Why This Is Non-Negotiable

An investigative story should be assumed to end in a legal demand. The two largest avoidable exposures are:

1. **Spoliation** — destroying or altering records once litigation is reasonably anticipated (which, for an investigation of a named subject, is *day one*). Courts may sanction it, instruct juries to assume the destroyed material was unfavorable, and it converts a winnable libel defense into a loss.
2. **Process failure** — being unable to *show* good-faith verification. Actual-malice and negligence standards turn on what the newsroom knew and did. The collection log is that proof.

Therefore: **preserve everything, log everything, delete nothing.**

## Rule 1: Write-Once Evidence Directory

Every investigation workspace has an `evidence/` directory that is **append-only**:

- Every collected document is saved there *at the moment of collection* — before reading it in depth, before deciding whether it's useful.
- Files are named by their evidence ID: `evidence/DOC-001-city-contract-register-2024.pdf`.
- Compute and record a SHA-256 hash in `evidence[].custody.hash` at intake. Re-downloaded or updated versions get a **new** DOC ID; the original stays.
- Never modify, rename, re-export, OCR-overwrite, or delete a file in `evidence/`. Derived versions (OCR text, excerpts, cleaned CSVs) live elsewhere (`working/`) and cite their source DOC ID.

## Rule 2: Archive Web Sources at Collection Time

Web pages change and disappear — often *because* someone noticed you looking.

- Any web-sourced item gets a third-party capture (Wayback Machine or archive.today) immediately, recorded in `custody.archived_url`, **plus** a local saved copy (PDF/WARC/screenshot) in `evidence/`.
- A bare URL citation is not preservation. If the page is gone tomorrow, you have nothing.
- Social media: capture the post, the timestamp, the account profile page, and the URL in one dated screenshot set.

## Rule 3: Notes and Tangential Records Are Evidence Too

Preserve, with the same discipline:

- **Interview notes and memos** — filed as their own DOC items, dated, contemporaneous. (Recording requires consent rules per jurisdiction — see legal boundary; notes are always lawful.)
- **Negative results** — searches that returned nothing, agencies that said "no responsive records." Log them in `collection_log`. Diligence you can't show didn't happen.
- **Dead-end leads** — marked `dead-end` in `leads[]`, never deleted.
- **Tangential documents** — records collected but unused. Relevance is judged later, sometimes by a court. Keep them.
- **Right-of-reply correspondence** — every comment request and response, verbatim, as DOC items.

## Rule 4: Drafts Are Versioned, Never Overwritten

- Drafts live in `drafts/` as immutable versions: `drafts/2026-06-11-vendor-contracts-v3.md`. Each revision is a new file.
- Editorial changes between versions are part of the record — they demonstrate the verification process (or get discovered anyway; better to have the story they tell be deliberate).
- The same applies to social copy, headlines, and pull quotes that make factual assertions.

## Rule 5: The Append-Only Collection Log

Every evidentiary action is an entry in `collection_log[]` (see `schemas/master-file.schema.json`): collected, preserved, graded, cited-in-draft, comment-requested, claim-promoted, claim-killed, exported, published, correction.

- Entries carry a monotonic `seq`, timestamp, actor, and the IDs touched.
- Entries are **never edited or deleted**. Mistakes are corrected by a new `log-amendment` entry referencing the erroneous `seq`.
- No claim may be cited in a draft without a corresponding `cited-in-draft` log entry linking CLM → DOC ids.

## Rule 6: Legal Hold Is the Default

`investigation.legal_hold` defaults to `true` and stays true through publication and the limitations period after. While it is true:

- Nothing in the workspace is deleted — by any desk, for any reason, including "cleanup," "the story was killed," or "we were wrong."
- A killed story's file is *archived intact*, not purged. Being wrong and showing you checked is a defense; being wrong with an empty folder is not.
- If a human instructs deletion while legal hold is active, the agent must surface this protocol and route the decision to `managing-editor` with legal counsel flagged — not silently comply.

## Agent Checklist (run at every desk handoff)

1. Does every DOC item have `local_path`, `hash`, and (if web-sourced) `archived_url`? → fix before handoff.
2. Does every claim cited in the current draft have a `cited-in-draft` log entry? → log before handoff.
3. Any file in `evidence/` modified since intake (hash mismatch)? → stop, escalate to managing-editor.
4. Any work product created this session not yet saved under `evidence/`, `working/`, or `drafts/`? → save now.

## Red Flags

| Thought | Reality |
|---------|---------|
| "This document turned out to be irrelevant, I'll tidy it away." | Relevance is decided later, possibly in court. Keep it. |
| "I'll archive the web sources in one batch before publication." | Pages vanish in hours. Archive at collection, every time. |
| "The log entry is wrong, I'll just edit it." | Append a `log-amendment`. An edited log is worse than a wrong one. |
| "The story is killed, clean up the workspace." | A killed story under legal hold is archived intact, never purged. |
| "Hashing and logging slows me down." | One libel discovery request costs more than every log entry you will ever write. |

---

**Pipeline position:** Loaded alongside `muckraker-master-file` at investigation start; its checklist runs at **every** desk handoff (research → archive → copy → social → legal review → publish).
