import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";
import Image from "next/image";

const saleProducts: Product[] = [
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
  },
  {
    id: 12,
    name: "Rosa Leinenkleid mit Gürtel",
    price: 99.00,
    originalPrice: 139.00,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "SALE",
    colors: ["#fce7f3", "#f9a8d4"],
  },
  {
    id: 17,
    name: "Satin-Maxikleid Rosé mit Schlitz",
    price: 84.95,
    originalPrice: 119.95,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "SALE",
    colors: ["#f9a8d4", "#fce7f3"],
  },
  {
    id: 18,
    name: "Lavendel Satin-Rock",
    price: 54.95,
    originalPrice: 79.95,
    image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80&auto=format&fit=crop",
    category: "Röcke",
    tag: "SALE",
    colors: ["#e9d5ff", "#c084fc"],
  },
  {
    id: 19,
    name: "Beige Palazzo-Hose",
    price: 64.95,
    originalPrice: 94.95,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&auto=format&fit=crop",
    category: "Hosen",
    tag: "SALE",
    colors: ["#f7efe8", "#ecddd1"],
  },
  {
    id: 20,
    name: "Lavendel Blazer-Set",
    price: 159.00,
    originalPrice: 219.00,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80&auto=format&fit=crop",
    category: "Sets",
    tag: "SALE",
    colors: ["#c084fc", "#e9d5ff"],
  },
];

const saleCategories = ["Alle", "Kleider", "Röcke", "Hosen", "Jacken", "Sets"];

export default function SalePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="relative overflow-hidden bg-[#1a1020]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80&auto=format&fit=crop"
              alt="Sale"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center text-white">
            <span className="inline-block bg-[#e0006f] text-white text-xs font-bold tracking-[0.25em] px-4 py-1.5 mb-6 uppercase">
              Großer Sommer-Sale
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Bis zu{" "}
              <span className="text-[#f9a8d4]">50% Rabatt</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
              Satin-Kleider, Lavendel-Blazer, weite Hosen und elegante Röcke – jetzt zum besten Preis.
            </p>

            <div className="flex justify-center gap-4 mt-8">
              {[
                { val: "02", label: "Tage" },
                { val: "14", label: "Stunden" },
                { val: "37", label: "Minuten" },
                { val: "52", label: "Sekunden" },
              ].map((t) => (
                <div key={t.label} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded px-4 py-2 min-w-[56px]">
                    <p className="text-2xl font-bold text-[#f9a8d4]">{t.val}</p>
                  </div>
                  <p className="text-xs text-white/50 mt-1">{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#fdf8f5] border-b border-[#e9d5ff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-3 justify-center">
            {["-20%", "-30%", "-40%", "-50%"].map((d) => (
              <button
                key={d}
                className="px-5 py-2 text-sm font-bold border-2 border-[#e0006f] text-[#e0006f] hover:bg-[#e0006f] hover:text-white rounded-sm transition-colors"
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-wrap gap-2 mb-8">
            {saleCategories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full border border-[#e9d5ff] bg-white text-[#2d1f2e] hover:border-[#a855f7] hover:text-[#7e22ce] transition-all first:bg-[#7e22ce] first:text-white first:border-[#7e22ce]"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
