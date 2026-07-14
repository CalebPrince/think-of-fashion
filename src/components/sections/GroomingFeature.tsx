import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function GroomingFeature() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            Groom &amp; Best Men Styling
          </span>
          <h2 className="text-4xl font-medium sm:text-5xl">
            Every man in the wedding party, dressed as one.
          </h2>
          <p className="max-w-md text-muted-foreground">
            The groom's outfit is only half the picture. We source and
            coordinate looks for the best men too — matching palettes, proper
            tailoring, fittings scheduled well before the big day — so the
            whole wedding party photographs like they planned it together.
            Because they did.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/grooming"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Explore Grooming
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/book"
              className="inline-flex h-11 items-center rounded-md border border-border px-6 text-sm font-medium hover:bg-background"
            >
              Book a Fitting
            </Link>
          </div>
        </div>

        <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1664646326780-e67cf77a24d1?w=800&auto=format&fit=crop&q=80"
            alt="Groom and his best men in coordinated wedding suits"
            loading="lazy"
            className="col-span-2 aspect-[16/10] w-full rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1755552370726-e8a4ce0250ee?w=600&auto=format&fit=crop&q=80"
            alt="Best man adjusting a bow tie before the wedding"
            loading="lazy"
            className="aspect-square w-full rounded-lg object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1620511469298-7c119cc6982c?w=600&auto=format&fit=crop&q=80"
            alt="Groomsman in a styled grey suit"
            loading="lazy"
            className="aspect-square w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
