import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { site } from '@/data/site'

const pillars = ['Corporate', 'Casual', 'Weddings', 'Bespoke Grooming']

export function Hero() {
  return (
    <section className="relative flex min-h-[92dvh] items-end overflow-hidden bg-primary">
      <img
        src="https://images.unsplash.com/photo-1586232902955-df204f34b36e?w=1920&auto=format&fit=crop&q=80"
        alt="Tailored navy suit, styled by Think Of Fashion"
        className="absolute inset-0 h-full w-full object-cover object-[center_12%] opacity-80"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

      <div className="container-page relative z-10 flex w-full flex-col gap-8 pb-20 pt-40 text-white">
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-wrap gap-x-3 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/70"
        >
          {pillars.map((p) => (
            <motion.li
              key={p}
              variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
              className="after:ml-3 after:content-['/'] last:after:content-none"
            >
              {p}
            </motion.li>
          ))}
        </motion.ul>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="max-w-3xl text-5xl leading-[1.05] font-medium sm:text-6xl lg:text-7xl"
        >
          Inspired by You,
          <br />
          Tailored to Perfection.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="max-w-xl text-base text-white/80 sm:text-lg"
        >
          {site.name} blends bespoke tailoring with considered styling — for the
          boardroom, the weekend, and the wedding day. Based in {site.location},
          available to travel worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <Button
            asChild
            className="h-12 rounded-md bg-accent px-7 text-base text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/book">Book a Consultation</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 gap-2 rounded-md border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-4" />
              Chat on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
