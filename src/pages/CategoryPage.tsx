import { Link, Navigate, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { getCategory } from '@/data/categories'
import { getProductCategory } from '@/data/products'
import { site } from '@/data/site'

export default function CategoryPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace('/', '')
  const category = getCategory(slug)

  if (!category) return <Navigate to="/" replace />

  const relatedProducts = category.relatedProducts
    .map((s) => getProductCategory(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <>
      <section className="relative flex min-h-[70dvh] items-end overflow-hidden bg-primary">
        <img
          src={category.coverImage}
          alt={category.title}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="container-page relative z-10 flex flex-col gap-4 pb-16 pt-32 text-white">
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            {site.name}
          </span>
          <h1 className="max-w-2xl text-5xl font-medium sm:text-6xl">
            {category.title}
          </h1>
          <p className="max-w-lg text-lg text-white/80">{category.tagline}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {category.longDescription}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {category.gallery.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${category.title} look ${i + 1}`}
                  loading="lazy"
                  className={`aspect-[3/4] w-full rounded-lg object-cover ${
                    i === 0 ? 'col-span-2 aspect-[16/10] sm:col-span-1 sm:aspect-[3/4]' : ''
                  }`}
                />
              ))}
            </div>

            {relatedProducts.length > 0 && (
              <div className="mt-14 border-t border-border pt-10">
                <h2 className="text-sm uppercase tracking-[0.2em] text-accent">
                  Shop the Look
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.slug}
                      to={`/${p.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
                    >
                      {p.shortTitle}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-lg border border-border bg-card p-6">
              <h2 className="font-serif text-2xl">Book This Service</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Secure your fitting with a refundable deposit. We'll confirm
                your date and take it from there.
              </p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl font-medium">
                  GHS {category.depositGHS.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">deposit</span>
              </div>
              <Link
                to={`/book?category=${category.slug}`}
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 text-base font-medium text-accent-foreground hover:bg-accent/90"
              >
                Book Now
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-md border border-border px-6 text-base font-medium hover:bg-secondary"
              >
                <WhatsAppIcon className="size-4" />
                Ask a Question
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
