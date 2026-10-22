import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AiPlayground } from './components/AiPlayground';
import { BentoFeatures } from './components/BentoFeatures';
import { LiveDashboard } from './components/LiveDashboard';
import { RoiCalculator } from './components/RoiCalculator';
import { ComparisonTable } from './components/ComparisonTable';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [lang, setLang] = useState<'uz' | 'en'>('uz');
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090E] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 relative selection:rounded">
      
      {/* Dynamic Background Noise / Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none bg-dots-pattern opacity-30 z-0" />

      {/* Main Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          lang={lang} 
          onOpenDemo={() => setIsDemoOpen(true)} 
        />
        
        <AiPlayground lang={lang} />
        
        <BentoFeatures lang={lang} />
        
        <LiveDashboard lang={lang} />
        
        <RoiCalculator lang={lang} />
        
        <ComparisonTable lang={lang} />
        
        <Pricing lang={lang} />
        
        <Testimonials lang={lang} />
        
        <Faq lang={lang} />
      </main>

      {/* Modern Footer */}
      <Footer lang={lang} />

      {/* Command Palette Modal (Ctrl/Cmd + K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenDemo={() => setIsDemoOpen(true)}
        lang={lang}
      />

      {/* Interactive Terminal / Console Modal */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        lang={lang}
      />

    </div>
  );
}

export default App;
