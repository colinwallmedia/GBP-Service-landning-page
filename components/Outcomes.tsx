import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightCircle, XCircle, CheckCircle, TrendingUp } from 'lucide-react';

export const Outcomes: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
                The Outcome: Predictable, Reliable, High-Intent Enquiries
              </h2>
              <div className="space-y-6 text-lg text-slate-300">
                <p>You’re not waiting. You’re not hoping. You’re not refreshing Facebook ads.</p>
                <p>You’re receiving a steady flow of real buyers, in your local area, searching for your exact service - and choosing you.</p>
                <div className="pl-6 border-l-2 border-fresh-500 italic text-white bg-white/5 py-6 pr-6 rounded-r-2xl">
                  "This is how you build stability. This is how you beat cheaper competitors. This is how you grow without gambling on paid ads or wasting time."
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="relative">
             {/* Background Glow */}
             <div className="absolute -inset-10 bg-lemon-400/10 rounded-[3rem] blur-3xl -z-10 animate-pulse"></div>
             
             {/* Main Image Container */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative z-10"
             >
               <div className="bg-slate-800 rounded-[2.5rem] overflow-hidden border-8 border-slate-800/50 shadow-2xl relative group">
                 <img 
                   src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" 
                   alt="Plumber fixing a boiler and generating revenue" 
                   className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                   onError={(e) => {
                     (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200";
                   }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
               </div>
               
               {/* Bottom Left Badge: Revenue Focus */}
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="absolute -bottom-8 -left-6 md:-left-10 bg-lemon-400 text-slate-900 p-8 rounded-2xl shadow-[0_25px_50px_-12px_rgba(250,204,21,0.5)] max-w-xs border-4 border-slate-900 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-30"
               >
                  <div className="flex items-center gap-3 mb-3">
                      <div className="bg-slate-900 text-lemon-400 p-2.5 rounded-xl shadow-md">
                          <TrendingUp className="w-6 h-6" />
                      </div>
                      <p className="font-black text-xl uppercase tracking-tighter">Revenue Growth</p>
                  </div>
                  <p className="text-sm font-bold text-slate-800 leading-snug">
                    Local plumbing clients see a <span className="text-slate-900 underline underline-offset-4 decoration-2">40% increase</span> in high-ticket bookings in 90 days.
                  </p>
               </motion.div>
               
               {/* Floating Achievement Notification */}
               <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 }}
                 animate={{ y: [0, -10, 0] }}
                 className="absolute -top-10 -right-6 bg-white text-slate-900 px-6 py-5 rounded-[1.5rem] shadow-2xl border-2 border-fresh-400 hidden md:block z-20"
               >
                  <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-fresh-100 rounded-full flex items-center justify-center shrink-0 border-2 border-fresh-200">
                          <CheckCircle className="w-8 h-8 text-fresh-600" />
                      </div>
                      <div className="pr-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-2.5 h-2.5 bg-fresh-500 rounded-full animate-ping"></span>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">New Lead Received</p>
                          </div>
                          <p className="font-black text-slate-900 text-lg">Full Boiler Installation</p>
                          <p className="text-fresh-600 font-bold text-sm">Est. Project Value: £4,200.00</p>
                      </div>
                  </div>
               </motion.div>
             </motion.div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-[3rem] p-10 md:p-16 border border-slate-700/50 shadow-2xl">
          <h3 className="text-2xl font-bold mb-12 text-center text-slate-100 uppercase tracking-widest">The Lemon Fresh Standard</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-5 group">
              <div className="w-16 h-16 bg-red-400/10 rounded-2xl flex items-center justify-center group-hover:bg-red-400/20 transition-all group-hover:scale-110">
                <XCircle className="w-10 h-10 text-red-400" />
              </div>
              <h4 className="font-extrabold text-2xl text-white">No Gimmicks</h4>
              <p className="text-slate-400 leading-relaxed">No shared leads. No vanity impressions. Just exclusive phone calls from people ready to buy your services.</p>
            </div>
            <div className="flex flex-col gap-5 group">
              <div className="w-16 h-16 bg-fresh-400/10 rounded-2xl flex items-center justify-center group-hover:bg-fresh-400/20 transition-all group-hover:scale-110">
                <CheckCircle className="w-10 h-10 text-fresh-400" />
              </div>
              <h4 className="font-extrabold text-2xl text-white">Trade Specific</h4>
              <p className="text-slate-400 leading-relaxed">We focus entirely on high-value trade services. We know the keywords that actually convert into booked jobs.</p>
            </div>
            <div className="flex flex-col gap-5 group">
              <div className="w-16 h-16 bg-lemon-400/10 rounded-2xl flex items-center justify-center group-hover:bg-lemon-400/20 transition-all group-hover:scale-110">
                <ArrowRightCircle className="w-10 h-10 text-lemon-400" />
              </div>
              <h4 className="font-extrabold text-2xl text-white">Authority Building</h4>
              <p className="text-slate-400 leading-relaxed">We don't just "rank" you; we make you the obvious #1 choice in your town, so price shopping stops being an issue.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};