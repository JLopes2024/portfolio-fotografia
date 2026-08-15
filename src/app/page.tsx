import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <Portfolio />
      <About />
      <Footer />
    </main>
  );
}