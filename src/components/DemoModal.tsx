import React, { useState } from 'react';
import { Terminal, X, Play, RotateCcw, Check, Sparkles } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'uz' | 'en';
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, lang }) => {
  const [inputCmd, setInputCmd] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'synapse-cli status',
      output: '⚡ Synapse Neural Core v4.5: ALL SYSTEMS GREEN\nConnected to Anycast Edge: Frankfurt-DE (16.4ms)\nActive Cognitive Swarm Nodes: 8 / 8 Online\nZero-Data-Retention: ENFORCED',
    },
  ]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputCmd.trim().toLowerCase();
    if (!trimmed) return;

    let reply = '';
    if (trimmed === 'help') {
      reply = `Mavjud buyruqlar:\n• status - Klaster va server holati\n• benchmark - 420 tok/s tezlik sinovi\n• agents - Faol parallel kognitiv agentlar ro'yxati\n• deploy - Avtonom smart-kontrakt yoki API deploy qilish\n• clear - Konsol ekranini tozalash`;
    } else if (trimmed === 'status') {
      reply = `✓ Edge Klaster: 38 ta geo-server faol\n✓ P99 Latency: 17.8ms\n✓ Xavfsizlik: AES-256 Shifrlangan\n✓ Xotira: 2,000,000 token kontekst tayyor`;
    } else if (trimmed === 'benchmark') {
      reply = `[RUNNING BENCHMARK TEST...]\n→ 10,000 ta parallel token yaratilmoqda...\n→ HNSW vektor indeksi: 0.9999 aniqlik\n✓ Natija: 432.8 tokens/sec | Kechikish: 15.8ms | SLA: 100%`;
    } else if (trimmed === 'agents') {
      reply = `1. Coder-Agent: Code generation & AST validation (IDLE)\n2. Security-Auditor: Static AST taint check (ACTIVE)\n3. Reasoning-Swarm: Multi-path tree-of-thought (OPTIMAL)\n4. Database-Shard: ClickHouse streaming sink (READY)`;
    } else if (trimmed === 'deploy') {
      reply = `🚀 Avtonom deploy muvaffaqiyatli amalga oshirildi!\nEndpoint: https://api.synapse.cloud/v1/agent-swarm-prod\nSSL: TLS 1.3 Active | Edge Cache: Enabled`;
    } else if (trimmed === 'clear') {
      setHistory([]);
      setInputCmd('');
      return;
    } else {
      reply = `Noma'lum buyruq: "${trimmed}". Yordam olish uchun "help" deb yozing.`;
    }

    setHistory((prev) => [...prev, { cmd: inputCmd, output: reply }]);
    setInputCmd('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-xl" />

      {/* Terminal Container */}
      <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-[#090b12] border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.25)] overflow-hidden font-mono text-xs">
        
        {/* Terminal Header */}
        <div className="px-6 py-4 bg-surface-300/80 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-3 text-slate-300 font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>synapse-interactive-console://v4.5</span>
            </span>
          </div>

          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="p-6 h-96 overflow-y-auto space-y-4 text-slate-300 bg-[#06070c]">
          <div className="text-slate-500 pb-2 border-b border-white/5">
            Synapse AI Interactive Shell v4.5.0 (x86_64-pc-edge)<br />
            Buyruqlar ro'yxatini ko'rish uchun <span className="text-cyan-400 font-bold">help</span> deb yozing.
          </div>

          {history.map((h, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-400">
                <span className="text-cyan-400">user@synapse:~$</span>
                <span>{h.cmd}</span>
              </div>
              <div className="whitespace-pre-wrap text-slate-300 pl-4 border-l border-white/10">
                {h.output}
              </div>
            </div>
          ))}

          {/* Prompt line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
            <span className="text-cyan-400">user@synapse:~$</span>
            <input
              type="text"
              autoFocus
              value={inputCmd}
              onChange={(e) => setInputCmd(e.target.value)}
              placeholder="masalan: benchmark, status, agents..."
              className="w-full bg-transparent text-white focus:outline-none caret-cyan-400 font-mono"
            />
          </form>
        </div>

        {/* Footer shortcuts */}
        <div className="px-6 py-3 bg-surface-300/60 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
          <span>Tezkor buyruqlar: <span className="text-cyan-300">benchmark</span>, <span className="text-indigo-300">status</span>, <span className="text-emerald-300">agents</span></span>
          <button 
            onClick={() => setHistory([])}
            className="flex items-center gap-1 hover:text-white"
          >
            <RotateCcw className="w-3 h-3" /> Tozalash
          </button>
        </div>

      </div>
    </div>
  );
};
