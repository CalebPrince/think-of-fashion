export type Audience = 'men' | 'women' | 'kids'

export type ProductImage = {
  src: string
  audience: Audience
  alt: string
}

export type ProductCategory = {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  description: string
  longDescription: string
  coverImage: string
  gallery: ProductImage[]
  relatedOccasions: string[]
}

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`

export const productCategories: ProductCategory[] = [
  {
    slug: 'suits',
    title: 'Suits',
    shortTitle: 'Suits',
    tagline: 'Tailored suiting for every occasion',
    description:
      'Two-piece, three-piece, and formal suiting — tailored to fit, for men, women, and children.',
    longDescription:
      "A proper suit is built around your frame, not the other way around. We tailor two-piece, three-piece, and formal suiting for men, women, and children — sharp lines, considered fabric, and a fit that holds up whether you're in the boardroom or the wedding party.",
    coverImage: unsplash('1617244147299-5ef406921c35'),
    gallery: [
      { src: unsplash('1617244147299-5ef406921c35'), audience: 'men', alt: 'Man in a tailored black suit' },
      { src: unsplash('1762793194090-f9f3a3206a57'), audience: 'women', alt: 'Woman in a tailored navy suit by the sea' },
      { src: unsplash('1778166072491-e1023a912553'), audience: 'kids', alt: 'Two boys in cream formal suits with bowties' },
    ],
    relatedOccasions: ['corporate', 'weddings'],
  },
  {
    slug: 'shoes',
    title: 'Shoes',
    shortTitle: 'Shoes',
    tagline: 'Dress and formal footwear',
    description:
      'Oxfords, loafers, and heels — the finishing layer for a complete look, for the whole family.',
    longDescription:
      "The right pair of shoes finishes an outfit the way the wrong pair ruins it. We source and style dress shoes, loafers, and heels for men, women, and children — matched to your suiting and occasion, not just whatever's in stock.",
    coverImage: unsplash('1642978599217-287d0345389d'),
    gallery: [
      { src: unsplash('1642978599217-287d0345389d'), audience: 'men', alt: "Men's dress shoes" },
      { src: unsplash('1596703263926-eb0762ee17e4'), audience: 'women', alt: 'Black leather heeled shoes' },
      { src: unsplash('1519238263530-99bdd11df2ea'), audience: 'kids', alt: 'Child in smart casual outfit and shoes' },
    ],
    relatedOccasions: ['corporate', 'weddings', 'casual'],
  },
  {
    slug: 'sunglasses',
    title: 'Sunglasses',
    shortTitle: 'Sunglasses',
    tagline: 'Eyewear that finishes the look',
    description:
      'Statement and classic frames for men and women — the last five percent of a great outfit.',
    longDescription:
      "Eyewear is the detail people notice last and remember first. We help you pick frames that suit your face shape and your wardrobe — classic tortoiseshell, mirrored aviators, or something bolder — for men and women alike.",
    coverImage: unsplash('1600442715817-4d9c8b6c729f'),
    gallery: [
      { src: unsplash('1600442715817-4d9c8b6c729f'), audience: 'men', alt: 'Man wearing mirrored sunglasses and a gold chain' },
      { src: unsplash('1568782517100-09bf22d88c2d'), audience: 'women', alt: 'Woman wearing black sunglasses' },
      { src: unsplash('1642439048981-8d679ad5f843'), audience: 'kids', alt: 'Sunglasses on display' },
    ],
    relatedOccasions: ['casual', 'weddings'],
  },
  {
    slug: 'sneakers',
    title: 'Sneakers',
    shortTitle: 'Sneakers',
    tagline: 'Off-duty footwear, still styled',
    description:
      'Clean, considered sneakers for weekends, travel, and everyday wear — for the whole family.',
    longDescription:
      "Off-duty doesn't mean careless. We curate sneakers that hold up outside the office — clean silhouettes, versatile colourways, pieces that layer easily into a weekend or travel wardrobe for men, women, and kids.",
    coverImage: unsplash('1731021334973-86c34d58ab8d'),
    gallery: [
      { src: unsplash('1625697501168-8db2e03c1046'), audience: 'men', alt: 'White sneakers with black trousers' },
      { src: unsplash('1731021334973-86c34d58ab8d'), audience: 'women', alt: 'Woman in street style outfit and sneakers' },
      { src: unsplash('1519238263530-99bdd11df2ea'), audience: 'kids', alt: 'Child in casual outfit and shoes' },
    ],
    relatedOccasions: ['casual'],
  },
  {
    slug: 'shirts',
    title: 'Shirts & T-Shirts',
    shortTitle: 'Shirts',
    tagline: 'Dress shirts to everyday tees',
    description:
      'Dress shirts, blouses, and t-shirts — tailored basics for men, women, and children.',
    longDescription:
      "From a crisp dress shirt to a well-cut t-shirt, the basics carry the rest of the wardrobe. We tailor shirting and curate everyday tees for men, women, and children, so every layer fits as intentionally as the jacket over it.",
    coverImage: unsplash('1760433504922-b53f1bbb6f0f'),
    gallery: [
      { src: unsplash('1760433504922-b53f1bbb6f0f'), audience: 'men', alt: 'Man in a pink dress shirt and suspenders' },
      { src: unsplash('1763346757162-52d7f30f33ec'), audience: 'women', alt: 'Woman in a red and white blouse outfit' },
      { src: unsplash('1627223159197-389dff080ac3'), audience: 'kids', alt: 'Boy in a red graphic t-shirt' },
    ],
    relatedOccasions: ['corporate', 'casual'],
  },
  {
    slug: 'watches',
    title: 'Wrist Watches',
    shortTitle: 'Watches',
    tagline: 'The finishing accessory',
    description:
      'Classic and statement timepieces for men and women.',
    longDescription:
      'A good watch is one of the few accessories that works in every setting — boardroom, wedding, weekend. We help you choose a timepiece that matches your wardrobe and your occasion, for men and women.',
    coverImage: unsplash('1704783323023-08981fdf81f6'),
    gallery: [
      { src: unsplash('1704783323023-08981fdf81f6'), audience: 'men', alt: 'Luxury wrist watch close-up' },
      { src: unsplash('1651321225522-230f69f6561f'), audience: 'women', alt: 'Black watch with white face' },
      { src: unsplash('1519238263530-99bdd11df2ea'), audience: 'kids', alt: 'Child dressed in smart casual outfit' },
    ],
    relatedOccasions: ['corporate', 'weddings'],
  },
  {
    slug: 'socks',
    title: 'Socks',
    shortTitle: 'Socks',
    tagline: 'The small detail worth getting right',
    description:
      'Patterned and classic socks that complete a look from the ground up.',
    longDescription:
      "Socks are the detail that shows when you cross your legs or sit down — and the one most wardrobes get wrong. We stock classic and patterned socks that complete a look, for men, women, and children.",
    coverImage: unsplash('1580973757787-e22cdecb9cd5'),
    gallery: [
      { src: unsplash('1580973757787-e22cdecb9cd5'), audience: 'men', alt: 'Colourful patterned socks' },
      { src: unsplash('1484071096222-7936a931e094'), audience: 'women', alt: 'Pairs of black socks' },
      { src: unsplash('1519238263530-99bdd11df2ea'), audience: 'kids', alt: 'Child dressed in smart casual outfit' },
    ],
    relatedOccasions: ['casual'],
  },
]

export function getProductCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug)
}
