import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-lemon-50 to-white">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-fresh-100/30 rounded-bl-[100px] -z-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-lemon-200/40 rounded-tr-[100px] -z-10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fresh-100 text-fresh-800 font-medium text-sm mb-8 border border-fresh-200"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fresh-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-fresh-500"></span>
            </span>
            Accepting New Clients for 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[2.0rem] md:text-[3.4rem] lg:text-[4.0rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-12"
          >
            Start Seeing a Predictable <span className="text-fresh-600 decoration-4 decoration-lemon-400 underline-offset-4">20-50</span> Additional Enquiries Every Month From Prospects Actively Searching for Your Services <span className="block mt-3 text-[1.45rem] md:text-[2.18rem] lg:text-[2.91rem] text-slate-800 border-b-4 border-lemon-400 w-fit mx-auto pb-1">Without Paid Ads.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-white to-lemon-50 p-6 rounded-2xl shadow-xl shadow-lemon-200/20 border-2 border-lemon-200 max-w-xl mx-auto mb-10 transform rotate-1 hover:rotate-0 transition-transform duration-300"
          >
             <div className="flex items-start gap-4">
                <div className="shrink-0 drop-shadow-md">
                   <ShieldCheck className="w-12 h-12 text-white fill-fresh-500" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-800 text-lg mb-1">Risk Reversal Guarantee</p>
                  <p className="text-slate-600">If enquiry growth doesn’t increase by at least <span className="font-bold text-slate-900 bg-lemon-200/50 px-1 rounded">10 in a month</span>, that month is 100% free. No risk. No faff.</p>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-slate-900 text-white text-lg md:text-xl font-bold py-4 px-8 md:px-12 rounded-full shadow-2xl hover:bg-slate-800 hover:scale-105 hover:shadow-[0_10px_40px_-10px_rgba(250,204,21,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Start Here
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-sm text-slate-500">Free Visibility Audit • See exactly where you're losing customers</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};