# Deb Gourab Biswas — Developer Portfolio

A modern, responsive developer portfolio built with **React**, **Vite**, and **Tailwind CSS** to showcase my Full Stack, MERN Stack, React, and Frontend development skills, projects, certifications, education, and contact information.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?logo=vercel&logoColor=white)](https://debgourab-biswas-portfolio.vercel.app/)
[![Repository](https://img.shields.io/badge/Repository-GitHub-181717?logo=github&logoColor=white)](https://github.com/debgourab/personal-portfolio-react)

## Live Portfolio

**Website:** [https://debgourab-biswas-portfolio.vercel.app/](https://debgourab-biswas-portfolio.vercel.app/)

## About the Project

This portfolio presents my technical background and hands-on web development work in a clean, recruiter-friendly format. It highlights practical experience with responsive frontend development, React applications, MERN Stack projects, REST APIs, and modern development workflows.

The site is designed as a fast, accessible single-page application with reusable React components, responsive layouts, theme support, animations, project showcases, downloadable resume access, and a working contact form powered by a Vercel Serverless Function and Resend.

## Key Features

- Responsive single-page portfolio for desktop, tablet, and mobile
- Dark and light theme with saved user preference
- Fixed navigation with active section highlighting
- Animated hero, cards, and section transitions
- About, technical skills, education, certifications, capabilities, projects, and contact sections
- Project cards with GitHub repositories and live demo links
- Certificate previews with external viewing support
- Downloadable resume
- Contact form with validation and email delivery
- Vercel Serverless API at `/api/contact`
- Resend integration for portfolio messages
- SEO metadata, Open Graph metadata, and custom favicon
- Reduced-motion support and scroll-to-top navigation

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, React DOM |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4, custom CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| API | Vercel Serverless Functions |
| Email | Resend |
| Quality | ESLint |
| Deployment | Vercel |
| Version Control | Git & GitHub |

## Project Structure

```text
personal-portfolio-react/
├── api/
│   └── contact.js
├── public/
│   ├── images/
│   │   ├── about/
│   │   ├── certificates/
│   │   ├── education/
│   │   ├── profile/
│   │   └── projects/
│   ├── resume/
│   ├── favicon.svg
│   └── logo.jpeg
├── src/
│   ├── components/
│   ├── data/
│   │   └── portfolioData.js
│   ├── hooks/
│   ├── sections/
│   ├── utils/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm
- Git

### Installation

```bash
git clone https://github.com/debgourab/personal-portfolio-react.git
cd personal-portfolio-react
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Environment Variables

The contact form uses a Vercel Serverless Function and Resend.

```env
RESEND_API_KEY=re_your_resend_api_key
CONTACT_FROM_EMAIL="Portfolio <verified-sender@yourdomain.com>"
CONTACT_TO_EMAIL=your-email@example.com
CONTACT_ALLOWED_ORIGIN=https://your-production-domain.vercel.app
VITE_CONTACT_ENDPOINT=/api/contact
```

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Secret Resend API key used by the serverless function |
| `CONTACT_FROM_EMAIL` | Verified sender address configured in Resend |
| `CONTACT_TO_EMAIL` | Address that receives portfolio contact messages |
| `CONTACT_ALLOWED_ORIGIN` | Allowed production origin for the contact API |
| `VITE_CONTACT_ENDPOINT` | Frontend endpoint used to submit the form |

> **Security:** Never commit real API keys or secrets to GitHub. Store production values in **Vercel → Project Settings → Environment Variables**.

For Resend testing, you can use the test sender provided by Resend. For production, use a sender address from a verified domain.

## Contact Form Flow

```text
Visitor
   ↓
React Contact Form
   ↓
POST /api/contact
   ↓
Vercel Serverless Function
   ↓
Resend API
   ↓
Portfolio Inbox
```

The API validates the submitted name, email, subject, and message before attempting delivery.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

## Updating Portfolio Content

Most portfolio content is centralized in:

```text
src/data/portfolioData.js
```

Use this file to update:

- Hero content and developer roles
- Social links
- About information
- Education and training
- Technical skills
- Certifications
- Development capabilities
- Featured projects
- Contact details
- Footer links

Images are stored under:

```text
public/images/
```

The downloadable resume is expected at:

```text
public/resume/Deb-Gourab-Biswas-Resume.pdf
```

## Deployment

The project is deployed on **Vercel**.

Recommended settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Before deploying:

```bash
npm run lint
npm run build
```

Then confirm that:

- Required environment variables are configured in Vercel
- `CONTACT_ALLOWED_ORIGIN` matches the production site URL
- Project GitHub and live-demo links are correct
- The resume file exists
- No secrets are committed to the repository

## Author

**Deb Gourab Biswas**  
Full Stack Developer | MERN Stack | React.js | JavaScript

- **Portfolio:** [debgourab-biswas-portfolio.vercel.app](https://debgourab-biswas-portfolio.vercel.app/)
- **GitHub:** [github.com/debgourab](https://github.com/debgourab)
- **Repository:** [personal-portfolio-react](https://github.com/debgourab/personal-portfolio-react)

---

If you find this project useful, feel free to explore the code and connect with me through the portfolio.
