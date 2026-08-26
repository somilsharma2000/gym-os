# Gym OS — Development Phases

## Phase 1 — MVP (30-45 days)

**Goal:** Launch with core features, start selling, get first 10 paying gyms.

### Must-Have Features

#### 1. Member Management (7 features)
- Create/edit/view/delete members
- Membership plans (monthly, quarterly, half-yearly, annual)
- Plan status tracking (active/expiring/expired)
- Member search & filter
- Excel bulk import (with validation + preview)
- Family accounts (basic)
- Member notes & tags

#### 2. QR Check-In (5 features)
- Rotating QR code (60-second expiry, app-only)
- QR scan by staff device
- Live "who's in gym" count
- Daily attendance report
- Double scan prevention (5-min cooldown)
- Auto-checkout at closing time

#### 3. Payments (5 features)
- Manual payment recording (owner only)
- Payment methods (cash, UPI, card, bank, cheque)
- Expiry reminders to member (T-7/3/1/0 via WhatsApp)
- Outstanding dues dashboard
- Revenue dashboard (today/week/month)

#### 4. Lead CRM (10 features)
- Lead creation from all sources (manual: walk-in, phone, website form)
- Unified lead inbox
- Lead scoring (0-100)
- Lead pipeline (New → Contacted → Trial → Won/Lost)
- Duplicate detection (phone-based)
- Trial booking + management
- Lead search & filter
- Lead conversion to member
- Lead source tracking
- Lost lead analysis

#### 5. WhatsApp (8 features)
- WhatsApp Business API connection
- Welcome message
- Renewal reminders (T-7/3/1/0)
- Payment receipt (after owner marks paid)
- Birthday wish
- Absent alerts (7/14/30 days)
- Daily summary to owner (9 PM)
- 1/day message cap + combine logic

#### 6. Classes (4 features)
- Class creation (name, time, day, trainer, capacity)
- Recurring schedules
- Member enrollment
- Class attendance tracking

#### 7. Trainer Management (4 features)
- Trainer profiles
- Member-trainer assignment
- Trainer schedule (weekly view)
- Trainer login (limited access)

#### 8. Owner Dashboard (6 features)
- Today's overview (check-ins, revenue, new members)
- Hot leads
- Follow-ups due
- Needs attention (expiring, pending payments)
- This month summary
- Quick actions (add member, mark payment)

#### 9. Website (8 features)
- 9 pages (Home, About, Pricing, Schedule, PT, Trainers, Transformations, Testimonials, Contact)
- Auto-sync with Gym OS (5-min cache refresh)
- WhatsApp chat widget
- Member enquiry form → lead in CRM
- Mobile-first responsive
- Custom domain + branding
- SEO optimized
- Google Maps embed

#### 10. Automation (5 templates)
- Renewal boost (T-7/3/1/0)
- Birthday
- Absent alerts (7/14/30)
- Onboarding (Day 1/3/7/30 from first check-in)
- Daily summary to owner

#### 11. Core Infrastructure
- Authentication (JWT + roles)
- 5 roles (owner, manager, trainer, receptionist, member)
- Gym settings (hours, phone, address)
- Onboarding wizard (10-step)
- Dark mode
- Global search

**Phase 1 Total: ~62 features**

---

## Phase 2 — Growth (Month 3-6)

**Goal:** Increase value, improve retention, add power features.

#### 12. Diet & Workout Plans (8 features)
- Diet plan creation + templates
- Workout plan creation + templates
- Auto-send on WhatsApp
- Mandatory disclaimer
- Health questionnaire
- Plan update notifications

#### 13. Progress Tracking (10 features)
- Body measurements + validation
- Progress photos (permission-based, watermarked)
- Workout logging
- PR tracking
- Goal tracking
- BMI calculator
- Body fat tracker
- Before/after comparison
- Body measurement charts (multi-metric)
- Monthly progress report

#### 14. Loyalty & Gamification (7 features)
- Points system + caps
- Redeem points
- Streak tracking
- Challenges
- Achievement badges
- Points expiry + warning

#### 15. AI Intelligence (8 features)
- Churn prediction
- Revenue forecast
- Attendance pattern analysis
- Member segmentation
- Dynamic pricing suggestions
- Daily business brief
- Weekly business review
- AI "What Should I Do Today?"

#### 16. Full Automation (15 more templates)
- Win-back (T+30/60/90)
- At-risk save
- Lead nurture
- Class fill
- Revenue leak fix
- Cancel/save
- Referral
- Google review request
- NPS survey
- Holiday/seasonal
- Upsell
- Member milestone
- Progress report
- Loyalty points expiry
- Failed payment reminder

#### 17. Expense & P&L (9 features)
- Expense categories + entry
- Recurring expenses
- P&L statement
- Profit margin
- Budget vs actual
- Cash flow
- Tax summary report
- Expense trends
- Custom categories

#### 18. NPS & Reviews (6 features)
- Monthly NPS survey
- Promoter/detractor routing
- Google review request (all members)
- Owner review notification
- NPS dashboard
- Quarterly feedback survey

#### 19. POS / Retail (7 features — optional)
- Product catalog
- Inventory
- Low-stock alerts
- Sell to members/walk-ins
- Sales report
- Categories
- Bundle offers

#### 20. Equipment Maintenance (3 features)
- Equipment registry
- Maintenance schedule + alerts
- Maintenance log

#### 21. Advanced Dashboard (6 features)
- AI suggestions
- Comparison mode
- Goal tracking
- Staff performance
- Marketing performance
- Conversion funnel

**Phase 2 Total: ~80 features**

---

## Phase 3 — Scale (Month 6-12)

**Goal:** Full system, advanced integrations, multi-language.

#### 22. Instagram Lead Capture (22 features)
- DM → auto-lead
- Comment → auto-lead
- Story reply → auto-lead
- Instagram inbox inside Gym OS
- Keyword auto-reply
- Out-of-hours auto-reply
- Human handoff alert
- DM assignment + tags
- DM search
- Analytics

#### 23. Google Business Profile (22 features)
- Profile sync (hours, photos, schedule, description)
- Review management (notification, dashboard, response, trend)
- Messages → auto-lead
- Insights (search views, keywords, photo views)
- Posts (offers, events)
- Holiday hours sync

#### 24. Member Web App (13 features)
- PWA (installable, works offline for cached data)
- Member portal
- Digital membership card
- Push notifications
- Workout plans
- Progress tracking
- Goal tracking
- Challenges
- Self-service (view, book/cancel, request upgrade)
- Trainer messaging
- Dark mode
- Workout timer
- Emergency SOS

#### 25. Offline Mode (4 features)
- Offline QR check-in (local storage, syncs when back)
- Device management (stolen → remote wipe)
- Conflict resolution (keep earliest, no double-counting)
- Sync status indicator

#### 26. Multi-Language (3 features)
- English (full system)
- Hindi (full system — shipped simultaneously)
- Auto language detection for WhatsApp

#### 27. Regional SMS (1 feature)
- Hindi, Marathi, Gujarati, Tamil, Telugu (with fallback to English)

#### 28. Advanced Analytics (4 features)
- Occupancy heat map
- Engagement score
- Live capacity
- Export to PDF/Excel

#### 29. Waitlist (2 features)
- Class waitlist with auto-notify
- PT waitlist

#### 30. PT Packages (3 features)
- Session credits system
- PT session logging (24-hour window)
- PT revenue tracking per trainer

#### 31. Advanced Security (4 features)
- 2FA for owner
- Auto-login expiry (staff)
- Data export (owner only)
- Audit log

#### 32. Trainer Payroll (3 features)
- Commission auto-calculation
- Payroll calculation
- Salary credit notification

#### 33. Custom Branding (2 features)
- Logo, colors, fonts
- Custom invoice design

#### 34. Global Search & Calendar (2 features)
- Global search (members, leads, staff, classes, payments)
- Calendar view (monthly, color-coded, drag to reschedule)

#### 35. In-App Help (2 features)
- Video tutorials (30-sec per feature)
- Searchable FAQ

**Phase 3 Total: ~85 features**

---

## Grand Total: ~227 features (Phase 1-3)
## Plus 70+ features from edge case fixes and safety logic
## = ~300 total features

## Sprint Plan (Phase 1)

### Week 1-2: Foundation
- Database schema setup
- Authentication + roles
- Gym settings
- Onboarding wizard
- Basic UI shell (dashboard layout, navigation)

### Week 3-4: Members + Check-in
- Member CRUD
- Plans + status tracking
- QR code generation (rotating)
- QR check-in flow
- Offline check-in mode
- Attendance reports

### Week 5-6: Payments + WhatsApp
- Manual payment recording
- Revenue dashboard
- Outstanding dues
- WhatsApp Business API connection
- 8 automated messages
- 1/day cap logic
- Daily summary

### Week 7-8: Leads + Website
- Lead CRM (manual sources)
- Unified inbox
- Lead scoring + pipeline
- Trial management
- Duplicate detection
- Website (9 pages)
- Auto-sync logic
- Enquiry form → lead

### Week 9-10: Classes + Trainers + Dashboard
- Class creation + scheduling
- Member enrollment
- Class attendance
- Trainer management
- Trainer login (limited)
- Full owner dashboard
- 5 automation templates
- Global search
- Dark mode

### Week 11-12: Testing + Polish + Launch
- End-to-end testing
- ₹6,000 phone testing
- Hindi UI (basic)
- Bug fixes
- Onboarding wizard finalization
- Documentation
- Launch to first 10 gyms
