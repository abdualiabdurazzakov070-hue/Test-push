import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const Testimonials: React.FC<{ lang: 'uz' | 'en' }> = ({ lang }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#07080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>MUVAFFAQIN QISSALARI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'uz' ? (
              <>Top Muhandislar va <span className="text-gradient">Liderlar Ishonchi</span></>
            ) : (
              <>Trusted by Industry <span className="text-gradient">Leaders & Engineers</span></>
            )}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Dunyodagi eng talabchan texnologik startaplar va korxonalar Synapse AI orqali ishlamoqda.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl p-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent hover:from-indigo-500/30 transition-all duration-300"
            >
              <div className="h-full rounded-3xl bg-[#0c0f1a] p-8 border border-white/5 flex flex-col justify-between">
                
                <div>
                  {/* Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {t.metric}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-indigo-500/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400">{t.role} • <span className="text-indigo-400">{t.company}</span></p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
