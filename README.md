# Kalaimani R — Portfolio

React + Vite portfolio site. Deploys automatically to GitHub Pages via GitHub
Actions every time you push to `main` — you do not need to build anything
locally.

## 1. Create the repo

1. Go to GitHub → **New repository**.
2. Name it (e.g. `portfolio`). Keep it **Public** (required for free GitHub
   Pages). Don't initialize with a README/gitignore — this project already
   has them.

## 2. Push this code

From inside this project folder:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/kalaimani1502/portfolio.git
git push -u origin main
```

(Replace `portfolio` above if you named the repo something else.)

## 3. Turn on GitHub Pages

1. In the repo on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. That's it — the workflow in `.github/workflows/deploy.yml` will run
   automatically. Check the **Actions** tab to watch it build.
4. Once it finishes (1–2 minutes), your site is live at:
   `https://kalaimani1502.github.io/portfolio/`
   (GitHub shows you the exact URL under Settings → Pages once it's live.)

Every future `git push` to `main` re-deploys automatically.

## 4. Editing your content

All of your profile text, experience, skills and projects live in one file:

```
src/data.js
```

Edit that file, commit, and push — no other files need to change for normal
content updates.

To swap your photo, replace `src/assets/photo.jpg` (keep the same filename,
or update the import in `src/components/Hero.jsx`).

To update the downloadable résumé, replace
`public/Kalaimani_R_Resume.pdf` (keep the same filename).

## 5. Running it locally (optional)

Only needed if you want to preview changes before pushing:

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## 6. Where to put the live link

Once deployed, add the URL to:
- LinkedIn profile → "Contact info" → Website, and/or Featured section
- Resume header (swap the `[add your GitHub Pages link]` placeholder)
- GitHub profile README / bio
