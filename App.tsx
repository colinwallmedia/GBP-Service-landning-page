import React, { useState, useEffect } from 'react';
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
import { LocalRankChecker } from './components/LocalRankChecker';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'rank-checker'>('landing');

  // Handle back/forward buttons or simple reset
  useEffect(() => {
    if (view === 'rank-checker') {
      window.scrollTo(0, 0);
    }
  }, [view]);

  const navigateToRankChecker = () => setView('rank-checker');
  const navigateToLanding = () => setView('landing');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-lemon-300 selection:text-lemon-900">
      <StickyNav onAction={navigateToRankChecker} onLogoClick={navigateToLanding} isLanding={view === 'landing'} />
      <main>
        {view === 'landing' ? (
          <>
            <Hero onAction={navigateToRankChecker} />
            <ProblemSection />
            <SolutionVision />
            <SystemBreakdown />
            <Outcomes />
            <Guarantee />
            <Audience />
            <Process onAction={navigateToRankChecker} />
          </>
        ) : (
          <LocalRankChecker />
        )}
      </main>
      <Footer onLogoClick={navigateToLanding} />
      <ScrollToTop />
    </div>
  );
};

export default App;