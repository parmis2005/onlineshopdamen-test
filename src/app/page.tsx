import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryBanner from '@/components/CategoryBanner';
import ProductGrid from '@/components/ProductGrid';
import PromoBanner from '@/components/PromoBanner';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryBanner />
        <ProductGrid
          title='Neuheiten'
          subtitle='Die neuesten Pieces unserer Sommerkollektion – frisch eingetroffen'
          limit={8}
          showLink={true}
        />
        <PromoBanner />
        <ProductGrid
          title='Bestseller'
          subtitle='Unsere meistgeliebten Styles – von Kundinnen immer wieder gewählt'
          limit={4}
          showLink={false}
        />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
