# Aditya Raut — Portfolio

A multi-page personal portfolio built with **React + Vite**, styled in the deep
maroon-on-cream palette from Aditya's CV. Pages: Home, Research, Awards.

## Run locally

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Stack

- React 18 + React Router (HashRouter — works on any static host)
- Vite 5
- Framer Motion (page transitions, scroll reveals, animated nav pill)
- Google Fonts: Fraunces (serif) + Inter (sans)

## Deploy to GitHub Pages (adityaraut.github.io)

This repo ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds the site and deploys it automatically on every push to `main`.

1. Create a **public** repo named exactly `adityaraut.github.io` under Aditya's
   GitHub account (leave it empty — no README).
2. From this folder, push the code:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/adityaraut/adityaraut.github.io.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment →
   Source: GitHub Actions**.
4. The workflow runs automatically; when it finishes (green check in the
   **Actions** tab), the site is live at **https://adityaraut.github.io**.

`base: './'` in `vite.config.js` keeps asset paths relative, and HashRouter
means routes like `/#/research` work with no server-side config.

## Colors

| Token        | Hex       | Use                    |
|--------------|-----------|------------------------|
| `--maroon`   | `#6E1E23` | primary accent / name  |
| `--cream`    | `#F7F5F0` | page background        |
| `--ink`      | `#2A2A2A` | body text              |
