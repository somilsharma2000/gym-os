# Gym OS — Architecture & Tech Stack

## System Overview

```
┌─────────────────────────────────────────────────┐
│                   GYM OS                         │
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌───────────────┐  │
│  │ Gym OS   │  │ Gym      │  │ Member Web   │  │
│  │ Dashboard │  │ Website  │  │ App (PWA)    │  │
│  │ (Admin)  │  │ (Public) │  │ (Members)     │  │
│  └────┬─────┘  └────┬─────┘  └───────┬───────┘  │
│       │              │                │          │
│       └──────────────┴────────────────┘          │
│                      │                          │
│              ┌───────┴────────┐                  │
│              │  API Layer    │                  │
│              │  (REST + WS)   │                  │
│              └───────┬────────┘                  │
│                      │                          │
│  ┌───────┬──────────┼──────────┬───────────┐   │
│  │       │          │          │           │   │
│  ▼       ▼          ▼          ▼           ▼   │
│ Auth   Members   Leads    Payments    Automations│
│        Check-ins  CRM      Expenses   Templates  │
│        Classes   WhatsApp  Reports    AI Engine   │
│        Trainers  Inbox     Dashboard  Loyalty    │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │           Data Layer                     │    │
│  │  PostgreSQL  │  Redis  │  File Storage   │    │
│  └─────────────────────────────────────────┘    │
│                                                 │
│  ┌─────────────────────────────────────────┐    │
│  │         External Services               │    │
│  │  WhatsApp API │ Google │ Instagram │ SMTP│    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
```

## Tech Stack

### Frontend
- **Gym OS Dashboard (Admin):** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Gym Website (Public):** Next.js 14 (SSG/ISR for auto-sync) + Tailwind CSS
- **Member Web App:** Next.js 14 (PWA — works offline for cached data)
- **UI Components:** shadcn/ui or Radix UI
- **Charts:** Recharts or Chart.js
- **Forms:** React Hook Form + Zod validation

### Backend
- **API:** Next.js API Routes (or standalone Node.js/Express if needed)
- **Authentication:** JWT + Refresh Tokens + 2FA (TOTP) for owner
- **Rate Limiting:** Redis-based (Upstash or self-hosted)
- **Background Jobs:** BullMQ (Node.js) or pg-boss (PostgreSQL-based)
- **Webhooks:** Incoming webhooks for WhatsApp/Instagram/Google

### Database
- **Primary:** PostgreSQL (Supabase or self-hosted)
- **Cache:** Redis (sessions, rate limits, QR rotation, online/offline queue)
- **File Storage:** S3-compatible (Supabase Storage, MinIO, or AWS S3)

### External Services
- **WhatsApp:** WhatsApp Business API (Cloud API by Meta)
- **Instagram:** Instagram Graph API (Meta)
- **Google Business Profile:** Google Business Profile API
- **Google Maps:** Google Maps Embed API (free, no billing)
- **Email:** SMTP (SendGrid, Amazon SES, or owner's SMTP)

### Infrastructure
- **Frontend Hosting:** Vercel (Next.js optimized)
- **Backend Hosting:** Railway or Render (Node.js + PostgreSQL + Redis)
- **CDN:** Vercel Edge Network or Cloudflare
- **Monitoring:** Sentry (errors) + Uptime monitoring
- **Backups:** Daily automated PostgreSQL backups

### Security
- Data encryption at rest (PostgreSQL) and in transit (TLS)
- 2FA for owner (TOTP with backup codes)
- Role-based access control (5 predefined roles)
- JWT with short-lived access tokens + long-lived refresh tokens
- Rate limiting on all API endpoints
- Input validation on all forms (Zod)
- SQL injection prevention (parameterized queries)
- XSS prevention (Next.js built-in + CSP headers)
- CSRF protection for forms

## Database Schema (Core Tables)

```sql
-- Members
members (
  id, gym_id, name, phone, email, dob, address,
  emergency_contact, gender, occupation, photo_url,
  join_date, plan_id, plan_start, plan_expiry,
  status (active/expiring/expired/frozen/not_started),
  freeze_days_used, instagram_handle,
  consent_whatsapp, consent_marketing,
  created_at, updated_at
)

-- Plans
plans (
  id, gym_id, name, duration_days, price, description,
  is_active, created_at, updated_at
)

-- Check-ins
checkins (
  id, member_id, gym_id, check_in_time, check_out_time,
  duration_minutes, is_auto_checkout, device_id, created_at
)

-- Payments
payments (
  id, member_id, gym_id, amount, method (cash/upi/card/bank/cheque),
  payment_date, status (pending/paid/refunded),
  discount_amount, discount_reason, note,
  marked_by, marked_at, created_at, updated_at
)

-- Refunds
refunds (
  id, payment_id, amount, reason, marked_by, created_at
)

-- Leads
leads (
  id, gym_id, name, phone, email, source,
  secondary_sources, instagram_handle, score, temperature,
  pipeline_stage, qualification_data, trial_id,
  lost_reason, last_contacted_at,
  created_at, updated_at
)

-- Lead Sources
lead_sources (
  id, lead_id, source, first_touch, last_touch, created_at
)

-- Trials
trials (
  id, lead_id, gym_id, scheduled_date, scheduled_time,
  status (booked/done/no_show/cancelled), slot_id, created_at
)

-- Classes
classes (
  id, gym_id, name, day, time, duration, trainer_id,
  capacity, intensity, description, recurring_pattern,
  is_active, created_at, updated_at
)

-- Class Enrollments
class_enrollments (
  id, class_id, member_id, status (enrolled/waitlist/cancelled/attended/absent),
  created_at
)

-- Trainers
trainers (
  id, gym_id, name, phone, email, specialty, salary,
  photo_url, status, commission_type, commission_value,
  rating, created_at, updated_at
)

-- PT Sessions
pt_sessions (
  id, member_id, trainer_id, gym_id, date, time,
  status (scheduled/done/cancelled/no_show),
  exercises, notes, logged_at, created_at
)

-- PT Credits
pt_credits (
  id, member_id, gym_id, total_credits, used_credits,
  package_id, created_at
)

-- Staff
staff (
  id, gym_id, name, phone, email, role, photo_url,
  is_active, last_login_at, is_on_leave, created_at, updated_at
)

-- Expenses
expenses (
  id, gym_id, category, amount, description, date,
  is_recurring, recurring_frequency, created_at, updated_at
)

-- WhatsApp Messages
whatsapp_messages (
  id, gym_id, member_id, lead_id, direction (in/out),
  message, template_name, status (queued/sent/delivered/read/failed),
  sent_at, delivered_at, read_at, created_at
)

-- WhatsApp Broadcasts
broadcasts (
  id, gym_id, template_name, segment, recipient_count,
  sent_count, delivered_count, read_count, response_count,
  scheduled_at, sent_at, created_at
)

-- Automation Logs
automation_logs (
  id, gym_id, template_name, trigger_type, member_id,
  action_taken, status (success/failed/skipped), error_message,
  created_at
)

-- Loyalty Points
loyalty_points (
  id, member_id, gym_id, points, reason (checkin/referral/streak/class/goal),
  expires_at, created_at
)

-- Loyalty Redemptions
loyalty_redemptions (
  id, member_id, gym_id, points_used, reward, created_at
)

-- Body Measurements
measurements (
  id, member_id, gym_id, weight, body_fat, chest, waist, arms, thighs, shoulders,
  measured_at, created_at
)

-- Progress Photos
progress_photos (
  id, member_id, gym_id, photo_url, watermark_text, permission_granted,
  created_at
)

-- Diet Plans
diet_plans (
  id, member_id, trainer_id, gym_id, plan_data (json),
  template_name, disclaimer, created_at, updated_at
)

-- Workout Plans
workout_plans (
  id, member_id, trainer_id, gym_id, plan_data (json),
  template_name, disclaimer, created_at, updated_at
)

-- Health Questionnaires
health_questionnaires (
  id, member_id, gym_id, injuries, conditions, goals, experience,
  declaration_signed, created_at
)

-- NPS Responses
nps_responses (
  id, member_id, gym_id, score, category (promoter/passive/detractor),
  created_at
)

-- Gym Settings
gym_settings (
  id, gym_id, name, address, phone, whatsapp_number, email,
  gym_hours_open, gym_hours_close, logo_url, domain,
  primary_color, secondary_color, font,
  freeze_limit_quarter, freeze_limit_year,
  late_fee_amount, points_per_checkin, points_monthly_cap,
  member_reminders_enabled, birthday_messages_enabled,
  review_request_frequency_days, nps_frequency_days,
  whatsapp_connected, instagram_connected, google_connected,
  created_at, updated_at
)

-- Audit Log
audit_logs (
  id, gym_id, staff_id, action, entity_type, entity_id,
  old_value, new_value, created_at
)

-- Notification Center
notifications (
  id, gym_id, staff_id, type, title, message, is_read,
  action_url, created_at
)
```

## API Structure

```
/api/v1/
  /auth/
    POST   /login
    POST   /logout
    POST   /refresh
    POST   /2fa/verify
    POST   /2fa/backup
  /members/
    GET    /              (list, filter, search)
    POST   /              (create)
    GET    /:id           (detail)
    PUT    /:id           (update)
    DELETE /:id           (owner only)
    POST   /:id/freeze    (request/approve)
    POST   /:id/unfreeze
    POST   /:id/upgrade   (owner only)
    POST   /import        (bulk import)
    GET    /export         (owner only)
  /checkins/
    POST   /              (QR check-in)
    GET    /today         (live count)
    GET    /report        (daily/weekly/monthly)
  /payments/
    GET    /              (list, filter)
    POST   /              (mark payment — owner only)
    POST   /:id/refund    (owner only)
    GET    /dues          (outstanding)
    GET    /revenue       (dashboard)
  /leads/
    GET    /              (list, filter, search)
    POST   /              (manual create)
    PUT    /:id           (update)
    POST   /:id/convert   (to member)
    POST   /:id/lost      (mark lost with reason)
  /trials/
    POST   /              (book)
    PUT    /:id           (update)
    POST   /:id/complete  (mark done)
  /classes/
    GET    /              (list)
    POST   /              (create)
    PUT    /:id           (update)
    DELETE /:id           (cancel)
    POST   /:id/enroll    (member enroll)
    POST   /:id/waitlist
    POST   /:id/attendance (trainer marks)
  /trainers/
    GET    /              (list)
    POST   /              (create)
    PUT    /:id           (update)
    POST   /:id/payroll   (calculate)
  /whatsapp/
    GET    /inbox         (unified inbox)
    POST   /send          (manual message)
    POST   /broadcast     (send broadcast)
    GET    /templates     (list approved templates)
  /automation/
    GET    /              (list templates)
    PUT    /:id           (enable/disable/edit)
    GET    /logs          (automation logs)
  /reports/
    GET    /revenue       (revenue report)
    GET    /attendance    (attendance report)
    GET    /churn         (churn analysis)
    GET    /leads         (conversion funnel)
    GET    /pnl          (P&L statement)
  /dashboard/
    GET    /today         (today's overview)
    GET    /ai-suggestions (what to do today)
    GET    /comparison    (comparison mode)
  /webhooks/
    POST   /whatsapp      (incoming WhatsApp)
    POST   /instagram     (incoming Instagram)
    POST   /google        (incoming Google messages)
```

## Background Jobs

```javascript
// Daily at midnight
- Update member plan statuses
- Check expired members
- Revenue leak detection
- Engagement score calculation
- Streak updates (reset if broken, pause if gym closed)

// Every 5 minutes
- WhatsApp message queue processing
- Failed message retry (max 3)
- Razorpay payment status check (if used)
- Integration health check

// Daily at 9 AM
- Send daily summary to owner
- Send monthly progress reports (1st of month)
- NPS surveys (1st of month)

// Daily at 10 AM
- Birthday messages
- Expiry reminders (T-7/3/1)
- Absent alerts (7/14/30 days)

// Daily at 9 PM
- Staff unlogged PT session reminders
- 90-day number verification (rolling)

// Weekly (Sunday)
- Weekly summary to owner

// Real-time (event-based)
- New lead → notification + auto-reply
- New Instagram DM → auto-lead
- New Google message → auto-lead
- Member check-in → live count update
- Payment marked → receipt + status update
- Trial booked → confirmation + reminder schedule
```
