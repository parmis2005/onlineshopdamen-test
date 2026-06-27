import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophia M.",
    location: "München",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop&crop=face",
    text: "Die Qualität der Kleider ist absolut fantastisch! Das Midi-Kleid Rosalie sitzt perfekt und ich bekomme ständig Komplimente dafür.",
    rating: 5,
    product: "Midi-Kleid Rosalie",
  },
  {
    name: "Laura K.",
    location: "Berlin",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&auto=format&fit=crop&crop=face",
    text: "Schnelle Lieferung, traumhafte Verpackung und die Kleidung übertrifft alle Erwartungen. Mein neuer Lieblings-Onlineshop!",
    rating: 5,
    product: "Sommerkleid Luna",
  },
  {
    name: "Emma R.",
    location: "Hamburg",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80&auto=format&fit=crop&crop=face",
    text: "Endlich ein Onlineshop der wirklich feminine und elegante Mode bietet. Die Bluse passt wie maßgeschneidert!",
    rating: 5,
    product: "Bluse Violette",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-[#faf5ff] via-[#fff0f6] to-[#fdf8f5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-[#a855f7] font-medium uppercase mb-2">
            Kundenstimmen
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#2d1f2e]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Was unsere Kundinnen sagen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-sm p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-[#f3e8ff]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              <p className="text-sm text-[#444] leading-relaxed mb-6 italic">
                &quot;{r.text}&quot;
              </p>

              <div className="border-t border-[#f3e8ff] pt-4 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full overflow-hidden bg-[#e9d5ff] flex-shrink-0"
                  style={{
                    backgroundImage: `url(${r.avatar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div>
                  <p className="text-sm font-semibold text-[#2d1f2e]">{r.name}</p>
                  <p className="text-xs text-[#a855f7]">{r.location} · {r.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#e9d5ff] pt-12">
          {[
            { icon: "🚚", label: "Kostenloser Versand", sub: "Ab 59 € Bestellwert" },
            { icon: "↩️", label: "30 Tage Rückgabe", sub: "Einfach & kostenlos" },
            { icon: "🔒", label: "Sicher zahlen", sub: "SSL-verschlüsselt" },
            { icon: "✨", label: "Premium Qualität", sub: "Sorgfältig ausgewählt" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-sm font-semibold text-[#2d1f2e] mb-1">{item.label}</p>
              <p className="text-xs text-[#999]">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
