# Xcel Techno website

React + Vite + Tailwind CSS v4.

## Run
```bash
npm install      # installs @emailjs/browser and updates package-lock.json
npm run dev      # http://localhost:5173
npm run build    # production files in /dist
```

## Before you launch (checklist)
1. **EmailJS IDs**: open `src/data/content.js` and replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`
   and `YOUR_PUBLIC_KEY` in `emailConfig`. Until then the form shows "not connected yet".
   The EmailJS template should use these variables: `{{name}}`, `{{contact}}`, `{{need}}`,
   `{{message}}`, with Reply-To set to `{{reply_to}}`.
2. **Website address**: in `index.html` replace `YOUR-DOMAIN.com` in the `og:image` line.
3. **Phone, WhatsApp, email, address**: all in `brand` at the top of `src/data/content.js`.
4. **Concept designs**: when you have real client work, replace the three items in `projects`
   (and change the "Concept designs" heading in `src/components/Work.jsx`).
5. Run Lighthouse in Chrome after deploying.

## Where things are
- All text, services, projects and contact details: `src/data/content.js`
- Brand colors: `src/index.css` (inside `@theme`). `tealink` is the darker teal used for small text on light backgrounds.
- `design-source/` holds the original logo PNG (not shipped to the website).
- Enquiry popup: `src/components/EnquiryModal.jsx`. Open it with a preset using
  `onOpenEnquiry({ need: 'Printing', message: '...' })`.

## Deploy
Upload the contents of `dist` to Hostinger (public_html), or push to GitHub and use GitHub Pages / Vercel.
