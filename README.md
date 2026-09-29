# Nguyen Thi Anh Vy — Personal Portfolio & Engineering Profile

> **Computer Science Student @ Vietnam-Korea University of Information and Communication Technology (VKU)**  
> Passionate about Software Engineering, Applied AI, Mobile Systems, and Human-Centered UI/UX.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.26-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![JLPT](https://img.shields.io/badge/Japanese-JLPT_N4-orange?style=flat-square)](https://www.jlpt.jp/)

---

## 🌟 Overview

Welcome to the personal engineering portfolio of **Nguyen Thi Anh Vy** (グエン・ティ・アイン・ヴィ). 

This website is built with a bright, vibrant, and modern design language, showcasing technical competencies, research achievements, hackathon awards, practical project case studies, and a printable web resume.

---

## 🚀 Key Highlights

- **Academic Foundation**: Computer Science student at VKU (Class of 2028), with practical experience spanning full-stack web, cross-platform mobile apps, databases, and software architecture.
- **Featured Projects**:
  - 🏅 **ZenGaku**: University academic tracking & collaboration platform (*2nd Prize, Danang Hackathon*).
  - 🤖 **Color Blindness Assistant**: Assistive AI vocational guidance system for color vision deficiency (*Best Research Idea Award, VKU*).
  - 📱 **AI Aging Care**: Cross-platform Flutter application for elderly health monitoring with integrated emotion recognition AI.
- **International Exposure & Languages**:
  - **JLPT N4** Japanese Language Proficiency.
  - Selected delegate at the **Intercultural Innovation Student Camp in Bangkok, Thailand (2025)**.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend & Framework** | Next.js 15 (App Router), React 19, TypeScript |
| **Styling & Design** | Tailwind CSS, Lucide Icons, Glassmorphism, Warm Mesh Gradients |
| **Backend & AI Stack** | Node.js / Express, Python (FastAPI, PyTorch, OpenCV), Flutter |
| **Databases & DevOps** | PostgreSQL, Supabase, Firebase, Git / GitHub |

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm ci
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Production Build
```bash
npm run build
npm start
```

The production build is written to `.next`. This project does not enable
`output: 'export'`, so it does not produce an `out` directory.

### 4. Deploy to Vercel

Import `anhvy0904/profileMyself` and use the repository root (`.`) as the Root
Directory. `vercel.json` selects the Next.js framework, installs dependencies
with `npm ci`, builds with `npm run build`, and uses `.next` as the output.
Pushes to the connected production branch (`main`) trigger a new deployment.

Keep Next.js updated to a patched release: Vercel blocks deployments of
vulnerable versions, including the original Next.js 15.1.7 used by this project.
Commit both `package.json` and `package-lock.json` when updating dependencies.
The scoped PostCSS override keeps Next.js 15's CSS dependency on the patched
PostCSS 8 release used by the app; re-evaluate it when upgrading Next.js.

`wrangler.json` is a separate Cloudflare configuration and is not used by
Vercel. Its `out` asset directory requires a separately configured static
export; do not use Wrangler or `out` as the Vercel build/output settings.
The scripts in `scripts/` are legacy local dependency-repair utilities and
are not needed for a normal npm installation or Vercel deployment.

---

## 📬 Contact & Connect

- **Name**: Nguyen Thi Anh Vy (グエン・ティ・アイン・ヴィ)
- **GitHub**: [@anhvy0904](https://github.com/anhvy0904)
- **Email**: [anhvydn2005@gmail.com](mailto:anhvydn2005@gmail.com)
- **Location**: Da Nang, Vietnam

---

