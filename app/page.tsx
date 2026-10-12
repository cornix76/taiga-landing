import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WildAnimals from '@/components/WildAnimals';
import RouteMap from '@/components/RouteMap';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WildAnimals />
        <RouteMap />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}