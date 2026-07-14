export type Category = {
  slug: 'corporate' | 'casual' | 'weddings' | 'grooming'
  title: string
  shortTitle: string
  tagline: string
  description: string
  longDescription: string
  depositGHS: number
  coverImage: string
  gallery: string[]
  relatedProducts: string[]
}

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`

export const categories: Category[] = [
  {
    slug: 'corporate',
    title: 'Corporate Styling',
    shortTitle: 'Corporate',
    tagline: 'Boardroom-ready, tailored to your frame',
    description:
      'Sharp, considered tailoring for the office, client meetings, and everything in between.',
    longDescription:
      "Your wardrobe should work as hard as you do. We build a corporate capsule around fit, fabric, and versatility — suits, shirting, and separates tailored to your frame and your role, so you look considered in every room you walk into.",
    depositGHS: 800,
    coverImage: unsplash('1617244147299-5ef406921c35'),
    gallery: [
      unsplash('1617244147299-5ef406921c35'),
      unsplash('1738750908048-14200459c3c9'),
      unsplash('1611432579402-7037e3e2c1e4'),
      unsplash('1573496799515-eebbb63814f2'),
    ],
    relatedProducts: ['suits', 'shirts', 'shoes', 'watches'],
  },
  {
    slug: 'casual',
    title: 'Casual Styling',
    shortTitle: 'Casual',
    tagline: 'Off-duty, still put together',
    description:
      'Everyday pieces with intention — weekend, travel, and downtime wardrobes that still feel like you.',
    longDescription:
      "Casual doesn't mean careless. We curate everyday wardrobes — weekend, travel, downtime — built around pieces that fit well, layer easily, and hold up outside the office, so 'off-duty' still looks deliberate.",
    depositGHS: 500,
    coverImage: unsplash('1731021334973-86c34d58ab8d'),
    gallery: [
      unsplash('1731021334973-86c34d58ab8d'),
      unsplash('1771736823300-0426c311e07d'),
      unsplash('1614890094520-7b8dd0ec56d2'),
      unsplash('1675088396036-e986ffccc191'),
    ],
    relatedProducts: ['sneakers', 'sunglasses', 'shirts', 'socks'],
  },
  {
    slug: 'weddings',
    title: 'Wedding Styling',
    shortTitle: 'Weddings',
    tagline: 'For grooms, groomsmen, and the whole party',
    description:
      'From the proposal to the reception — coordinated, camera-ready looks for the entire wedding party.',
    longDescription:
      "One of the biggest days of your life deserves more than a rented suit. We style grooms and groomsmen from first fitting to final photo — coordinated palettes, proper tailoring, and a fit schedule that works around your wedding, not the other way around.",
    depositGHS: 1500,
    coverImage: unsplash('1695281536457-01f9a07c575b'),
    gallery: [
      unsplash('1695281536457-01f9a07c575b'),
      unsplash('1633150747731-c945ec51b663'),
      unsplash('1661332517932-2d441bfb2994'),
      unsplash('1661332306744-70f9ed1a7f40'),
    ],
    relatedProducts: ['suits', 'shoes', 'watches', 'sunglasses'],
  },
  {
    slug: 'grooming',
    title: 'Groom & Best Men Styling',
    shortTitle: 'Grooming',
    tagline: 'Every man in the wedding party, dressed as one',
    description:
      'Complete outfit sourcing, fittings, and coordination for the groom and his best men — wrapped up before the wedding day.',
    longDescription:
      "The groom shouldn't be scrambling for a suit the week of the wedding, and the best men shouldn't show up mismatched. We handle outfit sourcing, fittings, and coordination for the groom and his full best-man party — matching palettes, proper tailoring, and a schedule that wraps up well before the big day, so all anyone has to do is show up looking sharp.",
    depositGHS: 1200,
    coverImage: unsplash('1664646326780-e67cf77a24d1'),
    gallery: [
      unsplash('1664646326780-e67cf77a24d1'),
      unsplash('1755552370726-e8a4ce0250ee'),
      unsplash('1661332222138-fc1cf23dc0a2'),
      unsplash('1664645573936-d734d2cbb21b'),
    ],
    relatedProducts: ['suits', 'shoes', 'shirts', 'watches'],
  },
]

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug)
}
