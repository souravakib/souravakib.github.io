# souravakib.github.io

Personal portfolio site deployed to GitHub Pages.

## Pages

- **Home** — intro and contact links
- **CV** — HTML resume with PDF download
- **Projects** — GitHub repositories (fetched at build time)
- **Availability** — Calendly scheduling embed

## Local development

```bash
npm install
npm run dev
```

## Environment variables

Optional variables for local builds and CI:

| Variable | Purpose |
| --- | --- |
| `GITHUB_TOKEN` | Avoid GitHub API rate limits when fetching repos |
| `PUBLIC_CALENDLY_EMBED_URL` | Calendly inline embed URL |
| `PUBLIC_CALENDLY_URL` | Direct Calendly booking page URL |

Set repository variables in GitHub under **Settings → Secrets and variables → Actions → Variables**.

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`.

Enable GitHub Pages with source **GitHub Actions** in repository settings.

Live site: https://souravakib.github.io
