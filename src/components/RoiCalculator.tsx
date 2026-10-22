import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, Zap, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  lang: 'uz' | 'en';
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ lang }) => {
  const [requests, setRequests] = useState(2500000); // 2.5M requests
  const [engineers, setEngineers] = useState(8);

  // Calculations
  const competitorCostMonthly = Math.round((requests / 1000000) * 18 * 10); // ~$18 per 1M tokens
  const synapseCostMonthly = Math.round((requests / 1000000) * 2.2 * 10);
  const monthlySavings = Math.max(0, competitorCostMonthly - synapseCostMonthly);
  const annualSavings = monthlySavings * 12;
  const hoursSavedMonthly = Math.round(engineers * 42); // ~42 hours saved per engineer per month

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERAKTIV ROI KALKULYATORI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'uz' ? (
              <>Qancha Mablag' va Vaqt <span className="text-gradient">Tejashingizni Hisoblang</span></>
            ) : (
              <>Calculate Your Expected <span className="text-gradient">ROI & Cost Savings</span></>
            )}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {lang === 'uz'
              ? 'Slayderlarni o\'zgartiring va an\'anaviy modellarga nisbatan tejamkorlikni real-vaqtda ko\'ring.'
              : 'Adjust parameters below to see estimated annual cost and engineering time saved.'}
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl p-[1px] bg-gradient-to-b from-emerald-500/30 via-indigo-500/20 to-transparent shadow-2xl">
          <div className="rounded-3xl bg-[#0c0f1a] border border-white/10 p-8 sm:p-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Sliders Side */}
              <div className="space-y-8">
                
                {/* Slider 1: Requests */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-white">
                      Oylik AI So'rovlar Soni
                    </label>
                    <span className="text-sm font-mono font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-500/20">
                      {(requests / 1000000).toFixed(1)}M so'rov
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="20000000"
                    step="200000"
                    value={requests}
                    onChange={(e) => setRequests(parseInt(e.target.value))}
                    className="w-full h-2 bg-surface-100 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                    <span>100K</span>
                    <span>10M</span>
                    <span>20M+</span>
                  </div>
                </div>

                {/* Slider 2: Engineers */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-white">
                      Jamoa / Muhandislar Soni
                    </label>
                    <span className="text-sm font-mono font-bold text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-lg border border-indigo-500/20">
                      {engineers} dasturchi
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={engineers}
                    onChange={(e) => setEngineers(parseInt(e.target.value))}
                    className="w-full h-2 bg-surface-100 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                    <span>1 kishi</span>
                    <span>25 kishi</span>
                    <span>50+ kishi</span>
                  </div>
                </div>

                {/* Info Note */}
                <div className="p-4 rounded-2xl bg-surface-200/50 border border-white/5 text-xs text-slate-400 leading-relaxed">
                  💡 <span className="text-slate-300 font-medium">Qanday hisoblanadi?</span> Synapse arxitekturasi neyron kesh va token siqish orqali sarflanuvchi energiya va to'lovlarni 80% gacha kamaytiradi.
                </div>

              </div>

              {/* Real-Time Results Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#121624] to-[#0a0c14] border border-emerald-500/30 p-6 flex flex-col justify-between shadow-lg">
                
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-white/10">
                    <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" />
                      TAXMINIY TEJAMKORLIK
                    </span>
                    <span className="font-mono text-slate-300">Har yili</span>
                  </div>

                  {/* Big Number */}
                  <div className="mt-5">
                    <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight text-gradient-gold">
                      ${annualSavings.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      An'anaviy API infratuzilmasiga nisbatan tejalgan yillik byudjet
                    </div>
                  </div>

                  {/* Sub metrics */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-200/50 border border-white/5">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span>Muhandislar tejagan vaqti:</span>
                      </div>
                      <span className="text-sm font-bold font-mono text-cyan-300">
                        ~{hoursSavedMonthly} soat / oy
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-surface-200/50 border border-white/5">
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        <span>Tezlik samaradorligi:</span>
                      </div>
                      <span className="text-sm font-bold font-mono text-emerald-400">
                        +320% tezroq
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href="#pricing"
                  className="mt-6 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center shadow-lg shadow-emerald-500/25 transition-all"
                >
                  Ushbu Rejaga O'tish →
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
