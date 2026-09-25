# Gym OS — Complete Feature Inventory

> The rule for consolidation: **nothing gets removed.** This document is the full
> inventory of what already exists, so any merge, rename, or rewrite can be checked
> against it. Research date: 2026-09-25.

---

## 1. The Platform — "Gym osssss" Base44 app (my-gym-os.base44.app)

The production platform. **45+ entities**, grouped by module:

- **Members & CRM:** Member, Membership, MembershipPlan, MembershipFreeze, Lead, AiLead, FollowUpTask, RenewalPipeline, Referral, TrialPass, Pass, PassScan
- **Access & attendance:** CheckIn, AttendanceRecord, PassScan
- **Scheduling:** GymClass, Slot, ClassBooking, Event
- **Trainers & staff:** Trainer, Staff, PayrollRecord
- **Health & programs:** DietPlan, WorkoutPlan, Transformation, Feedback
- **Revenue:** Payment, Expense, StoreOrder, Supplement
- **Marketing:** SocialPost, SocialCompetitor, Campaign, BroadcastMessage, AiConfig, AiLog, NotificationEvent, GymNotification
- **Org:** GymTenant, Branch, FeatureToggle, IntegrationConfig, AtRiskRule
- **Trainer ratings/revenue tracking fields, loyalty points, BCA metrics** on Member

Multi-tenant by design: every entity keyed by `gym_id` / `branch_id`. Published and live.

## 2. The Frontend — gym-os-frontend repo (React 18 + TS + Vite + Tailwind)

**40 pages**: Landing, Features, Pricing, About, Blog, Contact, Login, Onboarding, Dashboard, Members, Memberships, Leads, FollowUps, Trials, Renewals, AtRisk, CheckIn, QrPasses, Payments, Revenue, RevenueEngine, Expenses(?) — plus Classes, Trainers, Staff, Socials, WhatsApp, Integrations, Analytics, Settings, SuperAdmin, WebsiteSync, MemberPortal, Demo, Widget pages (Booking/Plans/Schedule/Trainers), and policy pages.

**8 backend functions** on GYMOS app: `getDashboardData`, `getLeads`, `createLeadWithConsent` (consent + duplicate detection), `getTrialPasses`, `createTrialPass` (server-generated QR tokens), `validateQR`, `checkIn` (duplicate-safe), `getMembers`.

## 3. The Spec — gym-os/docs (this repo)

- **FEATURE_SPEC.md** — ~300 features across **32 modules** (Website, Member Mgmt, Check-in, Payments, WhatsApp Automation ×36, Unified Lead Engine ×25, Unified Inbox, Booking & Sales, Classes, Trainers, Diet/Workout, Progress, AI, Automation templates, Loyalty, P&L, POS, Marketing, Reports, Owner Dashboard, Staff Ops, Member Experience, Fitness Assessment, Capacity, NPS, India-specific, Security, Multi-language, Integrations, Infra, Safety, Onboarding)
- **ARCHITECTURE.md** — full stack design, DB schema, external services
- **EDGE_CASES.md**, **SAFETY_RULES.md**, **DEVELOPMENT_PHASES.md**
- **calling-kit/** — complete sales package: calling bible, gym finder, psychological pricing, master sales package, area research

## 4. The Client Kit — gym-os-connect.js v2 (deployed to 5 client repos)

Capabilities per client site:
- Lead capture → Vesper `captureGymLead`, with per-gym config (name, WhatsApp, demo mode)
- Member portal + staff dashboard redirect → my-gym-os.base44.app
- QR check-in generation
- "Powered by Gym OS" badge (opt-in)
- Demo banner for pitch sites (opt-in)
- **Failure-proofing:** API-down → inline success + WhatsApp CTA + localStorage lead queue (never lose a lead)

Deployed: bettabodies-system, reds-gym-system, flex-n-tone-system, fight-factory-manchester-system, oxigen-fitness-digital (canonical).

## 5. Sales & Marketing Layer

- **gym-website-showcase** — 4 complete design styles (dark-cinema, industrial-raw, light-premium, vibrant-energy) for client pitches
- **bp-reels** — auto-posting service page (Instagram/YouTube)
- **autolead TRAIL** Base44 app — scrapes gym prospects (quality scoring, outreach logs, generated sites)
- **beyond-pixells** — agency landing page
- Ecosystem plan (README): Beyond Reach partner portal (beyondhub-bqxcyobv.manus.space), Salon OS, Clinic OS, Restaurant OS in development

## 6. Satellite Products (same playbook, separate verticals)

| Product | Status |
|---|---|
| Dentist OS | Live demo: 20-module clinic admin OS (repo: dentist-os) |
| Builder OS | Landing + working demo (builder-os-site); full system in private repo |
| Bloomwire | Velvet flowers store (Base44 app + repo) |
| FORTREX FX | 7 repos, Koda + Arlo backends, 5 live pre-launch variants |
| ViewBoost | Creator/viewer marketplace (flawless-view-boost-hub.base44.app) |
| RepoLaunch / RepoForge | Open-source catalog products, live |

## 7. Historical / Duplicate Repos (do not delete until flagship is confirmed)

`gym--os-`, `gymossss`, `ggggyyyyyyymmmmmm`, `gym-os-platform-v2` (empty/private dupes), `gym-os-platform` (single-file GYM OS v2 demo, uses solene API), `landingpage` (old FORTREX landing), `beyondpixells-com/dentist-OS` (stub).

**Consolidation rule:** when merging variants into the flagship, check each item above survives — either as a feature, a doc, or an intentional archive with a pointer.
