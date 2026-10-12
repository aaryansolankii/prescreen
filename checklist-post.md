# 12 things Apple reviewers actually flag on AI-built iOS apps (checklist, no links)

Posted as plain text. Guideline numbers are Apple's App Review Guidelines. Nothing here guarantees approval; 4.2 and 4.3 are judgement calls. This is what to check before you press Submit.

**1. Placeholder text and dead links (2.1).** Search your project and your listing for "Lorem ipsum", "TBD", "test", "sample", "coming soon" and any URL that 404s. Reviewers open every link.

**2. The reviewer can get in (2.1, 2.3.1).** If your app has a login, put a working demo email and password in App Store Connect → Notes for Review. If content sits behind a paywall, say how to reach it. "Account creation didn't work" is one of the most common rejections.

**3. The listing matches the app (2.3).** Screenshots must be of the real app, not mockups. The description must not mention features that aren't shipped yet. The age rating must match the content.

**4. Privacy policy that loads (5.1.1(i)).** The URL must open and name the data you collect and who you share it with. A Notion page is fine. A dead link is a rejection.

**5. Specific permission strings (5.1.1(ii)).** Every permission you request needs a purpose string in your words: "We use your camera to scan receipts", not "This app needs camera access". Missing strings fail at upload (ITMS-90683). If a builder added permissions you don't use, remove them.

**6. Privacy manifest (ITMS-91053 / ITMS-91061).** If you use "required reason" APIs or any SDK on Apple's list (Firebase, Alamofire, Capacitor, Cordova and others), a PrivacyInfo.xcprivacy must declare them. Missing manifests fail at upload, before a human ever looks.

**7. Not just a website in a box (4.2).** If your Capacitor config has a live `server.url` pointing at your website, you are shipping a browser shell; Capacitor's own docs say that mode is not for production. Bundle the app locally and add something a website can't do: push notifications that matter, camera, offline, widgets, native share.

**8. Not a template clone (4.3).** Distinctive icon, name and screenshots. If you're in a saturated category, your Notes for Review should say in two sentences what is different. Since June 2026 Apple can also remove apps that stop getting updates or users.

**9. Remote updates stay in bounds (2.5.2).** Expo Updates, Capgo, CodePush and builder-specific OTA are allowed for fixes that run inside the JavaScript/WebKit sandbox. Do not use them to ship features around review, and don't say you will.

**10. Sign in with Apple (4.8).** If you offer Google, Facebook or any third-party login, you must also offer Sign in with Apple (or another login that meets Apple's privacy conditions).

**11. Payments in the right place (3.1.1).** Digital goods, subscriptions and premium features go through in-app purchase. A web checkout inside the app for digital features is a rejection. Physical goods and real-world services are exempt.

**12. Account deletion and build sanity (5.1.1(v), 2.1, 2.4).** If users can create an account, they must be able to delete it inside the app. No "beta" or "test" labels anywhere. Launch on a current iOS version without crashing. If you tick iPad, the layout must work on iPad.

If you've been rejected and don't understand the message, paste it (minus personal details) and I'll tell you which of these it maps to. Free while I'm learning what Apple flags on AI-built apps. No promises about approval.
