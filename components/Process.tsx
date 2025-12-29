import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-lemon-50" id="cta-section">
      <div className="container mx-auto px-6">
        
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">What Happens Next</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left relative">
            {/* Connector line - only visible on large screens where it's a single row */}
            <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10 hidden lg:block"></div>
            
            {[
              { 
                title: "Request your free visibility audit", 
                desc: "Fill out a simple form to give us the details we need to analyze your current local search standing." 
              },
              { 
                title: "We Build Your Audit", 
                desc: "Our team manually analyzes your profile, competitors, and ranking opportunities to find your quick wins." 
              },
              { 
                title: "Hop on a strategy call", 
                desc: "A quick 15-minute deep dive to chat through your audit results and see if you're a good fit for our UK onboarding." 
              },
              { 
                title: "Start seeing results", 
                desc: "Within 30 days, watch your enquiry volume climb as our system kicks in and your visibility grows." 
              }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg relative flex flex-col h-full">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-xl ring-4 ring-white shrink-0">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg mb-3 min-h-[3rem] flex items-center">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Ready to Start Receiving <span className="text-fresh-600">20-50 Extra Enquiries</span> Every Month?
          </h2>
          <p className="text-lg text-slate-500 mb-10">Without Paid Ads. Risk Free.</p>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-auto bg-lemon-400 text-slate-900 text-xl font-bold py-6 px-10 rounded-2xl shadow-xl hover:bg-lemon-300 hover:shadow-lemon-400/40 transition-all duration-300 flex flex-col items-center justify-center gap-2 mx-auto group"
          >
            <span className="flex items-center gap-3">
              Yes - Show Me How Many Customers I Can Get
              <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </span>
            <span className="text-sm font-normal opacity-80 uppercase tracking-wider">Includes Free Visibility Audit + Strategy Call</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
};