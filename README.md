# Ayshree Patro — Developer Portfolio Website

A professional, modern developer portfolio website built for **Ayshree Patro** (B.Tech CSE 3rd Year student at NIST University).

![Tech Stack](https://img.shields.io/badge/React-18.2-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Electric_Blue-0066FF?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.1-purple?logo=vite)
![Deploy](https://img.shields.io/badge/Deploy-Vercel%20%7C%20GitHub%20Pages-success)

---

## 🌟 Features Included

- **Electric Blue Theme**: Modern tech aesthetic with sleek glows, glassmorphism headers, and high contrast typography.
- **Dark / Light Mode**: Persisted dark mode toggle with system preference auto-detection.
- **Hero Section**: Large headline, tagline, animated tech showcase card, quick social links, and CTAs.
- **About Me**: Narrative bio detailing B.Tech CSE background, XAI research interest, NSS volunteering, and creative pursuits.
- **Research & Learning Interests**: Dedicated spotlight section framing Explainable AI (XAI) and *Rosetta-XAI* code translation research.
- **Categorized Skills**: Filterable badge cards for Programming Languages (Python, C, Java), Databases (MySQL, DBMS), and Tools (VS Code, IntelliJ IDEA, Google Colab, MySQL Workbench).
- **Interactive Projects Showcase**: 3 modern placeholder cards with "Coming Soon" status badges, progress meters, and release notifications.
- **Experience / Training Timeline**: Visual connected timeline highlighting training at NIST University (C++) and Lakshaya Academy (Advanced Python).
- **Beyond Academics / Achievements**: Multi-column breakdown for Cisco Certification, NSS Volunteering (Nasha Mukt Bharat camp), Telegraph Good Handwriting certification, and Singing certifications (LG, Kranti Institute, Lakshaya Academy, DAV School).
- **Contact Section**: Mailto email link, 1-click email copy button with toast response, and Instagram link.
- **Interactive Resume Modal**: Full digital CV preview modal with built-in PDF printing capabilities.

---

## 🚀 Instant Local Preview (Without Node.js)

You can preview the portfolio immediately by opening `preview.html` or `dist/index.html` in your web browser:

Double-click:
`C:\Users\Ayshree Patro\.gemini\antigravity\scratch\ayshree-portfolio\preview.html`

---

## 💻 Local Development (With Node & NPM)

1. Clone or open this repository in your code editor:
   ```bash
   cd ayshree-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your `ayshree-portfolio` repository.
4. Keep framework preset as **Vite** (Build command: `npm run build`, Output directory: `dist`).
5. Click **Deploy**. Vercel will automatically build and publish your site!

---

## 🐙 Deploying to GitHub Pages

### Option A: Automatic via GitHub Actions (Recommended)
This repository includes `.github/workflows/deploy.yml`.
1. Push your code to your main branch on GitHub.
2. In your repository settings on GitHub, go to **Pages**.
3. Under **Source**, select **GitHub Actions**.
4. GitHub will build and deploy your site automatically!

### Option B: Deploy via Command Line (`gh-pages`)
```bash
npm run deploy
```

---

## ✏️ How to Edit Your Portfolio Content

All text, links, research topics, and projects can be edited in a single central file:

`src/data/portfolioData.js`

Updating `portfolioData.js` will automatically reflect changes across the entire website!
