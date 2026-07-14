import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { site, telHref } from '@/data/site'
import { productCategories } from '@/data/products'
import { categories } from '@/data/categories'
import logo from '@/assets/tof-logo.jpg'

const shop = productCategories.map((p) => ({ title: p.title, href: `/${p.slug}` }))
const services = categories.map((c) => ({ title: c.title, href: `/${c.slug}` }))

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid grid-cols-1 gap-10 py-16 md:grid-cols-5">
        <div className="md:col-span-2 flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Think Of Fashion"
              className="h-12 w-12 rounded-md object-cover"
            />
            <span className="font-serif text-2xl tracking-[0.08em]">
              THINK OF FASHION
            </span>
          </Link>
          <p className="max-w-sm text-sm text-primary-foreground/70">
            {site.description}
          </p>
          <div className="flex gap-2 pt-2">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Message us on WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              <WhatsAppIcon className="size-4" />
            </a>
            <a
              href={telHref()}
              aria-label="Call us"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10"
            >
              <Phone className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <span className="mb-3 block text-xs uppercase tracking-widest text-primary-foreground/50">
            Shop
          </span>
          <div className="flex flex-col gap-2">
            {shop.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="w-max text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-3 block text-xs uppercase tracking-widest text-primary-foreground/50">
            Services
          </span>
          <div className="flex flex-col gap-2">
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="w-max text-sm text-primary-foreground/80 hover:text-primary-foreground hover:underline"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-3 block text-xs uppercase tracking-widest text-primary-foreground/50">
            Get in touch
          </span>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                {site.location}
                <br />
                Available to travel worldwide
              </span>
            </div>
            <a href={telHref()} className="hover:text-primary-foreground hover:underline">
              {site.phoneDisplay}
            </a>
            <Link
              to="/book"
              className="mt-1 w-max rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-primary-foreground/50 md:flex-row">
          <p>© {year} Think Of Fashion. All rights reserved.</p>
          <p>Bespoke Styling & Grooming — Accra, Ghana</p>
        </div>
      </div>
    </footer>
  )
}
