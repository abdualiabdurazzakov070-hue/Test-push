import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Globe2, 
  Code, 
  Check, 
  Copy, 
  Network, 
  Lock, 
  Sparkles, 
  Database,
  ArrowUpRight
} from 'lucide-react';

interface BentoFeaturesProps {
  lang: 'uz' | 'en';
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({ lang }) => {
  const [activeSdk, setActiveSdk] = useState<'typescript' | 'python' | 'curl'>('typescript');
  const [copiedSdk, setCopiedSdk] = useState(false);
  const [selectedPingCity, setSelectedPingCity] = useState('Toshkent');

  const sdkCodes = {
    typescript: `import { SynapseAI } from '@synapse-ai/core';

const synapse = new SynapseAI({
  apiKey: process.env.SYNAPSE_API_KEY,
  cluster: 'edge-auto',
});

// Avtonom fikrlash oqimini chaqirish
const stream = await synapse.agents.run({
  model: 'synapse-4.5-ultra',
  task: 'Bozor anomaliyalarini aniqla va hisobot tuz',
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.text);
}`,
    python: `from synapse_ai import SynapseClient

client = SynapseClient(
    api_key="syn_live_9843a9d20c...",
    quantum_encryption=True
)

# 18ms past kechikishdagi so'rov
response = client.neural.generate(
    model="synapse-4.5-ultra",
    prompt="Sub-millisekundli taqsimlangan kesh arxitekturasi",
    temperature=0.4
)

print(response.output, f"Latency: {response.latency_ms}ms")`,
    curl: `curl -X POST https://api.synapse.cloud/v1/chat/completions \\
  -H "Authorization: Bearer $SYNAPSE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "synapse-4.5-ultra",
    "messages": [{"role": "user", "content": "Tizim auditi"}],
    "stream": false
  }'`
  };

  const pings: Record<string, { ms: number; status: string; ip: string }> = {
    'Toshkent': { ms: 14, status: 'Optimal', ip: '185.196.220.14' },
    'Frankfurt': { ms: 19, status: 'Super Tez', ip: '194.12.45.89' },
    'Tokyo': { ms: 23, status: 'Barqaror', ip: '133.242.18.5' },
    'Silicon Valley': { ms: 28, status: 'Yuqori', ip: '198.51.100.42' },
  };

  const copyCode = () => {
    navigator.clipboard.writeText(sdkCodes[activeSdk]);
    setCopiedSdk(true);
    setTimeout(() => setCopiedSdk(false), 2000);
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>BENTO ARXITEKTURA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'uz' ? (
              <>Ertangi Texnologiyalar, <span className="text-gradient">Bugun Sizning Qo'lingizda</span></>
            ) : (
              <>Engineered for Tomorrow, <span className="text-gradient">Available Today</span></>
            )}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {lang === 'uz'
              ? "Linear va Apple UI/UX standartlarida ishlangan 6 ta ilg'or texnologik modul."
              : "6 cutting-edge modules crafted to linear perfection for unprecedented speed and security."}
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Autonomous Multi-Agent Swarm (8 Cols) */}
          <div className="lg:col-span-8 rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/30 via-white/5 to-transparent shadow-xl group hover:border-indigo-500/50 transition-all duration-300">
            <div className="h-full rounded-3xl bg-[#0d101a] p-8 border border-white/5 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Network className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    SWARM PROTOCOL
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white tracking-tight">
                  {lang === 'uz' ? "Avtonom Kognitiv Agentlar Klasteri" : "Autonomous Cognitive Multi-Agent Swarm"}
                </h3>
                <p className="mt-2 text-slate-400 text-sm max-w-xl leading-relaxed">
                  {lang === 'uz'
                    ? "Bitta vazifani 4 ta parallel mutaxassis agent (Arxitektor, Dasturchi, Xavfsizlik Auditori va Tester) o'rtasida taqsimlab, 0% xatolik bilan bir zumda bajaring."
                    : "Parallel reasoning swarms collaborate simultaneously to solve complex architecture, security audits, and code execution."}
                </p>
              </div>

              {/* Visual Node Diagram */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: 'Arxitektor Agent', status: 'Rejalashtirmoqda', color: 'indigo' },
                  { name: 'Kod Generator', status: 'Sinxronizatsiya', color: 'cyan' },
                  { name: 'Kvant Audit', status: 'Xavfsiz (100%)', color: 'emerald' },
                  { name: 'Deploy Bot', status: 'Tayyor', color: 'purple' },
                ].map((node, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#080a11] border border-white/5 flex flex-col justify-between hover:border-indigo-500/30 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-slate-500">#{i + 1}</span>
                    </div>
                    <div className="mt-4">
                      <div className="text-xs font-bold text-white">{node.name}</div>
                      <div className="text-[11px] font-mono text-slate-400 mt-1">{node.status}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Bento Card 2: Ultra-Low Latency (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl p-[1px] bg-gradient-to-br from-cyan-500/30 via-white/5 to-transparent shadow-xl group hover:border-cyan-500/50 transition-all duration-300">
            <div className="h-full rounded-3xl bg-[#0d101a] p-8 border border-white/5 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    SUB-20MS
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  18ms Ultra-Past Kechikish
                </h3>
                <p className="mt-2 text-slate-400 text-xs leading-relaxed">
                  Bozordagi eng yaqin raqobatchilardan 12 barobar tezroq real-vaqtli oqim.
                </p>
              </div>

              {/* Latency Comparison Bars */}
              <div className="mt-6 space-y-3 font-mono text-xs">
                <div>
                  <div className="flex justify-between text-slate-400 mb-1">
                    <span className="text-cyan-400 font-bold">Synapse AI</span>
                    <span className="text-white font-bold">18 ms</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full w-[15%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-500 mb-1">
                    <span>Claude 3.5 Sonnet</span>
                    <span>480 ms</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-slate-600 rounded-full w-[70%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-500 mb-1">
                    <span>GPT-4o</span>
                    <span>620 ms</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-slate-700 rounded-full w-[90%]" />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-cyan-300 flex items-center gap-1">
                <span>⚡ O'rtacha javob tezligi: 420 token/sekund</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Enterprise Security Vault (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl p-[1px] bg-gradient-to-br from-emerald-500/30 via-white/5 to-transparent shadow-xl group hover:border-emerald-500/50 transition-all duration-300">
            <div className="h-full rounded-3xl bg-[#0d101a] p-8 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    SOC2 TYPE II
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  Harbiy Darajadagi Xavfsizlik
                </h3>
                <p className="mt-2 text-slate-400 text-xs leading-relaxed">
                  Zero-Data Retention kafolati. Ma'lumotlaringiz hech qachon modelni qayta o'qitish uchun ishlatilmaydi.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#080a11] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Shifrlash:</span>
                  <span className="font-mono text-emerald-400 font-semibold">AES-256 + TLS 1.3</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Zero-Data Retention:</span>
                  <span className="font-mono text-emerald-400 font-semibold">100% Faol</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Audit Status:</span>
                  <span className="font-mono text-cyan-400 font-semibold">Audited by Deloitte</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 4: Global Edge Infrastructure (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/30 via-white/5 to-transparent shadow-xl group hover:border-purple-500/50 transition-all duration-300">
            <div className="h-full rounded-3xl bg-[#0d101a] p-8 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    38 EDGE NODES
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  Global Geo-Marshrutlash
                </h3>
                <p className="mt-2 text-slate-400 text-xs leading-relaxed">
                  Sizga eng yaqin ma'lumotlar markazini real-vaqtda tanlab oluvchi Anycast tarmog'i.
                </p>
              </div>

              {/* City Ping Selector */}
              <div className="mt-4">
                <div className="grid grid-cols-2 gap-1.5 mb-3">
                  {Object.keys(pings).map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedPingCity(city)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left transition-all ${
                        selectedPingCity === city
                          ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-[#080a11] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Ping ({selectedPingCity}):</span>
                  <span className="text-emerald-400 font-bold">{pings[selectedPingCity].ms} ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 5: Smart API & SDK Integration (4 Cols) */}
          <div className="lg:col-span-4 rounded-3xl p-[1px] bg-gradient-to-br from-amber-500/30 via-white/5 to-transparent shadow-xl group hover:border-amber-500/50 transition-all duration-300">
            <div className="h-full rounded-3xl bg-[#0d101a] p-8 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Code className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    SDK & REST
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  3 Qatorda To'liq Integratsiya
                </h3>
                <p className="mt-2 text-slate-400 text-xs leading-relaxed">
                  TypeScript, Python va Go uchun 100% tiplashtirilgan SDK kutubxonalari.
                </p>
              </div>

              {/* Code Snippet Box */}
              <div className="mt-4 rounded-xl bg-[#080a11] border border-white/5 p-3 overflow-hidden">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
                  <div className="flex gap-2">
                    {(['typescript', 'python', 'curl'] as const).map((langKey) => (
                      <button
                        key={langKey}
                        onClick={() => setActiveSdk(langKey)}
                        className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${
                          activeSdk === langKey ? 'bg-amber-500/20 text-amber-300 font-bold' : 'text-slate-500 hover:text-white'
                        }`}
                      >
                        {langKey}
                      </button>
                    ))}
                  </div>

                  <button onClick={copyCode} className="text-slate-400 hover:text-white">
                    {copiedSdk ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <pre className="text-[10px] font-mono text-slate-300 max-h-24 overflow-y-auto">
                  {sdkCodes[activeSdk].substring(0, 160)}...
                </pre>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
