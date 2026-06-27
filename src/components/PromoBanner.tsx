import Link from 'next/link';
import Image from 'next/image';

import { promoTiles } from '@/data/shopContent';

export default function PromoBanner() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 py-8'>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className='relative overflow-hidden rounded-[1.1rem] group aspect-[4/3] md:aspect-auto md:min-h-[480px] shadow-[0_10px_30px_rgba(91,33,182,0.08)]'>
          <Image
            src={promoTiles[0].image}
            alt={promoTiles[0].headline}
            fill
            className='object-cover object-center transition-transform duration-700 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#1f1326]/68 via-[#1f1326]/22 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white'>
            <span className='text-xs tracking-[0.25em] text-[#f9a8d4] font-semibold uppercase block mb-2'>
              {promoTiles[0].tag}
            </span>
            <h3
              className='text-3xl md:text-4xl font-bold mb-3 leading-tight whitespace-pre-line'
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {promoTiles[0].headline}
            </h3>
            <p className='text-white/80 text-sm mb-5 max-w-xs'>
              {promoTiles[0].sub}
            </p>
            <Link
              href={promoTiles[0].href}
              className='inline-block bg-white text-[#b4236f] px-7 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#fff0f6] transition-colors rounded-full'
            >
              {promoTiles[0].cta}
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          {promoTiles.slice(1).map((tile) => (
            <div
              key={tile.headline}
              className='relative overflow-hidden rounded-[1.1rem] group flex-1 min-h-[220px] shadow-[0_10px_30px_rgba(91,33,182,0.08)]'
            >
              <Image
                src={tile.image}
                alt={tile.headline}
                fill
                className='object-cover object-center transition-transform duration-700 group-hover:scale-105'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
              <div
                className={`absolute inset-0 ${
                  tile.align === 'right'
                    ? 'bg-gradient-to-r from-[#b4236f]/58 to-transparent'
                    : 'bg-gradient-to-r from-[#1f1326]/62 to-transparent'
                }`}
              />
              <div className='absolute inset-0 flex items-center p-6 md:p-8 text-white'>
                <div>
                  <span className='text-xs tracking-[0.2em] font-semibold text-[#f9a8d4] uppercase block mb-1'>
                    {tile.tag}
                  </span>
                  <h3
                    className='text-2xl md:text-3xl font-bold mb-3 whitespace-pre-line'
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {tile.headline}
                  </h3>
                  <p className='text-sm text-white/80 mb-4 max-w-sm'>
                    {tile.sub}
                  </p>
                  <Link
                    href={tile.href}
                    className='text-xs font-bold tracking-widest text-white border-b border-white/60 pb-0.5 hover:border-white transition-colors uppercase'
                  >
                    {tile.cta} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
