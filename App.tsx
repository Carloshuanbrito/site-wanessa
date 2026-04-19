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
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-transparent font-sans text-slate-900 selection:bg-brand-500 selection:text-white">
      <ReadingProgress />
      <Navbar />
      <main className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-gradient-to-b from-white/70 to-transparent" />
        <Hero />
        <LogoMarquee />
        <WhyChooseUs />
        <ProcessTimeline />
        <MaterialsSection />
        <TechSpecs />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

export default App;
