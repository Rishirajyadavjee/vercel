# Rishi Portfolio — Vercel Deployment & Project Specifications

## 🚀 Frequently Asked Questions

### Is this project using Vite?
**YES!** This project uses **Vite (v5.4.21)** as its modern build tool and development server. 
- Multi-page configuration (`index.html` and `projects.html`) is defined in `vite.config.js`.
- Fast production bundling is handled via `npm run build` which outputs to the `dist/` directory.

---

## ⚡ Vercel Deployment Settings

When deploying to Vercel (via [vercel.com](https://vercel.com) or Vercel CLI), use the following configuration settings:

| Setting Key | Value / Value to Enter | Notes |
| :--- | :--- | :--- |
| **Framework Preset** | `Vite` | Auto-detected by Vercel |
| **Build Command** | `npm run build` | Runs `vite build` |
| **Output Directory** | `dist` | Generated bundle folder |
| **Install Command** | `npm install` | Installs devDependencies |
| **Node.js Version** | `18.x` or `20.x` | Standard LTS version |

---

## 🔑 Environment Variables & Keys (`.env`)

Since this is a client-side Vite project, all environment variables accessible in the browser **must be prefixed with `VITE_`**.

### Optional Recommended Keys & Values:

Create a `.env` file in the project root if you want to configure environment variables:

```env
# Website Base URL
VITE_SITE_URL=https://rishi-portfolio.vercel.app

# Optional Contact Form API / Webhook Endpoint
VITE_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit

# Optional Google Analytics Measurement ID
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

> **Note on Vercel Dashboard**: You can add these keys under **Project Settings > Environment Variables** on Vercel.

---

## 📁 Project Architecture & File Inventory

```
Rishi_portfolio/
├── index.html                 # Main Landing Page (Hero, Canvas Scroll Animation, Workflow, Palette, Stats, Global Studio, Growth Form)
├── projects.html              # Dedicated Projects Showcase Page (6 Project Cards, Process Methodology, Testimonials, Filters)
├── main.js                    # 240-Frame Canvas Scroll Animation & Lerp Inertia Controller
├── style.css                  # Design System Tokens, Modern Typography (Syne + Plus Jakarta Sans), Layout Grids & Dark Mesh
├── vite.config.js             # Vite Multi-Page Rollup Build Config (Bundles index.html & projects.html)
├── package.json               # Dependencies & Vite Scripts
├── ezgif-312a86b1faec8854-jpg/# 240 JPEG Frames for Smooth Canvas Scroll Playback
└── assets/                    # High-Quality Portfolio Showcase Photography
    ├── jacket.jpg
    ├── headphones.jpg
    ├── cosmetics.jpg
    ├── dashboard.jpg
    ├── fashion.jpg
    └── portrait.jpg
```

---

## 🛠️ Step-by-Step Vercel Deployment Instructions

### Option 1: Deploy via Vercel CLI (Fastest)

1. Open your terminal in the project directory:
   ```bash
   cd c:\laragon\www\Rishi_portfolio
   ```
2. Run Vercel CLI command:
   ```bash
   npx vercel
   ```
3. Follow the CLI prompts:
   - **Set up and deploy?** `Y`
   - **Which scope?** (Select your account)
   - **Link to existing project?** `N`
   - **What's your project's name?** `rishi-portfolio`
   - **In which directory is your code located?** `./`
4. For production deployment:
   ```bash
   npx vercel --prod
   ```

---

### Option 2: Deploy via GitHub / Vercel Dashboard

1. Push your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio with 3D Canvas Scroll Animation"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/rishi-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Click **"Import Project"** and select your GitHub repository.
4. Vercel will auto-detect **Vite**. Click **"Deploy"**.

---

## 🧪 Local Testing Before Deployment

- Run Development Server:
  ```bash
  npm run dev
  ```
- Build Production Bundle:
  ```bash
  npm run build
  ```
- Preview Local Production Build:
  ```bash
  npm run preview
  ```
