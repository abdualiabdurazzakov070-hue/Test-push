import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Globe, Send, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Footer: React.FC<{ lang?: 'uz' | 'en' }> = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.85 }
    });
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="border-t border-white/5 bg-[#05060a] pt-20 pb-12 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-indigo-600/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-footer Newsletter CTA Card */}
        <div className="rounded-3xl p-[1px] bg-gradient-to-r from-indigo-500/40 via-cyan-500/30 to-purple-500/40 mb-16 shadow-2xl">
          <div className="rounded-3xl bg-[#090b14] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Kelajak Dasturchilari Qatoriga Qo'shiling
              </h3>
              <p className="mt-2 text-slate-400 text-sm">
                Yangi modellar, yangilanishlar va maxsus takliflardan birinchi bo'lib xabardor bo'ling.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full md:w-auto flex-1 max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Elektron pochtangizni kiriting..."
                  className="w-full px-4 py-3 rounded-xl bg-surface-200 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 font-sans"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-xs whitespace-nowrap hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center gap-1.5"
                >
                  {subscribed ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Obuna bo'lindi!</span>
                    </>
                  ) : (
                    <>
                      <span>Obuna bo'lish</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/5">
          
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#08090E] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">SYNAPSE AI</span>
            </div>
            <p className="mt-4 text-slate-400 text-xs max-w-sm leading-relaxed">
              Dunyodagi eng tezkor va xavfsiz avtonom sun'iy intellekt infratuzilmasi. Sub-20ms kechikish va parallel kognitiv agentlar bilan ta'minlangan.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Barcha global serverlar 100% onlayn</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Mahsulot</h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#playground" className="hover:text-white transition-colors">AI Laboratoriya</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Bento Arxitektura</a></li>
              <li><a href="#dashboard" className="hover:text-white transition-colors">Jonli Telemetriya</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Tarif Rejalari</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Ishlab chiquvchilar</h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">API Hujjatlari</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TypeScript SDK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Python SDK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub Repozitoriy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Kompaniya & Huquqiy</h4>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Biz Haqimizda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maxfiylik Siyosati</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Foydalanish Shartlari</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SOC2 Sertifikatlari</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SYNAPSE NEURAL INC. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex items-center gap-4">
            <span className="p-2 rounded-lg bg-white/5 hover:text-white cursor-pointer"><Globe className="w-4 h-4" /></span>
            <span className="p-2 rounded-lg bg-white/5 hover:text-white cursor-pointer"><MessageSquare className="w-4 h-4" /></span>
            <span className="p-2 rounded-lg bg-white/5 hover:text-white cursor-pointer"><Send className="w-4 h-4" /></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
