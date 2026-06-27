'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { heroSlides } from '@/data/shopContent';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className='relative h-[78vh] lg:h-[82vh] min-h-[580px] overflow-hidden bg-[#f3d8df]'>
      {heroSlides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={s.image}
            alt='Feminine Fashion Hero'
            fill
            priority={i === 0}
            className='object-contain object-center p-4 md:p-8 lg:p-10'
            sizes='100vw'
          />
        </div>
      ))}

      <div
        className={`absolute inset-0 ${
          slide.align === 'left'
            ? 'bg-gradient-to-r from-[#2d1f2e]/46 via-[#2d1f2e]/18 to-transparent'
            : 'bg-gradient-to-l from-[#2d1f2e]/46 via-[#2d1f2e]/18 to-transparent'
        }`}
      />

      <div
        className={`absolute inset-0 flex items-center ${
          slide.align === 'left' ? 'justify-start' : 'justify-end'
        }`}
      >
        <div
          className={`max-w-7xl w-full mx-auto px-6 md:px-12 flex ${
            slide.align === 'left' ? 'justify-start' : 'justify-end'
          }`}
        >
          <div className='max-w-xl text-white'>
            <span className='inline-block bg-[#e85d9a]/90 backdrop-blur-sm text-white text-xs font-semibold tracking-[0.2em] px-4 py-1.5 mb-5 rounded-full'>
              {slide.tag}
            </span>

            <h1
              className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 whitespace-pre-line drop-shadow-lg'
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {slide.headline}
            </h1>

            <p className='text-base md:text-lg text-white/86 mb-8 font-light leading-relaxed max-w-lg'>
              {slide.sub}
            </p>

            <div className='flex flex-wrap gap-3'>
              <Link
                href={slide.href}
                className='bg-white text-[#b4236f] px-8 py-3.5 text-sm font-semibold tracking-widest hover:bg-[#fff0f6] transition-colors uppercase rounded-full'
              >
                {slide.cta}
              </Link>
              <Link
                href='/produkte'
                className='border border-white/70 text-white px-8 py-3.5 text-sm font-medium tracking-widest hover:bg-white/10 transition-colors uppercase backdrop-blur-sm rounded-full'
              >
                Alle Produkte
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2'>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
