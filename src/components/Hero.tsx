import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Cpu, 
  Play, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  Flame,
  Globe2
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  lang: 'uz' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, lang }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'stream' | 'metrics' | 'agents'>('stream');
  const [tokensProcessed, setTokensProcessed] = useState(14892040);

  // Live counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTokensProcessed(prev => prev + Math.floor(Math.random() * 85) + 35);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const copyInstallCommand = () => {
    navigator.clipboard.writeText('npm i @synapse-ai/core');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial glows and cyber grids */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-1/4 w-[350px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:border-indigo-400 transition-all cursor-pointer backdrop-blur-md group">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold text-white">NeuraCore 4.5 Ultra Released</span>
            <span className="text-slate-400">|</span>
            <span className="text-indigo-200 group-hover:text-cyan-300 transition-colors">
              {lang === 'uz' ? '18ms kechikish va avtonom agentlar klasteri' : '18ms latency with autonomous agent swarm'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            {lang === 'uz' ? (
              <>
                Sun'iy Intellektning <br />
                <span className="text-gradient-purple">Pro Max Davri</span> Keldi.
              </>
            ) : (
              <>
                The Autonomous AI <br />
                <span className="text-gradient-purple">Pro Max Operating System</span>.
              </>
            )}
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {lang === 'uz' 
              ? "Sekundiga 420+ token tezligi, parallel kognitiv fikrlash va harbiy darajadagi xavfsizlikka ega zamonaviy avtonom neyron platforma."
              : "Next-generation autonomous neural cloud with sub-20ms latency, multi-agent reasoning, and zero-data retention security."}
          </p>

          {/* Primary CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-400 text-white font-semibold text-sm shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_45px_rgba(99,102,241,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group"
            >
              <Zap className="w-4 h-4 text-cyan-200 fill-cyan-200" />
              <span>{lang === 'uz' ? 'Bepul Sinab Ko\'rish' : 'Start Free Trial'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenDemo}
              className="px-7 py-3.5 rounded-2xl bg-surface-100/90 hover:bg-surface-50 text-slate-200 hover:text-white font-semibold text-sm border border-white/10 hover:border-indigo-500/40 shadow-lg backdrop-blur-xl transition-all flex items-center gap-2.5 group"
            >
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
              <span>{lang === 'uz' ? 'Interaktiv Konsol' : 'Interactive Console'}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                LIVE
              </span>
            </button>

            {/* Quick NPM Copy Pill */}
            <div 
              onClick={copyInstallCommand}
              className="px-4 py-3.5 rounded-2xl bg-surface-200/80 hover:bg-surface-100 border border-white/5 hover:border-white/20 text-slate-400 hover:text-slate-200 text-xs font-mono flex items-center gap-2 cursor-pointer transition-all"
              title="Kopiya qilish uchun bosing"
            >
              <span className="text-indigo-400">$</span>
              <span>npm i @synapse-ai/core</span>
              {copied ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-500" />
              )}
            </div>
          </div>

          {/* Social Proof & Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Type II Sertifikatlangan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Kechikish: 18ms SLA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span>38 ta Global Edge Markaz</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Showcase Card (The "Pro Max" Glass Terminal Preview) */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Neon border glow wrapper */}
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-indigo-500/40 via-cyan-500/20 to-transparent shadow-[0_20px_80px_rgba(99,102,241,0.2)]">
            <div className="rounded-3xl bg-[#0b0d16]/95 backdrop-blur-2xl overflow-hidden border border-white/5">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-surface-300/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                    synapse-cluster://edge-eu-01.synapse.cloud
                  </span>
                </div>

                {/* Sub-tabs */}
                <div className="flex items-center gap-1 bg-[#090A0F] p-1 rounded-xl border border-white/5">
                  <button
                    onClick={() => setActiveTab('stream')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeTab === 'stream' 
                        ? 'bg-indigo-600 text-white shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Neural Stream
                  </button>
                  <button
                    onClick={() => setActiveTab('metrics')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeTab === 'metrics' 
                        ? 'bg-indigo-600 text-white shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    onClick={() => setActiveTab('agents')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      activeTab === 'agents' 
                        ? 'bg-indigo-600 text-white shadow' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Swarm Nodes (8)
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden md:inline">HEALTHY</span>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-6 md:p-8">
                {activeTab === 'stream' && (
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-2xl bg-surface-200/50 border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-white">
                          <Cpu className="w-5 h-5 animate-pulse" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                            Active Autonomous Job #9842
                          </div>
                          <div className="text-sm font-semibold text-white">
                            Real-vaqtli Kognitiv Optimallashtirish va Qidiruv
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs font-mono">
                        <div className="text-right">
                          <div className="text-slate-400">Ishlangan Tokenlar:</div>
                          <div className="text-indigo-300 font-bold text-sm">
                            {tokensProcessed.toLocaleString()}
                          </div>
                        </div>
                        <div className="h-8 w-[1px] bg-white/10" />
                        <div className="text-right">
                          <div className="text-slate-400">Kechikish:</div>
                          <div className="text-emerald-400 font-bold text-sm">16.4 ms</div>
                        </div>
                      </div>
                    </div>

                    {/* Simulated Code / Neural log block */}
                    <div className="rounded-2xl bg-[#06070B] p-5 font-mono text-xs border border-white/5 space-y-2.5 overflow-x-auto text-slate-300">
                      <div className="flex items-center gap-2 text-indigo-400">
                        <span>[19:48:02.102]</span>
                        <span className="text-cyan-400">INIT:</span>
                        <span>Multi-modal transformer pipeline dynamically shard-routed across 16 GPUs.</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <span>[19:48:02.118]</span>
                        <span className="text-emerald-400">RESOLVE:</span>
                        <span>Vector embeddings clustered with HNSW graph index (recall: 0.9998).</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <span>[19:48:02.124]</span>
                        <span className="text-purple-400">INFERENCE:</span>
                        <span className="text-amber-200">
                          {`{"tokens_per_sec": 428.4, "cache_hit_rate": "94.2%", "memory_compression": "4.1x"}`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <span>[19:48:02.138]</span>
                        <span>SUCCESS:</span>
                        <span className="text-slate-300">
                          Output validated with zero hallucinations. Synthesized in 21ms.
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-surface-200/50 border border-white/5">
                      <div className="text-xs text-slate-400">Average P99 Latency</div>
                      <div className="text-2xl font-bold text-emerald-400 mt-1 font-mono">18.2 ms</div>
                      <div className="text-[10px] text-emerald-500/80 mt-1">↓ 42% vs Legacy</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface-200/50 border border-white/5">
                      <div className="text-xs text-slate-400">Throughput</div>
                      <div className="text-2xl font-bold text-indigo-400 mt-1 font-mono">420 tok/s</div>
                      <div className="text-[10px] text-indigo-400/80 mt-1">↑ 5.6x faster</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface-200/50 border border-white/5">
                      <div className="text-xs text-slate-400">Cluster Uptime</div>
                      <div className="text-2xl font-bold text-cyan-400 mt-1 font-mono">99.999%</div>
                      <div className="text-[10px] text-cyan-500/80 mt-1">High Availability</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface-200/50 border border-white/5">
                      <div className="text-xs text-slate-400">Global Edge Nodes</div>
                      <div className="text-2xl font-bold text-purple-400 mt-1 font-mono">38 Active</div>
                      <div className="text-[10px] text-purple-400/80 mt-1">Zero Congestion</div>
                    </div>
                  </div>
                )}

                {activeTab === 'agents' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { name: 'Kognitiv Kod Agent', state: 'Executing', load: '68%', color: 'border-indigo-500/40 text-indigo-400' },
                      { name: 'Xavfsizlik Auditori', state: 'Scanning', load: '32%', color: 'border-emerald-500/40 text-emerald-400' },
                      { name: 'Semantik Vektor Indeks', state: 'Indexing', load: '89%', color: 'border-cyan-500/40 text-cyan-400' },
                      { name: 'Avtomatik Sinovchi', state: 'Passing (100%)', load: '45%', color: 'border-purple-500/40 text-purple-400' },
                    ].map((agent, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-surface-200/40 border border-white/5 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">{agent.name}</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        </div>
                        <div className="mt-3 flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-400">{agent.state}</span>
                          <span className="text-slate-200 font-bold">{agent.load}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Quick Bar */}
              <div className="px-6 py-3 bg-surface-300/40 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Real-Vaqtli Neyron Matritsa yuklamasi: 34.2%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hover:text-white cursor-pointer transition-colors" onClick={onOpenDemo}>
                    Barcha 8 ta agentni boshqarish →
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
