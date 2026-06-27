import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VELORA – Feminine Mode & Stil',
  description:
    'Entdecke feminine Mode mit sanften Farben, eleganten Kleiderlooks und modernem Tailoring bei VELORA.',
  keywords: 'feminine mode, kleider, blusen, tailoring, damenbekleidung, online shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de' className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className='min-h-full flex flex-col bg-[#fdf8f5] text-[#2d1f2e]'>
        {children}
      </body>
    </html>
  );
}
