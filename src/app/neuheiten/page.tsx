import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types";
import Image from "next/image";

const neuheiten: Product[] = [
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
    id: 4,
    name: "Weite Leinenhose Paloma",
    price: 74.95,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop",
    category: "Hosen",
    tag: "NEU",
    colors: ["#f7efe8", "#d8b4fe", "#2d1f2e"],
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
    id: 9,
    name: "Romantische Corsage Amour",
    price: 79.95,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80&auto=format&fit=crop",
    category: "Tops",
    tag: "NEU",
    colors: ["#fce7f3", "#c084fc"],
  },
  {
    id: 13,
    name: "Rüschenbluse Cherie",
    price: 69.95,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80&auto=format&fit=crop",
    category: "Blusen",
    tag: "NEU",
    colors: ["#fff", "#f9a8d4"],
  },
  {
    id: 14,
    name: "Maxi-Kleid Aurora mit Schlitz",
    price: 139.0,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "NEU",
    colors: ["#2d1f2e", "#7e22ce", "#fdf2f8"],
  },
  {
    id: 15,
    name: "Plissee-Rock Lea",
    price: 52.95,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80&auto=format&fit=crop",
    category: "Röcke",
    tag: "NEU",
    colors: ["#f9a8d4", "#c084fc", "#f7efe8"],
  },
  {
    id: 16,
    name: "Wickelkleid Sakura mit Blumenprint",
    price: 94.0,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
    category: "Kleider",
    tag: "NEU",
    colors: ["#fce7f3", "#fff"],
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
