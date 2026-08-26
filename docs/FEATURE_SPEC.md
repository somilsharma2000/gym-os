# Gym OS — Complete Feature Specification

~300 features across 32 modules. Every feature has defined triggers, conditions, edge cases, and fixes.

---

## 1. WEBSITE (15 features)

### Pages
- Home, About, Membership/Pricing, Class Schedule, PT, Trainer Profiles, Transformations, Testimonials, Contact
- All pages auto-sync with Gym OS data (pricing, classes, trainers update within 5 minutes)

### Features
- Member login portal (plan, attendance, progress, diet, workout, referral code, streak)
- Online supplement store (optional, FSSAI-gated, off by default)
- Online membership enquiry (form → lead in CRM → owner calls — NO online payment)
- SEO optimized (local search ranking)
- Instagram feed embed
- WhatsApp chat widget
- Custom domain + custom branding (logo, colors, fonts)
- Mobile-first responsive design
- Google Analytics
- Google Maps embed + directions button
- Google reviews display (auto-synced)

### Website Sync Logic
- Owner changes anything in Gym OS → cache-clear signal sent → website updates within 5 minutes
- If website server down → changes queued, applied when server recovers
- If cache > 24 hours old → banner: "Some info may be outdated — please call {gym phone}"

---

## 2. MEMBER MANAGEMENT (16 features)

### Core
- Digital profiles: name, phone, email, DOB, address, emergency contact, join date, gender, occupation
- Membership plans: monthly, quarterly, half-yearly, annual, custom, day pass, week pass
- Plan status tracking (color-coded): Active 🟢 / Expiring 🟡 / Expired 🔴 / Frozen 🔵 / Not Started ⚪
- Status auto-updated daily at midnight (server time)

### Freeze System
- Member/staff requests freeze → owner approves → expiry extended by freeze days
- Max 15 days/quarter, 30 days/year (owner-configurable)
- Minimum 1 day, maximum 30 days per request
- Can't freeze expired members
- Owner can bulk freeze (gym closure) — doesn't double-count with individual freezes

### Family Accounts
- One primary + linked members, shared billing cycle
- Plans are per member, billing is per account
- Owner can split accounts (divorce, separation) — payment history stays with original

### Other
- Member history timeline (payments, check-ins, plan changes, notes)
- Search & filter (name, phone, status, expiry, area, trainer, join date)
- Bulk import from Excel (with validation + preview)
- Member upgrade/downgrade (owner-initiated, proration calculated)
- Photo capture from phone camera
- ID card generation (QR + photo + gym branding)
- Digital waivers & e-signature (no paper)
- Membership contracts (digital, signed on phone)
- Member notes & tags (VIP, Corporate, Student, Trial)
- Custom fields (max 10, text/number/date/dropdown/checkbox, no sensitive labels)

### Member Creation Logic
- Phone duplicate check (normalized: +91XXXXXXXXXX)
- Invalid phone (< 10 digits) → reject
- QR code generated (rotating, tied to member ID)
- Welcome WhatsApp sent if consent given
- Onboarding sequence starts from FIRST CHECK-IN, not join date

### Plan Status Edge Cases
- Member frozen during "expiring" → status = Frozen, expiry paused
- Member frozen during "expired" → stays Expired (can't freeze expired)
- Lifetime plan → always Active unless manually changed

### Upgrade/Downgrade Logic
- Owner selects new plan → proration calculated: "(days remaining / total days) × plan price = credit. New plan price - credit = balance due"
- Owner can adjust amount manually ("Actually charged ₹300, not ₹499")
- Downgrade takes effect from next billing cycle, not immediately
- Member gets WhatsApp confirmation after owner marks payment

### Custom Field Edge Cases
- Delete field with data → "This field has data for {X} members. [Delete] [Archive] [Cancel]"
- Archived field restored → data reappears
- Max 10 custom fields
- Blocked labels: "Aadhaar", "PAN", "password", "OTP", "CVV"

---

## 3. CHECK-IN & ACCESS (10 features)

- QR code check-in (rotating QR every 60 seconds, app-only, screenshot disabled)
- Live "who's in gym" real-time count
- Daily attendance report
- Check-in/out time tracking + visit duration
- First-time visitor alert
- Expired member block at check-in (with owner override: "Allow Today")
- Peak hours analytics
- No-show detection (7/14/30 days)
- Visit frequency per member
- Offline check-in (works without internet, syncs when online)

### QR Validation Logic
1. QR must come from member app (not screenshot)
2. QR hash valid and not expired (within 60 seconds)
3. Member must be Active
4. Expired → block, show staff: "Expired on {date}. [Renew] [Allow Today (owner override)]"
5. Frozen → block, show staff: "Frozen till {date}. [Unfreeze (owner override)] [Deny]"
6. Not Started → block: "Starts on {date}. [Allow Today (owner override)] [Deny]"

### Double Check-In Prevention
- 5-minute cooldown per QR scan
- If scanned within 5 min: "Already checked in at {time}. Checking out? [Yes/No]"
- Auto-checkout at gym closing time (owner sets hours)
- Duration = closing time - check-in time, marked "auto-checked out"
- If stay < 30 minutes → no loyalty points

### Offline Check-In Logic
- Check-ins stored locally (encrypted: name + QR data only, no phone numbers/payments)
- Device shows: "Offline Mode — {X} check-ins pending sync"
- When internet returns → sync oldest first
- Device stolen → owner marks "stolen" → remote wipe on next connection
- Two devices offline scan same member → keep earliest, discard duplicate (within 5-min window)

---

## 4. PAYMENTS & BILLING (10 features)

**No payment gateway. No UPI links. No GST. Owner handles all money directly.**

- Payment recording (owner enters manually: member, amount, method, date)
- Payment methods: Cash, UPI, Card, Bank, Cheque
- Payment status tracking (Pending → Paid [owner marks] → Receipt sent)
- Outstanding dues dashboard
- Expiring memberships alert (7/3/1 days → WhatsApp to MEMBER + owner)
- Revenue dashboard (today/week/month/year)
- Discount/coupon management
- Partial payment tracking
- Late fee (owner-configurable)
- Refund tracking (shown as negative revenue)

### Payment Flow
1. System alerts owner on WhatsApp: "Rahul's membership expires in 7 days. Plan: ₹999. Contact: +91XXXXXXXXXX"
2. System alerts member on WhatsApp: "Your membership expires on Aug 31. Please contact {Gym} to renew. 📞 {phone}"
3. Owner contacts member → member pays directly to owner (Google Pay, PhonePe, cash)
4. Owner opens dashboard → "Mark Payment" → selects member → amount auto-fills (editable) → selects method → saves
5. System sends WhatsApp receipt to member: "Payment received: ₹999. Plan: Monthly. Valid till: Sep 30. 💪"
6. Member status changes to Active, all pending reminders auto-cancel

### Payment Edge Cases
- Amount differs from plan price → "Plan: ₹999. Entered: ₹899. Difference: ₹100. Reason? [Discount] [Partial] [Custom] [No reason]"
- Double payment same month → "Already has payment this month ({date}, ₹{amount}). Add another? [Yes] [Cancel]"
- ₹0 entered → "Cannot be zero. [Complimentary Extension] [Enter Amount]"
- Complimentary extension → no payment recorded, expiry extended, logged "Complimentary — by {owner}"
- Owner can send own UPI ID via WhatsApp: "Your fee: ₹999. Pay to: {owner's UPI ID}. Let us know once paid."
- UPI ID change → system verifies format, old requests show "expired"

### Outstanding Dues Logic
- Dues = Members with Expired/Expiring status AND no payment for current period
- Dashboard: "Outstanding: ₹{total} from {X} members"
- Owner can tap → "Send WhatsApp Reminder" → member gets: "Your membership expired on {date}. Please renew. 📞 {phone}"
- Complimentary extensions excluded from dues

### Refund Logic
- Owner marks refund: member, amount, reason (cancellation/overcharge/request/other)
- Refund shown as negative revenue in P&L
- Plan cancellation refund → membership set to Expired immediately
- Refund > total payments this year → "Exceeds total. Previous year refund? [Yes] [No] [Cancel]"

---

## 5. WHATSAPP AUTOMATION (36 features)

### Automated Member Messages (18 triggers)
1. New member welcome (immediately on creation)
2. Renewal reminder T-7 (to member + owner)
3. Renewal reminder T-3 (to member)
4. Renewal reminder T-1 (to member)
5. Expiry day T-0 (to member)
6. Payment due reminder T+1 (to owner: "{X} expired, not renewed — [Call]")
7. Payment received confirmation (after owner marks paid)
8. Birthday wish (10 AM, active members only)
9. Absent alert 7 days
10. Absent alert 14 days
11. We miss you 30 days
12. Class reminder (1 hour before)
13. Referral reward notification (after 30-day rule met)
14. Plan upgrade/renewal confirmation
15. Monthly progress report (1st of month, 9 AM)
16. Freeze confirmation
17. Membership milestone (100th visit, 1 year)
18. Loyalty points expiry warning (7 days before 12-month expiry)

### Owner Messages (3 triggers)
19. Daily summary (9 PM): check-ins, revenue, new members, trials, no-shows, pending payments, expiring members
20. Weekly summary (Sunday): week overview, trends, staff performance
21. Revenue leak alert (daily): expired still attending, unpaid dues, trial overstayers

### Lead Capture (4 features)
22. New WhatsApp conversation → auto-lead in CRM
23. Structured auto-reply menu (not AI free-form: "1️⃣ Pricing 2️⃣ Trial 3️⃣ Location 4️⃣ Talk to team")
24. Lead-to-conversation history linked
25. Keyword-based auto-reply (if DM contains "price" → pricing info; "trial" → booking link)

### Broadcast (5 features)
26. Broadcast to all members or segments (expiring, absent, active, new, custom)
27. Broadcast scheduling (future date/time)
28. Broadcast performance tracking (sent, delivered, read, response rate)
29. Max 1 broadcast per week (owner-configurable, can reduce not increase)
30. Broadcast uses Meta-approved marketing templates only

### Inbox (5 features)
31. WhatsApp inbox (read/reply inside Gym OS)
32. Unified inbox (WhatsApp + Email + SMS sorted by priority)
33. Conversation tags (hot lead, follow-up, complaint, general)
34. Conversation search (by name, phone, keyword)
35. Unread message counter on dashboard

### Safety (6 features)
36. Consent & opt-out (reply "STOP" → marketing paused, utility still active)
37. 90-day number verification ("Reply YES to confirm" — no reply in 7 days → pause + alert owner)
38. Daily message cap: max 1 automated message per member per day
39. Smart send-time (optimal delivery based on engagement)
40. Quiet hours (no automated messages 10 PM - 8 AM)
41. Language auto-detect (Hindi/English)
42. Message delivery tracking (sent/delivered/read)
43. Failed message retry (after 2 hours, max 3 retries)
44. WhatsApp status indicator on dashboard (green = connected, red = disconnected)
45. 30+ pre-approved templates (renewal, birthday, welcome, offer, reminder, follow-up, class, expiry, progress, milestone)

### Daily Message Cap Logic
**Priority order (highest to lowest):**
1. Payment due → 2. Expiry → 3. Absent → 4. Birthday → 5. Class reminder → 6. Progress report → 7. Milestone → 8. Win-back → 9. NPS → 10. Points expiry

**Combine rule:** Multiple triggers same day → combine into 1 message
Example: Birthday + Expiring in 3 days → "Happy Birthday Rahul! 🎂 Your membership also expires in 3 days. Contact us to renew. 📞 {phone}"

**Exceptions (not capped):**
- Owner manual messages
- Broadcasts (separate Meta limit)
- Number verification (system message)
- STOP/opt-out confirmation

### STOP/Opt-Out Logic
- Member replies "STOP" → marketing paused (broadcasts, promotional offers)
- Utility messages still allowed (renewal, receipts, class reminders) — per Meta policy
- Member replies "START" → marketing resumes
- Owner can still send manual messages with warning: "Member opted out of marketing. Send anyway? [Yes] [Cancel]"

---

## 6. UNIFIED LEAD ENGINE (25 features)

### 13 Lead Sources (All In One Inbox)
1. **Instagram DMs** → auto-lead (within seconds, structured auto-reply menu)
2. **Instagram Comments** → keyword detection (price, fees, join, trial, etc.) → auto-lead
3. **Instagram Story Replies** → auto-lead
4. **Website Forms** → instant lead (consent checkbox UNTICKED by default)
5. **Google Business Profile Messages** → auto-lead (structured auto-reply)
6. **WhatsApp Messages** → auto-lead + structured auto-reply menu
7. **Walk-in** → manual entry (30 seconds)
8. **Phone Call** → manual entry with notes
9. **Referral** → auto-lead → auto-converts to member (30-day rule, max 10/year)
10. **Abandoned Form Recovery** → consent UNTICKED by default — only if ticked + phone entered
11. **Abandoned Booking Recovery** → same consent rule
12. **Google Review to Lead** → 5-star reviewer → warm lead (owner approves)
13. **JustDial/IndiaMART** → manual or API import

### Lead Inbox
- ALL leads from ALL sources appear in ONE inbox
- Sorted by: Hot leads first → New leads → Follow-ups due → Warm leads
- No auto-assignment — owner and any staff with access can handle any lead
- Owner gets daily reminder if leads sitting uncontacted
- Leads untouched 7+ days shown in red

### Lead Scoring (0-100)
**Factors:**
- Source quality: Referral (90) > Walk-in (80) > Website (70) > Instagram (60) > Google (55) > Phone (50) > Abandoned (40)
- Engagement: Replied (+10), Asked pricing (+15), Asked trial (+20), Called gym (+25), Visited (+30)
- Recency: < 24 hrs (+10), < 3 days (+5), < 7 days (0), 14+ days (-10), 30+ days (-20)
- Response: Owner called (+15), Lead called back (+20), Trial done (+30)

**Temperature:**
- Hot: 75-100 (call immediately)
- Warm: 40-74 (nurture sequence)
- Cold: 0-39 (occasional check-in)

- AI lead scoring with confidence score
- Lead temperature auto-updated on every new event
- Lead response-time tracking (timer, alert if 15+ min uncontacted)
- Lead source attribution (which source brought this lead)
- Lead source ROI (which converts best)

### Lead Pipeline
**Stages:** New → Contacted → Trial Booked → Trial Done → Following Up → Won/Lost
- Can't skip stages (except: walk-in direct join → New → Won, logged)
- Can go backward (Following Up → Trial Booked for 2nd trial)
- Lost leads can be reactivated (Lost → New) if they reach out again
- Following Up 60+ days no activity → suggest "Mark as Lost?"

### Other Lead Features
- Lead qualification (structured intake questions)
- Auto follow-up reminders
- Trial management (schedule, track, convert)
- Bulk WhatsApp to leads
- Lead nurturing sequences (educational → trial → close)
- Hot lead detection (14-day activity window only)
- Lost lead analysis with reason + win-back schedule
- Auto-create member on conversion (pre-fills from lead data)
- Duplicate detection (phone-based merge across all sources)

### Duplicate Lead Logic
- Match keys: phone number (primary), email, Instagram handle
- Match pool: all leads + all members
- On match: don't create new, update existing lead with new source
- Same phone, different name → "Same person? [Merge] [Create Separate]"
- Phone lead + Instagram handle only (no phone) → can't auto-merge → "Possibly duplicate — verify"

### Trial Management
**Booking:**
- Lead or owner/staff books trial: date + time slot
- Slot capacity: max 2 per slot (owner-configurable)
- Once full → "Full — next: {slot}"

**Reminders:**
- T-24h: "Your free trial at {Gym} is tomorrow at {time}. 📍 {address} 📞 {phone}"
- T-1h: "Trial starts in 1 hour! See you at {Gym}. 📍 {address}"

**No-Show:**
- Trial time + 30 min passed, not checked in → "No-Show"
- Auto-WhatsApp: "Sorry we missed you! Reschedule? 📅 {link} 📞 {phone}"
- T+24h: "Last chance for free trial! Book: {link}"
- T+48h: Lead → "Following Up" tag "No-Show", no more auto-messages

**Conversion:**
- Owner converts with one click → member form pre-filled from lead
- Trial-to-membership offer (owner-approved): "10% off if you join today!"

**Edge Cases:**
- Lead books trial but is existing member → "This number belongs to member {Name}. [Cancel Trial] [Continue]"
- 2nd trial after no-show → allowed, owner notified: "{Name} booking 2nd trial. 1st: no-show"
- Trial slot on gym closure day → "Gym closed. Choose another date."

---

## 7. UNIFIED INBOX (5 features)

- WhatsApp inbox (read/reply inside Gym OS)
- Email inbox (read/reply inside Gym OS)
- SMS inbox (read/reply inside Gym OS)
- Unified view (WhatsApp + Email + SMS sorted by priority: unread → hot leads → warm → members → cold)
- Notification center (all alerts in one place)

### Conversation Locking
- Staff opens conversation to reply → others see "Being handled by {Name}"
- Others can: [View Read Only] [Take Over (notifies original staff)]
- Lock auto-releases after 15 min inactivity
- Owner can always override any lock

---

## 8. BOOKING & SALES (18 features)

- Trial booking (website/app/phone)
- Trial reminders (auto WhatsApp)
- No-show detection (trial + class)
- No-show recovery (auto WhatsApp: "Sorry we missed you! Reschedule?")
- Post-trial follow-up (Day 1: "How was it?" Day 3: "Ready to join?")
- Trial-to-membership offer (owner-approved)
- PT booking (from member app)
- Class booking (from app/website)
- Calendar & availability view
- Waitlist with auto-notify (1-hour min notice, 30-min confirm window)
- Booking confirmation (auto WhatsApp)
- Sales pipeline (Quote → Negotiation → Commitment → Close)
- Sales tasks (call X, send quote, follow up on Y)
- Lost lead recovery (auto win-back schedule)
- Sales performance tracking (per staff)
- Small group PT (2-8 members shared)
- PT session packaging (sell 10 upfront, credit system)
- PT revenue tracking per trainer

### Waitlist Logic
- Class full → member joins waitlist (position 1, 2, 3...)
- Spot opens > 1 hour before class → auto-notify first person: "Spot opened! Confirm: [Yes/No]"
- No confirmation in 30 min → move to next person
- Spot opens < 1 hour before class → owner decides: [Notify Waitlist] [Ignore]
- Waitlist cleared after class starts

### PT Session Logic
**Booking:** Member books → trainer notified → [Confirm] [Reschedule]
**Logging:** Trainer logs within 24 hours. After 24h → can't add (prevents disputes). 9 PM reminder if unlogged.
**Credits:** Buy 10 → 10 credits. 1 per session. Cancel < 4 hrs = credit deducted (no-show penalty). Cancel by trainer = credit NOT deducted.
**Edge Cases:**
- 0 credits, tries to book → "No sessions remaining. Contact gym. 📞 {phone}"
- Trainer leaves → credits transfer to new trainer (gym-owned, shown at purchase)
- Dispute → system shows: "Sessions logged: {X}. Details: {list}. [Report Discrepancy]"

### Sales Pipeline Logic
- Quote Sent → Negotiation → Commitment → Close
- All discounts/special pricing logged (who, how much, why)
- Discount > 30% → "Reason? [Loyalty] [Referral] [Corporate] [Student] [Other]"
- Commitment 14+ days no payment → owner notified: "Call? [Yes] [Mark Lost]"

---

## 9. CLASS & SCHEDULING (11 features)

- Class creation (name, time, day, trainer, capacity, intensity)
- Recurring schedules (daily, weekly, bi-weekly, monthly, custom)
- Member enrollment
- Waitlist with auto-notify
- Class attendance tracking (trainer marks, QR cross-check)
- Class cancellation auto-notify (> 1 hour: auto WhatsApp; < 1 hour: owner decides)
- Capacity tracking (live count)
- Class popularity report
- Class revenue tracking
- Online class booking (app/website)
- Seasonal class timing (owner manually adjusts)

### Class Attendance Cross-Check
- Member enrolled but no QR check-in within 2 hours of class → class no-show
- If QR check-in exists but trainer marked absent → alert owner: "Checked in but marked absent. [Mark Present]"
- If trainer marked present but no QR → "No QR check-in. Were they in class? [Present] [Absent]"

### Class Cancellation Edge Cases
- Cancel recurring entirely → "Past instances archived. Future cancelled. {X} members notified. [Confirm]"
- Members already at gym when cancelled → system still sends cancellation WhatsApp

---

## 10. TRAINER MANAGEMENT (10 features)

- Trainer profiles (name, phone, specialty, salary, photo, status)
- Member-trainer assignment
- Trainer performance dashboard (members, attendance, revenue, rating)
- Trainer schedule (weekly view)
- Commission tracking (auto-calculated based on owner-set rules)
- Trainer login (limited access — own members only)
- Trainer payroll calculation (salary + commission + bonus - deductions)
- Trainer rating by members (1-5 stars)
- Trainer scheduling per trainer
- Trainer revenue tracking

### Commission Logic
- Owner sets rule: per member/month OR percentage of member's plan
- Member switches trainer mid-month → split: (days/total) × monthly commission each
- Frozen member → no commission during freeze
- Trial member → no commission during trial
- Rate change → "New rate from next month. This month uses old rate."

### Trainer Access
**Can see:** assigned members (profiles, plans, attendance, progress), own schedule, own PT sessions, member photos (if permission given), own performance
**Cannot see:** other trainers' members, payments/revenue/expenses, other trainers' salary, leads (unless granted), owner dashboard, other staff performance

---

## 11. DIET & WORKOUT PLANS (8 features)

- Diet plan creation (calories, macros, meals, portions)
- Diet plan auto-send on WhatsApp + member app
- Diet plan templates (weight loss, muscle gain, keto, vegetarian)
- Workout plan creation (exercises, sets, reps, rest, days)
- Workout plan auto-send on WhatsApp + member app
- Workout plan templates (beginner, push/pull/legs, upper/lower)
- Plan update auto-notification
- Mandatory disclaimer on every plan

### Plan Creation Logic
- System shows trainer member's health questionnaire responses BEFORE creating plan
- If member reported health issue → warning: "⚠️ Member reported: {issue}. Avoid: {related items}. [I've reviewed]"
- Trainer MUST acknowledge before creating plan
- Disclaimer auto-appended: "This plan is created by your trainer at {Gym}, not a medical professional. Consult your doctor before starting."
- If no questionnaire filled → "Member hasn't completed health questionnaire. [Ask member] [Create anyway (acknowledge risk)]"
- Plan updated 3x in one day → only latest version's notification sent (1/day cap)

---

## 12. MEMBER PROGRESS TRACKING (10 features)

- Body measurements (weight, chest, waist, arms, thighs, shoulders)
- Progress photos (permission-based, member toggles access, watermarked)
- Workout logging
- Personal records (PRs) tracking
- Fitness goal tracking (progress %)
- Monthly progress report auto-send on WhatsApp
- BMI calculator
- Body fat % tracker
- Before/after comparison (side-by-side)
- Body measurement charts (multi-metric with context notes)

### Measurement Validation
- Weight: 20-200 kg (outside → "Are you sure? [Yes] [Fix]")
- Body fat: 3-60% (outside → confirm)
- Measurements: 30-200 cm (outside → confirm)
- > 20% change from last entry → "Previous: {old}. New: {new}. {X}% change — correct? [Yes] [Fix]"

### Progress Photo Security
- Permission default: OFF (member must explicitly enable)
- Watermark auto-applied: member name + date + gym name
- Screenshot disabled in member app (flagged to OS)
- Photos encrypted in storage
- Access logged (who viewed, when)
- No bulk browsing (one member at a time)
- Never shared externally without separate consent
- Permission revoked → trainer can't see new uploads; previously viewed are watermarked

### Monthly Progress Report
- Sent 1st of month, 9 AM
- Only to members with ≥ 1 check-in in last 30 days
- Content: check-ins count, classes attended, measurements (current vs last month), mini chart, trainer note (if any), goal progress, streak
- If no measurements → skip measurement section
- If 0 check-ins → skip (inactive member, no awkward report)

---

## 13. AI INTELLIGENCE (8 features)

- AI churn prediction (confidence score + suggested action, owner approves)
- AI revenue forecasting (range shown, never single number, disclaimer)
- AI attendance pattern analysis (historical, not predictions)
- AI member segmentation (active/declining/at-risk/new)
- AI dynamic pricing (shows competitor data owner entered, suggests range)
- AI daily business brief (WhatsApp: what happened, what to do)
- AI weekly business review (strategic summary)
- AI "What Should I Do Today?" (prioritized action list, max 3, no repeats)

### Churn Prediction
**Min data:** 90 days of operation
**Factors:** attendance frequency (declining), days since last visit (> 14), payment history (late), plan type (monthly = higher risk), engagement score (low), class attendance (stopped), WhatsApp engagement (not reading)
**Output:** Risk level (Low/Medium/High) + confidence (0-100) + reason + suggested action
**Rule:** Suggestion only. Owner approves before any action. No auto-messages.
**Edge Cases:**
- Frozen/Not Started/New (< 30 days) → excluded
- < 90 days data → "Available after 90 days"
- Owner dismisses → won't reappear until underlying data changes

### Revenue Forecast
**Min data:** 6 months
**Method:** Weighted average (recent months weighted higher)
**Output:** Range "₹{low} - ₹{high}" + "Estimate, not guarantee. Do not make financial decisions solely based on this."
**Edge Cases:**
- One-time spike excluded (> 2 standard deviations)
- Closed month excluded from calculation
- 50%+ drop last month → wide range + "High variance — revenue unstable"

### AI "What Should I Do Today?"
**Max 3 suggestions per day**
**Priority:** Hot leads uncontacted 24+ hrs → At-risk members → Expiring this week → Pending payments → Trials today → Unconverted trials
**Rules:**
- Once completed or dismissed → removed, next may appear
- Dismissed won't reappear until situation changes
- Owner who consistently dismisses a type → system stops showing that type
- Nothing to suggest → "You're all caught up! 🎉"

### Dynamic Pricing
**Input:** Owner enters competitor prices manually (up to 5)
**Output:** "Your ₹999 vs competitors ₹800/₹1,200/₹1,000. Above average (₹987). Position: Premium."
**Rules:** Suggestion only. No auto-price changes. Owner decides.

---

## 14. AUTOMATION ENGINE (20 templates + logs)

### 20 Pre-Built Templates
1. **Renewal Boost** — T-7/3/1/0 reminders + T+1/3/7 owner alerts
2. **Win-Back** — T+30/60/90 (owner approves each)
3. **Onboarding** — Day 1/3/7/30 from FIRST CHECK-IN (adaptive: checks activity before sending)
4. **At-Risk Save** — AI flags → owner approves → owner selects message → sent
5. **Lead Nurture** — Day 0/2/5/7/14 (stops if trial booked or "not interested")
6. **Birthday** — 10 AM, active members, combined if same day as other triggers
7. **Class Fill** — Waitlist auto-notify (1-hour min notice)
8. **Revenue Leak Fix** — Daily check, flag to owner only, no auto-block
9. **Failed Payment** — Show on dashboard → owner clicks "Send Reminder"
10. **Cancel/Save** — Owner-approved, 1 per 12 months, no auto-send
11. **Loyalty Points** — Auto-earn with caps, auto-redeem, expiry warning
12. **Referral** — 30-day rule, max 10/year, auto-track, auto-reward
13. **Google Review Request** — ALL members (no gating), 1 per 90 days
14. **NPS Survey** — Monthly, promoter/detractor routing to owner
15. **Holiday/Seasonal** — Owner manually triggers (no auto)
16. **Upsell** — Monthly → quarterly → annual suggestion, owner approves
17. **Expiry Warning Chain** — 7/3/1/0 days, max 1/day
18. **Payment Confirmation** — After owner marks paid, auto receipt
19. **Member Milestone** — 100th visit, 1 year → auto WhatsApp
20. **Progress Report** — Monthly auto-send with multi-metric context

### Automation Controls
- Owner can enable/disable any template
- Owner can edit timing (e.g., 7-day → 10-day reminder)
- Automation logs (what ran, when, result)
- No custom triggers, conditions, branching, or visual builder

### Cancel/Save Exploit-Proof
- 1 save offer per member per 12 months
- 2nd cancellation within 12 months → no offer, straight to owner call
- Every save offer requires owner approval
- Tracked: "Save offer sent on {date}. Next eligible: {date+12 months}"

### Onboarding Adaptive Logic
- Day 3: if checked in again → "3 days! Building a habit! 🔥" / if not → "Haven't seen you in 2 days. Come today! 💪"
- Day 7: if attended class → "Try {suggested class} next!" / if not → "Try a class this week! 📅 {link}"
- Each step checks activity before sending
- Frozen → sequence pauses, resumes when unfrozen
- Cancelled → sequence stops

### Revenue Leak Detection
**Daily check at midnight:**
1. Expired members who checked in today → flag (not auto-block)
2. Plan price doesn't match payment → flag
3. Trial members exceeding trial period → flag
4. Paid but expiry not extended → flag

**Action:** All flags → daily summary to owner: "{X} issues. [Review All]"
**Per flag:** "{Name} — {issue} — potential loss: ₹{amount} — [Fix] [Dismiss — reason: {reason}]"
**Dismissed flags:** Don't reappear for 7 days, then rechecked
**No auto-action. Owner must manually fix or dismiss.**

---

## 15. LOYALTY & GAMIFICATION (7 features)

- Points system: 10/visit (30+ min), 500/referral (after 30 days), 100/5-day streak, 1000/30-day streak, 5/class, 2000/goal
- Redeem points (owner-configurable rewards)
- Streak tracking (15-day streak 🔥)
- Challenges (owner-created, auto-tracked, gym closure days excluded)
- Achievement badges (100 Visits, 1 Year, Referral King, 50 Sessions)
- Points cap: max 10/day from check-ins, 500/month total
- Points expiry: 12 months, warning 7 days before

### Streak Logic
- Consecutive days with ≥ 1 check-in (30+ min stay)
- Gym closure days → streak paused (not broken), resumes when gym opens
- Frozen → streak resets

### Challenge Logic
- "Come 20 days in 30 days → 1 month free"
- Only gym open days count (closures extend window)
- Live leaderboard for owner
- Member sees progress in app: "15/20 days ✅ 5 to go!"
- Member joins mid-challenge → pro-rated target

---

## 16. EXPENSE & P&L (9 features)

- Expense categories (rent, electricity, water, salaries, equipment, marketing, maintenance, misc, custom)
- Recurring expenses auto-record (editable future, locked past)
- One-time expenses
- P&L statement (revenue - refunds - expenses = profit)
- Profit margin tracking
- Expense trend alerts
- Budget vs actual
- Cash flow statement
- Tax summary report (for CA, exportable — NOT "GST filing")

### P&L Formula
- Total Revenue = sum of payments "Paid" in period
- Total Refunds = sum of refunds (negative revenue)
- Net Revenue = Revenue - Refunds
- Total Expenses = sum of expenses in period
- Profit = Net Revenue - Expenses
- Profit Margin = (Profit / Net Revenue) × 100

### Recurring Expense Edit
- Change → "Apply to: [Future only] [This and future] [All including past]"
- Past locked by default (greyed out with warning)
- Backdate → "Add past recurring: [Select months] [Amount]"

---

## 17. POS / RETAIL (7 features — optional, off by default)

- Product catalog (owner enables)
- Inventory management (auto-deduct on sale)
- Low-stock alerts
- Sell to members & walk-ins
- Product sales report
- Product categories
- Bundle offers

---

## 18. MARKETING & ANALYTICS (12 features)

- WhatsApp broadcasts (segments: all/expiring/absent/new/custom)
- Email campaigns
- Promotional offer broadcasts (owner-created)
- Targeted segments
- Campaign performance tracking
- Instagram integration (lead capture from DMs + comments)
- Website analytics
- Marketing attribution (basic: lead source tracking)
- Campaign ROI (₹X spent → Y members → ₹Z revenue)
- CAC (per channel)
- LTV (member lifetime value)
- LTV:CAC ratio

---

## 19. REPORTS & ANALYTICS (12 features)

- Revenue reports (daily/weekly/monthly/yearly)
- Member growth chart
- Attendance trends
- Churn rate
- Lead conversion funnel
- Trainer performance
- Expense breakdown
- P&L statement
- Custom date range
- Export to PDF/Excel
- Member lifetime value
- Occupancy heat map

---

## 20. OWNER DASHBOARD (12 features)

- Today's overview (check-ins, revenue, new members, trials, no-shows)
- Hot leads (AI-flagged, 14-day window, [Call Now] button)
- Follow-ups due today
- Trials today
- Needs attention (expiring, pending payments, at-risk, revenue-at-risk)
- This month summary (revenue, new, churn, profit, conversion)
- AI "What Should I Do Today?" (max 3, no repeats until dismissed)
- Staff performance
- Marketing performance
- Conversion funnel
- Comparison mode (this month vs last month — only if data exists)
- Goal tracking (revenue goal progress bar)
- Quick actions (add member, mark payment, send broadcast, call lead, book trial)

### Dashboard Load Priority
1. Check-in count + revenue + hot leads (instant)
2. Follow-ups + needs attention (instant)
3. Charts + reports (lazy load)
4. AI suggestions (lazy load after main data)
- Slow connection → skeleton loading (grey boxes)
- ₹6,000 phone → simplified view (fewer charts, essential data)

### Comparison Mode
- Revenue: ₹{current} vs ₹{previous} → {+/- X%}
- No data for period → "No data for {period}. Available after {date}."
- Current period incomplete → "Note: incomplete ({X} of {Y} days)."

---

## 21. STAFF & OPERATIONS (14 features)

- Staff management (profiles, roles, shifts)
- 5 predefined roles: owner, manager, trainer, receptionist, member
- Lead assignment (manual, no auto-assignment)
- Staff tasks
- Staff performance KPIs
- Staff attendance (check-in/out, working hours)
- Staff shifts (morning/evening, owner-set)
- Staff performance review reports
- Trainer management
- Trainer scheduling
- Trainer revenue
- Digital waivers
- E-signatures
- QR check-in
- Attendance analytics
- Equipment maintenance (registry, schedule, log)
- Maintenance alerts
- Inventory management

### Role Permissions
**Owner:** Full access. Export data. Manage staff. Change settings. Record payments. Exempt from auto-login expiry. 2FA required.
**Manager:** Manage members, leads, classes. View reports. Send broadcasts (owner approves marketing). Cannot: record payments, change settings, export data, manage staff, delete.
**Trainer:** View assigned members only. Create plans. Log PT sessions. Mark class attendance. Cannot: view payments, other trainers' members, leads, reports, settings.
**Receptionist:** Add/edit members (basic info). QR scan. Create leads (walk-in/phone). Book trials. View schedule. Cannot: payments, plans, trainers, reports, broadcasts, settings, delete.
**Member:** View own profile/plan/attendance/progress. Book/cancel classes. View plans. View payment history (read-only). Request upgrade (owner approves). Message trainer. Toggle photo permission.

### Staff Auto-Suspend
- Staff (NOT owner) no login in 7 days → suspended → owner notified
- Staff on approved leave → countdown paused
- Owner can reactivate or deactivate permanently
- Suspended staff's leads → shown as "Unassigned" in inbox

---

## 22. MEMBER EXPERIENCE (13 features)

- Member portal (plan, attendance, progress, diet, workout, referral code, streak)
- Web app (browser-based, mobile-optimized — no native app initially)
- Digital membership card (QR + photo + branding)
- Push notifications (via web app)
- Workout plans (from trainer)
- Progress tracking (visible in app)
- Goal tracking (visible in app)
- Personalised challenges
- Member self-service (view info, book/cancel classes, view invoices, REQUEST upgrade — owner approves)
- Member-to-trainer in-app messaging
- Dark mode
- Built-in workout timer
- Emergency SOS (direct call to front desk — speed dial, not alert system)

### Member Self-Service Rules
- Members CANNOT make payments or change plans on their own
- Member taps "Request Upgrade" → owner gets notification → [Approve] [Send UPI Details] [Call]
- Owner collects payment → marks paid → plan changes → member notified
- No accidental charges possible

---

## 23. FITNESS ASSESSMENT (5 features)

- Initial health questionnaire (injuries, conditions, goals, experience)
- Baseline measurements (weight, body fat, fitness tests)
- Periodic re-assessment (auto-reminder every 3 months)
- Assessment report (progress)
- Signed declaration ("I confirm this information is accurate")

---

## 24. ENGAGEMENT & CAPACITY (5 features)

- Member engagement score (0-100, auto-calculated daily)
- Engagement segments (Highly Engaged 70-100 / Moderate 40-69 / Low/At Risk 0-39)
- Engagement drop alert
- Live capacity count
- Occupancy heat map

### Engagement Score Formula
- Attendance frequency (40%): 3+ visits/week = 40, 2 = 25, 1 = 15, < 1 = 5
- Recency (30%): < 3 days = 30, 3-7 = 20, 7-14 = 10, 14+ = 0
- Plan tenure (15%): 12+ months = 15, 6-12 = 10, 3-6 = 7, < 3 = 5
- Class participation (15%): 4+ = 15, 2-3 = 10, 1 = 5, 0 = 0

### Live Capacity
- Owner: "47 in gym / 100 capacity (47%)"
- Member app: "47% full" (> 80% → "Busy — consider coming later")
- Colors: < 50% green, 50-80% yellow, 80%+ red
- Over capacity → "55/50 (OVER ⚠️)" alert to owner

---

## 25. MEMBER FEEDBACK & NPS (6 features)

- Monthly NPS survey (1-10)
- Promoter/detractor segmentation (owner sees results)
- Auto Google review request for ALL members (no gating)
- Owner notified of new reviews (owner replies manually)
- Quarterly feedback survey
- NPS dashboard with trend

### NPS Logic
- Sent 1st of month to active members 30+ days
- 9-10 → "Leave a Google review? ⭐ {link}" (next day)
- 7-8 → "Thanks! Always improving. 💪"
- 0-6 → Owner alerted: "{Name} gave {score}. [Call Now] [Send Message]"
- 1 per member per 90 days
- Not anonymous (gym's own survey)

---

## 26. INDIA-SPECIFIC (4 features)

- Offline mode (check-in only, read-only member data, syncs when online)
- Festival-based offers (owner manually creates — no auto)
- Regional language SMS (Hindi, Marathi, Gujarati, Tamil, Telugu)
- Low-end phone optimization (₹6,000 phones, 2G/3G, 2 sec load)

### Offline SMS Language Logic
- Test SMS to owner before sending regional: "Test in Hindi — display correct? [Yes/No]"
- If No → fall back to English for that language
- Never send "?????" to members

---

## 27. SECURITY & PERMISSIONS (8 features)

- 5 predefined roles (no custom roles)
- Multiple logins (1/3/5 by plan)
- Basic action log (login + member create/edit/delete)
- Auto daily backup
- Data encryption
- Data export (owner only, staff can request)
- Two-factor authentication (owner, with backup codes)
- Auto-login expiry (staff 7 days no activity → suspend; owner exempt)

### 2FA Logic
- Owner: OTP to phone + 10 backup codes
- 3 failed OTP → locked 15 min
- Loses phone + backup codes → email verification → support resets (24-hour delay)
- Staff: username + password (2FA optional for manager, not default)

### Data Export
- Owner: direct export (Excel/CSV/PDF, encrypted, password separate)
- Staff: request → owner approves/denies → link expires 24 hrs
- Export logged: who, when, what
- Large export (500+) → background process, owner notified when ready

---

## 28. MULTI-LANGUAGE (3 features)

- English (full system)
- Hindi (full system — shipped simultaneously with English, no feature ships without both)
- Auto language detection for WhatsApp

---

## 29. INTEGRATIONS (7 features)

- WhatsApp Business API (36 features — see Section 5)
- Google Maps (embed, directions, member address auto-fill, distance calc, area distribution)
- Google Business Profile (22 features — sync hours/photos/schedule, reviews, messages, posts, insights)
- Instagram (22 features — DM lead capture, comment-to-lead, story replies, inbox, auto-reply)
- Email/SMTP
- Google Calendar (trainer schedule sync)
- Outlook Calendar

### Integration Health
- All integrations checked daily
- 7 days before token expiry → "Reconnect {service} [Link]"
- Expired → red dot on dashboard + "{Service} disconnected — reconnect [Link]"
- If ALL integrations down → "External services down. Core system: ✅ Working."
- Gym OS core works WITHOUT any external integration

---

## 30. INFRASTRUCTURE (8 features)

- Single-branch support (multi-branch deferred)
- Custom domain
- Custom branding (logo, colors, fonts, invoice design)
- Global search (one bar: members, leads, staff, classes, payments)
- Calendar view (monthly, color-coded, drag to reschedule)
- Save as PDF (invoices, reports, ID cards)
- Bulk operations (bulk WhatsApp, freeze, update, export)
- Dark mode (owner dashboard)

### Global Search
- Min 2 characters, instant (debounced 300ms)
- Grouped: "Members: 3 | Leads: 1 | Staff: 0 | Classes: 1"
- Top 3 per category, "View all" expands
- No results → "No results for '{query}'. Try different spelling."

---

## 31. SAFETY (3 features)

- Emergency SOS (direct call to front desk — speed dial)
- Incident reporting (staff: injury, equipment damage, conflict)
- First aid log

---

## 32. ONBOARDING & SETUP (5 features)

- Guided onboarding wizard (10-step setup, live in 30 min)
- Data migration from competitors (FitGymSoftware, MyGymDesk, Easy Gym, Excel)
- In-app help & video tutorials (30-sec videos per feature)
- Searchable FAQ
- WhatsApp support from app

### Onboarding Wizard Steps
1. Gym Info (name, address, phone, WhatsApp, hours, logo)
2. Plans (create at least 1)
3. Staff (add yourself as owner)
4. Members (import or skip)
5. Classes (create or skip)
6. Trainers (add or skip)
7. WhatsApp (connect or skip)
8. Integrations (Instagram, Google — connect or skip)
9. Automations (enable/disable templates)
10. Preview → "Ready! [Open Dashboard]"

### Bulk Import Logic
- Preview: "Found 150 rows. 12 duplicates. 5 missing required. 3 invalid phones. [Fix] [Import (skip invalid)] [Cancel]"
- Phone auto-normalized (+91XXXXXXXXXX)
- Ambiguous dates → "Is 12/03/2024 March 12 or December 3?"
- No silent import — always preview first

---

## CRASH RESILIENCE

### If Gym OS Server Goes Down
- QR check-in: works offline (local storage, syncs when back)
- Payments: owner records on paper, enters when back
- WhatsApp: messages queued, sent when back (scheduled messages skipped if too late)
- Website: cached data (24 hrs), then "maintenance" banner
- Instagram/Google: lead capture paused, resumes when back
- Member app: cached data (view plans/progress), can't update

### Recovery
- Queued actions process in order: check-ins → payments → WhatsApp → lead imports
- Owner notified: "System down {X} hours. All synced. {Y} check-ins, {Z} payments recovered."
- Server down 24+ hrs → check-in devices may lose oldest unsynced (encrypted, no sensitive data)

---

## TOTAL: ~300 FEATURES ACROSS 32 MODULES
## EDGE CASES HANDLED: 82
## FEATURES REMOVED: 48
## LIABILITY: ZERO (payments, GST, medical, privacy, AI)
