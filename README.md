# EduApp

Educational and fun apps built with **React**, **Vite**, and **Tailwind CSS**. The main quiz app supports in-year **3rd-grade learning** (Tennessee-friendly math and ELA), **STEM** habits and content, **geography**, **planets and space**, **dinosaurs as science**, and **high-interest facts** so practice stays curious—not drill-only. Each app lives under `apps/` and ships as a static site in **nginx** inside Docker—good for colorful, touch-friendly UIs on an **iPad** (Safari on your home Wi‑Fi).

## Layout

- **`apps/<name>/`** — source, `Dockerfile`, and production build.
- **`docker-compose.yml`** — local or NAS stack (example: **math-quiz** on port **9080**).

## Math quiz (test app)

- **Folder:** `apps/math-quiz`
- **Run locally (dev):** `cd apps/math-quiz && npm install && npm run dev` — open the URL Vite prints.
- **Run locally (dev, specific port):** `cd apps/math-quiz && npm run dev -- --port 4545`
- **Run locally (production build):** `npm run build && npm run preview`
- **Lint / tests:** `npm run lint` and `npm test` (from `apps/math-quiz`).
- **Docker:** from repo root: `docker compose build math-quiz && docker compose up -d math-quiz` → `http://<host>:9080`

On the iPad, use **`http://<NAS-LAN-IP>:9080`** (same Wi‑Fi as the NAS). Large buttons and `viewport-fit=cover` help with touch and full-screen feel.

### Subjects (3rd-grade learning + curiosity)

Same eight **subject keys** for saved scores. Labels and **test names** now spell out what to learn: core math/ELA, **STEM science** (including a new data & design round), **geography** (maps, Tennessee, world wonders), **planets & space tech**, **dinosaurs as science** (fossils & evidence), and **WOW STEM facts**.

| Subject | Focus | New or renamed rounds (examples) |
| ------- | ----- | -------------------------------- |
| Math · Grade 3 | Operations, multiplication, division, fractions, measurement | Adds division, fractions, area/perimeter, elapsed time, and a timed fact sprint |
| Reading & writing | Comprehension, vocabulary | Adds multi-paragraph text evidence, word parts, homophones, and reference skills |
| STEM · life, Earth & physical | NGSS-style content | Adds **STEM curiosity: data, design & Earth** |
| Geography | Maps, landforms, civics | Adds **Explorers & world wonders** |
| Planets & space science | Solar system through deep space | Adds **Planet mysteries & NASA tech** |
| Dinosaurs · prehistoric STEM | Mesozoic life | Adds **Fossils, evidence & birds link** |
| WOW facts | Records + science surprises | Adds **Mind-blowing science & tech** |
| Extra challenge | Stretch quizzes | Math / science / reading / world labs |

### Features

- **10 randomised questions** per standard round, drawn from the subject's question bank. The fact-fluency sprint is timed instead.
- **Scoring:** 10 pts per correct answer; 0–3 ⭐ stars awarded (1 star for a nonzero score below 70, 2 stars ≥ 70, 3 stars ≥ 90).
- **Best score** per test is saved and shown on the subject menu so the learner can see their personal best.
- **Star history:** recent attempts are recorded in `localStorage` (capped so storage stays healthy). Tap **⭐ My Stars** on the home screen to see history (score, stars, subject, date) and a running total of stars earned.
- **Streak tracking:** best consecutive correct answer streak is tracked per session and shown at results.
- **Mistake review:** results show missed questions, selected and correct answers, and an explanation when the question includes one.
- **Skill practice:** tagged answers build per-skill progress in `localStorage`; the math menu unlocks a practice round for skills below 70% after at least two attempts.
- **Fact fluency:** a 60-second multiplication and division sprint reports accuracy for that attempt.
- **Sound effects & confetti** on results for 2–3 star scores.

### Adding or refreshing questions

Questions live in plain JS arrays under `apps/math-quiz/src/data/`. Each file exports named arrays (e.g. `mathPractice1`, `elaPractice2`) registered in `registry.js`.

**To add or replace questions:**

1. Edit the relevant `*Questions.js` file (or add a new one and import it in `registry.js`).
2. Keep the same `subjectKey` in `SUBJECTS` and the same `key` on each test — renaming either orphans existing progress.
3. Each question needs: `question` (string), `choices` (4 strings), `answer` (exact match of one choice), and `_cat` (skill tag). Optionally add `passage` for a reading excerpt and `explanation` for mistake review.
4. Commit and redeploy: `docker compose build math-quiz && docker compose up -d math-quiz`.

**Scores and stars are not affected** — stored by subject/test key in `localStorage`, not by question text.

**Privacy and storage:** The app does not ask for a learner's name. Scores, attempt history, and skill progress are stored in the browser's `localStorage` on that device. A new device or cleared site data will not carry scores over.

## GitHub repo → Portainer on the NAS

You are not missing much: you need **either** the NAS to **build** the image from the repo **or** a place that already has a **built image** (recommended).

### Option A — Build on the NAS (Git + compose in Portainer)

1. Use your GitHub repository URL.
2. In Portainer: **Stacks** → **Add stack** → **Repository** (or “Build from Git” depending on version).
3. Paste the repo URL, set the **compose path** to `docker-compose.yml` at the repo root.
4. For a **private** repo, add credentials: **Personal Access Token** (HTTPS) or **deploy key** (SSH). Portainer stores them for pulls.
5. Deploy. The NAS **Docker engine** must be able to run `docker build` for `./apps/math-quiz` (normal on Terramaster with Docker/Portainer).

If the Git integration is flaky, clone on the NAS or paste the compose file manually.

### Option B — GitHub Actions builds the image (often simpler)

1. Workflow **`.github/workflows/math-quiz-ghcr.yml`** builds and pushes `ghcr.io/<owner>/eduapp-math-quiz:latest`, where `<owner>` is the GitHub repository owner.
2. First time: in GitHub → **Packages** → package → **Package settings** → set visibility or grant access.
3. Set `GHCR_OWNER` to your GitHub repository owner in the Portainer stack environment (or export it in your shell). On the NAS, use a stack that **only pulls the image** (no build on NAS):

```yaml
services:
  math-quiz:
    image: "ghcr.io/${GHCR_OWNER:?Set GHCR_OWNER to the GitHub repository owner}/eduapp-math-quiz:latest"
    restart: unless-stopped
    ports:
      - "9080:80"
```

4. If the package is **private**, in Portainer **Registries** add **ghcr.io** with a GitHub **PAT** (`read:packages`). Then deploy the stack.

A ready-made compose file for this image is **`docker-compose.ghcr.yml`**; set `GHCR_OWNER` before deploying it.

**What people sometimes miss:** Portainer does not replace Git—**you still push code to GitHub**; Portainer either **pulls** that repo to build or **pulls an image** that CI built. HTTPS to the NAS IP is fine on LAN; no extra domain required for family use.

## See also

- `docker-compose.example.yml` — commented template if you prefer copy-paste stacks.
