import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Kleider & Sets",
    sub: "Satin · Leinen · Midi",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&q=80&auto=format&fit=crop",
    href: "/produkte",
  },
  {
    name: "Blusen & Tops",
    sub: "Satin · Seide · Rippstrick",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&auto=format&fit=crop",
    href: "/produkte",
  },
  {
    name: "Röcke & Hosen",
    sub: "Marlene · Palazzo · Midi",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80&auto=format&fit=crop",
    href: "/produkte",
  },
  {
    name: "Blazer & Jacken",
    sub: "Oversize · Structured",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80&auto=format&fit=crop",
    href: "/produkte",
  },
];

export default function CategoryBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.3em] text-[#a855f7] font-medium uppercase mb-2">
          Kollektionen
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-[#2d1f2e]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Entdecke deine Kategorie
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {categories.map((cat) => (
          <Link key={cat.name} href={cat.href} className="group relative overflow-hidden rounded-sm">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                <h3
                  className="text-lg md:text-xl font-bold mb-0.5"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {cat.name}
                </h3>
                <p className="text-xs text-white/75">{cat.sub}</p>
              </div>
              <div className="absolute inset-0 bg-[#7e22ce]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
