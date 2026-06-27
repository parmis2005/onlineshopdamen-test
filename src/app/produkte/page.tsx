"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal, Grid2X2, LayoutGrid, ChevronDown } from "lucide-react";
import type { Product } from "@/types";

const allProducts: Product[] = [
  {
    id: 1,
    name: "Satin-Maxikleid in Rosé",
    price: 119.95,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "NEU",
    colors: ["#f9a8d4", "#e9d5ff", "#f7efe8"],
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
    id: 6,
    name: "Rosé Satin-Bluse",
    price: 74.95,
    image: "https://images.unsplash.com/photo-1485462537746-965f33f8f2fc?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
    category: "Blusen",
    tag: "NEU",
    colors: ["#fce7f3", "#f9a8d4", "#fff"],
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
    id: 9,
    name: "Rosé Spaghettiträger-Kleid",
    price: 94.95,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "NEU",
    colors: ["#f9a8d4", "#fce7f3"],
  },
  {
    id: 10,
    name: "Beige Wide-Leg Hose",
    price: 84.95,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&auto=format&fit=crop",
    category: "Hosen",
    colors: ["#f7efe8", "#ecddd1", "#fff"],
  },
  {
    id: 11,
    name: "Lavendel Blazer-Hosen-Set",
    price: 219.00,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80&auto=format&fit=crop&crop=top",
    category: "Sets",
    tag: "BESTSELLER",
    colors: ["#c084fc", "#e9d5ff"],
  },
  {
    id: 12,
    name: "Rosa Leinenkleid mit Gürtel",
    price: 99.00,
    originalPrice: 139.00,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "SALE",
    colors: ["#fce7f3", "#f9a8d4"],
  },
];

const categories = ["Alle", "Kleider", "Blusen", "Röcke", "Hosen", "Jacken", "Sets"];
const sortOptions = ["Empfohlen", "Neu eingetroffen", "Preis aufsteigend", "Preis absteigend", "Bestseller"];

export default function ProduktsPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [sort, setSort] = useState("Empfohlen");
  const [gridCols, setGridCols] = useState(4);

  const filtered =
    activeCategory === "Alle"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "Preis aufsteigend") return a.price - b.price;
    if (sort === "Preis absteigend") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="bg-gradient-to-r from-[#faf5ff] via-[#fff0f6] to-[#fdf8f5] py-12 border-b border-[#e9d5ff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="text-xs text-[#999] mb-3 flex gap-2">
              <span>Startseite</span>
              <span>/</span>
              <span className="text-[#7e22ce]">Alle Produkte</span>
            </nav>
            <h1
              className="text-3xl md:text-4xl font-bold text-[#2d1f2e]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Alle Produkte
            </h1>
            <p className="text-sm text-[#999] mt-1">{sorted.length} Produkte</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-wrap items-center gap-3 mb-6 pb-5 border-b border-[#e9d5ff]">
            <div className="flex flex-wrap gap-2 flex-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full border transition-all ${
                    activeCategory === cat
                      ? "bg-[#7e22ce] text-white border-[#7e22ce]"
                      : "bg-white text-[#2d1f2e] border-[#e9d5ff] hover:border-[#a855f7] hover:text-[#7e22ce]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-white border border-[#e9d5ff] text-[#2d1f2e] text-xs font-medium px-4 py-2 pr-8 rounded-sm outline-none cursor-pointer hover:border-[#a855f7] transition-colors"
                >
                  {sortOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" />
              </div>

              <div className="hidden md:flex items-center gap-1.5 border border-[#e9d5ff] rounded-sm p-1">
                <button onClick={() => setGridCols(4)} className={`p-1.5 rounded ${gridCols === 4 ? "bg-[#f3e8ff] text-[#7e22ce]" : "text-[#999]"}`}>
                  <LayoutGrid size={15} />
                </button>
                <button onClick={() => setGridCols(3)} className={`p-1.5 rounded ${gridCols === 3 ? "bg-[#f3e8ff] text-[#7e22ce]" : "text-[#999]"}`}>
                  <Grid2X2 size={15} />
                </button>
              </div>

              <button className="flex items-center gap-1.5 text-xs text-[#2d1f2e] border border-[#e9d5ff] rounded-sm px-3 py-2 hover:border-[#a855f7] transition-colors">
                <SlidersHorizontal size={13} />
                Filter
              </button>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 md:gap-6 ${gridCols === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
            {sorted.map((product) => (
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
