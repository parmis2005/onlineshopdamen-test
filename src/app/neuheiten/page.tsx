import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";
import Image from "next/image";

const neuheiten: Product[] = [
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
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop",
    category: "Sets",
    tag: "NEU",
    colors: ["#c084fc", "#e9d5ff"],
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
    id: 10,
    name: "Beige Wide-Leg Hose",
    price: 84.95,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&auto=format&fit=crop",
    category: "Hosen",
    tag: "NEU",
    colors: ["#f7efe8", "#ecddd1", "#fff"],
  },
  {
    id: 11,
    name: "Lavendel Blazer-Hosen-Set",
    price: 219.00,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80&auto=format&fit=crop",
    category: "Sets",
    tag: "NEU",
    colors: ["#c084fc", "#e9d5ff"],
  },
];

export default function NeuheitenPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80&auto=format&fit=crop"
            alt="Neuheiten"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#7e22ce]/70 via-[#7e22ce]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
              <p className="text-xs tracking-[0.3em] text-[#f9a8d4] font-medium uppercase mb-2">
                Frisch eingetroffen
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Neuheiten
              </h1>
              <p className="text-white/80 mt-2 text-sm">
                {neuheiten.length} neue Styles – werde die Erste, die sie trägt
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {neuheiten.map((product) => (
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
