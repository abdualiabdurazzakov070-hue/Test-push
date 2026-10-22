import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/siteData';

export const Faq: React.FC<{ lang: 'uz' | 'en' }> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>SAVOLLAR VA JAVOBLAR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'uz' ? (
              <>Ko'p Beriladigan <span className="text-gradient">Savollarga Javoblar</span></>
            ) : (
              <>Frequently Asked <span className="text-gradient">Questions</span></>
            )}
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Xavfsizlik, narxlar, tezlik va integratsiya haqida to'liq ma'lumotlar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all border ${
                  isOpen
                    ? 'bg-[#0f1322] border-indigo-500/40 shadow-lg shadow-indigo-500/10'
                    : 'bg-[#0a0d16] border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {item.category}
                    </span>
                    <span className="text-base font-semibold text-white">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
