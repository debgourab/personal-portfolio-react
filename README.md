# Deb Gourab Biswas Portfolio

A modern, responsive personal portfolio for **Deb Gourab Biswas**. This project highlights frontend, React, MERN stack and full-stack development skills through a single-page portfolio with animated sections, project showcases, certificates, education details, services and a Vercel-powered contact form.

## Project Info

- **Author:** Deb Gourab Biswas
- **Repository:** [https://github.com/debgourab/personal-portfolio-react.git](https://github.com/debgourab/personal-portfolio-react.git)
- **Project type:** Personal portfolio website
- **Deployment target:** Vercel

## Features

- Responsive single-page portfolio layout
- Dark and light theme with saved user preference
- Fixed navigation with active section highlighting
- Animated hero, cards and section reveals
- About, skills, education, certifications, services, projects and contact sections
- Project cards with live demo and GitHub links
- Certificate image links that open in a new tab
- Vercel serverless contact API at `/api/contact`
- Resend email integration for contact form delivery
- SEO metadata, Open Graph metadata and custom favicon
- Scroll-to-top button and reduced-motion friendly animations

## Tech Stack

- **Frontend:** React 19, React DOM
- **Build tool:** Vite 8
- **Styling:** Tailwind CSS 4 with `@tailwindcss/vite`
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Backend/API:** Vercel Serverless Functions
- **Email service:** Resend
- **Linting:** ESLint
- **Package manager:** npm

## Project Structure

```text
personal-portfolio-react/
  api/
    contact.js
  public/
    images/
      about/
      certificates/
      education/
      profile/
      projects/
    resume/
    favicon.svg
    logo.jpeg
  src/
    components/
    data/
      portfolioData.js
    hooks/
    sections/
    utils/
    App.jsx
    index.css
    main.jsx
  .env
  .env.example
  .gitignore
  eslint.config.js
  index.html
  package.json
  package-lock.json
  vite.config.js
```

## Environment Variables

The project includes a local `.env` file with safe placeholder values. Replace those placeholders with real values before testing the contact form.

```env
RESEND_API_KEY=re_replace_with_your_resend_api_key
CONTACT_FROM_EMAIL="Portfolio <hello@yourdomain.com>"
CONTACT_TO_EMAIL=debgourabbiswas@gmail.com
CONTACT_ALLOWED_ORIGIN=https://your-vercel-domain.vercel.app
VITE_CONTACT_ENDPOINT=/api/contact
```

Use these variables as follows:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from Resend for sending contact form emails |
| `CONTACT_FROM_EMAIL` | Verified sender email in Resend |
| `CONTACT_TO_EMAIL` | Email address that receives portfolio messages |
| `CONTACT_ALLOWED_ORIGIN` | Production site URL allowed by the API CORS headers |
| `VITE_CONTACT_ENDPOINT` | Frontend endpoint for the contact form request |

For production, add the same environment variables in **Vercel Project Settings > Environment Variables**. Keep `VITE_CONTACT_ENDPOINT=/api/contact` when the frontend and serverless function are deployed together on Vercel.

Do not commit real secrets to GitHub. The `.gitignore` file already ignores `.env` and other local environment files.

## Run Locally

Make sure Node.js 20 or newer and npm are installed.

1. Clone the repository:

```bash
git clone https://github.com/debgourab/personal-portfolio-react.git
cd personal-portfolio-react
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env
```

Update `.env` with your Resend API key, verified sender email, receiver email and local or production URL.

4. Start the Vite development server:

```bash
npm run dev
```

5. Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

For full local contact form testing with the Vercel serverless API, install and use Vercel CLI:

```bash
npm install -g vercel
vercel dev
```

## Available Scripts

```bash
npm run dev
```

Starts the local Vite development server.

```bash
npm run build
```

Creates a production build in the `dist` folder.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks for the project.

## Deploy On Vercel

1. Push the project to GitHub:

```bash
git add .
git commit -m "Prepare portfolio for Vercel deployment"
git push origin main
```

2. Open [Vercel](https://vercel.com/) and import the GitHub repository.
3. Use the default Vite configuration:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

4. Add the environment variables in Vercel:

```text
RESEND_API_KEY
CONTACT_FROM_EMAIL
CONTACT_TO_EMAIL
CONTACT_ALLOWED_ORIGIN
VITE_CONTACT_ENDPOINT
```

5. Deploy the project.
6. After deployment, update `CONTACT_ALLOWED_ORIGIN` to the final production URL, then redeploy.

## Contact Form Setup

The contact form submits to `/api/contact`. The API route validates the form data, sends the email through Resend and returns a success or error message to the frontend.

Before the contact form can send emails:

1. Create or log in to a Resend account.
2. Verify the sender domain or sender email in Resend.
3. Generate a Resend API key.
4. Add the API key and email values to `.env` for local testing.
5. Add the same values to Vercel environment variables for production.

If `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` or `CONTACT_TO_EMAIL` is missing, the API will return a configuration error instead of sending an email.

## Updating Portfolio Content

Most portfolio data is stored in:

```text
src/data/portfolioData.js
```

Update this file to change:

- Navigation links
- Hero text and roles
- Social links
- About content
- Education entries
- Skills
- Certificates
- Services
- Projects
- Contact details
- Footer links

## Updating Images And Resume

Project, certificate, education, about and profile images are stored in:

```text
public/images/
```

Add the resume PDF at:

```text
public/resume/Deb-Gourab-Biswas-Resume.pdf
```

The resume path is configured in `src/data/portfolioData.js`.

## Pre-Deployment Checklist

Before deploying or pushing final changes:

```bash
npm run lint
npm run build
```

Also confirm:

- Real secrets are not committed to GitHub
- Environment variables are added in Vercel
- The resume PDF exists if the Download CV button should work
- All project live links and GitHub links are correct
- `CONTACT_ALLOWED_ORIGIN` matches the final deployed Vercel URL
