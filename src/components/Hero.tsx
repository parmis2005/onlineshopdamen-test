'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1800&q=85&auto=format&fit=crop&fit=crop",
    tag: "NEUE KOLLEKTION",
    headline: "Sommer,\ndie dich strahlen lässt",
    sub: "Leichte Kleider, zarte Farben – für Momente voller Leichtigkeit",
    cta: "Kollektion entdecken",
    href: "/neuheiten",
    align: "left",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1800&q=85&auto=format&fit=crop",
    tag: "BESTSELLER",
    headline: "Feminine\nEleganz",
    sub: "Zeitlose Pieces für jeden Anlass – von casual bis festlich",
    cta: "Bestseller shoppen",
    href: "/produkte",
    align: "right",
  },
  {
    image:
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=1800&q=85&auto=format&fit=crop",
    tag: "SALE BIS -50%",
    headline: "Große\nSommer-Sale",
    sub: "Entdecke traumhafte Pieces zu unschlagbaren Preisen",
    cta: "Zum Sale",
    href: "/sale",
    align: "left",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5500
    );
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className='relative h-[85vh] min-h-[520px] overflow-hidden'>
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={s.image}
            alt='Hero'
            fill
            priority={i === 0}
            className='object-cover object-top'
            sizes='100vw'
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 ${
          slide.align === 'left'
            ? 'bg-gradient-to-r from-black/50 via-black/20 to-transparent'
            : 'bg-gradient-to-l from-black/50 via-black/20 to-transparent'
        }`}
      />

      {/* Content */}
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
            {/* Tag */}
            <span className='inline-block bg-[#a855f7]/90 backdrop-blur-sm text-white text-xs font-semibold tracking-[0.2em] px-4 py-1.5 mb-5 rounded-sm'>
              {slide.tag}
            </span>

            {/* Headline */}
            <h1
              className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 whitespace-pre-line drop-shadow-lg'
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {slide.headline}
            </h1>

            {/* Subline */}
            <p className='text-base md:text-lg text-white/85 mb-8 font-light leading-relaxed'>
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className='flex flex-wrap gap-3'>
              <Link
                href={slide.href}
                className='bg-white text-[#7e22ce] px-8 py-3.5 text-sm font-semibold tracking-widest hover:bg-[#f3e8ff] transition-colors uppercase'
              >
                {slide.cta}
              </Link>
              <Link
                href='/produkte'
                className='border border-white/70 text-white px-8 py-3.5 text-sm font-medium tracking-widest hover:bg-white/10 transition-colors uppercase backdrop-blur-sm'
              >
                Alle Produkte
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2'>
        {slides.map((_, i) => (
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
