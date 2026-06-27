import type { Product, Category } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Satinbluse Rosalie',
    price: 79.95,
    image: '/feminine/blouse-loafers.png',
    category: 'Blusen',
    tag: 'NEU',
    colors: ['#fdf2f8', '#f7efe8', '#d8b4fe'],
    description:
      'Weiche Satinbluse im Styling mit weiter Fliederhose und kleiner Beuteltasche für einen ruhigen, femininen Look.',
  },
  {
    id: 2,
    name: 'Tailored Set Céleste',
    price: 149.0,
    image: '/feminine/collection-cream-suit.png',
    category: 'Tailoring',
    tag: 'BESTSELLER',
    colors: ['#fff7ed', '#f3e8ff', '#c4b5fd'],
    description:
      'Ärmellose Weste mit passender Wide-Leg-Hose, kombiniert zu einem eleganten Flieder-Look mit cleanem Finish.',
  },
  {
    id: 3,
    name: 'Abendkleid Éloise',
    price: 129.0,
    originalPrice: 169.0,
    image: '/feminine/evening-dress.png',
    category: 'Kleider',
    tag: 'SALE',
    colors: ['#fce7f3', '#f9a8d4', '#fde68a'],
    description:
      'Drapiertes Satinabendkleid mit seidigem Glanz und femininer Silhouette für besondere Anlässe.',
  },
  {
    id: 4,
    name: 'Satinrock Mira',
    price: 69.95,
    image: '/feminine/knit-skirt.png',
    category: 'Röcke',
    tag: 'BESTSELLER',
    colors: ['#fdf2f8', '#e9d5ff', '#f7efe8'],
    description:
      'Fließender Satinrock im Styling mit feinem Ripp-Top für einen leichten, femininen Alltagslook.',
  },
  {
    id: 5,
    name: 'Hemdblusenkleid Alba',
    price: 94.0,
    originalPrice: 124.0,
    image: '/feminine/collection-linen-dress.png',
    category: 'Kleider',
    tag: 'SALE',
    colors: ['#f7efe8', '#fce7f3', '#dfc8b5'],
    description:
      'Luftiges Hemdblusenkleid mit Bindegürtel und natürlicher Leichtigkeit für warme Tage.',
  },
  {
    id: 6,
    name: 'Bluse Violette',
    price: 59.95,
    originalPrice: 89.95,
    image: '/feminine/blouse.png',
    category: 'Blusen',
    tag: 'SALE',
    colors: ['#fff', '#fce7f3', '#e9d5ff'],
    description:
      'Zarte Rosébluse mit weichem Glanz, hier zu einer fließenden Hose gestylt und leicht in die Taille gesteckt.',
  },
  {
    id: 7,
    name: 'Shirt Dress Rosée',
    price: 89.95,
    image: '/feminine/shirt-dress.png',
    category: 'Kleider',
    tag: 'NEU',
    colors: ['#fdf2f8', '#ead5ff', '#f5d0c5'],
    description:
      'Klassisches Shirt Dress in sanftem Blush mit Taille zum Binden und entspannter Eleganz.',
  },
  {
    id: 8,
    name: 'Tailored Look Amélie',
    price: 139.0,
    image: '/feminine/tailored-look.png',
    category: 'Tailoring',
    tag: 'BESTSELLER',
    colors: ['#c4b5fd', '#f7efe8', '#e9d5ff'],
    description:
      'Souveränes Tailoring mit ärmelloser Weste und weiter Hose für einen klaren, femininen Auftritt.',
  },
  {
    id: 9,
    name: 'Wide-Leg Hose Camille',
    price: 74.95,
    originalPrice: 99.95,
    image: '/feminine/wide-leg-pants.png',
    category: 'Hosen',
    tag: 'SALE',
    colors: ['#f7efe8', '#dfc8b5', '#2d1f2e'],
    description:
      'Cremige Wide-Leg-Hose im monochromen Styling mit ärmellosem Top, hoher Taille und ruhigem Fall.',
  },
];

export const featuredProducts = products.slice(0, 8);
export const bestsellers = products.filter((product) => product.tag === 'BESTSELLER');
export const newArrivals = products.filter((product) => product.tag === 'NEU');
export const saleProducts = products.filter((product) => product.tag === 'SALE');

export const heroSlides = [
  {
    image: '/feminine/hero-blouse-pants.png',
    tag: 'NEUE KOLLEKTION',
    headline: 'Sanfte\nTailoring-Looks',
    sub: 'Blusen, weite Hosen und ruhige Silhouetten in Blush, Flieder und Creme.',
    cta: 'Kollektion entdecken',
    href: '/neuheiten',
    align: 'left',
  },
  {
    image: '/feminine/hero-tailored-set.png',
    tag: 'BESTSELLER',
    headline: 'Feminine\nEleganz',
    sub: 'Klar geschnittene Sets mit weichen Farben für Office, Dinner und Events.',
    cta: 'Bestseller shoppen',
    href: '/produkte',
    align: 'right',
  },
  {
    image: '/feminine/hero-evening-dress.png',
    tag: 'SALE BIS -50%',
    headline: 'Satin für\nbesondere Abende',
    sub: 'Drapierte Kleider mit glänzendem Finish und einer leichten, edlen Bewegung.',
    cta: 'Zum Sale',
    href: '/sale',
    align: 'left',
  },
] as const;

export const categories: Category[] = [
  {
    id: 1,
    name: 'Kleider',
    image: '/feminine/tile-linen-dress.png',
    href: '/produkte',
    count: 4,
  },
  {
    id: 2,
    name: 'Blusen & Tops',
    image: '/feminine/tile-knit-set.png',
    href: '/produkte',
    count: 3,
  },
  {
    id: 3,
    name: 'Tailoring',
    image: '/feminine/tile-shirt-dress.png',
    href: '/produkte',
    count: 2,
  },
  {
    id: 4,
    name: 'Hosen & Röcke',
    image: '/feminine/wide-leg-pants.png',
    href: '/produkte',
    count: 2,
  },
];

export const promoTiles = [
  {
    image: '/feminine/hero-blouse-pants.png',
    tag: 'Großer Sommer-Sale',
    headline: 'Bis zu\n50% Rabatt',
    sub: 'Ausgewählte feminine Pieces zu besonders schönen Preisen.',
    cta: 'Zum Sale',
    href: '/sale',
    align: 'left',
  },
  {
    image: '/feminine/hero-tailored-set.png',
    tag: 'Frisch eingetroffen',
    headline: 'Weiche\nSommerlooks',
    sub: 'Leichte Materialien, sanfte Farben und ein ruhiger, eleganter Fall.',
    cta: 'Neuheiten entdecken',
    href: '/neuheiten',
    align: 'right',
  },
  {
    image: '/feminine/hero-evening-dress.png',
    tag: 'Besondere Anlässe',
    headline: 'Satin &\nAbendmode',
    sub: 'Drapierte Kleider und elegante Silhouetten für lange Abende.',
    cta: 'Styles ansehen',
    href: '/produkte',
    align: 'left',
  },
] as const;

export const reviews = [
  {
    name: 'Sophia M.',
    location: 'München',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop&crop=face',
    text: 'Die Qualität wirkt sehr hochwertig und die Schnitte sind wirklich feminin, ohne aufgesetzt zu sein. Die Satinbluse ist mein Favorit.',
    rating: 5,
    product: 'Satinbluse Rosalie',
  },
  {
    name: 'Laura K.',
    location: 'Berlin',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&auto=format&fit=crop&crop=face',
    text: 'Endlich ein Shop mit einer ruhigen, edlen Bildsprache. Das Tailored Set passt perfekt zu meinem Stil.',
    rating: 5,
    product: 'Tailored Set Céleste',
  },
  {
    name: 'Emma R.',
    location: 'Hamburg',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80&auto=format&fit=crop&crop=face',
    text: 'Die Kleider wirken modern und weich zugleich. Besonders das Satinabendkleid sieht in echt noch besser aus.',
    rating: 5,
    product: 'Abendkleid Éloise',
  },
];
