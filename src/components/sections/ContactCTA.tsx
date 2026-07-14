import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { site, telHref } from '@/data/site'

export function ContactCTA() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="container-page flex flex-col items-center gap-6 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">
          Book Your Fitting
        </span>
        <h2 className="max-w-2xl text-4xl font-medium sm:text-5xl">
          Let's build a wardrobe that actually fits.
        </h2>
        <p className="max-w-md text-muted-foreground">
          Reserve a consultation online, or reach us directly on WhatsApp or by
          phone — we're based in {site.location} and happy to travel.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/book"
            className="inline-flex h-12 items-center rounded-md bg-accent px-7 text-base font-medium text-accent-foreground hover:bg-accent/90"
          >
            Book a Consultation
          </Link>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-border px-6 text-base font-medium hover:bg-background"
          >
            <WhatsAppIcon className="size-4" />
            WhatsApp
          </a>
          <a
            href={telHref()}
            className="inline-flex h-12 items-center gap-2 rounded-md border border-border px-6 text-base font-medium hover:bg-background"
          >
            <Phone className="size-4" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
