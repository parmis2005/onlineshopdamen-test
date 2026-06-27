import ProductCard from "./ProductCard";
import type { Product } from "@/types";
import Link from "next/link";

const products: Product[] = [
  {
    id: 1,
    name: "Satin-Maxikleid in Rosé",
    price: 119.95,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "NEU",
    colors: ["#f9a8d4", "#e9d5ff", "#f7efe8"],
    description: "Fließendes Satin-Maxikleid mit Wasserfallausschnitt und elegantem Schlitz – für unvergessliche Abende.",
  },
  {
    id: 2,
    name: "Lavendel Marlene-Hose",
    price: 89.95,
    originalPrice: 129.95,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&auto=format&fit=crop",
    category: "Hosen",
    tag: "SALE",
    colors: ["#c084fc", "#f9a8d4", "#f7efe8"],
    description: "Weit geschnittene Marlene-Hose in Lavendel mit hohem Bund und elegantem Fall.",
  },
  {
    id: 3,
    name: "Linen Hemdblusenkleid Rosa",
    price: 129.00,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "BESTSELLER",
    colors: ["#fce7f3", "#f7efe8", "#fff"],
    description: "Leichtes Leinenkleid im Hemdblusen-Stil mit Bindegürtel – perfekt für warme Sommertage.",
  },
  {
    id: 4,
    name: "Satin-Midirock Lavendel",
    price: 79.95,
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&auto=format&fit=crop",
    category: "Röcke",
    tag: "NEU",
    colors: ["#e9d5ff", "#d8b4fe", "#c084fc"],
    description: "Gleitender Satin-Midirock mit zartem Schlitz – kombinierbar zu jedem Anlass.",
  },
  {
    id: 5,
    name: "Lavendel Oversized-Blazer",
    price: 139.00,
    originalPrice: 179.00,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80&auto=format&fit=crop",
    category: "Jacken",
    tag: "SALE",
    colors: ["#c084fc", "#a855f7", "#f3e8ff"],
    description: "Oversize-Blazer in Lavendel – das Statement-Piece für selbstbewusste Frauen.",
  },
  {
    id: 6,
    name: "Rosé Satin-Bluse",
    price: 74.95,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f8f2fc?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
    category: "Blusen",
    tag: "NEU",
    colors: ["#fce7f3", "#f9a8d4", "#fff"],
    description: "Seidige Oversize-Bluse in Rosé mit Brusttasche – elegant und komfortabel zugleich.",
  },
  {
    id: 7,
    name: "Weste-Set Lavendel",
    price: 159.00,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop&crop=top",
    hoverImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop",
    category: "Sets",
    tag: "NEU",
    colors: ["#c084fc", "#e9d5ff"],
    description: "Elegantes 2-teiliges Weste-Hosen-Set in Lavendel – perfekt für Büro und besondere Anlässe.",
  },
  {
    id: 8,
    name: "Strick-Set Cream",
    price: 109.00,
    originalPrice: 149.00,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&auto=format&fit=crop",
    category: "Sets",
    tag: "SALE",
    colors: ["#f7efe8", "#fff", "#ecddd1"],
    description: "Hochwertiges Strick-Zweiteiler-Set in Cream – Top und Midirock aus feiner Rippstrickware.",
  },
];

interface Props {
  title?: string;
  subtitle?: string;
  limit?: number;
  showLink?: boolean;
}

export default function ProductGrid({
  title = "Neuheiten",
  subtitle = "Entdecke die neuesten Pieces aus unserer Kollektion",
  limit = 8,
  showLink = true,
}: Props) {
  const displayed = products.slice(0, limit);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
        <div>
          <p className="text-xs tracking-[0.3em] text-[#a855f7] font-medium uppercase mb-2">
            Für dich ausgewählt
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#2d1f2e]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title}
          </h2>
          <p className="text-sm text-[#999] mt-2">{subtitle}</p>
        </div>
        {showLink && (
          <Link
            href="/produkte"
            className="text-sm font-semibold text-[#7e22ce] border-b-2 border-[#a855f7] pb-0.5 hover:border-[#7e22ce] transition-colors self-start md:self-auto whitespace-nowrap"
          >
            Alle Produkte →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {displayed.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
