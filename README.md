# Electrical Engineering Technology Hub

A customized Docusaurus microsite prepared for TWR2019 Assignment 3.

## Included assignment requirements

- Customized homepage in `src/pages/index.js`
- About page in `docs/about.md`
- Contact and resources page in `docs/contact.md`
- Custom colour scheme and layout in `src/css/custom.css`
- Customized React navbar wrapper in `src/theme/Navbar/index.js`
- Updated navigation in `docusaurus.config.js`
- Integrated `@docusaurus/plugin-sitemap`
- GitHub Pages deployment workflow in `.github/workflows/deploy.yml`

## Before running

1. Install Node.js 20 or newer.
2. Install Yarn Classic: `npm install --global yarn`
3. Replace every instance of `YOUR-GITHUB-USERNAME` in `docusaurus.config.js`.
4. Replace the placeholder email in `docs/contact.md`.

## Run locally

```bash
yarn install
yarn start
```

The local development site normally opens at `http://localhost:3000`.

## Build test

```bash
yarn build
yarn serve
```

## Publish to GitHub

1. Create a public GitHub repository named `electrical-engineering-technology-hub`.
2. Copy these files into the repository.
3. Commit and push them to the `main` branch.
4. In GitHub, open **Settings > Pages** and choose **GitHub Actions** as the source.
5. The included workflow will build and deploy the site.

Expected live URL:

`https://YOUR-GITHUB-USERNAME.github.io/electrical-engineering-technology-hub/`

## Suggested commit history

```text
Initialise Docusaurus project
Create electrical engineering technology homepage
Add About and Contact pages
Customize colour scheme and responsive layout
Add navbar wrapper and sitemap plugin
Configure GitHub Pages deployment
Finalize content and accessibility review
```
