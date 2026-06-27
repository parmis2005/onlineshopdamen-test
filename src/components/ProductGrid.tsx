import ProductCard from "./ProductCard";
import type { Product } from "@/types";
import Link from "next/link";

const products: Product[] = [
  {
    id: 1,
    name: "Fließendes Sommerkleid Luna",
    price: 89.95,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "NEU",
    colors: ["#f9a8d4", "#c084fc", "#f7efe8"],
  },
  {
    id: 2,
    name: "Elegante Bluse Violette",
    price: 59.95,
    originalPrice: 89.95,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
    category: "Blusen",
    tag: "SALE",
    colors: ["#fff", "#fce7f3", "#e9d5ff"],
  },
  {
    id: 3,
    name: "Midi-Kleid Rosalie mit Spitzendetails",
    price: 119.0,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "BESTSELLER",
    colors: ["#fdf2f8", "#e9d5ff"],
  },
  {
    id: 4,
    name: "Weite Leinenhose Paloma",
    price: 74.95,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop",
    category: "Hosen",
    tag: "NEU",
    colors: ["#f7efe8", "#d8b4fe", "#2d1f2e"],
  },
  {
    id: 5,
    name: "Wickelkleid Serena in Lila",
    price: 98.0,
    originalPrice: 149.0,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "SALE",
    colors: ["#c084fc", "#f9a8d4"],
  },
  {
    id: 6,
    name: "Eleganter Jumpsuit Doux",
    price: 84.95,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f8f2fc?w=600&q=80&auto=format&fit=crop",
    category: "Jumpsuits",
    tag: "NEU",
    colors: ["#fce7f3", "#f3e8ff", "#f7efe8"],
  },
  {
    id: 7,
    name: "Maxirock Florence mit Blumenprint",
    price: 69.95,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop&crop=bottom",
    category: "Röcke",
    colors: ["#fdf2f8", "#f3e8ff"],
  },
  {
    id: 8,
    name: "Schulterfreies Top Bella",
    price: 44.95,
    originalPrice: 64.95,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop",
    category: "Tops",
    tag: "SALE",
    colors: ["#fff", "#fce7f3", "#e9d5ff", "#2d1f2e"],
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
