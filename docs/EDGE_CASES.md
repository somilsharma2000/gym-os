# Gym OS — Edge Cases & Fixes (82 total)

All edge cases identified, with specific fixes built into the feature logic.

---

## Check-In (5 cases)

### 1. QR Code Sharing (Member screenshots QR → sends to friend)
**Fix:** Rotating QR (changes every 60 seconds). Screenshot useless after 1 minute. QR only works from inside member app, not from gallery. Screenshot disabled in app.

### 2. Double Check-In (Member scans twice in 10 seconds)
**Fix:** 5-minute cooldown per scan. "Already checked in at {time}. Checking out? [Yes/No]"

### 3. Member Never Checks Out
**Fix:** Auto-checkout at gym closing time. Duration = closing - check-in. Marked "auto-checked out." If < 30 min, no loyalty points.

### 4. Offline Check-In Sync Conflict
**Fix:** Offline = check-in only (write), member data = read-only. No offline edits to payments/plans. Two devices scan same member → keep earliest, discard duplicate (5-min window).

### 5. Device Stolen
**Fix:** Offline data encrypted (name + QR hash only, no phone numbers/payments). Owner marks "stolen" → remote wipe on next connection. Data minimal anyway.

---

## Payments (7 cases)

### 6. Fake Payment Screenshot
**Fix:** No screenshot upload. Owner collects directly (Google Pay/PhonePe/cash). Owner marks paid in system. We don't verify — it's owner's money.

### 7. Owner Forgets to Confirm Payments
**Fix:** Daily summary includes "X payments pending verification." 48-hour urgent alert if still unverified.

### 8. Amount Differs From Plan Price
**Fix:** "Plan: ₹999. Entered: ₹899. Difference: ₹100. Reason? [Discount] [Partial] [Custom] [No reason]"

### 9. Double Payment Same Month
**Fix:** "Already has payment this month ({date}, ₹{amount}). Add another? [Yes] [Cancel]"

### 10. Complimentary Extension (₹0)
**Fix:** "Cannot be zero. [Complimentary Extension (no payment)] [Enter Amount]". Logged as "Complimentary — by {owner}".

### 11. Owner's UPI ID Changes
**Fix:** UPI ID editable in settings. On change: "All future payment requests use new ID. Previous requests show 'expired'." Format validated on save.

### 12. Revenue Inflated (Owner enters wrong amount)
**Fix:** Owner enters ACTUAL received (not plan price). System auto-fills plan price but editable. "Plan: ₹999. Received: ₹899. Difference: ₹100 (discount/adjustment)."

---

## WhatsApp (8 cases)

### 13. Two Messages Same Day (Birthday + Expiry + Absent)
**Fix:** Max 1 automated message per day. Priority order: Payment > Expiry > Absent > Birthday > Class. Combine: "Happy Birthday! 🎂 Membership also expires in 3 days. 📞 {phone}"

### 14. Member's Phone Number Changed
**Fix:** 90-day verification: "Reply YES to confirm." No reply in 7 days → pause messages → alert owner: "Number may have changed."

### 15. Member Marks as Spam
**Fix:** All automated messages use "utility" type (Meta-approved). Lower spam-reporting risk. Every message ends with "Reply STOP to stop." STOP → marketing paused, utility still allowed.

### 16. WhatsApp Number Ban
**Fix:** Template-compliant messages. Rate limits. No marketing as utility. Daily cap. If banned → system can't prevent but all templates comply with Meta policy.

### 17. WhatsApp Cap vs Owner Manual
**Fix:** Cap = automated only. Owner manual messages not capped. System warns if member opted out: "Send anyway? [Yes] [Cancel]"

### 18. Template Approval Delay
**Fix:** 30+ pre-approved templates for 95% of use cases. Custom templates: "Takes 24-48 hours for Meta approval. Use pre-approved for immediate sending."

### 19. Gym Changes WhatsApp Number
**Fix:** Number configurable. On change: Meta verification required. Old conversations archived. System suggests: "Send broadcast from new number: 'We've updated our WhatsApp number. Please save it.'"

### 20. Broadcast Spam Reports
**Fix:** Max 1 broadcast per week. Must use Meta-approved marketing templates. "STOP" removes from future broadcasts. Rate limit: 1 per 24 hours per number.

---

## Leads (10 cases)

### 21. Duplicate Leads (Same person, multiple sources)
**Fix:** Phone-based detection. New lead → check existing leads + members. Match → merge, add new source. Different name same phone → "Same person? [Merge] [Create Separate]"

### 22. Lead Assigned But Nobody Acts
**Fix:** No auto-assignment (removed). All leads in inbox. Owner gets daily reminder: "5 new leads not contacted." Leads 7+ days untouched shown in red.

### 23. Overbooked Trials
**Fix:** Slot capacity (max 2, owner-configurable). Once full → "Full — next: {slot}." Suggests next available.

### 24. No-Show But Actually Came (Trainer forgot to mark)
**Fix:** System checks QR check-in before sending no-show message. If QR shows they were there → don't send, alert owner: "3 attended but not marked present. [Mark Present]"

### 25. Waitlist Not Enough Notice
**Fix:** Auto-notify only if cancellation > 1 hour before class. < 1 hour → owner decides: [Notify] [Ignore].

### 26. Lead in "Following Up" 60+ Days
**Fix:** System suggests: "Mark as Lost? 60+ days inactive."

### 27. Instagram Comment Spam/Bots
**Fix:** Only keyword-matching comments trigger leads. Generic comments ignored. Suspicious accounts (0 followers, 0 posts, < 7 days old) flagged. Max 5 per post → owner alerted.

### 28. Instagram DM From Existing Member
**Fix:** Check Instagram handle against member database. Match → "Member messaged on Instagram" (no new lead). No match → create lead.

### 29. Abandoned Form Without Consent
**Fix:** Consent checkbox UNTICKED by default. Only if ticked + phone entered → recovery message. If unticked → no contact. Privacy respected.

### 30. Same Lead, Different Attribution
**Fix:** Both first-touch and last-touch tracked: "First: Instagram (Aug 10). Last: Website (Aug 20). Converted: Aug 25."

---

## Classes (5 cases)

### 31. Class Cancelled But Past Records
**Fix:** Delete recurring → only stops future. Past instances + attendance archived. "Past (25 sessions, 400 records) archived. [Confirm]"

### 32. Members Already At Gym When Class Cancelled
**Fix:** System still sends cancellation WhatsApp. Owner also told: "3 members already at gym."

### 33. Class Time Conflict
**Fix:** "Overlaps with '{Other Class}'. Same room? [Yes] [Adjust time]"

### 34. Trainer Double-Booked
**Fix:** "Trainer teaching '{Other Class}' at this time. [Change Trainer] [Adjust Time] [Override]"

### 35. Waitlist Member Already Has Class at Same Time
**Fix:** "You have another class at this time. [Cancel Other] [Decline This Spot]"

---

## Trainers (3 cases)

### 36. Trainer Leaves With Remaining PT Credits
**Fix:** PT packages are gym-owned (T&C at purchase: "Sessions with gym, not specific trainer"). Credits transfer to new trainer. No refund for trainer change.

### 37. PT Session Count Dispute
**Fix:** Sessions must be logged within 24 hours. After 24h → can't add. 9 PM reminder if unlogged. Dispute → system shows full log: date, time, trainer per session.

### 38. Trainer Commission on Member Switch
**Fix:** Split by days: Trainer A gets (days/total) × monthly. Trainer B gets remaining. Clean transition from next billing cycle.

---

## AI (6 cases)

### 39. AI Churn Prediction False Positive
**Fix:** Suggestion only. Confidence score shown. Owner approves before any action. Member can't be auto-contacted. Min 90 days data required.

### 40. AI Revenue Forecast Too High → Owner Overspends
**Fix:** Always range (₹{low} - ₹{high}). Disclaimer: "Estimate, not guarantee. Do not make financial decisions solely based on this." Min 6 months data.

### 41. AI Suggests Stale Leads
**Fix:** Only suggests leads active in last 14 days. Stale leads shown separately: "cold — call if you have time." Confidence score per suggestion.

### 42. AI Suggestions Ignored
**Fix:** Max 3 per day. Dismissed → won't reappear until situation changes. System learns: if owner dismisses a type consistently, stops showing it.

### 43. AI Dynamic Pricing Wrong (Owner Entered Bad Data)
**Fix:** Owner manually enters competitor prices (we don't scrape). Suggestion only. "Based on your entered data: ₹999 vs ₹800/₹1,200." Owner decides.

### 44. New Gym With No Data (AI Can't Predict)
**Fix:** Churn: "Available after 90 days." Forecast: "Available after 6 months." No garbage predictions on insufficient data.

---

## Automation (5 cases)

### 45. Cancel/Save Exploitation (Member threatens cancel every month)
**Fix:** 1 save offer per 12 months. Tracked. 2nd cancellation → no offer, straight to owner call. Owner approves every offer.

### 46. Referral Fraud (Friend joins, cancels, split reward)
**Fix:** Reward activates only after referred member completes 30 days. Cancel within 30 days → no reward. Max 10 referrals/year.

### 47. Onboarding Misaligned (Member starts late)
**Fix:** Sequence starts from FIRST CHECK-IN, not join date. Each step checks activity before sending (adaptive).

### 48. Revenue Leak False Positive (Owner gave verbal extension)
**Fix:** Owner can dismiss: "Reason: complimentary extension." Flag suppressed 7 days. Or owner adds extension in system → properly tracked.

### 49. Points Expiry Without Warning
**Fix:** 7-day warning: "Your 4,000 points expire on {date}. Redeem now! [Options]". Sent via WhatsApp (counts as 1/day).

---

## Member Management (8 cases)

### 50. Member Freeze Exploitation
**Fix:** Owner approves every freeze. Max 15 days/quarter, 30 days/year (configurable). System tracks and warns if limit reached.

### 51. Family Account Split (Divorce)
**Fix:** Owner manages manually. "Split family account" → selected members move to new account. Payment history stays with original.

### 52. Bulk Import Dirty Data
**Fix:** Preview: "150 rows. 12 duplicates. 5 missing. 3 invalid." Phone auto-normalized. Ambiguous dates: "Is 12/03 March 12 or December 3?" No silent import.

### 53. Custom Field Deleted With Data
**Fix:** "Has data for 200 members. [Delete] [Archive (hide but keep)] [Cancel]". Archive preserves data.

### 54. Member Reactivates After Win-Back
**Fix:** Old account reactivated. All history preserved. Plan restarts fresh. "Welcome back! Previous: 145 visits, 2 years. New plan from today."

### 55. Member Requests Upgrade But Owner Ignores
**Fix:** Shows on dashboard "Needs Attention" with badge. 48-hour alert in daily summary. Can't be ignored indefinitely.

### 56. Member Self-Service Accidental Payment
**Fix:** Members can't make payments. Can only REQUEST upgrade. Owner approves, collects, marks paid. No accidental charges possible.

### 57. Staff Steals Member Data (Export)
**Fix:** Only owner can export. Staff can request → owner approves/denies. Export logged. Export encrypted.

---

## Staff & Security (5 cases)

### 58. Staff Leaves — Access Not Revoked
**Fix:** Auto-suspend after 7 days no activity (owner exempt). Owner notified: "Reactivate / Deactivate." Owner can deactivate instantly.

### 59. Owner Locked Out (Auto-Suspend Hit Owner)
**Fix:** Auto-suspend applies to STAFF only. Owner is exempt. Owner can always log in from anywhere, anytime.

### 60. 2FA — Owner Loses Phone
**Fix:** 10 backup codes at setup. Use backup code to log in + change 2FA number. Loses phone + codes → email verification → support resets (24-hour delay).

### 61. Two Staff Edit Same Member
**Fix:** Record locking. Staff A opens → Staff B sees "Being edited by Suresh — [View Only] [Take Over]". No silent overwrite.

### 62. Two Staff Reply To Same Message
**Fix:** Conversation locking. Staff A opens → "Being handled by {Name}". Staff B sees [View Only] [Take Over (notifies)]. Lock auto-releases after 15 min.

---

## Progress & Health (5 cases)

### 63. Body Measurement Typo (120 instead of 80)
**Fix:** > 20% change → "Previous: 80. New: 120. 50% change — correct? [Yes] [Fix]"

### 64. Member Revokes Photo Permission
**Fix:** Trainer can't see new uploads. Previously viewed are watermarked (member name + date + gym name). Access logged. Screenshot disabled in app.

### 65. Diet Plan Liability (Member with kidney issue gets high-protein)
**Fix:** Trainer must review health questionnaire before creating plan. If issue reported → warning. Mandatory disclaimer: "Consult your doctor." Signed declaration.

### 66. Health Questionnaire — Member Lies
**Fix:** Signed declaration: "I confirm this information is accurate." Trainer verbally confirms on Day 1. Logged as note.

### 67. Body Charts Show No Progress (Member Demotivated)
**Fix:** Multi-metric charts (weight + body fat + measurements). If weight flat but waist down: "Weight: same. Waist: -3cm. You're losing fat and building muscle! 💪"

---

## Marketing & Reviews (5 cases)

### 68. Google Review Gating Violation
**Fix:** Review request sent to ALL members (no NPS filtering). No gating. Compliant with Google policy.

### 69. Auto-Reply to Reviews (Tone Mismatch)
**Fix:** No auto-reply. Owner notified: "New review: {rating} {text} — [Reply Now]." Owner writes personalized reply.

### 70. Instagram Auto-Reply Wrong Price
**Fix:** Auto-reply pricing linked to Gym OS pricing data. When owner changes pricing, templates auto-update. Always says "Starting from ₹X" + "Contact for current plans."

### 71. Instagram Token Expired
**Fix:** Daily health check. 7-day warning before expiry. Expired → red dot + "Reconnect [Link]". No silent failure.

### 72. All Integrations Down Simultaneously
**Fix:** Core system works without integrations. Status: "WhatsApp ⚠️ Instagram ⚠️ Google ⚠️ Core: ✅". Messages queued. Leads captured when back.

---

## India-Specific (5 cases)

### 73. Festival Greeting Religious Sensitivity
**Fix:** No auto festival greetings (removed entirely). Owner manually creates if wanted.

### 74. Student Exam Pause Exploitation
**Fix:** Removed. Members use regular freeze (owner-approved) if needed. No special student category.

### 75. Ladies-Only Hours Edge Cases
**Fix:** Removed. Gym owner manages timing rules outside system.

### 76. Regional SMS Unicode Failure
**Fix:** Test SMS to owner before sending: "Display correct? [Yes/No]". If No → fall back to English. Never send "?????" to members.

### 77. Hindi Translation Lag (New Feature)
**Fix:** No feature ships without both languages. If Hindi not ready, feature stays in staging. Better to delay 3 days than ship inconsistent UI.

---

## System & Infrastructure (5 cases)

### 78. Server Goes Down
**Fix:** Check-in offline. Payments on paper. WhatsApp queued. Website cached (24h). Instagram/Google paused. Core works. Recovery in order: check-ins → payments → WhatsApp → leads.

### 79. Website Auto-Sync Delay
**Fix:** Website refreshes every 5 min. Critical changes (pricing, schedule) → cache-clear signal immediately. "Website will reflect in 5 min."

### 80. Razorpay/API Down (If Used)
**Fix:** Not applicable — no payment gateway. Owner uses own Google Pay/PhonePe. System just tracks what owner enters.

### 81. Large Export Fails Halfway
**Fix:** No partial files. "Export interrupted — [Retry]." Large exports (500+) → background process, owner notified when done.

### 82. Comparison Mode With No Historical Data
**Fix:** "No data for {period}. Available after {date}." No blank charts, no zeros, no misleading "100% growth."

---

## TOTAL: 82 EDGE CASES — ALL FIXED

Every edge case has a specific fix built into the feature logic. No "we'll figure it out later." No open issues remaining.
