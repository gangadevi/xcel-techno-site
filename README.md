# Xcel Techno website

React + Vite + Tailwind CSS v4.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in /dist
```

## Edit
- All text, services, projects and blog posts: `src/data/content.js`
- Brand colors: `src/index.css` (inside `@theme`)
- Contact form: connect a service in `src/components/Contact.jsx` (see the TODO)

## Git
```bash
git init && git add . && git commit -m "Initial site"
```

## Deploy
Upload the `dist` folder to Hostinger (public_html), or push to GitHub and use GitHub Pages.
