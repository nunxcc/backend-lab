# PLAN.md — The ten-week curriculum

Read one week at a time. Read the whole file only when deciding whether to move on.

**Shape:** Part 1 Node (weeks 1 to 6). Part 2 Python (weeks 7 to 10). Sequential, never parallel.
**Rules of engagement live in `CLAUDE.md` and are auto-loaded. This file is reference.**

---

## 0. THE FAILURE MODE IS NOT STARTING

The previous plan was never abandoned. It was never opened. That is a different problem with a different fix, and it is the one this section exists to solve.

A plan that is never started failed at exactly one point: Day 1 was too big to begin on an ordinary afternoon. "Learn HTTP properly and build a server from scratch" is not a task, it is a mood. So Day 1 is now twenty minutes and entirely mechanical.

**0. Day 0 and Day 1 are fixed, tiny, and non-negotiable.**

*Day 0 (15 minutes, do it the moment you read this):*
- Create the repo `backend-lab`, public.
- Drop this file in the root as `CLAUDE.md`.
- Create an empty `DECISIONS.md`.
- `git commit -m "chore: set up learning contract"` and push.

That is it. The repo now exists, which means tomorrow you are continuing something instead of starting something. Those are not the same act.

*Day 1 (20 minutes):*
- `npm init`, TypeScript configured for Node, no DOM lib.
- A `node:http` server, fifteen lines, that answers `GET /health` with `{"ok":true}`.
- Run it. Curl it. Commit it.
- No concepts, no reading, no explanation. Understanding comes on Day 2. Day 1 exists only to make the streak exist.

Pick the start date now and write it here: **START: 16 September 2026**. If it is not a date, it is a wish.

---

The remaining four fixes protect the plan once it is moving.

**1. There is a floor, not a target.**
Old rule: two hours a day. On a bad day that becomes zero, and two zeros become a dead plan.
New rule: **25 minutes and one real commit. Every weekday. That is the floor.** Above the floor, do as much as you want. Below it, never. The floor is small enough that "I did not have time" is never true.

**2. Something is live by Day 5, not Week 6.**
The old plan gave you nothing you could open in a browser until the end. Six weeks of invisible progress is how motivation dies. Week 1 now ends with an ugly, hand-rolled, deployed URL. It will be bad. It will be live.

**3. A failed checkpoint costs one session, not one week.**
Old rule: fail a checkpoint, repeat the week. That is a punishment, and punishments get avoided.
New rule: fail a checkpoint, spend **one** recovery session on that specific gap, write it in `DECISIONS.md`, move on. Understanding compounds. Calendars do not wait.

**4. This is not the second block of the day. It is the block with the fixed time.**
"Applications in the morning, learning in the afternoon" fails because applications are demoralising and the afternoon becomes recovery. Give this block a clock time and defend it. The applications will expand to fill whatever is left, and that is fine, because there is no finish line on applications and there is one here.

---

---

## 4. PART 1 — NODE (weeks 1 to 6)

Node first because it is the language you already write. The ramp is syntax-free; every hour goes into concepts instead of remembering how to declare a list. Portugal hires fullstack juniors on JS/TS far more than on anything else.

### Week 1 — What is underneath everything (and a live URL)
**Concepts:** HTTP methods, status code families, headers, idempotency. Cookies and the `httpOnly` / `Secure` / `SameSite` flags. The Node event loop, why single-threaded, what blocking costs. ESM vs CommonJS. `tsconfig` for a server, no DOM lib.
**Build:** an HTTP server on `node:http`. **No Express.** Routing by hand, body parsing by hand, JSON responses by hand. Deliberately ugly.
**Day 5:** deploy it. Railway or Fly.io. It must answer a real request from the public internet.
**Checkpoint:** why are 200, 201 and 204 different? What did Express do that you wrote by hand? What happens if a handler runs `while(true)`?

### Week 2 — The API layer
**Concepts:** Fastify or Express, middleware and why order matters. Centralised error handling. Zod, and why validation lives at the boundary. REST design: resources, plurals, nesting, pagination, filtering. Vitest and supertest.
**Build:** full CRUD API for **your job applications**. You have real data, you generate more every day, and it replaces the localStorage tracker you already built. In memory, no database yet.
**Checkpoint:** where must validation happen and why there? What is middleware and why does order matter? Write a test that fails for a reason you predicted before running it.

### Week 3 — Data
**Concepts:** primary and foreign keys, cardinality, normalisation to 3NF and when to denormalise deliberately. SQL by hand: `SELECT`, `JOIN`, `GROUP BY`, aggregates, subqueries. Transactions and what ACID means in practice. Indexes: what they speed up, what they cost. Migrations. Connection pooling. The N+1 problem.
**Build:** Postgres in Docker. Schema written by hand in SQL. Connect week 2's API with the `pg` driver in **raw SQL first**. Only then swap to Drizzle and diff the experience.
**Checkpoint:** draw the schema on paper and justify every foreign key. Which query does each index serve? How would you detect an N+1 you did not know you had?

### Week 4 — Auth. The week that matters most.
This is the line item that appears verbatim in the postings you want, and it is what separates a portfolio toy from an application.
**Concepts:** authentication is not authorisation, in one sentence. Password hashing with argon2: salt, and why slow on purpose. Sessions vs JWT and when each is correct. Secure cookie flags and what each one prevents. OWASP basics: SQL injection, XSS, CSRF, with one exploitable example of each **written by you**. Row-level authorisation, the easiest thing in backend to get wrong. Secrets and environment variables.
**Build:** register, login, logout, sessions, and an endpoint whose response depends on who is asking. Then attack your own API with an injection and a CSRF, and fix both.
**Checkpoint:** the one-sentence difference. Why is argon2 slow on purpose? Sessions or JWT, two reasons, and the case where you would pick the other. How do you guarantee user A cannot read user B's rows?

### Week 5 — Mesa gets a backend
**Changes:** multi-tenant schema (restaurants, users, sales, menu items, delivery platforms). API serving the data currently hardcoded in the client. Auth so each owner sees only their restaurant. CSV sales import. Heavy aggregation (menu engineering matrix, commission cost) moves to the server as SQL, not browser JavaScript.
**Does not change:** the hand-built SVG. It is your differentiator and it stays exactly as it is.
**Checkpoint:** why did aggregation move server-side, and what did you lose by moving it? Two owners use it simultaneously. What breaks?

### Week 6 — Production
**Concepts:** deployment, secrets in production, structured logging with pino and what must never be logged, health checks, migrations in CI, database backups.
**Build:** Mesa fullstack, live, with GitHub Actions running lint, tests and migrations before deploy.
**Deliverable:** rewrite the Mesa README around the business problem, the architecture, the schema decisions, the auth strategy, and **the three decisions you are proudest of with the alternative you rejected for each**.

---

---

## 5. PART 2 — PYTHON (weeks 7 to 10)

Python arrives in week 7, not week 1, and the reason is strategic rather than pedagogical.

Your AI-oriented CV positions you as a product engineer who does LLM integration. That positioning is true, and it is your only genuinely uncommon asset. But the LLM ecosystem is written in Python: the SDKs, the eval tooling, the retrieval stack, every research artefact. Right now you can say "I integrated Gemini from a browser." After Part 2 you can say "I ship LLM services." Those are different candidates.

You do not learn Python here. You already program. You learn **the Python ecosystem** and you learn it by contrast with what you just built in Node, which is the fastest route to a second language that exists.

### Week 7 — Python for someone who already ships
Type hints and `mypy` (map it onto TypeScript, note where it is weaker). `uv` for environments and packaging. The stdlib parts that matter: `pathlib`, `dataclasses`, `enum`, `itertools`, `collections`. `pytest` against Vitest. `async`/`await` in Python versus Node, and why the differences exist.
**Build:** a CLI that drives your week 2 job-applications API. Real tool, real use, every day.

### Week 8 — FastAPI, learned by diff
Pydantic against Zod. Dependency injection against middleware. ASGI against the Node event loop. SQLAlchemy or SQLModel against Drizzle. Auth again, same concepts, different idiom, which is what makes the concepts stick.
**Build:** reimplement one slice of your week 4 API in FastAPI. **Same endpoints, same tests.** Then write the comparison. That document is interview gold: almost no junior can talk about two backend ecosystems concretely.

### Week 9 — Where Python actually wins
pandas for the Mesa aggregations you wrote in SQL. `httpx` and `selectolax` for scraping. A scheduled job. This week exists so you can answer "when would you reach for Python over Node" with something better than a shrug.
**Build:** a scraper that pulls junior postings into your tracker. You get the learning and you get the tool.

### Week 10 — The AI service
The Anthropic and Google SDKs. Structured output done properly (tool use and JSON schema) versus the XML tag parsing you hand-built in Project Soul. Embeddings, a vector store, a small RAG loop. Streaming. Token cost, latency, failure modes, retries, and how you evaluate whether output is any good.
**Build:** a Python service your Node app calls over HTTP. The specific thing matters less than the shape: **two languages, two services, one product.**
**Checkpoint:** why is this service Python and the other Node? What does your structured output approach do that the Project Soul regex could not, and what did the regex do better?

---

---

## 7. CHECKPOINTS

At the end of each week, from memory, out loud:

- [ ] **W1** HTTP and Node's execution model, to a non-technical person
- [ ] **W2** design a REST API on a napkin and justify every endpoint
- [ ] **W3** draw a relational schema and defend every key and index
- [ ] **W4** sessions vs JWT, and demo a vulnerability you fixed
- [ ] **W5** Mesa's architecture end to end
- [ ] **W6** show it live, and say what you do if it falls over at 3am
- [ ] **W7** where Python's type system is weaker than TypeScript's, and why
- [ ] **W8** the same API in two ecosystems, and what each one made easier
- [ ] **W9** when you reach for Python instead of Node
- [ ] **W10** your structured output approach, and its failure modes

---

---

## 8. WHAT NOT TO DO

**Do not learn Python and Node in the same week.** Two syntaxes, two package managers, two async models, two type systems. You would end up with two halves you cannot defend and one interview you fail. Part 2 starts when Part 1's checkpoints are signed off, not when the calendar says so.

**Do not add Java, C#, Kubernetes, GraphQL or microservices.** They appear in postings because those postings are senior.

**Do not watch tutorial series.** They produce the feeling of progress and no defensible artefact.

**Do not commit to save a streak.** See section 3.

**Do not let the agent write what you do not understand.** Rule 3, and it is the rule that decides whether any of this was worth doing.

**Do not stop if a job lands.** Continue at reduced hours. Learning with income arriving is dramatically easier than learning with the account at zero, and an offer in October beats every line in this file.

---

---

## 9. WHAT THIS IS NOT

A hundred hours does not make you a backend engineer. It makes you someone who:

- applies to fullstack junior roles without lying
- has a live application with a database, auth and real users
- can defend schema and security decisions under questioning
- can speak concretely about two backend ecosystems, which most juniors cannot
- has a written record of thirty of their own technical decisions

That is enough to clear the screen that currently rejects you. That is the entire objective.
