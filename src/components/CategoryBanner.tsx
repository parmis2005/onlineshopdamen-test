import Link from 'next/link';
import Image from 'next/image';

import { categories } from '@/data/shopContent';

export default function CategoryBanner() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 py-16'>
      <div className='text-center mb-10'>
        <p className='text-xs tracking-[0.3em] text-[#d9468c] font-medium uppercase mb-2'>
          Kollektionen
        </p>
        <h2
          className='text-3xl md:text-4xl font-bold text-[#2d1f2e]'
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Entdecke deine Kategorie
        </h2>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5'>
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className='group relative overflow-hidden rounded-[1rem] shadow-[0_10px_30px_rgba(91,33,182,0.08)]'
          >
            <div className='aspect-[3/4] relative overflow-hidden'>
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className='object-cover object-center transition-transform duration-700 group-hover:scale-105'
                sizes='(max-width: 768px) 50vw, 25vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#1f1326]/68 via-[#1f1326]/10 to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white'>
                <h3
                  className='text-lg md:text-xl font-bold mb-0.5'
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {cat.name}
                </h3>
                <p className='text-xs text-white/75'>{cat.count} Styles</p>
              </div>
              <div className='absolute inset-0 bg-[#e85d9a]/18 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
