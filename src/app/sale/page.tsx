import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

import { saleProducts } from '@/data/shopContent';

const saleCategories = ['Alle', 'Kleider', 'Blusen', 'Röcke', 'Hosen', 'Tailoring'];

export default function SalePage() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <div className='relative overflow-hidden bg-[#1a1020]'>
          <div className='absolute inset-0'>
            <Image
              src='/feminine/hero-evening-dress.png'
              alt='Sale'
              fill
              className='object-cover opacity-45'
              priority
            />
          </div>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center text-white'>
            <span className='inline-block bg-[#e0006f] text-white text-xs font-bold tracking-[0.25em] px-4 py-1.5 mb-6 uppercase rounded-full'>
              Großer Sommer-Sale
            </span>
            <h1
              className='text-5xl md:text-7xl font-bold mb-4'
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Bis zu <span className='text-[#f9a8d4]'>50% Rabatt</span>
            </h1>
            <p className='text-white/75 text-base md:text-lg max-w-xl mx-auto'>
              Entdecke feminine Kleider, Blusen und Tailoring-Pieces aus unserer Kollektion
              zu besonders schönen Preisen.
            </p>

            <div className='flex justify-center gap-4 mt-8'>
              {[
                { val: '02', label: 'Tage' },
                { val: '14', label: 'Stunden' },
                { val: '37', label: 'Minuten' },
                { val: '52', label: 'Sekunden' },
              ].map((t) => (
                <div key={t.label} className='text-center'>
                  <div className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-[0.8rem] px-4 py-2 min-w-[56px]'>
                    <p className='text-2xl font-bold text-[#f9a8d4]'>{t.val}</p>
                  </div>
                  <p className='text-xs text-white/50 mt-1'>{t.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='bg-[#fdf8f5] border-b border-[#e9d5ff]'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap gap-3 justify-center'>
            {['-20%', '-30%', '-40%', '-50%'].map((d) => (
              <button
                key={d}
                className='px-5 py-2 text-sm font-bold border-2 border-[#e0006f] text-[#e0006f] hover:bg-[#e0006f] hover:text-white rounded-full transition-colors'
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6'>
          <div className='flex flex-wrap gap-2 mb-8'>
            {saleCategories.map((cat) => (
              <button
                key={cat}
                className='px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full border border-[#e9d5ff] bg-white text-[#2d1f2e] hover:border-[#e85d9a] hover:text-[#b4236f] transition-all first:bg-[#b4236f] first:text-white first:border-[#b4236f]'
              >
                {cat}
              </button>
            ))}
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
            {saleProducts.map((product) => (
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
