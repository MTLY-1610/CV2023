import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import HorizSection from "@/components/horizSection/HorizSection";
import AnimatedMenu from "@/components/menu/Menu";
import FloatingStuff from "@/components/floatingstuff/FloatingStuff";

export default function Home() {
  return (
    <>
      <AnimatedMenu />
      <Hero />
      <HorizSection />
      <Footer />
      <FloatingStuff />
    </>
  );
}
