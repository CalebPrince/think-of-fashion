import { useState } from 'react'

const testimonials = [
  {
    quote:
      "They rebuilt my entire work wardrobe in two fittings. I finally own suits that actually fit my shoulders.",
    name: 'Corporate Client',
    role: 'Accra, Ghana',
    image:
      'https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=200&auto=format&fit=crop&q=80',
  },
  {
    quote:
      "Styled me and all six groomsmen for the wedding — coordinated, on time, and every fitting handled remotely before they arrived.",
    name: 'Groom',
    role: 'Destination Wedding',
    image:
      'https://images.unsplash.com/photo-1728854287142-915a84b0852d?w=200&auto=format&fit=crop&q=80',
  },
  {
    quote:
      "Every best man got fitted without ever visiting Accra — sizes collected on WhatsApp, outfits ready two weeks before the wedding.",
    name: 'Best Man',
    role: 'Wedding Party',
    image:
      'https://images.unsplash.com/photo-1620511469298-7c119cc6982c?w=200&auto=format&fit=crop&q=80',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 sm:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-xl">
          <div className="relative mb-12 min-h-[100px] sm:min-h-[80px]">
            {testimonials.map((t, i) => (
              <p
                key={t.name}
                className={`absolute inset-0 text-xl leading-relaxed font-light text-foreground transition-all duration-500 ease-out sm:text-2xl ${
                  active === i
                    ? 'translate-y-0 opacity-100 blur-0'
                    : 'pointer-events-none translate-y-4 opacity-0 blur-sm'
                }`}
              >
                “{t.quote}”
              </p>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  className={`relative size-10 overflow-hidden rounded-full ring-2 ring-background transition-all duration-300 ease-out ${
                    active === i ? 'z-10 scale-110' : 'grayscale hover:scale-105 hover:grayscale-0'
                  }`}
                >
                  <img src={t.image} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            <div className="h-8 w-px bg-border" />

            <div className="relative min-h-[44px] flex-1">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-400 ease-out ${
                    active === i
                      ? 'translate-x-0 opacity-100'
                      : 'pointer-events-none -translate-x-2 opacity-0'
                  }`}
                >
                  <span className="text-sm font-medium text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
