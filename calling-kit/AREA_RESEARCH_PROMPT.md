# GYM OS — AREA RESEARCH PROMPT
## Use this prompt with any AI agent (ChatGPT, Claude, Base44 agent, etc.)

---

## FINAL PRICING (3 TIERS)

| Tier | Setup | Monthly | Target Gym | Score Range |
|---|---|---|---|---|
| PREMIUM | ₹30,000 | ₹5,000/month | 350+ members, biggest gyms, premium area, multiple branches | 85-100 |
| GOOD | ₹20,000 | ₹5,000/month | 200-350 members, medium-large gym, good area | 60-84 |
| STANDARD | ₹15,000 | ₹5,000/month | 100-200 members, medium gym, decent area | 40-59 |
| LOW | Backup only | — | Under 100 members, small gym | 25-39 |
| SKIP | Don't call | — | Too small or struggling | 0-24 |

**Monthly is ALWAYS ₹5,000. Setup is ₹15K / ₹20K / ₹30K based on gym size and budget.**

---

## THE MASTER PROMPT

Copy everything between the lines below and paste it to any AI agent.
Replace [AREA NAME] with your target city/area.

---

PROMPT START

You are a gym business research analyst. I need you to research ALL gyms in [AREA NAME] and create a detailed report for each gym so my sales team can decide whether to call them and what price to pitch.

## YOUR TASK

For each gym in [AREA NAME], find and report:

### BASIC INFO
1. Gym name
2. Exact address
3. Phone number (if available)
4. Google Maps rating + total reviews
5. Google Maps link
6. Website (if they have one)
7. Instagram handle + follower count (if findable)

### GYM SIZE ESTIMATION (Use these signals)
- Number of reviews on Google (more reviews = more members roughly)
- Number of photos on Google (more photos = more active gym)
- Google "popular times" data (if available — shows how busy)
- Instagram follower count (more followers = bigger gym)
- Instagram post frequency (active Instagram = owner cares about marketing)
- Website quality (no website = opportunity, bad website = opportunity, great website = harder sell)
- Number of trainers shown on Google/Instagram
- Classes offered (more classes = bigger gym)
- Opening hours (24/7 or 5AM-11PM = big gym, 6AM-10PM = medium, limited hours = small)
- Photos showing equipment quality (premium equipment = premium gym = higher budget)
- Photos showing space size (bigger floor = more members = higher budget)
- AC vs non-AC (AC gym = higher fees = higher budget)
- Parking visible in photos (parking = premium location = higher budget)
- Multiple branches (if gym has 2+ branches = big business = high budget)

### BUDGET ESTIMATION LOGIC

Score the gym 0-100 using these factors:

| Factor | Points | How to Score |
|---|---|---|
| Google reviews count | 0-15 | 500+ reviews = 15, 200-500 = 12, 100-200 = 8, 50-100 = 5, under 50 = 2 |
| Google rating | 0-10 | 4.5+ = 10, 4.0-4.5 = 8, 3.5-4.0 = 5, under 3.5 = 2 |
| Instagram followers | 0-15 | 5000+ = 15, 2000-5000 = 12, 500-2000 = 8, 100-500 = 4, under 100 = 1 |
| Instagram activity | 0-10 | Posts daily = 10, 3-4/week = 8, weekly = 5, rarely = 2, no Instagram = 0 |
| Website status | 0-10 | No website = 10 (opportunity!), bad/outdated = 8, decent = 4, great modern = 1 (harder sell) |
| Equipment quality (from photos) | 0-10 | Premium/branded machines = 10, good quality = 7, basic = 4, poor = 1 |
| Gym space (from photos) | 0-10 | Very large = 10, large = 8, medium = 6, small = 3 |
| AC status | 0-5 | AC visible/mentioned = 5, non-AC = 1 |
| Hours | 0-5 | 24/7 or 5AM-11PM = 5, 6AM-10PM = 3, limited = 1 |
| Multiple branches | 0-5 | 3+ branches = 5, 2 branches = 3, 1 branch = 1 |
| Parking | 0-5 | Parking visible/mentioned = 5, street parking = 2, no parking = 0 |
| Trainer count (from photos/website) | 0-5 | 5+ trainers = 5, 3-4 = 4, 2 = 2, 1 = 1 |
| Class variety | 0-5 | 5+ class types = 5, 3-4 = 3, 1-2 = 1, none = 0 |

### BUDGET CLASSIFICATION — 3 TIERS

| Total Score | Budget Level | What to Pitch | Setup Price | Monthly |
|---|---|---|---|---|
| 85-100 | PREMIUM | Premium pitch — book in-person demo. Biggest gyms, 350+ members likely. | ₹30,000 | ₹5,000/month |
| 60-84 | GOOD | Good pitch — phone or video demo. Medium-large, 200-350 members likely. | ₹20,000 | ₹5,000/month |
| 40-59 | STANDARD | Standard pitch — phone call. Medium, 100-200 members likely. | ₹15,000 | ₹5,000/month |
| 25-39 | LOW | Only call if no better options in area. Small gym. | ₹15,000 (negotiable to ₹10K) | ₹5,000/month |
| 0-24 | SKIP | Don't call. Gym too small or struggling. | Skip | Skip |

### OUTPUT FORMAT

For each gym, output in this exact format:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GYM #[number]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: [gym name]
Address: [full address]
Phone: [phone or "Not found"]
Google Rating: [rating] ([review count] reviews)
Google Maps: [link]
Website: [URL or "No website"]
Instagram: [@handle] ([followers] followers, [post frequency])
Score: [XX]/100
Budget: [PREMIUM / GOOD / STANDARD / LOW / SKIP]
Pitch Price: ₹[15,000 / 20,000 / 30,000] + ₹5,000/month

KEY FINDINGS:
• [key observation 1 — e.g., "No website — high opportunity"]
• [key observation 2 — e.g., "4.7 rating with 340 reviews — well-established"]
• [key observation 3 — e.g., "Active Instagram with 3,200 followers — owner is marketing-savvy"]
• [key observation 4 — any signal about their budget/revenue]
• [key observation 5 — estimated member count based on signals]

SALES ANGLE:
[1-2 sentences on the best approach — e.g., "Owner is marketing-active on Instagram but has no website. Pitch: 'Your Instagram is great but you're losing leads who search on Google. We'll build your website + complete management system for ₹20,000 setup + ₹5,000/month.'"]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### AT THE END, OUTPUT A SUMMARY TABLE:

```
┌─────┬──────────────────┬───────┬──────────┬─────────┬──────────────┐
│  #  │ Gym Name         │ Score │ Budget   │ Pitch   │ Phone        │
├─────┼──────────────────┼───────┼──────────┼─────────┼──────────────┤
│  1  │ [name]           │ 92    │ PREMIUM  │₹30K+5K  │ [phone]      │
│  2  │ [name]           │ 75    │ GOOD     │₹20K+5K  │ [phone]      │
│  3  │ [name]           │ 55    │ STANDARD │₹15K+5K  │ [phone]      │
│ ... │ ...              │ ...   │ ...      │ ...     │ ...          │
└─────┴──────────────────┴───────┴──────────┴─────────┴──────────────┘
```

### FINAL SUMMARY:
- Total gyms found: [X]
- Premium (85+): [X] gyms → pitch ₹30,000 + ₹5,000/month
- Good (60-84): [X] gyms → pitch ₹20,000 + ₹5,000/month
- Standard (40-59): [X] gyms → pitch ₹15,000 + ₹5,000/month
- Low (25-39): [X] gyms → backup list
- Skip (0-24): [X] gyms → don't call
- Top 5 targets: [list the 5 highest-scoring gyms with names and scores]
- Best calling order: [rank by score, highest first]
- Total potential revenue: [calculate: (X premium × ₹30K) + (X good × ₹20K) + (X standard × ₹15K) = total setup revenue + (total qualifying gyms × ₹5K × 12) = annual recurring]

### RESEARCH INSTRUCTIONS:
1. Search Google Maps for "gym in [AREA NAME]"
2. Search Google for "gym [AREA NAME]" to find any not on Maps
3. Search Instagram for gym-related hashtags in that area
4. For each gym found, gather all the data points above
5. Score each gym using the scoring system
6. Classify into budget levels (PREMIUM / GOOD / STANDARD / LOW / SKIP)
7. Recommend pitch price for each (₹30K / ₹20K / ₹15K + ₹5K/month)
8. Provide sales angle for each gym
9. Output in the format above
10. Be thorough — find at least 10-20 gyms per area if possible

PROMPT END

---

## HOW TO USE THIS

### Option 1: Use with me (your Base44 agent)

Just say:
> "Research gyms in [area name]"

I'll use Google Maps, web search, and Instagram to find gyms, score them, and give you the full report with budget estimates and pitch prices.

### Option 2: Use with ChatGPT/Claude

Copy the entire prompt above, replace [AREA NAME], and paste it.

### Option 3: Give to your calling agents

Print the scoring system + budget classification. Your agents can manually score gyms while browsing Google Maps (without needing AI).

---

## EXAMPLE OUTPUT (What you'll get)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GYM #1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: Iron Temple Fitness
Address: Bombay Hospital Road, Indore, MP 452001
Phone: +91 97XXX XXXXX
Google Rating: 4.6 (612 reviews)
Google Maps: maps.google.com/...
Website: www.irontemple.in (basic, outdated)
Instagram: @irontemplefitness (5,400 followers, posts daily)
Score: 82/100
Budget: GOOD
Pitch Price: ₹20,000 + ₹5,000/month

KEY FINDINGS:
• 612 reviews at 4.6 — large, well-established gym, likely 300+ members
• Website exists but outdated — easy upgrade sell
• Very active Instagram (5,400 followers, daily posts) — marketing-savvy owner
• Photos show premium equipment (Life Fitness, Hammer Strength brands)
• Large gym floor visible in photos
• AC gym with parking
• Open 5 AM - 11 PM — extended hours
• 5+ trainers — big team
• Estimated members: 300-350

SALES ANGLE:
"Owner already invests in marketing (daily Instagram, 5,400 followers) but website is outdated and no management system in place. Pitch: 'Your Instagram is bringing 5,000+ eyeballs but your website is losing them. We'll rebuild your website + add complete gym management — WhatsApp automation, lead tracking, QR check-in, revenue leak detection. We found ₹47,000 in leaked revenue at a similar Indore gym. ₹20,000 setup + ₹5,000/month.'"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GYM #2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: Fitness Zone Ujjain
Address: Near Freeganj Square, Ujjain, MP 456001
Phone: +91 98XXX XXXXX
Google Rating: 4.3 (287 reviews)
Google Maps: maps.google.com/...
Website: No website
Instagram: @fitnesszoneujjain (2,100 followers, posts 4x/week)
Score: 68/100
Budget: GOOD (lower end)
Pitch Price: ₹20,000 + ₹5,000/month (negotiable to ₹15K if needed)

KEY FINDINGS:
• No website — high opportunity, owner has nowhere to send leads
• 287 Google reviews at 4.3 — well-established gym with 200+ members likely
• Active Instagram with 2,100 followers — owner cares about marketing
• Photos show AC gym with decent equipment and medium-large space
• Open 6 AM - 10 PM — standard hours
• 3 trainers visible — medium-sized gym
• Estimated members: 200-250

SALES ANGLE:
"Owner is already marketing on Instagram but has no website — leads from Google searches have nowhere to go. Pitch: 'You're getting 2,100 followers on Instagram but losing everyone who searches on Google. We'll build your website + complete management system with lead capture, WhatsApp automation, and QR check-in for ₹20,000 setup + ₹5,000/month.'"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GYM #3
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: PowerHouse Gym
Address: Vijay Nagar, Indore, MP 452010
Phone: +91 99XXX XXXXX
Google Rating: 4.7 (1,240 reviews)
Google Maps: maps.google.com/...
Website: www.powerhousegymindore.com (modern, well-designed)
Instagram: @powerhousegymindore (12,800 followers, posts daily, reels daily)
Score: 91/100
Budget: PREMIUM
Pitch Price: ₹30,000 + ₹5,000/month

KEY FINDINGS:
• 1,240 reviews at 4.7 — one of the biggest gyms in the area, 500+ members likely
• Modern website already exists — harder sell on website, focus on Gym OS
• Very active Instagram (12,800 followers, daily posts + reels) — highly marketing-savvy owner
• Photos show premium branded equipment (Technogym, Life Fitness)
• Very large gym floor (2-3 floors visible in photos)
• AC gym with dedicated parking
• Open 5 AM - 11 PM — extended hours
• 8+ trainers — large team
• 2 branches in Indore — big business
• Estimated members: 500-700

SALES ANGLE:
"Owner already has a great website and strong Instagram. Don't pitch website — pitch GYM OS as the system their website CAN'T do: 'Your website looks great but it can't track your members, automate WhatsApp reminders, capture leads from Instagram DMs, or find leaked revenue. We found ₹47,000 in leaked revenue at a similar gym. ₹30,000 setup + ₹5,000/month for the complete management system.' Book in-person demo — this owner won't buy on a phone call."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GYM #4
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: Shakti Gym
Address: Near Bus Stand, Mandsaur, MP 458001
Phone: +91 96XXX XXXXX
Google Rating: 3.9 (87 reviews)
Google Maps: maps.google.com/...
Website: No website
Instagram: @shaktigym_mandsaur (340 followers, posts rarely)
Score: 42/100
Budget: STANDARD
Pitch Price: ₹15,000 + ₹5,000/month

KEY FINDINGS:
• 87 reviews at 3.9 — small-to-medium gym, 100-150 members likely
• No website — opportunity
• Instagram exists but barely active (340 followers, rare posts) — owner not marketing-savvy
• Photos show basic equipment, small space
• Non-AC gym
• Open 6 AM - 10 PM — standard hours
• 1-2 trainers
• Estimated members: 100-150

SALES ANGLE:
"Owner is not marketing-savvy — this is a 'pen and paper' gym. Pitch: 'Sir, you're running everything on paper. One missed renewal, one expired member still attending — you're losing money every month without knowing. We'll set up everything — website, QR check-in, WhatsApp reminders, lead tracking — for ₹15,000 setup + ₹5,000/month. The system pays for itself by finding 2-3 leaked renewals every month.'"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

SUMMARY TABLE:

| # | Gym Name | Score | Budget | Pitch | Phone |
|---|---|---|---|---|---|
| 1 | PowerHouse Gym | 91 | PREMIUM | ₹30K+5K | 99XXX |
| 2 | Iron Temple Fitness | 82 | GOOD | ₹20K+5K | 97XXX |
| 3 | Fitness Zone Ujjain | 68 | GOOD | ₹20K+5K | 98XXX |
| 4 | Shakti Gym | 42 | STANDARD | ₹15K+5K | 96XXX |
| 5 | Iron Beast Gym | 31 | LOW | Backup | 95XXX |
| 6 | Small Corner Gym | 18 | SKIP | Don't call | — |

---

## QUICK REFERENCE FOR AGENTS

```
WHAT TO PITCH BASED ON BUDGET SCORE

SCORE 85+   → ₹30,000 setup + ₹5,000/month
              "Premium package — custom website + full Gym OS + on-site setup + 3 months support"
              BIGGEST GYMS. Book in-person demo. Don't sell on phone.
              These gyms have 350+ members, multiple trainers, maybe multiple branches.
              They're making ₹5-10 lakh/month. ₹30K is nothing to them IF you prove value.

SCORE 60-84 → ₹20,000 setup + ₹5,000/month
              "Complete package — website + Gym OS + WhatsApp automation + QR check-in"
              MEDIUM-LARGE GYMS. Phone or video demo works.
              These gyms have 200-350 members. Owner is marketing-aware.
              ₹20K is 1-2 months of their receptionist salary. Easy to justify.

SCORE 40-59 → ₹15,000 setup + ₹5,000/month
              "Standard package — website + Gym OS basics + WhatsApp reminders"
              MEDIUM GYMS. Sell on phone.
              These gyms have 100-200 members. Owner may be price-sensitive.
              ₹15K setup is their entry point. If they resist → "₹10K if you commit to annual."

SCORE 25-39 → BACKUP ONLY
              Only call if you've exhausted all GOOD and STANDARD gyms in your area.
              Pitch ₹15K (negotiable to ₹10K) + ₹5K/month.
              These gyms are small and may not see value. Low priority.

SCORE 0-24  → SKIP
              Don't call. Too small, struggling, or closing soon.
              Focus your time on gyms that can actually pay.
```

---

## HOW TO DECIDE PRICE IN THE CALL

Agent's first question after intro: "Sir, how many members do you have currently?"

| Their Answer | Score Estimate | Pitch | Price |
|---|---|---|---|
| 400+ | 85+ (PREMIUM) | "Sir, you're running a big operation. I'd like to show you a demo in person. When can I visit?" | ₹30,000 + ₹5K/month |
| 200-400 | 60-84 (GOOD) | "Sir, you're at a stage where manual management is costing you money. Let me show you what we can do." | ₹20,000 + ₹5K/month |
| 100-200 | 40-59 (STANDARD) | "Sir, as you grow from here, you need a system that scales with you. Let me explain." | ₹15,000 + ₹5K/month |
| Under 100 | 25-39 (LOW) | "Sir, we can help you grow. It's ₹15,000 setup + ₹5,000/month. Are you looking to expand your gym?" | ₹15K (negotiable) + ₹5K/month |
| Under 50 | 0-24 (SKIP) | "Sir, we might not be the right fit yet. Maybe when you grow to 100+ members. Here's my number." | Don't pitch |

---

## REVENUE PROJECTION PER AREA

If an area has 20 gyms and your agent qualifies:
- 3 PREMIUM gyms → 3 × ₹30,000 = ₹90,000 setup + 3 × ₹5,000 × 12 = ₹1,80,000/year recurring
- 6 GOOD gyms → 6 × ₹20,000 = ₹1,20,000 setup + 6 × ₹5,000 × 12 = ₹3,60,000/year recurring
- 8 STANDARD gyms → 8 × ₹15,000 = ₹1,20,000 setup + 8 × ₹5,000 × 12 = ₹4,80,000/year recurring
- 3 LOW (backup) → maybe 1 converts → 1 × ₹15,000 = ₹15,000 setup + ₹60,000/year recurring

**Per area (17 qualifying gyms, 18 conversions assumed):**
- Setup revenue: ₹3,45,000
- Annual recurring: ₹10,80,000
- **Year 1 total per area: ₹14,25,000**
- Year 2 (recurring only): ₹10,80,000

**With 5 areas (1 per agent): ₹71,25,000 Year 1**
