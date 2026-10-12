# Week 1 setup — do these in order

Everything here is free except nothing. No domain needed this week.

## 1. Publish the site on GitHub Pages (20 min)

1. On github.com: **New repository** → name it `prescreen` (or anything) → Public → Create.
2. **Add file → Upload files** → drag in every file from this folder (`index.html`, `terms.html`, `privacy.html`, `refund.html`, `contact.html`, `report-template.html`, `style.css`, `brand.js`) → Commit.
3. Repo **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
4. In 1–2 minutes your site is live at `https://YOURNAME.github.io/prescreen/`. Open every page once.

## 2. Edit four lines in `brand.js` (5 min)

Open `brand.js` in GitHub (pencil icon) and set:
- `BRAND` — working name (keep "Prescreen" if undecided; change any time, every page updates)
- `CONTACT_EMAIL` — the address you will answer from
- `FORM_URL` — your Tally form link (step 3)
- `PAY_URL` — your PayPal.me link for now (step 5); swap to Dodo later

Also fill the two bracketed placeholders: governing law in `terms.html` section 9, and your name/city in `contact.html`.

## 3. Intake form on Tally (15 min, free)

tally.so → New form → add these questions, then copy the share link into `FORM_URL`:
1. Email (required)
2. App name (short text)
3. Which builder made it? (multiple choice: Lovable, Bolt, Base44, Replit, a0.dev, Expo/React Native by hand, FlutterFlow, Other)
4. How is it packaged for iOS? (Capacitor wrapper, Expo/EAS, Xcode project, I don't know)
5. GitHub link (URL) — ask for a private repo invite OR a public link
6. Or upload a zip (file upload; tell them to delete `node_modules`, `.env` and any keys first)
7. Store listing text: name, subtitle, description (long text)
8. Did Apple already respond? (Not submitted yet / Rejected once / Rejected 2+ times / Upload error ITMS-xxxxx)
9. Paste Apple's full message, minus personal details (long text)
10. Anything you want checked specifically? (long text)
Settings: turn on email notifications to yourself for every submission.

## 4. Apply to Dodo Payments (20 min now, 1–3 business days to approve)

dodopayments.com → Sign up → account type **Individual** → website = your GitHub Pages URL → photo ID + selfie.
They require live pricing, terms, privacy, refund and contact pages: you now have all five.
If they decline the github.io address, do nothing until the week-1 test passes, then buy a domain (~$10) and reapply.

## 5. PayPal link for the first payments (10 min)

paypal.com → create or use your personal account → PayPal.me link → paste into `PAY_URL`.
International receipts as an individual are allowed; fees are roughly 4.4% + fixed fee + ~3% currency spread. Fine for the first 1–3 payments; move to Dodo (merchant of record) as soon as it's approved.

## 6. Accounts (15 min)

- Apple Account (free): account.apple.com → create → then sign in at developer.apple.com/forums and accept the forums agreement so you can reply to App Review threads. No device, no $99 needed.
- You already have Reddit, GitHub, Discord.

## 7. Join venues and read the rules (90 min, do it tonight)

| Venue | Link | First thing to do |
|---|---|---|
| Apple Developer Forums — App Review tag | https://developer.apple.com/forums/tags/app-review | Sort by newest; open the three latest 4.3(a) / 4.1 / 2.1 threads |
| Lovable Discord | https://discord.com/invite/lovable-dev | Read #rules, watch #community-support for "App Store", "Capacitor", "rejected" |
| Capgo Discord | https://discord.com/invite/VnYRvBfgA6 | `questions` channel; everyone here is wrapping web apps |
| Base44 Discord | https://discord.com/invite/ThpYPZpVts | Links only in #showcase; office hours Wed 5 PM UTC (10:30 PM IST) |
| Bolt / StackBlitz Discord | https://discord.com/invite/stackblitz | Read rules channel |
| Expo Discord | https://discord.com/invite/expo | Developer-heavy; help on EAS Submit / TestFlight questions |
| r/lovable | https://www.reddit.com/r/lovable/ | Read /about/rules; comment only this week |
| r/nocode | https://www.reddit.com/r/nocode/ | Find the Self-Promotion flair and the launch megathread (for Thursday) |
| r/SideProject | https://www.reddit.com/r/SideProject/ | Story posts allowed; bare links removed (for Thursday) |
| r/vibecoding | https://www.reddit.com/r/vibecoding/ | Tool posts need mod approval via their X community; apply Thursday, comment only until then |

## 8. Tracking sheet (5 min)

Import `tracking-sheet.csv` into Google Sheets (File → Import). Log every touch the moment you make it.

## 9. Monday learn block (3 hours)

- App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/ — read 2.1, 2.3, 2.5.2, 3.1.1, 4.2, 4.3, 4.8, 5.1.1 (all of 5.1.1, including (v) account deletion). Write one line per section in your own words.
- Expo: https://docs.expo.dev/submit/ios/ and https://docs.expo.dev/build/setup/ — know what `app.json` holds (`ios.infoPlist`, `ios.bundleIdentifier`, `updates`).
- Capacitor: https://capacitorjs.com/docs/config — find `server.url` and read what the docs say about using it in production.
- Apple purpose strings list: search the Apple docs for "NSCameraUsageDescription" to see the full family of `*UsageDescription` keys.

## 10. How we run each free check (Thursday onward)

When a submission arrives: paste into this chat the `app.json` / `capacitor.config.*` / `Info.plist` contents, the file list, the listing text and Apple's message. We go through the 12 checks together, fill `report-template.html`, you read it, send it by email as an attachment, and offer the $19/$49 re-check. Log it.

## Files in this folder

- `index.html` — landing page (12 checks, pricing, honest FAQ)
- `terms.html`, `privacy.html`, `refund.html`, `contact.html` — the pages payment providers ask for (drafts; read them)
- `report-template.html` — the report you send; filled example rows included
- `checklist-post.md` — the plain-text post for Reddit/Discord/YouTube (no links in it, on purpose)
- `tracking-sheet.csv` — import to Google Sheets
- `style.css`, `brand.js` — shared styling and the four settings
