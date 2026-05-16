# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project overview

`adr-decision-platform` is a web platform for authoring, listing and versioning
Architecture Decision Records and lightweight RFCs. It bundles MADR, Nygard and
Y-statement templates and an index browser. Hosted at `adr.moretes.com`.

## Tech stack

- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS 4
- GitHub Actions: CI, Frontend, Vercel, Security

## Development commands

```bash
cd frontend
npm install
npm run dev
npm run build
npm run lint
```

## Repository layout

- `frontend/app/` — landing, template chooser, ADR browser routes
- `frontend/lib/templates/` — Markdown sources for each ADR template
- `docs/adr/` — repo's own ADRs (eats its own dog food)
- `.github/workflows/` — pipelines

## Conventions

- Templates live as plain Markdown files with frontmatter (`status`, `date`,
  `deciders`, `tags`).
- The browser reads ADRs from a configured GitHub path (no database in v1).
- Status values are constrained to: `proposed`, `accepted`, `superseded`,
  `deprecated`, `rejected`.
