import React, { useState, useEffect } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Cpu, 
  Layers, 
  BarChart3, 
  DollarSign, 
  Terminal, 
  ShieldCheck, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
  lang: 'uz' | 'en';
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenDemo,
  lang,
}) => {
  const [query, setQuery] = useState('');

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'AI Laboratoriya (Playground)', desc: 'Jonli promptlarni sinab ko\'rish', href: '#playground', icon: Cpu },
    { label: 'Bento Arxitektura', desc: 'Agentlar klasteri va 18ms kechikish', href: '#features', icon: Layers },
    { label: 'Jonli Klaster Telemetriyasi', desc: 'Real-vaqtli so\'rovlar va grafiklar', href: '#dashboard', icon: BarChart3 },
    { label: 'Narxlar va Tariflar', desc: 'Pro Max va Enterprise paketlari', href: '#pricing', icon: DollarSign },
    { label: 'Interaktiv Konsol Demo', desc: 'Terminal emulyatorini ochish', action: () => { onClose(); onOpenDemo(); }, icon: Terminal },
    { label: 'Ko\'p Beriladigan Savollar', desc: 'Xavfsizlik va SLA kafolatlari', href: '#faq', icon: HelpCircle },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()) ||
    a.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-[#0b0e17] border border-indigo-500/30 shadow-[0_0_60px_rgba(99,102,241,0.25)] overflow-hidden">
        
        {/* Search Bar Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-surface-200/50">
          <Search className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buyruq, bo'lim yoki xizmatni qidiring..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/5 rounded border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-80 overflow-y-auto space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (item.action) item.action();
                    else if (item.href) {
                      window.location.hash = item.href;
                      onClose();
                    }
                  }}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 cursor-pointer text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold">{item.label}</div>
                      <div className="text-[11px] text-slate-400">{item.desc}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                </div>
              );
            })
          ) : (
            <div className="p-6 text-center text-xs text-slate-500 font-mono">
              Hech qanday mos natija topilmadi.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-surface-300/60 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>O'tish uchun bosing yoki Enter</span>
          <span className="text-indigo-400">Synapse Command Core v4.5</span>
        </div>

      </div>
    </div>
  );
};
