# Gym OS

**The complete gym management system built for Indian gyms.**

Gym OS is a premium gym management platform that combines a gym's website, member management, lead CRM, WhatsApp automation, class scheduling, trainer management, and AI-powered insights — all in one system.

## What Makes This Different

Every gym software in India is either:
- A copied US product that doesn't understand Indian gyms (no offline mode, no Hindi, no festival logic, no UPI flow)
- A basic billing app that only does invoices and member entries

Gym OS is built ground-up for Indian gyms — Tier 1, 2, and 3 cities. It handles the full lifecycle: visitor → lead → trial → member → retention → renewal → referral → revenue.

## What's Inside

### For The Gym Owner
- **Website** — 9+ pages, auto-synced with Gym OS, mobile-first, SEO-optimized
- **Member Management** — digital profiles, QR check-in, plans, freezes, family accounts
- **Lead CRM** — 13 sources in one inbox (Instagram, Google, website, WhatsApp, walk-in, phone, referral, abandoned forms)
- **WhatsApp Automation** — 18 auto-triggers, 1/day cap, inbox, broadcasts
- **Payments** — owner-controlled, manual entry, no gateway, zero liability
- **Classes & Scheduling** — recurring classes, waitlist, capacity tracking
- **Trainer Management** — profiles, scheduling, commission, payroll
- **Diet & Workout Plans** — templates, auto-send, mandatory disclaimers
- **Progress Tracking** — measurements, charts, photos (permission-based)
- **AI Intelligence** — churn prediction, revenue forecast, daily action suggestions
- **Automation Engine** — 20 pre-built templates, no custom builder
- **Loyalty & Gamification** — points, streaks, challenges, badges
- **Expense & P&L** — categories, recurring, P&L statement, profit tracking
- **Owner Dashboard** — today's overview, hot leads, AI "what to do today"
- **Staff & Operations** — 5 roles, permissions, equipment maintenance
- **Member App** — web app, portal, digital card, self-service
- **Google & Instagram Integration** — full lead capture, profile sync, review management

### What's NOT Included (By Design)
- No payment gateway (owner handles money directly — zero liability)
- No GST (removed per decision)
- No AI personas giving business advice (liability)
- No AI free-form chat with members (unpredictable)
- No visual workflow builder (6 months to build, nobody uses)
- No smart lock hardware (support nightmare)
- No member community feed (moderation liability)
- No member wallet (financial liability)
- No document storage (Aadhaar/PAN liability)
- No festival auto-greetings (religious sensitivity)
- No missed call auto-SMS (spam risk)
- No UPI Autopay (chargeback risk)
- No custom roles (5 fixed roles)
- No API/webhooks/Zapier (maintenance burden)

**48 features explicitly removed to eliminate liability, maintenance burden, and risk.**

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend (Gym OS) | Next.js 14 (App Router) + TypeScript |
| Frontend (Website) | Next.js 14 (static/SSG) + Tailwind CSS |
| Backend | Next.js API Routes (or standalone Node.js) |
| Database | PostgreSQL (Supabase or self-hosted) |
| Cache | Redis (session, rate limiting, QR rotation) |
| File Storage | S3-compatible (Supabase Storage or MinIO) |
| WhatsApp | WhatsApp Business API (via Meta) |
| Instagram | Instagram Graph API |
| Google | Google Business Profile API + Google Maps Embed |
| Background Jobs | BullMQ (Node.js) or pg-boss |
| Hosting | Vercel (frontend) + Railway/Render (backend + DB) |
| Auth | JWT + Refresh Tokens + 2FA (owner) |

## Development Phases

### Phase 1 — MVP (30-45 days)
Core system to launch and start selling.
- Member management + QR check-in
- Payment recording (manual)
- Lead CRM (all 13 sources, unified inbox)
- WhatsApp automation (10 key triggers)
- Class scheduling
- Trainer management (basic)
- Owner dashboard
- Website (9 pages, auto-sync)
- 5 pre-built automation templates

### Phase 2 — Growth (Month 3-6)
Features that increase value and retention.
- Diet & workout plans
- Progress tracking + charts
- Loyalty & gamification
- AI intelligence (churn, forecast, daily actions)
- Full 20 automation templates
- NPS + Google review automation
- Expense & P&L
- POS / retail (optional)
- Equipment maintenance

### Phase 3 — Scale (Month 6-12)
Advanced features for larger gyms.
- Member web app (self-service portal)
- Google Business Profile full sync
- Instagram DM lead capture
- Advanced analytics
- Multi-language (Hindi)
- Offline mode
- Custom branding

## Documentation

- [Feature Specification](docs/FEATURE_SPEC.md)
- [Architecture & Tech Stack](docs/ARCHITECTURE.md)
- [Safety Rules & Removed Features](docs/SAFETY_RULES.md)
- [Edge Cases & Fixes](docs/EDGE_CASES.md)
- [Development Phases](docs/DEVELOPMENT_PHASES.md)

## Calling Agent Kit

- [Complete Calling Kit](calling-kit/COMPLETE_CALLING_KIT.md)

## Pricing

| Plan | Monthly | Target |
|---|---|---|
| Starter | ₹799 | Small gyms (<100 members) |
| Professional | ₹1,499 | Mid-size gyms (100-300 members) |
| Premium | ₹2,999 | Large gyms (300+ members) |

**Website Setup:** ₹3,000–₹7,000 one-time (based on complexity)
**Website Maintenance:** ₹500–₹1,000/month (hosting, SSL, domain, support)

## License

Proprietary. All rights reserved.
