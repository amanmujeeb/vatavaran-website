# Vatavaran Banquets & Lawns — Premium Vercel Site

A complete Next.js landing page redesign for Vatavaran Banquets & Lawns.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push the folder to GitHub and import it into Vercel. No special build settings are required.

## One required edit

Open `app/page.js` and replace:

```js
const WHATSAPP_NUMBER = 'YOUR_WHATSAPP_NUMBER';
```

with the venue's WhatsApp number in international format, without `+` or spaces.

The enquiry form then opens a pre-filled WhatsApp message.

## Images

The redesign currently uses the existing Vatavaran image assets from the current site so you can see the design immediately. Once you have higher-resolution originals, replace the five URLs in `app/page.js` for the best visual quality.
