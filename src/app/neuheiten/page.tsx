import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

import { newArrivals } from '@/data/shopContent';

export default function NeuheitenPage() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <div className='relative h-64 md:h-80 overflow-hidden'>
          <Image
            src='/feminine/hero-blouse-pants.png'
            alt='Neuheiten'
            fill
            className='object-cover object-center'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-[#b4236f]/70 via-[#b4236f]/35 to-transparent' />
          <div className='absolute inset-0 flex items-center'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 text-white'>
              <p className='text-xs tracking-[0.3em] text-[#f9a8d4] font-medium uppercase mb-2'>
                Frisch eingetroffen
              </p>
              <h1
                className='text-4xl md:text-5xl font-bold'
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Neuheiten
              </h1>
              <p className='text-white/80 mt-2 text-sm'>
                {newArrivals.length} neue Styles – weich, feminin und leicht zu kombinieren
              </p>
            </div>
          </div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-12'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
            {newArrivals.map((product) => (
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
