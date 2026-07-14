import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '@/data/categories'

export function Categories() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mb-14 flex flex-col gap-4 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            What We Style
          </span>
          <h2 className="max-w-2xl text-4xl font-medium sm:text-5xl">
            A wardrobe for every part of your life.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/${cat.slug}`}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-lg"
            >
              <img
                src={cat.coverImage}
                alt={cat.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="relative z-10 flex items-end justify-between gap-2 p-5 text-white">
                <div>
                  <h3 className="font-serif text-2xl">{cat.shortTitle}</h3>
                  <p className="mt-1 text-xs text-white/70">{cat.tagline}</p>
                </div>
                <ArrowUpRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
