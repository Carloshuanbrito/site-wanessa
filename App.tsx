import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee'; // <--- NOVO
import WhyChooseUs from './components/WhyChooseUs';
import MaterialsSection from './components/MaterialsSection';
import ProcessTimeline from './components/ProcessTimeline'; // <--- NOVO
import TechSpecs from './components/TechSpecs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee /> {/* <--- Adiciona movimento e preenche o espaço pós-hero */}
        <WhyChooseUs />
        <ProcessTimeline /> {/* <--- Quebra o ritmo com interação 3D e fundo escuro */}
        <MaterialsSection />
        <TechSpecs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;