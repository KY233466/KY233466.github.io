# Deployment Instructions

This site is built with **Next.js** and deployed by **GitHub Actions**.
The deployment pipeline builds and publishes the site from your commits.

## Deploy

Commit and push your changes:

```bash
git add .
git commit -m "Your change summary"
git push
```

After push, GitHub Actions runs the build and deploy workflow automatically.

## Local Development

```bash
npm run dev
```

Open http://localhost:3000.

## Local Build Check

```bash
npm run build
```

Use this only to verify production build locally; deployment is handled by GitHub Actions.
