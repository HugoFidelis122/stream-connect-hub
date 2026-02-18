import Navbar from "@/components/iptv/Navbar";
import Hero from "@/components/iptv/Hero";
import About from "@/components/iptv/About";
import Benefits from "@/components/iptv/Benefits";
import Kids from "@/components/iptv/Kids";
import Sports from "@/components/iptv/Sports";
import Plans from "@/components/iptv/Plans";
import FAQ from "@/components/iptv/FAQ";
import CTA from "@/components/iptv/CTA";
import Footer from "@/components/iptv/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Kids />
      <Sports />
      <Plans />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
