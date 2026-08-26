# Gym OS — Safety Rules, Removed Features & Liability Protection

## 48 Features Explicitly Removed

### Financial Liability (7 removed)
| Feature | Reason |
|---|---|
| Payment Gateway (Razorpay) | Owner handles money directly — zero liability |
| UPI Payment Links | Not needed — owner shares own UPI ID |
| UPI Autopay / e-mandates | Chargeback risk, silent failures, cancelled members charged |
| GST invoices (CGST/SGST/IGST) | Tax liability if wrong |
| GST summary report | Removed with GST |
| Tally/Zoho API export | No GST data to export |
| Member Wallet | Financial liability if gym closes, member loses money |

### AI Liability (9 removed)
| Feature | Reason |
|---|---|
| AI Gym Manager | Liability for bad business advice |
| AI Sales Manager | Liability for bad sales advice |
| AI Marketing Manager | Liability for bad marketing advice |
| AI Retention Manager | Liability for bad retention decisions |
| AI Revenue Analyst | Liability for bad financial analysis |
| AI Staff Coach | Liability for bad staff management |
| AI free-form conversation | Unpredictable — could promise wrong pricing |
| AI objection detection/handling | Could auto-offer discounts wrongly |
| Natural-language analytics | AI gives wrong numbers = bad decisions |
| AI attendance prediction | Unreliable = wrong staffing |
| AI staff scheduling | Real people affected by wrong schedules |
| AI fitness assistant | Injury liability |

### Privacy & Data (4 removed)
| Feature | Reason |
|---|---|
| Document storage (Aadhaar/PAN) | UIDAI violation if leaked |
| Member community feed | Moderation liability |
| Member-to-member wallet transfer | Removed with wallet |

### WhatsApp Risk (3 removed)
| Feature | Reason |
|---|---|
| WhatsApp chatbot flow builder | Wrong message = ban risk |
| Missed call auto-SMS | Spam to wrong numbers |
| Festival auto-greetings | Religious sensitivity |

### Complexity & Maintenance (12 removed)
| Feature | Reason |
|---|---|
| Visual/AI workflow builder | 6 months to build, 95% won't use |
| Workflow testing/versioning/retry | Enterprise dev tools |
| Custom triggers/conditions/branching | Owner errors = our fault |
| Smart lock 24/7 access | Hardware support nightmare |
| Equipment booking | Indian gyms don't do this |
| Competitor monitoring | Legal gray area (scraping) |
| Meta/Google Ads API | Fragile, breaks silently |
| Webhooks | Nobody uses, maintenance burden |
| API access | Nobody uses, maintenance burden |
| Stripe | Indian market only |
| GDPR compliance | EU law, unnecessary for India |
| Custom roles | 5 fixed roles enough |

### Low Adoption (8 removed)
| Feature | Reason |
|---|---|
| Fitness device sync (Mi Band, etc.) | 5+ APIs to maintain, low adoption |
| Water/sleep/step tracking | Dead data in 2 weeks |
| WOD (Workout of Day) | CrossFit niche, not India |
| Sanitization log | Nobody maintains |
| Visitor management | Nobody uses |
| Cohort analysis | Too advanced |
| Multi-touch attribution | Too complex, 2% understand |
| Air quality monitoring | Nobody has sensors |

### Other (5 removed)
| Feature | Reason |
|---|---|
| Direct print support | Unreliable across printers, use PDF |
| Auto-reply to Google reviews | Tone mismatch, looks robotic |
| Ladies-only hours | Too many edge cases |
| Student exam pause | Can't verify, exploit-prone |
| Payment screenshot upload | Fake screenshots = revenue loss |

---

## Core Safety Rules

### 1. Payment Safety (Zero Liability)
- System NEVER touches money
- System NEVER processes payments
- System NEVER verifies payments
- Owner manually records all payments
- Owner manually confirms receipt
- Disclaimers: "Gym OS records payments as entered by owner. We do not verify or process transactions."
- Owner's UPI ID shared via WhatsApp message (not a payment link, not an API)
- No payment method details stored

### 2. WhatsApp Safety
- Max 1 automated message per member per day (combined if multiple triggers)
- Max 1 broadcast per week per gym
- All automated messages use Meta-approved templates (utility type)
- Member can reply "STOP" → marketing paused (utility still allowed)
- 90-day number verification (no reply → pause + alert owner)
- Quiet hours: 10 PM - 8 AM (no automated messages)
- Status indicator: green (connected) / red (disconnected) on dashboard
- If number banned → system can't prevent, but all templates comply with Meta policy
- Owner manual messages: not capped (but system warns if member opted out)

### 3. Privacy Safety
- No government ID storage (no Aadhaar, PAN, no documents)
- Progress photos: permission-based (default OFF), watermarked, encrypted, access logged
- Screenshot disabled in member app for photos
- Data export: owner only (staff can request, owner approves)
- Export files encrypted with separate password
- 90-day number verification prevents sending to changed numbers
- Consent checkbox UNTICKED by default on all forms

### 4. AI Safety
- AI suggests, human decides (no auto-actions)
- Churn prediction: min 90 days data, confidence score, owner approves before action
- Revenue forecast: min 6 months data, range shown (not single number), disclaimer
- AI "What Should I Do Today": max 3, no repeats until dismissed, learns from owner behavior
- No AI free-form chat with members or leads
- No AI personas giving business advice
- No AI medical/fitness advice

### 5. Exploit Prevention
- QR codes: rotating (60 sec), app-only, screenshot disabled → can't share
- Freeze: owner approves, configurable limits, tracked
- Cancel/Save: 1 per 12 months, owner-approved, tracked
- Referral: 30-day rule, max 10/year, T&C at purchase
- Loyalty points: 30+ min in gym, daily cap, monthly cap, expiry
- Member self-service: can't make payments or change plans (request only, owner approves)

### 6. Access Control
- 5 predefined roles (no custom)
- Owner: full access, exempt from auto-suspend, 2FA required
- Trainer: assigned members only, no financial data
- Staff auto-suspend after 7 days inactivity (owner notified)
- Conversation locking (no double-replies)
- 2FA for owner with backup codes
- Export: owner only, logged

### 7. Data Safety
- Daily automated backup
- Encryption at rest and in transit
- Audit log (login + member create/edit/delete)
- Offline data: minimal (name + QR hash only, no phone numbers/payments)
- Device stolen → remote wipe on next connection
- Data is gym-owned: "Gym OS stores data on behalf of {Gym Name}. Gym owns all data."

### 8. Medical Liability
- Mandatory disclaimer on all diet/workout plans: "Created by your trainer, not a medical professional. Consult your doctor."
- Trainer must review health questionnaire before creating plans
- Health questionnaire has signed declaration: "I confirm this information is accurate"
- No medical documents stored
- No AI fitness advice

### 9. Integration Safety
- All integrations checked daily
- Token expiry: 7-day warning before expiry
- If disconnected: red dot on dashboard, "Reconnect" link
- If ALL integrations down: core system works (members, check-in, payments, classes, reports)
- No silent failures — always visible status
- Integrations are layers, not dependencies

### 10. Crash Resilience
- Check-in: offline mode (local storage, syncs when back)
- Payments: record on paper, enter when back
- WhatsApp: queued (scheduled messages skipped if too late)
- Website: cached (24 hrs), then "maintenance" banner
- Instagram/Google: paused, resumes when back
- Recovery: check-ins → payments → WhatsApp → leads (in order)

---

## Liability Summary

| Area | Liability | Why |
|---|---|---|
| Payment processing | ZERO | We don't touch money |
| GST/Tax | ZERO | We don't generate tax documents |
| Medical advice | ZERO | Disclaimers, no AI advice, no medical docs |
| Payment disputes | ZERO | Between member and gym owner |
| Data breach (government IDs) | ZERO | We don't store Aadhaar/PAN |
| AI bad advice | ZERO | Suggestions only, no auto-actions |
| WhatsApp ban | LOW | Template-compliant, rate-limited, consent-based |
| Privacy (photos) | LOW | Permission-based, watermarked, encrypted, access logged |

**Gym OS is a tracking and automation tool. It does not process money, give advice, or store sensitive documents. All financial and medical decisions are between the gym owner and their members.**
