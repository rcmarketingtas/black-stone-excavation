# Blackstone Excavations

Premium one-page website for **Blackstone Excavations** — a professional excavation and earthmoving business serving Melbourne and regional Victoria.

Built with Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, and Lucide Icons.

## Features

- Full-screen cinematic hero with parallax and particle effects
- 12 service cards with hover animations
- Interactive masonry project gallery with filters and lightbox
- Draggable before/after comparison slider
- Animated process timeline and counter stats
- Customer review carousel
- Rough price estimate calculator
- Working contact form with validation (Resend email integration)
- SEO: meta tags, Open Graph, Twitter cards, JSON-LD LocalBusiness schema
- Mobile-first responsive design with floating call button

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (or pnpm/yarn)

### Installation

```bash
cd ~/Projects/black-stone-excavation
npm install
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file with the following:

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Your [Resend](https://resend.com) API key | Yes (for contact form) |
| `CONTACT_EMAIL` | Email address to receive enquiries | Yes |
| `CONTACT_FROM_EMAIL` | Verified sender domain in Resend (use `onboarding@resend.dev` for testing) | Yes |

Example:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=quotes@blackstoneexcavation.com.au
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

#### EmailJS Alternative

To use EmailJS instead of Resend, set these public env vars and update `Contact.tsx` to call the EmailJS SDK:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API (Resend)
│   ├── globals.css            # Design system & Tailwind theme
│   ├── layout.tsx             # Root layout, SEO, fonts
│   └── page.tsx               # Single-page composition
├── components/
│   ├── layout/                # Nav, footer, loader, floating buttons
│   ├── sections/              # All page sections
│   ├── shared/                # Reusable UI (headings, dividers, particles)
│   └── ui/                    # shadcn/ui components
├── hooks/                     # Custom React hooks
└── lib/
    ├── data.ts                # Site content & constants
    ├── utils.ts               # Utilities
    └── validations.ts         # Zod form schemas
```

## Customisation

- **Images**: Replace Unsplash URLs in `src/lib/data.ts`
- **Business info**: Update `SITE`, `SERVICE_AREAS`, `REVIEWS` in `src/lib/data.ts`
- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Contact form**: Configure Resend or switch to EmailJS

## Deployment

Deploy to [Vercel](https://vercel.com) or any Node.js host. Add environment variables in your hosting dashboard.

## License

Private — Blackstone Excavations.
