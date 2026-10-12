// Change these four lines once; every page updates.
const BRAND = "Prescreen";                          // working name, change any time
const CONTACT_EMAIL = "you@example.com";            // the email you will answer from
const FORM_URL = "https://tally.so/r/REPLACE_ME";   // your Tally intake form
const PAY_URL = "https://paypal.me/REPLACE_ME";     // PayPal link now; Dodo checkout link later

document.querySelectorAll(".brand-name").forEach(el => el.textContent = BRAND);
document.querySelectorAll("a.form-link").forEach(a => a.href = FORM_URL);
document.querySelectorAll("a.pay-link").forEach(a => a.href = PAY_URL);
document.querySelectorAll("a.mail-link").forEach(a => { a.href = "mailto:" + CONTACT_EMAIL; a.textContent = CONTACT_EMAIL; });
document.title = document.title.replace("Prescreen", BRAND);
