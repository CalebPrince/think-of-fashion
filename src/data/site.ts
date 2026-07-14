export const site = {
  name: 'Think Of Fashion',
  shortName: 'TOF',
  tagline: 'Bespoke Styling & Grooming',
  description:
    'Bespoke styling and grooming for corporate, casual, and wedding wardrobes — tailored in Accra, available to travel worldwide.',
  location: 'Accra, Ghana',
  phone: '+233242123316',
  phoneDisplay: '+233 24 212 3316',
  whatsappUrl: 'https://wa.me/message/VY2XPJ25LUYCD1',
} as const

export function telHref(phone: string = site.phone) {
  return `tel:${phone}`
}
