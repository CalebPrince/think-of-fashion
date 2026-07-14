import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { site, telHref } from '@/data/site'
import { productCategories } from '@/data/products'
import { categories } from '@/data/categories'
import logo from '@/assets/tof-logo.jpg'

const shopLinks = productCategories.map((p) => ({ to: `/${p.slug}`, label: p.shortTitle }))
const serviceLinks = categories.map((c) => ({ to: `/${c.slug}`, label: c.shortTitle }))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = !scrolled && pathname !== '/book'
  const linkColor = transparent
    ? 'text-white/85 hover:text-white'
    : 'text-foreground/80 hover:text-foreground'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-background/95 backdrop-blur-sm border-b border-border'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Think Of Fashion"
            className="h-11 w-11 rounded-md object-cover shadow-sm"
          />
          <span
            className={`font-serif text-xl tracking-[0.08em] transition-colors ${
              transparent ? 'text-white' : 'text-foreground'
            }`}
          >
            THINK OF FASHION
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wide outline-none transition-colors ${linkColor}`}
            >
              Shop
              <ChevronDown className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {shopLinks.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <Link to={link.to}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wide outline-none transition-colors ${linkColor}`}
            >
              Services
              <ChevronDown className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.to} asChild>
                  <Link to={link.to}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={telHref()}
            aria-label={`Call ${site.name} at ${site.phoneDisplay}`}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              transparent
                ? 'border-white/30 text-white hover:bg-white/10'
                : 'border-border text-foreground hover:bg-secondary'
            }`}
          >
            <Phone className="size-4" />
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Message ${site.name} on WhatsApp`}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              transparent
                ? 'border-white/30 text-white hover:bg-white/10'
                : 'border-border text-foreground hover:bg-secondary'
            }`}
          >
            <WhatsAppIcon className="size-4" />
          </a>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/book">Book Now</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className={`md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                transparent
                  ? 'border-white/30 text-white'
                  : 'border-border text-foreground'
              }`}
            >
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-3 font-serif tracking-[0.08em]">
                <img
                  src={logo}
                  alt="Think Of Fashion"
                  className="h-9 w-9 rounded-md object-cover"
                />
                THINK OF FASHION
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-2 flex flex-col gap-1 px-4">
              <Accordion type="multiple" defaultValue={['shop', 'services']}>
                <AccordionItem value="shop">
                  <AccordionTrigger className="text-base font-medium uppercase tracking-wide">
                    Shop
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1">
                      {shopLinks.map((link) => (
                        <SheetClose asChild key={link.to}>
                          <NavLink
                            to={link.to}
                            className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary"
                          >
                            {link.label}
                          </NavLink>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="services">
                  <AccordionTrigger className="text-base font-medium uppercase tracking-wide">
                    Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1">
                      {serviceLinks.map((link) => (
                        <SheetClose asChild key={link.to}>
                          <NavLink
                            to={link.to}
                            className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-secondary"
                          >
                            {link.label}
                          </NavLink>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <SheetClose asChild>
                <Link
                  to="/book"
                  className="mt-4 rounded-md bg-accent px-3 py-3 text-center text-base font-medium text-accent-foreground hover:bg-accent/90"
                >
                  Book Now
                </Link>
              </SheetClose>
              <div className="mt-4 flex items-center gap-3 px-3">
                <a
                  href={telHref()}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
                  aria-label={`Call ${site.name}`}
                >
                  <Phone className="size-4" />
                </a>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
                  aria-label={`Message ${site.name} on WhatsApp`}
                >
                  <WhatsAppIcon className="size-4" />
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
