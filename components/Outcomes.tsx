import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightCircle, XCircle, CheckCircle } from 'lucide-react';

export const Outcomes: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              The Outcome: Predictable, Reliable, High-Intent Enquiries
            </h2>
            <div className="space-y-6 text-lg text-slate-300">
              <p>You’re not waiting. You’re not hoping. You’re not refreshing Facebook ads.</p>
              <p>You’re receiving a steady flow of real buyers, in your local area, searching for your exact service - and choosing you.</p>
              <div className="pl-6 border-l-2 border-fresh-500 italic text-white">
                "This is how you build stability. This is how you beat cheaper competitors. This is how you grow without gambling on paid ads or wasting time."
              </div>
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://picsum.photos/id/445/800/800" 
               alt="Business growth" 
               className="rounded-2xl shadow-2xl opacity-90 grayscale hover:grayscale-0 transition-all duration-700" 
             />
             <div className="absolute -bottom-6 -left-6 bg-lemon-400 text-slate-900 p-8 rounded-xl shadow-lg max-w-xs">
                <p className="font-bold text-xl mb-2">ROI You Can Feel</p>
                <p className="text-sm font-medium">More enquiries → more booked jobs → more recurring work.</p>
             </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-10 text-center">What Makes This Different?</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-4">
              <XCircle className="w-8 h-8 text-red-400" />
              <h4 className="font-bold text-xl">No Gimmicks</h4>
              <p className="text-slate-400">No ads. No vanity metrics. Everything is built around real-world search behaviour.</p>
            </div>
            <div className="flex flex-col gap-4">
              <CheckCircle className="w-8 h-8 text-fresh-400" />
              <h4 className="font-bold text-xl">Service Business Only</h4>
              <p className="text-slate-400">Trades, home services, wellness, professionals - industries where people actively search.</p>
            </div>
            <div className="flex flex-col gap-4">
              <ArrowRightCircle className="w-8 h-8 text-lemon-400" />
              <h4 className="font-bold text-xl">Compounding System</h4>
              <p className="text-slate-400">The longer your profile is managed correctly, the more powerful it becomes.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};