import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, TrendingUp, Award, Clock } from 'lucide-react';

const VisionCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
  >
    <div className="w-12 h-12 bg-lemon-50 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-lemon-600" />
    </div>
    <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export const SolutionVision: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Imagine This for Your Business...</h2>
          <p className="text-lg text-slate-600">
            This isn’t fantasy. It’s what happens when your Google Business Profile is fully optimised, consistently maintained, and strategically fed the right signals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <VisionCard 
            icon={PhoneCall}
            title="Consistent Ringing"
            desc="Your phone ringing consistently - not once or twice a week, but daily."
            delay={0.1}
          />
          <VisionCard 
            icon={TrendingUp}
            title="10-30+ New Enquiries"
            desc="Every month, from customers who already want the service you offer."
            delay={0.2}
          />
          <VisionCard 
            icon={Award}
            title="Top 3 Rankings"
            desc="Your business showing up in the 'Top 3' local results for high-intent keywords."
            delay={0.3}
          />
          <VisionCard 
            icon={Clock}
            title="Steady Work Stream"
            desc="A steady, reliable stream of work - even in 'quiet' months."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};