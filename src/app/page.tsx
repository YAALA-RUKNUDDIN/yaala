import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import DesignPhilosophy from '@/components/DesignPhilosophy';
import FeaturedWork from '@/components/FeaturedWork';
import QgraphyExperience from '@/components/QgraphyExperience';
import ProfileVisual from '@/components/ProfileVisual';
import AISection from '@/components/AISection';
import ProcessSection from '@/components/ProcessSection';
import Capabilities from '@/components/Capabilities';
import Marquee from '@/components/Marquee';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />

      <main className="flex flex-col w-full relative">
        <Hero />
        <Introduction />
        <DesignPhilosophy />
        <FeaturedWork />
        <QgraphyExperience />
        <ProfileVisual />
        <AISection />
        <ProcessSection />
        <Capabilities />
        <Marquee />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
