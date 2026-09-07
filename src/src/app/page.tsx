import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full">
        <Hero />
        <Approach />
        <Portfolio />
        <About />
        <Experience />
      </main>

      <Footer />
    </>
  );
}
