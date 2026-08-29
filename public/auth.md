# auth.md

Agent authentication and registration policy for `luiz.dev`.

## Audience

This document is intended for AI agents and automated clients that want to interact with `luiz.dev`.

## Authentication status

`luiz.dev` is a public, read-only personal website and CV. **No authentication is required** to access any public page, resource, or metadata endpoint.

## Registration

There is no agent registration, account creation, or credential provisioning process. Agents may browse the site anonymously.

## Supported methods

- **Anonymous access** — all public resources are available without credentials.
- **Bearer tokens** — not required; `bearer_methods_supported` includes `header` for compatibility but will not be enforced.

## Credentials

No API keys, client secrets, or tokens are issued for this domain.

## Discovery

- OAuth Authorization Server metadata: `/.well-known/oauth-authorization-server`
- OpenID Connect discovery: `/.well-known/openid-configuration`
- OAuth Protected Resource metadata: `/.well-known/oauth-protected-resource`
- Agentic Resource Discovery manifest: `/.well-known/ai-catalog.json`

## Revocation

Not applicable. No credentials are issued.

## Contact

For questions, contact Luiz Gonzaga dos Santos Filho via the links at `https://luiz.dev/contact`.
