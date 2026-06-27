'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import type { Product } from '@/types';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [wished, setWished] = useState(false);
  const [hovered, setHovered] = useState(false);

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div
      className='group relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className='relative overflow-hidden rounded-[1.1rem] bg-gradient-to-br from-[#fff7fb] via-[#faf5ff] to-[#f7efe8] aspect-[3/4] shadow-[0_12px_35px_rgba(91,33,182,0.08)]'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-700 scale-[1.02] ${
            hovered && product.hoverImage ? 'opacity-0' : 'opacity-100'
          }`}
          sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={product.name + ' hover'}
            fill
            className={`object-cover transition-all duration-700 absolute inset-0 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
          />
        )}

        {/* Tags */}
        <div className='absolute top-3 left-3 flex flex-col gap-1.5'>
          {product.tag === 'NEU' && (
            <span className='bg-[#b4236f] text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full'>
              NEU
            </span>
          )}
          {product.tag === 'SALE' && discount && (
            <span className='bg-[#e0006f] text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full'>
              -{discount}%
            </span>
          )}
          {product.tag === 'BESTSELLER' && (
            <span className='bg-[#2d1f2e] text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full'>
              BESTSELLER
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div
          className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}
        >
          <button
            onClick={() => setWished(!wished)}
            className='w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-md hover:bg-[#ffe0ee] transition-colors'
          >
            <Heart
              size={16}
              className={wished ? 'fill-[#e0006f] text-[#e0006f]' : 'text-[#2d1f2e]'}
            />
          </button>
          <button className='w-9 h-9 bg-white/95 rounded-full flex items-center justify-center shadow-md hover:bg-[#f3e8ff] transition-colors'>
            <Eye size={16} className='text-[#2d1f2e]' />
          </button>
        </div>

        {/* Quick add to cart */}
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button className='w-full bg-[#2d1f2e]/88 hover:bg-[#b4236f] text-white py-3 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 transition-colors backdrop-blur-sm'>
            <ShoppingBag size={14} />
            In den Warenkorb
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className='pt-3 pb-1'>
        <p className='text-[10px] text-[#d9468c] tracking-[0.28em] uppercase mb-1.5 font-medium'>
          {product.category}
        </p>
        <Link href={`/produkte/${product.id}`}>
          <h3 className='text-sm md:text-base font-medium text-[#2d1f2e] hover:text-[#b4236f] transition-colors leading-snug line-clamp-2'>
            {product.name}
          </h3>
        </Link>

        {product.description && (
          <p className='mt-1.5 text-[12px] leading-relaxed text-[#7b6d75] line-clamp-2'>
            {product.description}
          </p>
        )}

        {/* Colors */}
        {product.colors && (
          <div className='flex gap-1.5 mt-2'>
            {product.colors.map((c) => (
              <div
                key={c}
                className='w-3.5 h-3.5 rounded-full border border-[#ddd] cursor-pointer hover:scale-110 transition-transform'
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
          </div>
        )}

        {/* Price */}
        <div className='flex items-center gap-2 mt-2.5'>
          <span
            className={`text-base font-semibold ${
              product.tag === 'SALE' ? 'text-[#e0006f]' : 'text-[#2d1f2e]'
            }`}
          >
            {product.price.toFixed(2).replace('.', ',')} €
          </span>
          {product.originalPrice && (
            <span className='text-sm text-[#999] line-through'>
              {product.originalPrice.toFixed(2).replace('.', ',')} €
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
