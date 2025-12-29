import React from 'react';

const niches = [
  "Electricians", "Plumbers", "Landscapers", "Decorators", 
  "Roofers", "Cleaners", "Locksmiths", "Gardeners", 
  "Pest Control", "Beauty", "Wellness", "Tutors", "Clinics"
];

export const Audience: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Who This Is For</h2>
            <p className="text-lg text-slate-600 mb-8">
              This is perfect for you if you’re a business that relies on:
            </p>
            <ul className="space-y-4">
              {[
                "Local customers",
                "High-intent searches",
                "Steady inbound enquiries",
                "Visibility in your town or service area",
                "Trust, reputation, and credibility"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg font-medium text-slate-800">
                  <div className="w-6 h-6 rounded-full bg-fresh-100 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-fresh-500 rounded-full"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/2 bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="font-bold text-xl mb-6 text-slate-900">Industries We Serve</h3>
            <div className="flex flex-wrap gap-3">
              {niches.map((niche, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-white text-slate-700 rounded-full shadow-sm text-sm font-medium border border-slate-100"
                >
                  {niche}
                </span>
              ))}
            </div>
            <div className="mt-8 p-6 bg-lemon-100 rounded-xl text-center">
              <p className="text-lemon-900 font-bold">
                You name it - if people Google it, this system works.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};