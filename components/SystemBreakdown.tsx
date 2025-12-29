import React from 'react';
import { motion } from 'framer-motion';
import { Settings, PenTool, Target, Star, BarChart3, Share2 } from 'lucide-react';

const SystemPoint = ({ number, title, desc, icon: Icon }: { number: string, title: string, desc: string, icon: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
  >
    <div className="shrink-0 relative">
      <div className="w-14 h-14 bg-fresh-50 rounded-2xl flex items-center justify-center group-hover:bg-fresh-100 transition-colors">
        <Icon className="w-7 h-7 text-fresh-600" />
      </div>
      <span className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
        {number}
      </span>
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export const SystemBreakdown: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-lemon-50 rounded-full blur-3xl -z-10 opacity-60" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-fresh-50 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-lemon-600 font-bold tracking-wider uppercase text-sm">The Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            Introducing the 'Local Customer Enquiry Engine'
          </h2>
          <p className="text-xl text-slate-600">
            A done-for-you visibility and search-driven engine for local service businesses who want more predictable inbound customers every month - without paying for ads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SystemPoint 
            number="1"
            icon={Settings}
            title="Full Google Business Profile Optimisation"
            desc="Cleaning, structuring, and rebuilding your profile so Google actually trusts it. Most profiles are 40-60% under-optimised without owners realising."
          />
          <SystemPoint 
            number="2"
            icon={PenTool}
            title="Weekly Content & Posting Strategy"
            desc="Google rewards activity. We publish SEO-driven content directly to your profile every week, increasing search visibility and trust."
          />
          <SystemPoint 
            number="3"
            icon={Target}
            title="Category, Keyword & Competitor Mapping"
            desc="We engineer your profile around the most profitable search terms in your local area - based on real data, not guesswork."
          />
          <SystemPoint 
            number="4"
            icon={Star}
            title="Review Growth Framework"
            desc="Turn customers into automatic positive reviews using our friction-free reputation workflow."
          />
          <SystemPoint 
            number="5"
            icon={Share2}
            title="Ranking Signals Built for Local Dominance"
            desc="Photos, services, Q&As, geotag signalling, authority assets - everything Google uses to decide who gets shown first."
          />
          <SystemPoint 
            number="6"
            icon={BarChart3}
            title="Monthly Visibility & Enquiry Reporting"
            desc="Plain-English tracking so you can see what’s happening, what’s improving, and how much extra business your profile is generating."
          />
        </div>
      </div>
    </section>
  );
};