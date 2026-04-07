# Contributing to Newsroom Extension

We welcome contributions from journalists, developers, and newsroom professionals. This document outlines how to contribute effectively.

## Types of Contributions

### Bug Reports

Found a skill that doesn't work as expected? Report it.

**Include:**
- Which skill and platform (Gemini CLI / Claude Code / Claude Desktop)
- What you tried to do
- What happened
- What you expected
- Steps to reproduce
- Screenshots or logs if relevant

### Documentation

Missing documentation? Unclear instructions? Help us improve.

**Acceptable documentation contributions:**
- Clarifying existing instructions
- Adding examples to skill documentation
- Improving installation guides
- Adding workflow diagrams
- Documenting edge cases
- Case studies from your newsroom

**Non-acceptable:**
- Documentation that references specific publications or organizations
- Content that could identify confidential sources or investigations
- Documentation of unreleased or experimental skills

### Feature Requests & New Skills

Have an idea for a new skill or improvement to an existing one?

**Before you start:**
1. Check GitHub Issues to see if it's already been requested
2. Open an issue describing the problem it solves
3. Explain how it fits into the Investigative Desk or Newsroom Operations tier
4. Wait for feedback before implementing

**What makes a good skill:**
- Solves a real problem in journalism workflows
- Integrates with existing skills
- Works across multiple platforms (Gemini CLI + Claude)
- Has clear input/output specifications
- Includes examples
- Includes error handling

### Case Studies

Tell the story of how you used Newsroom Extension on a real investigation.

**What to include:**
- Investigation type (local government, corporate, environmental, etc.)
- Which skills you used and in what sequence
- Key insights from using the toolkit
- Challenges you encountered
- Results and outcomes
- Lessons learned

**Anonymization guidelines:**
- Do not name specific publication or journalists
- Do not identify organizations, people, or places involved in the investigation
- Do not share confidential sources or methods
- Focus on the *process* and *methodology*, not the *findings*

---

## How to Contribute

### 1. Fork the Repository

```bash
git clone https://github.com/yourusername/newsroom-extension.git
cd newsroom-extension
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `fix/skill-name-timeout` for bug fixes
- `feature/new-skill-name` for new skills
- `docs/improve-installation` for documentation
- `case-study/investigation-type` for case studies

### 3. Make Your Changes

- Modify or add the appropriate skill files
- Update documentation as needed
- Test thoroughly on at least one platform

### 4. Document Your Changes

For new skills, create a directory under `skills/` with a `SKILL.md` file:

```
skills/
  your-skill-name/
    SKILL.md
```

**SKILL.md format:** Markdown with YAML frontmatter:

```markdown
---
name: your-skill-name
description: One-line description of when to use this skill.
---

# Your Skill Name

[Full skill content with methodology, examples, and guidelines]
```

Names must be lowercase kebab-case (letters, numbers, hyphens only).

**README section** describing the skill and when to use it

**Example usage** showing inputs and expected outputs

### 5. Commit Your Changes

```bash
git add .
git commit -m "Add new skill: skill-name

- Brief description of what it does
- How it integrates with existing skills
- Any platform-specific notes"
```

Follow commit message conventions:
- Start with a verb: "Add", "Fix", "Improve", "Update", "Document"
- Be specific about what changed
- Reference related issues if applicable

### 6. Push and Open a Pull Request

```bash
git push origin feature/your-feature-name
```

Open a PR on GitHub with:

**Title:** Descriptive one-liner

**Description:**
```markdown
## What does this do?
Brief explanation.

## Why?
Problem it solves.

## Testing
Platforms tested: [Gemini CLI / Claude Code / Claude Desktop]
Steps to verify: [numbered steps]

## Checklist
- [ ] Documentation updated
- [ ] Examples included
- [ ] Tested on at least one platform
- [ ] No references to specific publications or investigations
- [ ] Follows style guide
```

---

## Case Study Submission Template

Create a new file: `case-studies/CASE_STUDY_NAME.md`

```markdown
# Case Study: [Investigation Type]

## Overview

Brief description of the investigation type and scope (without naming specifics).

Example: "A local government investigation into budget irregularities and contract awards."

## Skills Used

1. Investigative Journalist Framework — [how you used it]
2. Structural Dependency Mapping — [what you learned]
3. [Skill] — [outcome]
4. [Skill] — [outcome]

(List in the order you used them)

## Workflow

### Phase 1: Definition & Scoping
- How you framed the investigation
- Key claims you wanted to verify
- Initial scope and constraints

### Phase 2: Intelligence Gathering
- What sources you used
- How you organized findings
- Major discoveries

### Phase 3: Structural Analysis
- Relationships and dependencies you identified
- Timeline anomalies or patterns
- Key connections

### Phase 4: Verification & Audit
- How you verified core claims
- Confidence levels for findings
- Remaining gaps or uncertainties

### Phase 5: Publication
- Editorial review process
- How you handled sensitive information
- Publishing strategy (single article vs. series)

## Key Insights

- What surprised you
- What worked well with the toolkit
- What was challenging
- How you adapted the methodology

## Lessons Learned

- For this investigation type
- For using AI-assisted investigation
- For newsroom workflows
- For future investigations

## Outcome

- Did the investigation result in publication?
- Impact and response (without identifying specifics)
- Follow-up work required

## Recommendations

For other journalists using Newsroom Extension:
- What skills to prioritize
- What to watch out for
- Alternative approaches you'd try

---
*Note: This case study anonymizes organizations, individuals, and locations to protect sources and editorial judgment.*
```

---

## Code of Conduct

### Responsible Use

This toolkit is designed for legitimate journalism in service of public accountability. Contributors and users must:

- **Follow applicable laws** in your jurisdiction
- **Respect privacy and confidentiality** — particularly for sources and sensitive investigations
- **Obtain proper authorization** before investigating people or organizations (check with legal counsel)
- **Protect sources ruthlessly** — don't publish or document information that could identify a source
- **Be transparent about methodology** — readers deserve to know how you know what you know
- **Correct errors promptly** — good journalism is self-correcting

### We Will Not Accept

- Contributions that facilitate harassment, doxing, or targeted abuse
- Skills designed for surveillance that violates privacy law
- Case studies that identify confidential sources or investigations
- Examples that glorify unethical practices

### Disputes

If you believe a contribution violates this code:

1. Open a private issue (mark it as sensitive)
2. Describe the concern specifically
3. Suggest a resolution
4. We will respond within 5 business days

Serious violations may result in removal of content or contributor access.

---

## Review Process

### What Happens When You Open a PR

1. **Automated checks** — GitHub Actions verify platform compatibility and documentation
2. **Peer review** — Maintainers and community members review the contribution
3. **Feedback** — We'll request changes or ask clarifying questions
4. **Revision** — You update the PR based on feedback
5. **Approval** — Once approved, we merge to `main`
6. **Release** — Your contribution becomes available in the next version

### Typical Timeline

- Bug fixes: 3–7 days to review
- Documentation: 3–5 days to review
- New skills: 1–2 weeks (requires more testing)
- Case studies: 5–10 days (privacy review)

### We May Request Changes

Common reasons for revision:

- Documentation could be clearer
- The skill doesn't work on all supported platforms
- Missing test cases or examples
- References to specific investigations or organizations
- Code style inconsistencies
- Missing error handling

**This is normal and expected.** We're working toward a high-quality toolkit that serves journalists well.

---

## Style Guide

### Documentation

- Write in clear, direct language
- Avoid jargon (or explain it when necessary)
- Use active voice: "The skill identifies connections" not "Connections are identified by the skill"
- Include examples and expected outputs
- Assume readers are journalists, not necessarily technologists

### Skill Descriptions

- **Name:** Specific, memorable, action-oriented
- **Description:** One sentence overview + 2–3 sentences of context
- **When to use:** Clear guidance on investigation types or phases
- **Dependencies:** What other skills should run first?
- **Inputs:** What does this skill need from you?
- **Outputs:** What will you get back?

### Git Commits

- Use present tense: "Add skill" not "Added skill"
- Be specific: "Fix timeout issue in corporate-veil-piercing" not "Fix stuff"
- Reference issues: "Fixes #123"
- Keep commits atomic (one logical change per commit)

---

## Questions?

- **Technical questions:** Open an issue with tag `question`
- **Process questions:** Check this file or open a discussion
- **Ideas for new skills:** Open an issue with tag `enhancement`
- **Security concerns:** Email maintainers privately

---

## Recognition

We recognize all contributors in the repository README and in each release's changelog. We appreciate your work in advancing rigorous, accountable journalism.

Thank you for helping build tools that matter.
