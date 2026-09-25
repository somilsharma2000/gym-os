# Gym OS Client Setup — new gym in ~30 minutes

The canonical pattern is **Oxigen Fitness** ([oxigen-fitness-digital](https://github.com/somilsharma2000/oxigen-fitness-digital)): one repo, one config-driven site, wired to the platform.

## Steps

1. **Copy the pattern** — clone `oxigen-fitness-digital` (or pick a style from [gym-website-showcase](https://github.com/somilsharma2000/gym-website-showcase)) and rebrand it: name, colors, pricing, photos, WhatsApp number.
2. **Drop in the connect script** — copy `client-kit/gym-os-connect.js` to the repo root.
3. **Add the config** before `</body>` on every page:
   ```html
   <script>window.GymOSConfig = {
     gymName: 'Client Gym Name',
     whatsappNumber: '+91XXXXXXXXXX',
     isDemo: false,      // true for pitch/demo sites
     poweredBy: true     // false if the design already credits Gym OS
   };</script>
   <script src="./gym-os-connect.js"></script>
   ```
4. **Wire the forms** — add `data-gymos-lead` to each form and `name="name|phone|email|interest|goals|message"` to the inputs. That's it; the script handles submit, success state, WhatsApp fallback, and offline queueing.
5. **Wire portal/dashboard buttons** — add `data-gymos-login` (member portal) and `data-gymos-dashboard` (owner dashboard); the script points them at the published platform.
6. **Enable GitHub Pages** — repo Settings → Pages → deploy from `main` root.
7. **Test a lead end-to-end** — submit the form, confirm it appears in the platform's Lead entity.

## What each client gets

| Piece | URL |
|---|---|
| Public website | `https://somilsharma2000.github.io/<client>-system/` (or custom domain) |
| Member portal | https://my-gym-os.base44.app |
| Owner dashboard | https://my-gym-os.base44.app |

## Backend notes (see docs/BACKEND_MAP.md)

- Leads currently flow: site → Vesper (`captureGymLead`) → BEYOND PIXELLS app.
- Target state: leads land in the published platform (Gym osssss).
- If the capture API is down (credit limits), the script never loses the lead: inline success + WhatsApp CTA + localStorage queue.
