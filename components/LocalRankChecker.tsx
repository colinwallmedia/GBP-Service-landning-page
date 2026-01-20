import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Info } from 'lucide-react';

declare global {
  interface Window {
    LOCALO_FREE_TOOL: any;
  }
}

export const LocalRankChecker: React.FC = () => {
  useEffect(() => {
    // Set configuration
    window.LOCALO_FREE_TOOL = {
      container: "#free-tool",
      hidePoweredBy: true,
      token: "xLgoTWShqOQj8XH2n05F5I420rNWrxb1q5jLM7uypi0"
    };

    // Append scripts
    const script = document.createElement('script');
    script.src = "https://jstools.localo.app/scripts/freetool.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fresh-50 text-fresh-700 font-bold text-sm mb-6 border border-fresh-100">
              <ShieldCheck className="w-4 h-4" />
              Free Visibility Diagnostic
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Check Your Local Rankings <br/><span className="text-lemon-500 italic">Instantly</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Find out exactly where your business appears when customers search for your services in your area. Use our pro tool below.
            </p>
          </motion.div>

          {/* Localo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-4 md:p-8 min-h-[600px] relative overflow-hidden"
          >
            <div id="free-tool" className="w-full h-full">
              {/* Localo Tool renders here */}
              <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lemon-500 mb-4"></div>
                <p className="font-medium">Loading ranking engine...</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-start gap-4 p-6 bg-slate-900 rounded-2xl text-white/80"
          >
            <Info className="w-6 h-6 text-lemon-400 shrink-0 mt-1" />
            <p className="text-sm leading-relaxed">
              <strong className="text-white">Note:</strong> This tool performs a real-time scan of local search nodes. Results are 100% accurate based on live Google Maps data. If you are not in the top 3, you are likely losing up to 70% of potential local leads.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};