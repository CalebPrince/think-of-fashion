import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import { categories } from '@/data/categories'

export function Gallery() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!carouselApi) return
    const update = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
    }
    update()
    carouselApi.on('select', update)
    return () => {
      carouselApi.off('select', update)
    }
  }, [carouselApi])

  return (
    <section className="py-24 sm:py-32">
      <div className="container-page mb-10 flex items-end justify-between gap-4 sm:mb-14">
        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            The Lookbook
          </span>
          <h2 className="max-w-lg text-4xl font-medium sm:text-5xl">
            A closer look at every service.
          </h2>
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous"
          >
            <ArrowLeft className="size-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next"
          >
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>

      <Carousel setApi={setCarouselApi} opts={{ dragFree: true }}>
        <CarouselContent className="ml-0 px-6 sm:px-8 lg:px-12">
          {categories.map((cat) => (
            <CarouselItem key={cat.slug} className="max-w-[320px] pl-4 lg:max-w-[380px]">
              <Link to={`/${cat.slug}`} className="group block rounded-lg">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                  <img
                    src={cat.coverImage}
                    alt={cat.title}
                    loading="lazy"
                    className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 text-white">
                    <h3 className="font-serif text-xl">{cat.title}</h3>
                    <p className="line-clamp-2 text-sm text-white/75">
                      {cat.description}
                    </p>
                    <span className="mt-2 flex items-center gap-1.5 text-sm">
                      Explore
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
