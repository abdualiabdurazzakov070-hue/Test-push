import React, { useState } from 'react';
import { Check, Zap, Sparkles, Shield, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_PLANS } from '../data/siteData';

export const Pricing: React.FC<{ lang: 'uz' | 'en' }> = ({ lang }) => {
  const [annual, setAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('pro-max');

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>SHAFFAF TARIFLAR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'uz' ? (
              <>Ehtiyojingizga Mos <span className="text-gradient">Pro Tarifni Tanlang</span></>
            ) : (
              <>Simple, Transparent <span className="text-gradient">Pricing for Everyone</span></>
            )}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Hech qanday yashirin to'lovlarsiz. Har qanday rejani 14 kun bepul sinab ko'ring.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-surface-200/80 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                !annual ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              Oylik To'lov
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                annual ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Yillik To'lov</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                -20% TEJANG
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const price = annual ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-[1px] transition-all duration-300 flex flex-col ${
                  isPopular
                    ? 'bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-600 shadow-[0_0_50px_rgba(99,102,241,0.3)] scale-[1.03] z-10'
                    : 'bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:border-white/20'
                }`}
              >
                <div className="h-full rounded-3xl bg-[#0d101a] p-8 flex flex-col justify-between border border-white/5">
                  
                  <div>
                    {/* Header & Badge */}
                    <div className="flex items-center justify-between min-h-[28px]">
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      {plan.badge && (
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white uppercase tracking-wider shadow">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-xs text-slate-400 leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        /oy {annual && '(yillik to\'langanda)'}
                      </span>
                    </div>

                    <div className="mt-2 text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/40 p-2 rounded-xl border border-cyan-500/20 inline-block">
                      ⚡ {plan.tokens}
                    </div>

                    {/* Features List */}
                    <div className="mt-8 space-y-3 pt-6 border-t border-white/5">
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs text-slate-300">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-indigo-300" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-4">
                    <button
                      onClick={() => handleSelectPlan(plan.id)}
                      className={`w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                        isPopular
                          ? 'bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-400 text-white shadow-indigo-500/30 hover:scale-[1.02] active:scale-[0.98]'
                          : 'bg-surface-100 hover:bg-surface-50 text-white border border-white/10 hover:border-white/20'
                      }`}
                    >
                      <span>{plan.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
