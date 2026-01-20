import React from 'react';
import { ArrowDown, CheckCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessProps {
  onAction?: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onAction }) => {
  return (
    <section className="py-24 bg-white" id="cta-section">
      <div className="container mx-auto px-6">
        
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Start Your Dominance</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Four simple steps from "Where are my customers?" to "My phone won't stop ringing."</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden lg:block"></div>
            
            {[
              { 
                title: "Free Audit Request", 
                desc: "Give us 2 minutes of your time to share your business details." 
              },
              { 
                title: "Competitor Analysis", 
                desc: "We manually tear apart your local rivals to find the gaps they missed." 
              },
              { 
                title: "15-Min Strategy", 
                desc: "We show you the roadmap. No hard sell, just pure value and local data." 
              },
              { 
                title: "The Engine Starts", 
                desc: "We take over. You handle the leads. Everyone wins." 
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-sm border border-slate-100 group-hover:bg-lemon-400 transition-colors">
                  {i + 1}
                </div>
                <h3 className="font-extrabold text-xl mb-3 text-slate-900">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-lemon-300 to-fresh-400 rounded-[3rem] blur-2xl opacity-20 -z-10 animate-pulse"></div>
          
          <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-16 text-center text-white">
            <div className="flex justify-center mb-8">
               <div className="bg-fresh-500/20 text-fresh-400 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2 border border-fresh-500/30">
                 <Zap className="w-4 h-4 fill-fresh-400" />
                 Limited to 3 New Local Clients per Month
               </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Ready to <span className="text-lemon-400 italic">Lemon Fresh</span> Your Marketing?
            </h2>
            
            <div className="space-y-4 mb-10">
              <p className="text-xl text-slate-300">Claim your <span className="text-white font-bold underline decoration-lemon-400 underline-offset-4">Free Local Visibility Audit</span> (worth £299).</p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onAction}
              className="w-full md:w-auto bg-lemon-400 text-slate-900 text-xl font-black py-6 px-12 rounded-2xl shadow-[0_20px_50px_rgba(250,204,21,0.3)] hover:bg-lemon-300 transition-all flex flex-col items-center justify-center gap-2 mx-auto"
            >
              <span className="flex items-center gap-3">
                Unlock My Growth Plan
                <ArrowDown className="w-6 h-6" />
              </span>
            </motion.button>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-fresh-500" /> No credit card</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-fresh-500" /> No obligation</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-fresh-500" /> 100% Secure</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};