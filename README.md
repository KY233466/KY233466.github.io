# Deployment Instructions

This site is built with **Next.js (static export)** and deployed to GitHub Pages from the `main` branch.
To update the live site, rebuild the static export into `docs/` before pushing.

## 🚀 How to Deploy
Run:

```
npm run build:pages
```

This generates a static export in `docs/`, which GitHub Pages serves as the site root.
Then commit and push:

```
git add docs
git commit -m "Rebuild site"
git push
```

## Local Development

```
npm run dev
```

Open http://localhost:3000 to view the site.

## Production Build

```
npm run build
```

For GitHub Pages, use `npm run build:pages` instead to export the static site.
