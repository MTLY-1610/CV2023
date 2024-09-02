import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import HorizSection from "@/components/horizSection/HorizSection";
import FloatingStuff from "@/components/floatingstuff/FloatingStuff";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <>
        
      <Hero />
      <Menu />
      <HorizSection />
      <Footer />
      {/* <FloatingStuff /> */}
    </>
  );
}
