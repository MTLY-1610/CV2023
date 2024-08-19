import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import HorizSection from "@/components/horizSection/HorizSection";
import AnimatedMenu from "@/components/menu/Menu";

export default function Home() {
  return (
    <>
      <AnimatedMenu />
      <Hero />
      <HorizSection />
      <Footer />
    </>
  );
}
