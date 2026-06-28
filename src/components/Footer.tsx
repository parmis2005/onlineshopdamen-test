import Link from "next/link";

const footerLinks = {
  Shop: [
    { label: 'Neuheiten', href: '/neuheiten' },
    { label: 'Kleider', href: '/produkte' },
    { label: 'Blusen & Tops', href: '/produkte' },
    { label: 'Tailoring', href: '/produkte' },
    { label: 'Hosen & Röcke', href: '/produkte' },
    { label: 'Sale', href: '/sale' },
  ],
  Service: [
    { label: 'Über uns', href: '#' },
    { label: 'Kontakt', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Versand & Lieferung', href: '#' },
    { label: 'Rückgabe & Umtausch', href: '#' },
    { label: 'Größentabelle', href: '#' },
  ],
  Rechtliches: [
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
    { label: 'AGB', href: '#' },
    { label: 'Cookie-Einstellungen', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className='bg-[#1a1020] text-white'>
      {/* Main footer */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-16'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
          {/* Brand */}
          <div className='col-span-2 md:col-span-1'>
            <Link href='/' className='inline-block mb-5'>
              <span
                className='text-2xl font-bold tracking-[0.15em]'
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                <span className='text-[#f9a8d4]'>V</span>
                <span className='text-white'>ELORA</span>
              </span>
            </Link>
            <p className='text-sm text-white/50 leading-relaxed mb-6'>
              Feminine Mode für Frauen, die weiche Farben, klare Linien und elegante
              Silhouetten lieben.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className='text-xs font-bold tracking-[0.2em] text-[#c084fc] uppercase mb-5'>
                {section}
              </h4>
              <ul className='space-y-3'>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm text-white/50 hover:text-[#f9a8d4] transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Payment methods */}
      <div className='border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-xs text-white/30'>
            © 2025 VELORA Fashion GmbH · Alle Rechte vorbehalten
          </p>
          <div className='flex items-center gap-3 text-white/30'>
            <span className='text-xs'>Sichere Zahlung:</span>
            {['Visa', 'MC', 'PayPal', 'Klarna', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className='bg-white/10 px-2.5 py-1 rounded text-[10px] font-semibold text-white/60'
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
