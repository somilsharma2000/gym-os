# GYM OS — AREA RESEARCH PROMPT
## Use this prompt with any AI agent (ChatGPT, Claude, Base44 agent, etc.)

---

## FINAL PRICING

| Tier | Setup | Monthly | Target Gym |
|---|---|---|---|
| PREMIUM | ₹20,000 | ₹5,000/month | 250+ members, big gym, premium area |
| STANDARD | ₹15,000 | ₹5,000/month | 150-250 members, medium gym, decent area |

**Monthly is always ₹5,000. Setup is either ₹15K or ₹20K based on gym size/budget.**

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

### BUDGET CLASSIFICATION

| Total Score | Budget Level | What to Pitch | Setup Price |
|---|---|---|---|
| 70-100 | PREMIUM | Premium pitch — book in-person demo | ₹20,000 + ₹5,000/month |
| 45-69 | GOOD | Standard pitch — phone or video demo | ₹15,000 + ₹5,000/month |
| 25-44 | LOW | Only call if no better options in area | ₹15,000 + ₹5,000/month (negotiable to ₹10K setup) |
| 0-24 | SKIP | Don't call. Gym too small or struggling. | Skip — waste of time |

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
Budget: [PREMIUM / GOOD / LOW / SKIP]
Pitch Price: ₹[15,000 or 20,000] + ₹5,000/month

KEY FINDINGS:
• [key observation 1 — e.g., "No website — high opportunity"]
• [key observation 2 — e.g., "4.7 rating with 340 reviews — well-established"]
• [key observation 3 — e.g., "Active Instagram with 3,200 followers — owner is marketing-savvy"]
• [key observation 4 — any signal about their budget/revenue]

SALES ANGLE:
[1-2 sentences on the best approach — e.g., "Owner is marketing-active on Instagram but has no website. Pitch: 'Your Instagram is great but you're losing leads who search on Google. We'll build your website + complete management system for ₹20,000 setup + ₹5,000/month.'"]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### AT THE END, OUTPUT A SUMMARY TABLE:

```
┌─────┬──────────────────┬───────┬────────┬────────┬──────────────┐
│  #  │ Gym Name         │ Score │ Budget │ Pitch  │ Phone        │
├─────┼──────────────────┼───────┼────────┼────────┼──────────────┤
│  1  │ [name]           │ 85    │PREMIUM │₹20K+5K │ [phone]      │
│  2  │ [name]           │ 62    │GOOD    │₹15K+5K │ [phone]      │
│ ... │ ...              │ ...   │ ...    │ ...    │ ...          │
└─────┴──────────────────┴───────┴────────┴────────┴──────────────┘
```

### FINAL SUMMARY:
- Total gyms found: [X]
- Premium (70+): [X] gyms → pitch ₹20,000 + ₹5,000/month
- Good (45-69): [X] gyms → pitch ₹15,000 + ₹5,000/month
- Low (25-44): [X] gyms → backup list
- Skip (0-24): [X] gyms → don't call
- Top 3 targets: [list the 3 highest-scoring gyms with names]
- Best calling order: [rank by score, highest first]

### RESEARCH INSTRUCTIONS:
1. Search Google Maps for "gym in [AREA NAME]"
2. Search Google for "gym [AREA NAME]" to find any not on Maps
3. Search Instagram for gym-related hashtags in that area
4. For each gym found, gather all the data points above
5. Score each gym using the scoring system
6. Classify into budget levels
7. Recommend pitch price for each
8. Provide sales angle for each gym
9. Output in the format above
10. Be thorough — find at least 10-20 gyms per area if possible

PROMPT END

---

## HOW TO USE THIS

### Option 1: Use with me (Vesper — your Base44 agent)

Just say:
> "Research gyms in [area name]"

I'll use Google Maps, web search, and Instagram to find gyms, score them, and give you the full report.

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
Name: Fitness Zone Ujjain
Address: Near Freeganj Square, Ujjain, MP 456001
Phone: +91 98XXX XXXXX
Google Rating: 4.3 (287 reviews)
Google Maps: maps.google.com/...
Website: No website
Instagram: @fitnesszoneujjain (2,100 followers, posts 4x/week)
Score: 68/100
Budget: GOOD
Pitch Price: ₹15,000 + ₹5,000/month

KEY FINDINGS:
• No website — high opportunity, owner has nowhere to send leads
• 287 Google reviews at 4.3 — well-established gym with 200+ members likely
• Active Instagram with 2,100 followers — owner cares about marketing
• Photos show AC gym with decent equipment and medium-large space
• Open 6 AM - 10 PM — standard hours
• 3 trainers visible — medium-sized gym

SALES ANGLE:
"Owner is already marketing on Instagram but has no website — leads from Google searches have nowhere to go. Pitch: 'You're getting 2,100 followers on Instagram but losing everyone who searches on Google. We'll build your website + complete management system with lead capture, WhatsApp automation, and QR check-in for ₹15,000 setup + ₹5,000/month.'"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GYM #2
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: Iron Temple Fitness
Address: Bombay Hospital Road, Indore, MP 452001
Phone: +91 97XXX XXXXX
Google Rating: 4.6 (612 reviews)
Google Maps: maps.google.com/...
Website: www.irontemple.in (basic, outdated)
Instagram: @irontemplefitness (5,400 followers, posts daily)
Score: 82/100
Budget: PREMIUM
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

SALES ANGLE:
"Owner already invests in marketing (daily Instagram, 5,400 followers) but website is outdated and no management system in place. Pitch: 'Your Instagram is bringing 5,000+ eyeballs but your website is losing them. We'll rebuild your website + add complete gym management — WhatsApp automation, lead tracking, QR check-in, revenue leak detection. We found ₹47,000 in leaked revenue at a similar Indore gym. ₹20,000 setup + ₹5,000/month.'"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

SUMMARY TABLE:

| # | Gym Name | Score | Budget | Pitch | Phone |
|---|---|---|---|---|---|
| 1 | Iron Temple Fitness | 82 | PREMIUM | ₹20K+5K | 97XXX |
| 2 | Fitness Zone Ujjain | 68 | GOOD | ₹15K+5K | 98XXX |
| 3 | Power House Gym | 61 | GOOD | ₹15K+5K | 99XXX |
| 4 | Iron Beast Gym | 44 | LOW | Backup | 96XXX |
| 5 | Small Corner Gym | 18 | SKIP | Don't call | — |

---

## QUICK REFERENCE FOR AGENTS

```
WHAT TO PITCH BASED ON BUDGET SCORE

SCORE 70+  → ₹20,000 setup + ₹5,000/month
            "Premium package — custom website + full system + on-site setup"
            Book in-person or video demo. Don't sell on phone alone.

SCORE 45-69 → ₹15,000 setup + ₹5,000/month
              "Standard package — website + full system + remote setup"
              Can sell on phone with video demo.

SCORE 25-44 → Only call if no better options
              Pitch ₹15,000 + ₹5,000/month, negotiate to ₹10,000 if needed

SCORE 0-24 → Don't call. Waste of time.
```

## BUDGET SIGNALS CHEAT SHEET

**Gym CAN afford ₹20K + ₹5K/month if:**
- 300+ members (estimated from 200+ Google reviews)
- 4.0+ Google rating
- 2,000+ Instagram followers
- AC gym with good equipment
- 5+ trainers
- Open 12+ hours/day
- Has parking
- Owner runs Instagram ads or posts daily
- Located in premium area (mall, main road, commercial building)

**Gym CAN afford ₹15K + ₹5K/month if:**
- 150-300 members (estimated from 100-200 Google reviews)
- 3.5+ Google rating
- 500-2,000 Instagram followers
- AC or non-AC, decent equipment
- 2-4 trainers
- Open 10-12 hours/day
- Owner is on Instagram but not very active
- Located in residential or mid-tier area

**Gym CANNOT afford (skip) if:**
- Under 100 Google reviews
- Under 3.0 rating
- No Instagram or under 100 followers
- Non-AC, basic equipment
- 1 trainer (owner themselves)
- Open limited hours (morning + evening only)
- Located in narrow lane / residential house
