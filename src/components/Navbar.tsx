import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Command, 
  ChevronRight, 
  Menu, 
  X, 
  Terminal, 
  Cpu,
  Layers,
  BarChart3,
  DollarSign,
  HelpCircle,
  Globe
} from 'lucide-react';

interface NavbarProps {
  onOpenCommand: () => void;
  onOpenDemo: () => void;
  lang: 'uz' | 'en';
  setLang: (lang: 'uz' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenCommand, 
  onOpenDemo, 
  lang, 
  setLang 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'uz' ? 'Xususiyatlar' : 'Features', href: '#features', icon: Layers },
    { name: lang === 'uz' ? 'AI Laboratoriya' : 'Playground', href: '#playground', icon: Cpu },
    { name: lang === 'uz' ? 'Analitika' : 'Analytics', href: '#dashboard', icon: BarChart3 },
    { name: lang === 'uz' ? 'Taqqoslov' : 'Compare', href: '#comparison', icon: Sparkles },
    { name: lang === 'uz' ? 'Tariflar' : 'Pricing', href: '#pricing', icon: DollarSign },
    { name: lang === 'uz' ? 'FAQ' : 'FAQ', href: '#faq', icon: HelpCircle },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08090E]/80 backdrop-blur-xl border-b border-indigo-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#08090E] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                <Sparkles className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-all">
                  SYNAPSE
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded-full font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                  PRO MAX
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                v4.5 • ONLINE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-surface-200/60 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Search / Command Button */}
            <button
              onClick={onOpenCommand}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-slate-200 text-xs border border-white/5 transition-all"
              title="Buyruqlar paneli"
            >
              <Command className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden xl:inline font-mono">Qidiruv...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white/5 rounded border border-white/10 text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'uz' ? 'en' : 'uz')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs border border-white/5 transition-all"
              title="Tilni o'zgartirish"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold uppercase">{lang}</span>
            </button>

            {/* Launch Console Modal Trigger */}
            <button
              onClick={onOpenDemo}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-surface-100 hover:bg-surface-50 border border-white/10 rounded-xl transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'uz' ? 'Konsol' : 'Console'}</span>
            </button>

            {/* Primary Action Button */}
            <a
              href="#pricing"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-xl group bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 group-hover:from-indigo-600 group-hover:to-cyan-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              <span className="relative px-4 py-2 transition-all ease-out bg-[#08090E] rounded-[10px] group-hover:bg-transparent flex items-center gap-1.5">
                <span>{lang === 'uz' ? 'Sinab ko\'rish' : 'Get Started'}</span>
                <ChevronRight className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCommand}
              className="p-2 rounded-xl bg-white/5 text-slate-300 border border-white/5"
            >
              <Command className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#08090E]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-200/60 border border-white/5 text-xs font-medium text-slate-300 hover:text-white hover:bg-indigo-600/20 transition-all"
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs text-slate-400">{lang === 'uz' ? 'Tilni tanlang:' : 'Language:'}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLang('uz')}
                  className={`px-3 py-1 text-xs rounded-lg font-semibold ${
                    lang === 'uz' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400'
                  }`}
                >
                  UZ
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 text-xs rounded-lg font-semibold ${
                    lang === 'en' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full py-2.5 rounded-xl bg-surface-100 border border-white/10 text-xs font-semibold text-white flex items-center justify-center gap-1.5"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Konsol</span>
              </button>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-xs font-semibold text-white flex items-center justify-center shadow-lg shadow-indigo-500/25"
              >
                <span>Boshlash</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
