'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className='relative overflow-hidden py-20 bg-[#26162b]'>
      {/* Decorative circles */}
      <div className='absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#b4236f]/20 blur-3xl' />
      <div className='absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#e85d9a]/15 blur-3xl' />

      <div className='relative max-w-2xl mx-auto px-4 sm:px-6 text-center'>
        <div className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/8 mb-6'>
          <Mail size={24} className='text-[#f9a8d4]' />
        </div>

        <p className='text-xs tracking-[0.3em] text-[#f9a8d4] font-medium uppercase mb-3'>
          Newsletter
        </p>
        <h2
          className='text-3xl md:text-4xl font-bold text-white mb-4'
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Exklusive Angebote für dich
        </h2>
        <p className='text-[#e7d9dd] text-sm md:text-base mb-8 leading-relaxed'>
          Melde dich an und erhalte als erstes Zugang zu neuen Kollektionen,
          exklusiven Rabatten und Styling-Tipps.{' '}
          <span className='text-[#f9a8d4] font-medium'>10% Rabatt</span> auf deine erste Bestellung!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Deine E-Mail-Adresse'
              className='flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full px-5 py-3.5 text-sm outline-none focus:border-[#f9a8d4] transition-colors'
            />
            <button
              type='submit'
              className='bg-[#e85d9a] hover:bg-[#d9468c] text-white px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-colors rounded-full whitespace-nowrap'
            >
              Anmelden
            </button>
          </form>
        ) : (
          <div className='flex items-center justify-center gap-3 text-[#f9a8d4]'>
            <CheckCircle size={22} />
            <p className='text-base font-medium'>
              Willkommen! Schau in dein Postfach für deinen Rabattcode.
            </p>
          </div>
        )}

        <p className='text-xs text-white/30 mt-4'>
          Kein Spam. Abmeldung jederzeit möglich. Datenschutz wird groß geschrieben.
        </p>
      </div>
    </section>
  );
}
