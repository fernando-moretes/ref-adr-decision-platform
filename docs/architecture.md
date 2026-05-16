# Architecture

`adr-decision-platform` is a Next.js application that provides ADR templates
and an index browser. v1 is fully static — templates render from Markdown and
the browser reads ADRs from public GitHub paths via the GitHub REST API.

## Components

- **Frontend (Next.js 16):** landing, template chooser, ADR browser.
- **Templates (`frontend/lib/templates/`):** Markdown ADR templates.
- **GitHub API client:** fetches `docs/adr/*.md` from configured repositories.
- **Docs (`docs/`):** architecture and ADRs (the project eats its own dog food).
- **Hosting:** Vercel; DNS via Cloudflare for `adr.moretes.com`.

## Statuses

Constrained to: `proposed`, `accepted`, `superseded`, `deprecated`, `rejected`.

## Roadmap

1. Render the four templates as copyable Markdown.
2. Build the cross-repo ADR browser with GitHub REST API.
3. Add a "supersedes / superseded by" graph view.
4. Add MCP server companion so AI agents can author and link ADRs.
