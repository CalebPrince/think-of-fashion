import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { productCategories } from '@/data/products'

export function ShopCategories() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="container-page">
        <div className="mb-14 flex flex-col gap-4 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            Shop
          </span>
          <h2 className="max-w-2xl text-4xl font-medium sm:text-5xl">
            Suits, shoes, and the details in between.
          </h2>
          <p className="max-w-lg text-muted-foreground">
            For gentlemen, ladies, and children. More categories on the way.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {productCategories.map((p) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              className="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-lg"
            >
              <img
                src={p.coverImage}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="relative z-10 flex items-end justify-between gap-2 p-4 text-white">
                <h3 className="font-serif text-lg">{p.shortTitle}</h3>
                <ArrowUpRight className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
