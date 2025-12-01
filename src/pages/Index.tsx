import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Catalog from '@/components/Catalog';
import Advantages from '@/components/Advantages';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Advantages />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;