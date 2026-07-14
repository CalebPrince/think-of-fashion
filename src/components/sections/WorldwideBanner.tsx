import { Plane } from 'lucide-react'
import { site } from '@/data/site'

export function WorldwideBanner() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="container-page flex flex-col items-center gap-4 py-14 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20">
            <Plane className="size-5" />
          </span>
          <div>
            <h3 className="font-serif text-2xl">Available to travel worldwide</h3>
            <p className="text-sm text-primary-foreground/70">
              Based in {site.location} — fittings and grooming sessions on
              location, wherever the occasion takes you.
            </p>
          </div>
        </div>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 shrink-0 items-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground hover:bg-accent/90"
        >
          Enquire About Travel
        </a>
      </div>
    </section>
  )
}
