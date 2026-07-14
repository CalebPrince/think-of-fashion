# Think Of Fashion

Bespoke styling and grooming for corporate, casual, and wedding wardrobes. Based in Accra, Ghana, available to travel worldwide.

Live site built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Styling services** — Corporate, Casual, Weddings, and Groom & Best Men Styling, each with its own page, deposit-based booking, and gallery
- **Shop catalog** — Suits, Shoes, Sunglasses, Sneakers, Shirts & T-Shirts, Wrist Watches, and Socks, filterable by Gentlemen / Ladies / Children, with more categories planned
- **Cross-linking** between styling services and relevant shop categories ("Shop the Look" / "Perfect For")
- **Booking flow** with Paystack deposit checkout (client-side) and a WhatsApp fallback for enquiries
- **Contact** via WhatsApp and phone throughout the site

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Environment variables

Copy `.env.example` to `.env` and set your Paystack public key to enable online deposit payments:

```bash
cp .env.example .env
```

```
VITE_PAYSTACK_PUBLIC_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Without a key, the booking page falls back to a WhatsApp-only flow.

## Scripts

| Command           | Description                        |
| ------------------ | ----------------------------------- |
| `npm run dev`       | Start the Vite dev server           |
| `npm run build`     | Type-check and build for production |
| `npm run preview`   | Preview the production build        |
| `npm run lint`      | Run oxlint                          |

## Tech Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [React Router](https://reactrouter.com/)
- [Paystack Inline JS](https://paystack.com/docs/payments/accept-payments/) for deposit checkout

## Project Structure

```
src/
  components/
    icons/       # Custom icon components
    layout/      # Navbar, Footer, page shell
    sections/    # Homepage section blocks (Hero, Gallery, etc.)
    ui/          # shadcn/ui components
  data/          # Site content: categories.ts (services), products.ts (shop)
  lib/           # Utilities (Paystack helper, cn)
  pages/         # Route-level pages
```

## Deployment

Deployed on [Netlify](https://netlify.com) (a custom domain is planned). `netlify.toml` sets the build command, publish directory, and the SPA fallback redirect required for client-side routes (e.g. `/suits`, `/corporate`) to work on direct load/refresh.

To connect: in the Netlify dashboard, "Add new site" → "Import an existing project" → pick this GitHub repo. Build settings are picked up automatically from `netlify.toml`. Set `VITE_PAYSTACK_PUBLIC_KEY` under Site settings → Environment variables to enable live deposit payments.

## Notes

- Deposit amounts in `src/data/categories.ts` are placeholders — update to real pricing before launch.
- Shop category imagery in `src/data/products.ts` is placeholder photography — swap in real product photos once available.
