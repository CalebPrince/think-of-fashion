import { Link, Navigate, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { getProductCategory, type Audience } from '@/data/products'
import { getCategory } from '@/data/categories'
import { site } from '@/data/site'

const audienceLabels: Record<Audience, string> = {
  men: 'Gentlemen',
  women: 'Ladies',
  kids: 'Children',
}

export default function ProductCategoryPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace('/', '')
  const product = getProductCategory(slug)

  if (!product) return <Navigate to="/" replace />

  const audiences: Audience[] = ['men', 'women', 'kids']
  const relatedOccasions = product.relatedOccasions
    .map((s) => getCategory(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))

  return (
    <>
      <section className="relative flex min-h-[60dvh] items-end overflow-hidden bg-primary">
        <img
          src={product.coverImage}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="container-page relative z-10 flex flex-col gap-4 pb-16 pt-32 text-white">
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            Shop {site.name}
          </span>
          <h1 className="max-w-2xl text-5xl font-medium sm:text-6xl">
            {product.title}
          </h1>
          <p className="max-w-lg text-lg text-white/80">{product.tagline}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {product.longDescription}
            </p>

            <Tabs defaultValue="men" className="mt-10">
              <TabsList className="h-auto w-full justify-start gap-1 bg-secondary p-1 sm:w-auto">
                {audiences.map((a) => (
                  <TabsTrigger key={a} value={a} className="px-4 py-2 text-sm">
                    {audienceLabels[a]}
                  </TabsTrigger>
                ))}
              </TabsList>
              {audiences.map((a) => {
                const images = product.gallery.filter((img) => img.audience === a)
                return (
                  <TabsContent key={a} value={a} className="mt-6">
                    {images.length > 0 ? (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {images.map((img) => (
                          <img
                            key={img.src}
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="aspect-[4/5] w-full rounded-lg object-cover"
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {audienceLabels[a]}'s {product.shortTitle.toLowerCase()} coming
                        soon — ask us on WhatsApp.
                      </p>
                    )}
                  </TabsContent>
                )
              })}
            </Tabs>

            {relatedOccasions.length > 0 && (
              <div className="mt-14 border-t border-border pt-10">
                <h2 className="text-sm uppercase tracking-[0.2em] text-accent">
                  Perfect For
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {relatedOccasions.map((occ) => (
                    <Link
                      key={occ.slug}
                      to={`/${occ.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary"
                    >
                      {occ.shortTitle}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-lg border border-border bg-card p-6">
              <h2 className="font-serif text-2xl">Interested?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We're building out {product.shortTitle.toLowerCase()} inventory. Message
                us for availability, pricing, and sizing — or book a full styling
                consultation.
              </p>
              <a
                href={`${site.whatsappUrl}?text=${encodeURIComponent(
                  `Hi Think Of Fashion, I'm interested in your ${product.title}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 text-base font-medium text-accent-foreground hover:bg-accent/90"
              >
                <WhatsAppIcon className="size-4" />
                Enquire on WhatsApp
              </a>
              <Link
                to="/book"
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-md border border-border px-6 text-base font-medium hover:bg-secondary"
              >
                Book a Styling Consultation
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
