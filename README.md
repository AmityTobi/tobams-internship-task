# Frontend Intern Assessment

A pixel-perfect, fully responsive static landing page built with **Next.js** and **Tailwind CSS** according to the official Figma design.

**Figma Design:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

**Live Deployment:** [https://tobams-internship-task.vercel.app/]  
**GitHub Repository:** [https://github.com/AmityTobi]

---

## Tech Stack

- **Next.js** — App Router
- **Tailwind CSS**
- **TypeScript**
- **next/font** — Nunito and Nunito Sans
- **next/image** — optimized images
- **Vercel** — deployment

---

## Getting Started

### Prerequisites

Ensure you have Node.js installed.

### Installation

1. Clone the repository:

```bash
git clone YOUR_GITHUB_REPO_URL_HERE
cd tobams-internship-task
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000` in your browser.

To create a production build:

```bash
npm run build
```

---

## Project Structure

```text
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── consultationCTA.tsx
│   ├── featureRow.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   └── lmsBlock.tsx
│   └── managementProgram.tsx
│   └── navbar.tsx
│   └── servicesSection.tsx
│   └── testimonials.tsx
│   └── trainingConsultant.tsx
│   └── transformationHub.tsx
└── public/
    └── images/
```

The landing page is divided into logical components under `/components`, while `app/page.tsx` is used to compose the page.

---

## Responsive Implementation

The page was implemented mobile-first with Tailwind CSS responsive utilities.

The layout was tested against the assessment's required viewport sizes:

- **425px** — Mobile
- **768px** — Tablet
- **1280px+** — Desktop

Tailwind's responsive prefixes (`sm:`, `md:`, and `lg:`) are used instead of custom CSS media queries.

---

## Design Decisions & Technical Assumptions

### Figma Fidelity

The implementation follows the supplied Figma design for layout, spacing, typography, colors, imagery, and responsive behavior.

### Testimonials

On mobile, only the first testimonial card is displayed to match the supplied mobile design. The complete testimonial layout is displayed at larger breakpoints.

### Typography

Nunito and Nunito Sans are loaded using `next/font` to provide optimized font loading and reduce layout shift.

### Images

Images are rendered with `next/image` for Next.js image optimization and responsive delivery.

### Accessibility

Semantic HTML elements such as `<nav>`, `<main>`, `<section>`, and `<footer>` are used throughout the page. Images include alternative text, and interactive links and buttons remain keyboard accessible.

### Styling

Tailwind CSS utility classes are used for styling. No additional CSS framework or UI component library is used.

### AI Tool Disclosure

Generative AI tools were used during development as an assistance tool for reviewing Tailwind implementations, responsive layout decisions, debugging, and code organization. The final implementation was reviewed and adjusted to match the supplied Figma design and assessment requirements.

---

## Known Issues

No known functional issues at the time of submission.

---

## Deployment

The project is deployed using Vercel.
