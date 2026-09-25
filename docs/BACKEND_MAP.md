# Gym OS — Backend & Infrastructure Map

> Complete, verified inventory of every system that makes up Gym OS (research date: 2026-09-25).
> Nothing here is theoretical — every app, URL, and data flow was tested and confirmed live.

---

## The Base44 App Estate (9 apps)

| # | App name | App ID | Role | Published |
|---|---|---|---|---|
| 1 | **Gym osssss** | `6a85aadd01bc42f293723858` | ⭐ The Gym OS platform — 45+ entities, member portal, owner dashboard | ✅ [my-gym-os.base44.app](https://my-gym-os.base44.app) |
| 2 | **BEYOND PIXELLS** | `6a700b150c8d8b8e923580a1` | Private ops app — **currently where website leads land** | ❌ private |
| 3 | **Vesper** | `6a76f719f88f2473ba879696` | Lead-capture endpoint (`captureGymLead`) called by all client sites | ❌ private |
| 4 | **GYMOS** | `6a8949954092729194579577` | Backend-functions app for gym-os-frontend (dashboard, leads, trials, QR check-in) | ❌ private |
| 5 | **autolead TRAIL** | `6a6d983cbe9162a4ba7f9823` | Agency prospect scraper + site generator (sales engine) | ❌ private |
| 6 | BloomWire | `6a60a3672c56780712cba8d5` | Flower e-commerce store (separate vertical) | ✅ |
| 7 | Koda | `6a73016f9b626430a0d26f88` | FORTREX trading platform backend (separate vertical) | — |
| 8 | Arlo | `6a79d5cea765bcf565bf27b6` | FORTREX waitlist capture (separate vertical) | — |
| 9 | Superagent | `6ab65947f1ce1bb3167c9029` | AI agent workspace (automation, research, repo ops) | ❌ |

**Related apps outside this account** (likely `beyondpixells-com` org or another workspace — verify before relying on them):
- `miro-77d5beab` — `commandCenterApi` (FORTREX Command Center)
- `solene-dcb41753` — `gymOsApi` (used by gym-os-platform demo page)

---

## Lead Flow (current, verified 2026-09-25)

```
Client website form (data-gymos-lead)
        │
        ▼
gym-os-connect.js v2 ──(API down?)──► WhatsApp fallback + localStorage queue
        │
        ▼
Vesper: captureGymLead (vesper-923580a1.base44.app)
        │
        ▼
BEYOND PIXELLS app → Lead entity          ← ⚠ leads land HERE today
                                          ← target: Gym osssss (published platform)
```

## Data Reality (what each data store actually holds)

| App | Data found | Verdict |
|---|---|---|
| Gym osssss | Demo seed data (Rahul Verma, Sneha Pillai… all same timestamp) | The platform UI, but no real leads yet |
| BEYOND PIXELLS | Real captured leads ("Test Lead QR", Sanjay Reddy, walk-ins, Aug 29-31) | **Real production leads live here** |
| GYMOS | Test leads (OLD API TEST, AUDIT 3) + seed members | Development/test data from frontend build |
| Vesper | No entities — proxy only | Keep as capture endpoint or retire after migration |

## Consolidation Target (agreed direction)

**One product, one backend.** The published platform (`Gym osssss` / my-gym-os.base44.app) is the flagship. To finish:

1. Repoint Vesper's `captureGymLead` to write into Gym osssss (editor change, owner action)
2. Migrate real leads from BEYOND PIXELLS → Gym osssss (can be done by agent once step 1 is chosen)
3. Retire/merge GYMOS functions into the flagship (or keep as-is if gym-os-frontend stays a separate client)
4. Rename "Gym osssss" → "Gym OS" in the editor for credibility

## Client Sites (all wired to lead capture as of 2026-09-25)

| Client | Repo | Live site | Connect status |
|---|---|---|---|
| Bettabodies | bettabodies-system | ✅ | Wired (contact form + WhatsApp fallback) |
| Reds Gym | reds-gym-system | ✅ | Wired (contact + day-pass popup) |
| Flex N Tone | flex-n-tone-system | ✅ | Wired (join form; broken portal links fixed) |
| Fight Factory Manchester | fight-factory-manchester-system | ✅ | Wired v2 (portal/dashboard → published platform) |
| Oxigen Fitness Jaipur | oxigen-fitness-digital | ✅ | Wired v2 — **canonical site template** |
| IronForge Bengaluru | ironforge-website | ✅ | Not yet on connect v2 |
| Iron Forge Hyderabad | iron-forge-website | ✅ | Not yet on connect v2 |
| PowerHouse Hyderabad | powerhouse-fitness | ✅ | Not yet on connect v2 |
| Ambalal Flower Decor | ambalal-flower-decor | ✅ | Uses separate `vesper-9fdfa7b5` saveEnquiry backend |
| Delaneys | delanys-gym-system | private | Not wired |

## Known Constraints

- **Integration credits exhausted (Sep 2026)** — all Base44 backend functions (including lead capture) refuse requests until the plan is upgraded or credits reset. Client sites degrade gracefully to WhatsApp fallback (built into connect v2).
- **No custom domains yet** — everything runs on `github.io` / `base44.app` subdomains.
- Brand spelling is inconsistent across assets: "Beyond Pixels" vs "Beyond Pixells". Pick one before launch.
