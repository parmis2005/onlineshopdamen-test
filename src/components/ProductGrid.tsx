import Link from 'next/link';

import ProductCard from './ProductCard';
import { featuredProducts } from '@/data/shopContent';
import type { Product } from '@/types';

interface Props {
  title?: string;
  subtitle?: string;
  limit?: number;
  showLink?: boolean;
  products?: Product[];
}

export default function ProductGrid({
  title = 'Neuheiten',
  subtitle = 'Entdecke die neuesten Pieces aus unserer Kollektion',
  limit = 8,
  showLink = true,
  products = featuredProducts,
}: Props) {
  const displayed: Product[] = products.slice(0, limit);

  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 py-16'>
      <div className='flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4'>
        <div>
          <p className='text-xs tracking-[0.3em] text-[#d9468c] font-medium uppercase mb-2'>
            Für dich ausgewählt
          </p>
          <h2
            className='text-3xl md:text-4xl font-bold text-[#2d1f2e]'
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {title}
          </h2>
          <p className='text-sm text-[#7b6d75] mt-2 max-w-2xl'>{subtitle}</p>
        </div>
        {showLink && (
          <Link
            href='/produkte'
            className='text-sm font-semibold text-[#b4236f] border-b-2 border-[#e85d9a] pb-0.5 hover:border-[#b4236f] transition-colors self-start md:self-auto whitespace-nowrap'
          >
            Alle Produkte →
          </Link>
        )}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
        {displayed.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
