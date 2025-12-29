import React from 'react';
import { ShieldCheck, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-lemon-50 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#a16207 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-lemon-200">
          <div className="bg-lemon-400 p-6 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-wide flex items-center justify-center gap-3">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
              Here's the Risk-Free Guarantee
            </h2>
          </div>
          
          <div className="p-8 md:p-16 text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              You only pay for the system when it works for you.
            </h3>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 border-2 border-slate-100 rounded-2xl p-8 mb-10 max-w-2xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <CalendarCheck className="w-12 h-12 text-fresh-600" />
              </div>
              <p className="text-xl text-slate-800 font-medium leading-relaxed">
                If your enquiry growth doesn’t increase by at least <span className="text-fresh-600 font-bold text-2xl px-1">10</span> in any given month...
                <br/><br/>
                <span className="text-3xl font-black text-slate-900 bg-lemon-200 px-4 py-1 rounded-lg transform -rotate-1 inline-block">That entire month is free.</span>
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center gap-8 text-slate-500 font-medium">
              <span className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                No questions
              </span>
              <span className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                No small print
              </span>
              <span className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                No awkward conversations
              </span>
            </div>
            
            <p className="mt-8 text-slate-900 font-bold">We take the risk so you don’t have to.</p>
          </div>
        </div>
      </div>
    </section>
  );
};