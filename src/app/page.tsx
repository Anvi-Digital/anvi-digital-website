import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadGeneration from "@/components/LeadGeneration";
import AIAgents from "@/components/AIAgents";
import SocialProof from "@/components/SocialProof";
import TrustAndFAQ from "@/components/TrustAndFAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <LeadGeneration />
        <AIAgents />
        <SocialProof />
        <TrustAndFAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
