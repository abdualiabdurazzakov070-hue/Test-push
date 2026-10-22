import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { BENCHMARKS } from '../data/siteData';

export const ComparisonTable: React.FC<{ lang: 'uz' | 'en' }> = ({ lang }) => {
  return (
    <section id="comparison" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>BENCHMARK VA TAQQOSLASH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'uz' ? "Raqobatchilar bilan Taqqoslang" : "Compare with Industry Standards"}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Synapse 4.5 Ultra real-vaqtda GPT-4o va Claude 3.5 Sonnet parametrlaridan ustun keladi.
          </p>
        </div>

        {/* Comparison Table Glass Card */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-b from-indigo-500/30 via-white/5 to-transparent shadow-2xl overflow-hidden">
          <div className="bg-[#0b0e17] rounded-3xl overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-surface-300/80">
                  <th className="py-5 px-6 text-sm font-semibold text-slate-400">Metrika / Imkoniyat</th>
                  <th className="py-5 px-6 text-sm font-bold text-cyan-400 bg-indigo-900/20 border-x border-indigo-500/30">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span>SYNAPSE 4.5 PRO MAX</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-sm font-semibold text-slate-400">OpenAI GPT-4o</th>
                  <th className="py-5 px-6 text-sm font-semibold text-slate-400">Claude 3.5 Sonnet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {BENCHMARKS.map((item, index) => (
                  <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-300">{item.metric}</td>
                    <td className="py-4 px-6 font-bold text-cyan-300 bg-indigo-900/10 border-x border-indigo-500/20 font-mono">
                      {item.synapse}
                    </td>
                    <td className="py-4 px-6 text-slate-400 font-mono">{item.gpt4}</td>
                    <td className="py-4 px-6 text-slate-400 font-mono">{item.claude}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-300">Avtonom Multi-Agent Swarm</td>
                  <td className="py-4 px-6 text-emerald-400 bg-indigo-900/10 border-x border-indigo-500/20">
                    <div className="flex items-center gap-1.5"><Check className="w-5 h-5" /> Ha (Parallel 8 Agent)</div>
                  </td>
                  <td className="py-4 px-6 text-rose-400"><div className="flex items-center gap-1.5"><X className="w-4 h-4" /> Yo'q (Ketma-ket)</div></td>
                  <td className="py-4 px-6 text-rose-400"><div className="flex items-center gap-1.5"><X className="w-4 h-4" /> Yo'q (Cheklangan)</div></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium text-slate-300">Zero-Data Retention (GDPR)</td>
                  <td className="py-4 px-6 text-emerald-400 bg-indigo-900/10 border-x border-indigo-500/20">
                    <div className="flex items-center gap-1.5"><Check className="w-5 h-5" /> 100% Shaxsiy & Shifrlangan</div>
                  </td>
                  <td className="py-4 px-6 text-slate-400">Faqat Enterprise rejada</td>
                  <td className="py-4 px-6 text-slate-400">Faqat Enterprise rejada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
