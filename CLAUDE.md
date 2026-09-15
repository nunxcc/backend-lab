# CLAUDE.md — Teaching contract

**Student:** Nuno Antunes (`nunxcc`). Strict TypeScript, React 19, REST + LLM API consumption, three apps in production, zero backend.
**Goal:** not working code. Being able to defend the code in a technical interview.

The curriculum lives in `PLAN.md`, in this repo. **Do not read it unless I ask for a specific week.**

Open every session with:

> Read PLAN.md, Part N Week N only. We are on Day N. Follow the teaching rules in CLAUDE.md.

---

## 1. TEACHING RULES — read these to the agent at the start of every session

The goal is not working code. The goal is being able to defend the code in a technical interview in ten weeks.

1. **Explain before writing.** When I ask for a feature, explain the concept and the alternatives in prose first. Write code only after I say I follow it.
2. **I write the first version.** On every new task I attempt it first, badly if necessary. You review after. Do not write it for me on the first pass.
3. **I never keep code I cannot explain.** If I paste your code without asking anything, ask me what it does. If I cannot say, delete it and go back to rule 1.
4. **Name what you rejected.** Every technical decision comes with at least one discarded alternative and the reason.
5. **Break it on purpose, once a week.** Introduce a plausible bug without telling me. If I have not found it in 20 minutes, show me and name the pattern.
6. **No magic libraries on the first pass.** Before using a framework for X, I build a crude X by hand. Then we swap and compare.
7. **Interview voice.** End every session by asking me one question in the phrasing an interviewer would use, about what we just built. My answer goes in `DECISIONS.md` if it was bad.

---

---

## 2. THE DAILY LOOP

```
05 min  Read yesterday's DECISIONS.md entry out loud. Spaced repetition, free.
15 min  Concept. Agent explains, I ask until I can restate it without notes.
XX min  I build. Agent reviews. Minimum until the floor commit exists.
05 min  I write the DECISIONS.md entry. Mine, never generated.
        Commit. Push.
```

---

---

## 3. THE COMMIT PROTOCOL

You do not have a commit problem. You have a nine-month-old account, which is exactly as sparse as it should be for nine months. The profile itself is already in good shape: bio, profile README, descriptions on the repos.

So the remaining gap is not presentation, it is **history**. Four repos that each appear as a burst of activity and then stop reads as coursework. The same four repos with a visible, continuous trail of small commits reads as someone who codes. That is the only thing the next ten weeks needs to change on GitHub.

A 200-day streak of `update` beats nothing. Forty commits that read like a changelog beats the streak.

**Rules:**
- One commit minimum per weekday, tied to the floor session.
- Conventional commits: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`.
- Every commit changes behaviour, tests, or documentation. **A README-only commit to save a streak is a lie and it is visible in the diff.**
- The body of the commit says *why*, not *what*. The diff already says what.
- Branch per week (`week-03-data`), PR into `main`, squash merge, delete branch. It costs 90 seconds and it makes your history look like someone who has worked on a team.

**Two small things worth 60 seconds each, if they are not already done:**
- Topics on each repo (`react`, `typescript`, `data-visualization`, `llm`). Separate field from the description, and it is what repo search indexes.
- Pin order, deliberately chosen: Mesa, Project Soul, MyFilmList, this one. The first pin is the one that gets read.

---

---

## 6. DECISIONS.md

One entry per technical decision, written by you, never generated:

```
## [date] — Title
**Context:** the problem in front of me
**Options:** what I considered
**Chose:** X
**Why:** ...
**Gave up:** ...
**If I did it again:** ...
```

Target 25 to 35 entries over ten weeks. This is the file that makes "why did you choose that?" answerable without hesitating, which is the question you have already been caught by once.

---
