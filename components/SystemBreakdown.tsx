import React from 'react';
import { motion } from 'framer-motion';
import { Settings, PenTool, Target, Star, BarChart3, Share2 } from 'lucide-react';

const SystemPoint = ({ number, title, desc, icon: Icon, className = "" }: { number: string, title: string, desc: string, icon: any, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden ${className}`}
  >
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
       <Icon className="w-24 h-24" />
    </div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 bg-lemon-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-lemon-100 transition-colors">
        <Icon className="w-7 h-7 text-lemon-600" />
      </div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-fresh-500 font-bold text-sm bg-fresh-50 px-2 py-1 rounded">Phase {number}</span>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{desc}</p>
    </div>
  </motion.div>
);

export const SystemBreakdown: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-fresh-100 text-fresh-700 rounded-full font-bold text-sm mb-4">THE BLUEPRINT</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            The Local Customer <br/>Enquiry Engine
          </h2>
          <p className="text-lg text-slate-600 mt-6">
            We don't just "post on Google". We engineer a visibility machine that forces Google to put you in front of local buyers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SystemPoint 
            number="01"
            icon={Settings}
            title="Profile Re-Engineering"
            desc="Cleaning, structuring, and rebuilding your profile so Google actually trusts it. Most profiles are 40-60% under-optimised."
            className="lg:col-span-2"
          />
          <SystemPoint 
            number="02"
            icon={Target}
            title="Hyper-Local Mapping"
            desc="We map out the exact keywords and categories your competitors are winning and steal their share."
          />
          <SystemPoint 
            number="03"
            icon={PenTool}
            title="Weekly Velocity"
            desc="Fresh, SEO-driven updates every single week. Google rewards active businesses with higher rankings."
          />
          <SystemPoint 
            number="04"
            icon={Star}
            title="Trust Generator"
            desc="Our proprietary framework for getting more 5-star reviews without you having to chase customers."
          />
          <SystemPoint 
            number="05"
            icon={Share2}
            title="Authority Signals"
            desc="Advanced geotagging and service stacking that makes you the dominant authority in your town."
          />
          <SystemPoint 
            number="06"
            icon={BarChart3}
            title="Truth Reporting"
            desc="No fluff. Just real data on how many phone calls, messages, and enquiries we've generated."
            className="lg:col-span-3 bg-slate-900 border-none group"
          />
        </div>
      </div>
    </section>
  );
};