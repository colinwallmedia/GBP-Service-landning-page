import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionVision } from './components/SolutionVision';
import { SystemBreakdown } from './components/SystemBreakdown';
import { Outcomes } from './components/Outcomes';
import { Guarantee } from './components/Guarantee';
import { Audience } from './components/Audience';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { StickyNav } from './components/StickyNav';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-lemon-300 selection:text-lemon-900">
      <StickyNav />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionVision />
        <SystemBreakdown />
        <Outcomes />
        <Guarantee />
        <Audience />
        <Process />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;