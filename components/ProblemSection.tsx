import React from 'react';
import { motion } from 'framer-motion';
import { Search, AlertTriangle, MapPin, Smartphone } from 'lucide-react';

const SearchBubble = ({ text, delay, className }: { text: string, delay: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`bg-white px-6 py-3 rounded-full shadow-lg border border-slate-100 flex items-center gap-3 w-fit mb-4 ${className}`}
  >
    <Search className="w-4 h-4 text-blue-500" />
    <span className="text-slate-700 font-medium">{text}</span>
  </motion.div>
);

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-slate-100 rounded-3xl -rotate-3 transform" />
            <div className="relative bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-400 uppercase tracking-wider mb-6">What they are typing</h3>
              <div className="flex flex-col gap-2">
                <SearchBubble text="plumber near me" delay={0.1} />
                <SearchBubble text="emergency electrician" delay={0.2} className="ml-8" />
                <SearchBubble text="best landscaper in town" delay={0.3} />
                <SearchBubble text="boiler repair same day" delay={0.4} className="ml-12" />
              </div>
              
              <div className="mt-12 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <p className="font-bold text-slate-900">The Winner Takes All</p>
                        <p className="text-sm text-slate-500">Top 3 Results capture 70%+ of clicks</p>
                    </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Whichever business shows up at the top - with the best reviews, the strongest profile, and the most trustworthy footprint - wins the customer.
                    <br/><br/>
                    <span className="font-bold text-slate-900">Every. Single. Time.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-lemon-600 font-bold mb-6">
                <AlertTriangle className="w-5 h-5" />
                <span>The Hard Truth</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Your customers aren’t hanging around on social media hoping to bump into you.
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              If you run a local service business, you already know this. They are on Google, actively looking for a solution to their problem right now.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed border-l-4 border-lemon-400 pl-4">
              If you aren't showing up when they search, it's not just a missed opportunity. It's revenue handed directly to your competitors.
            </p>
            
            <div>
                 <h4 className="font-bold text-slate-900 text-xl mb-3">Google controls the flow of local buyers</h4>
                 <p className="text-slate-600">And your Google Business Profile is the gateway to predictable, compounding, month-on-month enquiries.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};