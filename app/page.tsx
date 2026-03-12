import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyEnteg from "@/components/WhyEnteg";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-body">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <WhyEnteg />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
