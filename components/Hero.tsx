import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lemon-100/50 via-white to-fresh-50/30">
      {/* Decorative Animated Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-lemon-200/40 rounded-full blur-[100px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-24 w-80 h-80 bg-fresh-200/30 rounded-full blur-[80px] -z-10" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-lemon-200 text-slate-800 font-semibold text-sm mb-10 shadow-sm"
          >
            <span className="flex items-center gap-1 text-lemon-600">
              <Star className="w-4 h-4 fill-lemon-500" />
              <Star className="w-4 h-4 fill-lemon-500" />
              <Star className="w-4 h-4 fill-lemon-500" />
              <Star className="w-4 h-4 fill-lemon-500" />
              <Star className="w-4 h-4 fill-lemon-500" />
            </span>
            <span className="border-l border-slate-200 pl-2">The #1 Rated Local SEO Agency for Trades</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8"
          >
            Wake Up to <span className="text-fresh-600 relative inline-block">
              20-50 New Enquiries
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.26C1 5.26 120.5 -1.24 357 5.26" stroke="#FACC15" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span> Every Month
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Stop burning cash on Facebook ads. Start dominating the Google search results where your customers are <span className="text-slate-900 font-bold underline decoration-fresh-400">already looking for you.</span>
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-slate-900 text-white text-lg font-bold py-5 px-10 rounded-2xl shadow-2xl hover:bg-slate-800 transition-all flex items-center gap-3"
            >
              Get Your Free Visibility Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2 text-fresh-600 font-bold">
                <CheckCircle2 className="w-5 h-5" />
                <span>Risk-Free Guarantee</span>
              </div>
              <p className="text-sm text-slate-500 italic">"No growth? You don't pay. Simple."</p>
            </div>
          </div>

          {/* Trust Ticker */}
          <div className="pt-8 border-t border-slate-200/60 max-w-4xl mx-auto">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by Local Business Owners across the UK</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
              {['Electrical', 'Plumbing', 'Landscaping', 'Roofing', 'Construction'].map((trade) => (
                <div key={trade} className="text-xl font-black text-slate-400 select-none">{trade}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};