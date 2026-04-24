import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import WhyChooseUs from './components/WhyChooseUs';
import MaterialsSection from './components/MaterialsSection';
import ProcessTimeline from './components/ProcessTimeline';
import TechSpecs from './components/TechSpecs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import ReadingProgress from './components/ReadingProgress';
import PerspectiveSection from './components/PerspectiveSection';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-transparent font-sans text-slate-900 selection:bg-[#00F0FF] selection:text-white">
      <ReadingProgress />
      <Navbar />
      <main className="relative perspective-1000">
        <Hero />
        <LogoMarquee />
        
        <PerspectiveSection>
          <WhyChooseUs />
        </PerspectiveSection>

        <PerspectiveSection>
          <ProcessTimeline />
        </PerspectiveSection>

        <PerspectiveSection>
          <MaterialsSection />
        </PerspectiveSection>

        <PerspectiveSection>
          <TechSpecs />
        </PerspectiveSection>

        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

export default App;
