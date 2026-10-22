import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Cpu, 
  Database, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  Filter,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

interface LiveDashboardProps {
  lang: 'uz' | 'en';
}

export const LiveDashboard: React.FC<LiveDashboardProps> = ({ lang }) => {
  const [timeframe, setTimeframe] = useState<'24h' | '7d' | '30d'>('24h');
  const [logs, setLogs] = useState([
    { id: 1, time: '19:54:12', client: 'Bank-Api-Node-01', region: 'Frankfurt', model: 'Synapse 4.5 Ultra', latency: '16ms', status: '200 OK' },
    { id: 2, time: '19:54:10', client: 'Fintech-Payment-Gateway', region: 'Tashkent', model: 'Reasoning Swarm', latency: '14ms', status: '200 OK' },
    { id: 3, time: '19:54:08', client: 'Mobility-App-Backend', region: 'Tokyo', model: 'Synapse Vision-X', latency: '21ms', status: '200 OK' },
    { id: 4, time: '19:54:05', client: 'Autonomous-DevOps', region: 'Silicon Valley', model: 'DeepData Core', latency: '12ms', status: '200 OK' },
  ]);

  // Simulate new live logs streaming in
  useEffect(() => {
    const interval = setInterval(() => {
      const cities = ['Tashkent', 'Frankfurt', 'London', 'Tokyo', 'Singapore', 'Stockholm'];
      const models = ['Synapse 4.5 Ultra', 'Reasoning Swarm', 'DeepData Core', 'Vision-X'];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomModel = models[Math.floor(Math.random() * models.length)];
      const randomLatency = Math.floor(Math.random() * 12) + 12;

      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

      setLogs(prev => [
        {
          id: Date.now(),
          time: timeStr,
          client: `Client-${Math.floor(Math.random() * 800) + 100}`,
          region: randomCity,
          model: randomModel,
          latency: `${randomLatency}ms`,
          status: '200 OK'
        },
        ...prev.slice(0, 4)
      ]);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="py-24 relative bg-[#06070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
              <Activity className="w-3.5 h-3.5 text-indigo-400" />
              <span>REAL-VAQT BOSHQUV PANELI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'uz' ? "Jonli Klaster Telemetriyasi" : "Live Cluster Telemetry & Telemetry"}
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl">
              Butun dunyo bo'ylab har millisekundda ishlov berilayotgan millionlab neyron so'rovlar holatini kuzating.
            </p>
          </div>

          {/* Timeframe switch */}
          <div className="flex items-center gap-1.5 p-1 bg-surface-200/80 rounded-2xl border border-white/5 backdrop-blur-md self-start md:self-auto">
            {(['24h', '7d', '30d'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  timeframe === t 
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t === '24h' ? 'So\'nggi 24 soat' : t === '7d' ? '7 kun' : '30 kun'}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-6 rounded-2xl bg-surface-200/50 border border-white/5 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Umumiy AI So'rovlar</span>
              <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Cpu className="w-4 h-4" />
              </span>
            </div>
            <div className="mt-4 text-3xl font-extrabold text-white font-mono">
              42,891,204
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+24.8% o'sish</span>
              <span className="text-slate-500 font-normal">o'tgan haftaga nisbatan</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-200/50 border border-white/5 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>O'rtacha Kechikish (P99)</span>
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Clock className="w-4 h-4" />
              </span>
            </div>
            <div className="mt-4 text-3xl font-extrabold text-cyan-300 font-mono">
              17.4 ms
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <ArrowDownRight className="w-3.5 h-3.5" />
              <span>-42.3% tezlashdi</span>
              <span className="text-slate-500 font-normal">sub-20ms maqsad</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-200/50 border border-white/5 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Faol Parallel Agentlar</span>
              <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                <Activity className="w-4 h-4" />
              </span>
            </div>
            <div className="mt-4 text-3xl font-extrabold text-purple-300 font-mono">
              142 Running
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-purple-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>100% klaster salomatligi</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-surface-200/50 border border-white/5 backdrop-blur-md relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Kesh Samaradorligi</span>
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Database className="w-4 h-4" />
              </span>
            </div>
            <div className="mt-4 text-3xl font-extrabold text-emerald-400 font-mono">
              94.6% Hit
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>0ms kesh javoblari</span>
            </div>
          </div>

        </div>

        {/* Dashboard Visualization & Live Feed Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Visual Chart (8 Cols) */}
          <div className="lg:col-span-8 p-6 rounded-3xl bg-surface-200/40 border border-white/5 backdrop-blur-xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div>
                <h4 className="text-base font-bold text-white">Token Oqimi va Qayta Ishlash Dinamikasi</h4>
                <p className="text-xs text-slate-400">Million tokenlar bo'yicha real-vaqt grafigi</p>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <span className="w-3 h-3 rounded-full bg-indigo-500" />
                  <span>Synapse 4.5</span>
                </span>
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-3 h-3 rounded-full bg-cyan-400" />
                  <span>Reasoning Swarm</span>
                </span>
              </div>
            </div>

            {/* SVG Area Chart Graphic */}
            <div className="mt-6 relative h-64 w-full">
              <svg className="w-full h-full" viewBox="0 0 700 240" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="chartGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Grid lines */}
                <line x1="0" y1="40" x2="700" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="700" y2="100" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="160" x2="700" y2="160" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="220" x2="700" y2="220" stroke="rgba(255,255,255,0.08)" />

                {/* Area 1: Primary Model */}
                <path
                  d="M0,180 C80,160 140,90 220,110 C300,130 380,50 460,70 C540,90 620,30 700,45 L700,220 L0,220 Z"
                  fill="url(#chartGrad1)"
                />
                <path
                  d="M0,180 C80,160 140,90 220,110 C300,130 380,50 460,70 C540,90 620,30 700,45"
                  stroke="#6366f1"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Area 2: Secondary Swarm Model */}
                <path
                  d="M0,200 C70,180 150,140 230,150 C310,160 390,110 470,120 C550,130 630,70 700,80 L700,220 L0,220 Z"
                  fill="url(#chartGrad2)"
                />
                <path
                  d="M0,200 C70,180 150,140 230,150 C310,160 390,110 470,120 C550,130 630,70 700,80"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Pulsing Highlight Dot */}
                <circle cx="620" cy="30" r="5" fill="#6366f1" className="animate-ping" opacity="0.75" />
                <circle cx="620" cy="30" r="4" fill="#ffffff" />
              </svg>

              {/* Time axis marks */}
              <div className="mt-2 flex justify-between text-[11px] font-mono text-slate-500">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
                <span>Hozir (Now)</span>
              </div>
            </div>

            {/* Bottom summary badges */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Klaster barqarorligi: 99.999% SLA</span>
              </span>
              <span className="font-mono text-indigo-300">P95: 14.8ms | P99: 18.2ms</span>
            </div>
          </div>

          {/* Live Activity Stream (4 Cols) */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-surface-200/40 border border-white/5 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <h4 className="text-sm font-bold text-white">Jonli So'rovlar Oqimi</h4>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                  LIVE STREAM
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {logs.map((log) => (
                  <div 
                    key={log.id} 
                    className="p-3 rounded-xl bg-[#090b14] border border-white/5 text-xs font-mono space-y-1 hover:border-indigo-500/30 transition-all animate-in fade-in slide-in-from-top-1"
                  >
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span className="text-indigo-400">{log.time}</span>
                      <span className="text-emerald-400 font-bold">{log.status}</span>
                    </div>
                    <div className="text-white font-medium truncate">
                      {log.client}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-white/5">
                      <span>{log.region}</span>
                      <span className="text-cyan-400">{log.latency}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-center">
              <span className="text-[11px] text-slate-400">
                Sekundiga ~8,400 ta so'rov qabul qilinmoqda
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
