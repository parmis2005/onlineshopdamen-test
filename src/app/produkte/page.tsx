'use client';

import { useState } from 'react';
import { ChevronDown, Grid2X2, LayoutGrid, SlidersHorizontal } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/shopContent';

const categories = ['Alle', 'Kleider', 'Blusen', 'Röcke', 'Hosen', 'Tailoring'];
const sortOptions = [
  'Empfohlen',
  'Neu eingetroffen',
  'Preis aufsteigend',
  'Preis absteigend',
  'Bestseller',
];

export default function ProduktePage() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [sort, setSort] = useState('Empfohlen');
  const [gridCols, setGridCols] = useState(4);

  const filtered =
    activeCategory === 'Alle'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'Preis aufsteigend') return a.price - b.price;
    if (sort === 'Preis absteigend') return b.price - a.price;
    if (sort === 'Bestseller') {
      const rank = { BESTSELLER: 0, NEU: 1, SALE: 2 } as const;
      return (rank[a.tag ?? 'SALE'] ?? 3) - (rank[b.tag ?? 'SALE'] ?? 3);
    }
    return 0;
  });

  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <div className='bg-gradient-to-r from-[#faf5ff] via-[#fff0f6] to-[#fdf8f5] py-12 border-b border-[#e9d5ff]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <nav className='text-xs text-[#7b6d75] mb-3 flex gap-2'>
              <span>Startseite</span>
              <span>/</span>
              <span className='text-[#b4236f]'>Alle Produkte</span>
            </nav>
            <h1
              className='text-3xl md:text-4xl font-bold text-[#2d1f2e]'
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Alle Produkte
            </h1>
            <p className='text-sm text-[#7b6d75] mt-1'>{sorted.length} Produkte</p>
          </div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8'>
          <div className='flex flex-wrap items-center gap-3 mb-6 pb-5 border-b border-[#e9d5ff]'>
            <div className='flex flex-wrap gap-2 flex-1'>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full border transition-all ${
                    activeCategory === cat
                      ? 'bg-[#b4236f] text-white border-[#b4236f]'
                      : 'bg-white text-[#2d1f2e] border-[#e9d5ff] hover:border-[#e85d9a] hover:text-[#b4236f]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className='flex items-center gap-3'>
              <div className='relative'>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className='appearance-none bg-white border border-[#e9d5ff] text-[#2d1f2e] text-xs font-medium px-4 py-2 pr-8 rounded-full outline-none cursor-pointer hover:border-[#e85d9a] transition-colors'
                >
                  {sortOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                <ChevronDown
                  size={13}
                  className='absolute right-2.5 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none'
                />
              </div>

              <div className='hidden md:flex items-center gap-1.5 border border-[#e9d5ff] rounded-full p-1'>
                <button
                  onClick={() => setGridCols(4)}
                  className={`p-1.5 rounded-full ${
                    gridCols === 4 ? 'bg-[#f3e8ff] text-[#b4236f]' : 'text-[#999]'
                  }`}
                >
                  <LayoutGrid size={15} />
                </button>
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-1.5 rounded-full ${
                    gridCols === 3 ? 'bg-[#f3e8ff] text-[#b4236f]' : 'text-[#999]'
                  }`}
                >
                  <Grid2X2 size={15} />
                </button>
              </div>

              <button className='flex items-center gap-1.5 text-xs text-[#2d1f2e] border border-[#e9d5ff] rounded-full px-3 py-2 hover:border-[#e85d9a] transition-colors'>
                <SlidersHorizontal size={13} />
                Filter
              </button>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 md:gap-6 ${
              gridCols === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'
            }`}
          >
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
