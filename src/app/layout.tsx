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
  description: 'Entdecke feminine Mode, elegante Kleider und zeitlose Styles bei VELORA. Dein Online-Shop für Frauen mit Stil.',
  keywords: 'feminine mode, kleider, damenbekleidung, online shop, elegant',
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
