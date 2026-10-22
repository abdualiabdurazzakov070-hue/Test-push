import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  Sparkles, 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Settings2, 
  Sliders, 
  Zap, 
  Maximize2, 
  Code2, 
  FileText,
  Flame,
  Clock
} from 'lucide-react';
import { PLAYGROUND_PRESETS } from '../data/siteData';

interface AiPlaygroundProps {
  lang: 'uz' | 'en';
}

export const AiPlayground: React.FC<AiPlaygroundProps> = ({ lang }) => {
  const [selectedPreset, setSelectedPreset] = useState(PLAYGROUND_PRESETS[0]);
  const [customPrompt, setCustomPrompt] = useState(PLAYGROUND_PRESETS[0].prompt);
  const [output, setOutput] = useState(PLAYGROUND_PRESETS[0].response);
  const [isGenerating, setIsGenerating] = useState(false);
  const [displayedText, setDisplayedText] = useState(PLAYGROUND_PRESETS[0].response);
  const [temperature, setTemperature] = useState(0.7);
  const [selectedModel, setSelectedModel] = useState('Synapse-4.5 Ultra Code');
  const [copied, setCopied] = useState(false);
  const [liveTokens, setLiveTokens] = useState(412);
  const [latency, setLatency] = useState(18);

  const timerRef = useRef<any>(null);

  // Switch preset
  const handleSelectPreset = (preset: typeof PLAYGROUND_PRESETS[0]) => {
    setSelectedPreset(preset);
    setCustomPrompt(preset.prompt);
    setOutput(preset.response);
    setDisplayedText(preset.response);
    setSelectedModel(preset.model);
    setLiveTokens(preset.tokensPerSec);
    setLatency(preset.latencyMs);
  };

  // Simulate streaming generation
  const handleGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setDisplayedText('');

    let currentLength = 0;
    const fullText = output;
    const chunkSize = 6; // characters per tick

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      currentLength += chunkSize;
      if (currentLength >= fullText.length) {
        setDisplayedText(fullText);
        setIsGenerating(false);
        clearInterval(timerRef.current);
      } else {
        setDisplayedText(fullText.substring(0, currentLength));
      }
    }, 12);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(displayedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsGenerating(false);
    setDisplayedText(output);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section id="playground" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERAKTIV AI LABORATORIYA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'uz' ? (
              <>Kodni va Fikrlashni <span className="text-gradient">Jonli Sinab Ko'ring</span></>
            ) : (
              <>Test Code & Reasoning in <span className="text-gradient">Real-Time</span></>
            )}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            {lang === 'uz'
              ? 'Pastdagi tayyor promptlardan birini tanlang yoki o\'zingiz xohlagan vazifani kiritib, NeuraCore 4.5 tezligini his qiling.'
              : 'Select a preset prompt or test your own custom instruction with real-time stream simulation.'}
          </p>
        </div>

        {/* Preset Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {PLAYGROUND_PRESETS.map((preset) => {
            const isSelected = selectedPreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white border-transparent shadow-lg shadow-indigo-500/25 scale-[1.03]'
                    : 'bg-surface-200/80 text-slate-300 border-white/5 hover:border-white/20 hover:text-white hover:bg-surface-100'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-indigo-400'}`} />
                <span>{preset.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 opacity-75">
                  {preset.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Playground Main Box */}
        <div className="mt-8 rounded-3xl p-[1px] bg-gradient-to-b from-indigo-500/30 via-slate-800/40 to-transparent shadow-2xl">
          <div className="rounded-3xl bg-[#0b0e17] border border-white/10 overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="px-6 py-4 bg-surface-300/80 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
              
              {/* Model Selector & Parameters */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium">Model:</span>
                  <select 
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="bg-[#0e1220] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Synapse-4.5 Ultra Code">Synapse-4.5 Ultra Code (420 tok/s)</option>
                    <option value="Synapse-4.5 Reasoning Swarm">Synapse-4.5 Reasoning Swarm</option>
                    <option value="Synapse Vision-X">Synapse Vision-X (Multimodal)</option>
                    <option value="Synapse DeepData Core">Synapse DeepData Core (Sub-ms SQL)</option>
                  </select>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium">Harorat (Temp):</span>
                  <input 
                    type="range" 
                    min="0.1" 
                    max="1.0" 
                    step="0.1" 
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-20 accent-indigo-500 cursor-pointer"
                  />
                  <span className="text-xs font-mono text-indigo-400">{temperature}</span>
                </div>
              </div>

              {/* Real-time stats */}
              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{liveTokens} tok/s</span>
                </div>
                <div className="h-4 w-[1px] bg-white/10" />
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{latency} ms kechikish</span>
                </div>
              </div>

            </div>

            {/* Split Editor / Playground Body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              
              {/* Left Column: Input Prompt */}
              <div className="p-6 flex flex-col justify-between h-full bg-[#080a11]/60">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-indigo-400" />
                      <span>{lang === 'uz' ? 'Prompt yoki Ko\'rsatma:' : 'Prompt Instruction:'}</span>
                    </label>
                    <span className="text-[10px] font-mono text-slate-500">
                      Tokens: ~{Math.ceil(customPrompt.length / 4)}
                    </span>
                  </div>

                  <textarea
                    rows={8}
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    placeholder="Savol yoki vazifani bu yerga yozing..."
                    className="w-full bg-[#0e1220]/90 border border-white/10 rounded-2xl p-4 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 font-sans resize-none transition-all"
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    💡 <span className="italic">Ctrl + Enter orqali tezkor ishga tushirish</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleReset}
                      className="p-2.5 rounded-xl bg-surface-200 hover:bg-surface-100 text-slate-400 hover:text-white border border-white/5 transition-all"
                      title="Qayta yuklash"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                        isGenerating
                          ? 'bg-indigo-600/50 text-indigo-200 cursor-not-allowed'
                          : 'bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98]'
                      }`}
                    >
                      {isGenerating ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Generatsiya qilinmoqda...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>{lang === 'uz' ? 'Ishga Tushirish' : 'Run Prompt'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Simulated Live Response */}
              <div className="p-6 bg-[#06080e] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {lang === 'uz' ? 'Neyron Oqim Javobi' : 'Neural Stream Output'}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono">
                        {selectedPreset.language.toUpperCase()}
                      </span>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-200 hover:bg-surface-100 text-slate-300 hover:text-white text-xs border border-white/5 transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Nusxalandi!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Nusxalash</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Output Preview Box */}
                  <div className="relative rounded-2xl bg-[#090b14] border border-white/5 p-4 max-h-[340px] overflow-y-auto font-mono text-xs text-slate-200 leading-relaxed shadow-inner">
                    <pre className="whitespace-pre-wrap break-words">
                      {displayedText}
                      {isGenerating && (
                        <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse align-middle" />
                      )}
                    </pre>
                  </div>
                </div>

                {/* Footer Metrics */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Audit: PASS (100% Validated)</span>
                  <span className="text-cyan-400">Energy Consumption: -68%</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
