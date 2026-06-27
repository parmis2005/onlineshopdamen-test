'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

const navLinks = [
  {
    label: 'Neuheiten',
    href: '/neuheiten',
    sub: ['Alle Neuheiten', 'Kleider', 'Tops', 'Hosen', 'Accessoires'],
  },
  {
    label: 'Kleider',
    href: '/produkte',
    sub: ['Midi-Kleider', 'Maxi-Kleider', 'Mini-Kleider', 'Abendkleider', 'Casual'],
  },
  {
    label: 'Oberteile',
    href: '/produkte',
    sub: ['Blusen', 'T-Shirts', 'Pullover', 'Strickjacken'],
  },
  {
    label: 'Hosen & Röcke',
    href: '/produkte',
    sub: ['Hosen', 'Jeans', 'Röcke', 'Shorts'],
  },
  {
    label: 'Accessoires',
    href: '/produkte',
    sub: ['Taschen', 'Schmuck', 'Gürtel', 'Schals'],
  },
  { label: 'SALE', href: '/sale', sub: [] },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className='bg-[#7e22ce] text-white text-center text-xs py-2 tracking-widest font-light'>
        KOSTENLOSER VERSAND AB 59€ &nbsp;|&nbsp; GRATIS RÜCKVERSAND &nbsp;|&nbsp; NEU: SOMMERKOLLEKTION 2025
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-[#fdf8f5]'
        }`}
      >
        {/* Main navbar */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex items-center justify-between h-16 md:h-20'>
            {/* Mobile menu toggle */}
            <button
              className='md:hidden text-[#2d1f2e] p-2'
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo */}
            <Link href='/' className='flex-shrink-0 mx-auto md:mx-0'>
              <span
                className='text-2xl md:text-3xl tracking-[0.15em] font-bold'
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                <span className='text-[#7e22ce]'>V</span>
                <span className='text-[#2d1f2e]'>ELORA</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav className='hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2'>
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className='relative group'
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-0.5 px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                      link.label === 'SALE'
                        ? 'text-[#e0006f] font-semibold'
                        : 'text-[#2d1f2e] hover:text-[#7e22ce]'
                    }`}
                  >
                    {link.label}
                    {link.sub.length > 0 && (
                      <ChevronDown
                        size={13}
                        className='mt-0.5 transition-transform group-hover:rotate-180'
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.sub.length > 0 && activeDropdown === link.label && (
                    <div className='absolute top-full left-0 mt-0 w-52 bg-white shadow-xl border-t-2 border-[#a855f7] py-2 z-50'>
                      {link.sub.map((sub) => (
                        <Link
                          key={sub}
                          href={link.href}
                          className='block px-5 py-2.5 text-sm text-[#2d1f2e] hover:bg-[#f3e8ff] hover:text-[#7e22ce] transition-colors'
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Icons */}
            <div className='flex items-center gap-2 md:gap-3'>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className='p-2 text-[#2d1f2e] hover:text-[#7e22ce] transition-colors'
              >
                <Search size={20} />
              </button>
              <Link href='#' className='hidden md:block p-2 text-[#2d1f2e] hover:text-[#7e22ce] transition-colors'>
                <User size={20} />
              </Link>
              <Link href='#' className='p-2 text-[#2d1f2e] hover:text-[#7e22ce] transition-colors relative'>
                <Heart size={20} />
                <span className='absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#e0006f] text-white text-[9px] rounded-full flex items-center justify-center font-bold'>
                  3
                </span>
              </Link>
              <Link href='#' className='p-2 text-[#2d1f2e] hover:text-[#7e22ce] transition-colors relative'>
                <ShoppingBag size={20} />
                <span className='absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#7e22ce] text-white text-[9px] rounded-full flex items-center justify-center font-bold'>
                  2
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className='bg-white border-t border-[#e9d5ff] py-4 px-4'>
            <div className='max-w-2xl mx-auto relative'>
              <input
                autoFocus
                type='text'
                placeholder='Suche nach Kleidern, Blusen, Accessoires …'
                className='w-full border border-[#d8b4fe] rounded-full px-5 py-3 pr-12 text-sm outline-none focus:border-[#a855f7] bg-[#faf5ff]'
              />
              <Search
                size={18}
                className='absolute right-4 top-1/2 -translate-y-1/2 text-[#a855f7]'
              />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className='md:hidden bg-white border-t border-[#e9d5ff]'>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-4 text-sm font-medium border-b border-[#f3e8ff] ${
                  link.label === 'SALE'
                    ? 'text-[#e0006f]'
                    : 'text-[#2d1f2e] hover:text-[#7e22ce]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
