import Link from 'next/link';
import Image from 'next/image';

export default function PromoBanner() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 py-8'>
      <div className='grid md:grid-cols-2 gap-4'>
        {/* Left – Large */}
        <div className='relative overflow-hidden rounded-sm group aspect-[4/3] md:aspect-auto md:min-h-[480px]'>
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80&auto=format&fit=crop"
            alt='Sale Banner'
            fill
            className='object-cover object-center transition-transform duration-700 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent' />
          <div className='absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white'>
            <span className='text-xs tracking-[0.25em] text-[#f9a8d4] font-semibold uppercase block mb-2'>
              Großer Sommer-Sale
            </span>
            <h3
              className='text-3xl md:text-4xl font-bold mb-3 leading-tight'
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Bis zu<br />
              <span className='text-[#f9a8d4]'>50% Rabatt</span>
            </h3>
            <p className='text-white/80 text-sm mb-5 max-w-xs'>
              Ausgewählte Pieces aus unserer Kollektion – jetzt zu unschlagbaren Preisen.
            </p>
            <Link
              href='/sale'
              className='inline-block bg-white text-[#7e22ce] px-7 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#f3e8ff] transition-colors'
            >
              Zum Sale
            </Link>
          </div>
        </div>

        {/* Right – Two stacked */}
        <div className='flex flex-col gap-4'>
          <div className='relative overflow-hidden rounded-sm group flex-1 min-h-[220px]'>
            <Image
              src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80&auto=format&fit=crop'
              alt='Neuheiten'
              fill
              className='object-cover object-top transition-transform duration-700 group-hover:scale-105'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-[#7e22ce]/60 to-transparent' />
            <div className='absolute inset-0 flex items-center p-6 md:p-8 text-white'>
              <div>
                <span className='text-xs tracking-[0.2em] font-semibold text-[#e9d5ff] uppercase block mb-1'>
                  Frisch eingetroffen
                </span>
                <h3
                  className='text-2xl md:text-3xl font-bold mb-3'
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Neuheiten
                </h3>
                <Link
                  href='/neuheiten'
                  className='text-xs font-bold tracking-widest text-white border-b border-white/60 pb-0.5 hover:border-white transition-colors uppercase'
                >
                  Entdecken →
                </Link>
              </div>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-sm group flex-1 min-h-[220px]'>
            <Image
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=700&q=80&auto=format&fit=crop"
              alt='Accessoires'
              fill
              className='object-cover object-center transition-transform duration-700 group-hover:scale-105'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-[#2d1f2e]/60 to-transparent' />
            <div className='absolute inset-0 flex items-center p-6 md:p-8 text-white'>
              <div>
                <span className='text-xs tracking-[0.2em] font-semibold text-[#f9a8d4] uppercase block mb-1'>
                  Das gewisse Extra
                </span>
                <h3
                  className='text-2xl md:text-3xl font-bold mb-3'
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Accessoires
                </h3>
                <Link
                  href='/produkte'
                  className='text-xs font-bold tracking-widest text-white border-b border-white/60 pb-0.5 hover:border-white transition-colors uppercase'
                >
                  Shoppen →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
