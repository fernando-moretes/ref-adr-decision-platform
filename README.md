# ADR Decision Platform

A web platform for solution architects to author, list and version Architecture
Decision Records (ADRs) and lightweight RFCs — with templates for MADR, Nygard
and Y-statements, and an index browser to navigate decisions across teams.

![CI](https://github.com/fernandofatech/adr-decision-platform/actions/workflows/ci.yml/badge.svg)
![Frontend](https://github.com/fernandofatech/adr-decision-platform/actions/workflows/frontend.yml/badge.svg)
![Security](https://github.com/fernandofatech/adr-decision-platform/actions/workflows/security.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)

## Live portfolio / Portfolio ao vivo

- **Production:** [ADR Decision Platform](https://adr.moretes.com)
- **Documentation:** [Project docs](docs/architecture.md)
- **GitHub:** [fernandofatech/adr-decision-platform](https://github.com/fernandofatech/adr-decision-platform)
- **Author:** [Fernando Francisco Azevedo](https://fernando.moretes.com) · [LinkedIn](https://www.linkedin.com/in/fernando-francisco-azevedo/) · [GitHub](https://github.com/fernandofatech)

This public repository is part of a bilingual portfolio focused on solution
architecture, AWS, AI, MCP/tooling, DevSecOps, and production-ready engineering
practices.

Este repositório público faz parte de um portfólio bilíngue focado em
arquitetura de soluções, AWS, IA, MCP/tools, DevSecOps e boas práticas de
engenharia para produção.

## What it includes

- **MADR template** — Markdown ADR with status, context, decision, consequences.
- **Nygard ADR** — the original short-form template.
- **Y-statements** — one-line decision capture for fast-moving teams.
- **RFC template** — for cross-team proposals.
- **ADR browser** — filter by status, tag and date.
- **GitHub integration** — sync ADRs from `docs/adr/` of any repo.

## Why this matters

Decisions decay when they live in chats, slides and tribal memory. A platform
that makes ADRs easy to write, find and revisit turns architecture work into a
durable, reviewable asset that survives team changes.

## Tech stack

- Next.js 16 + React 19 · TypeScript 5 · Tailwind CSS 4
- GitHub Actions (CI, Frontend, Vercel, Security)
- Deployed on Vercel · DNS via Cloudflare

## Run locally

```bash
cd frontend
npm install
npm run dev
```

## Operations

See [OPERATIONS.md](OPERATIONS.md) and [SETUP.md](SETUP.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) — Copyright © 2026 Fernando Francisco Azevedo.
