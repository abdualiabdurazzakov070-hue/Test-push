import type { PromptPreset, PricingPlan, FaqItem, TestimonialItem } from '../types';

export const PLAYGROUND_PRESETS: PromptPreset[] = [
  {
    id: 'code-gen',
    category: 'Kod Generatsiyasi',
    title: 'React + Tailwind Pro Max Modal',
    prompt: 'React 19 va Tailwind CSS yordamida glassmorphism uslubidagi animated confirmation modal komponentini yaratib ber.',
    model: 'Synapse-4.5 Ultra Code',
    tokensPerSec: 412,
    latencyMs: 18,
    language: 'tsx',
    response: `import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

export const ProMaxModal = ({ isOpen, onClose, onConfirm }: any) => {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop blur with deep dark aura */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md" 
        />
        
        {/* Glowing glass container */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }} 
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative z-10 w-full max-w-lg rounded-2xl bg-[#0e111a]/90 p-8 border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.2)] backdrop-blur-2xl"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">Xavfsiz Tranzaksiya</h3>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="mt-4 text-slate-300 text-sm leading-relaxed">
            NeuraCore 4.5 protokoli orqali avtonom shifrlangan aqlli shartnoma tasdiqlanmoqda.
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button onClick={onClose} className="px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/5">
              Bekor qilish
            </button>
            <button onClick={onConfirm} className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg">
              Tasdiqlash
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};`,
  },
  {
    id: 'ai-agent',
    category: 'Avtonom Agentlar',
    title: 'Avtomatlashtirilgan Bozor Tahlili',
    prompt: 'Fintech bozoridagi top 5 ta anomaliyani aniqla, xatarlarni bahola va real-vaqtda risk profilini shakllantir.',
    model: 'Synapse-4.5 Reasoning Swarm',
    tokensPerSec: 385,
    latencyMs: 24,
    language: 'markdown',
    response: `### 🌐 Bozor Tahlili Hisoboti (Real-Vaqtda Generatsiya qilindi)

**Tahlil qilingan modellar:** 12 ta avtonom kognitiv agent  
**Qamrov:** 14,280 ta aktiv va order-book chuqurligi  
**Xavfsizlik indeksi:** 99.94% ishonch darajasi

---

#### 1. Likvidlik klasteridagi kutilmagan divergensiya
- **Anomaliya:** Tier-1 birjalarda buyurtmalar balansi +34.2% ga ijobiy tomonga siljigan.
- **Tavsiya:** Avtomatlashtirilgan hedging protokolini faollashtirish.

#### 2. Kross-chegara to'lovlarida past kechikish (Latency)
- NeuraEdge marshrutlash orqali to'lovlar uzatilish vaqti 42ms dan **8.3ms** ga tushirildi.
- **Risk darajasi:** 🟢 Minimal (0.02%)

#### 3. Avtomatlashtirilgan xulosa
Tizim 4 ta parallel arbitraj oqimini aniqladi. Barcha ma'lumotlar shifrlangan va audit tekshiruvidan o'tdi.`,
  },
  {
    id: 'vision-multimodal',
    category: 'Multimodal Vision',
    title: 'UI/UX Arxitektura Audit',
    prompt: 'Murakkab analitika dashboardini tahlil qil va foydalanuvchi konversiyasini 3 barobarga oshirish bo\'yicha tavsiyalar ber.',
    model: 'Synapse Vision-X',
    tokensPerSec: 460,
    latencyMs: 14,
    language: 'markdown',
    response: `🎯 **UI/UX Pro Max Optimizatsiya Rejasi:**

1. **Vizual Ierarxiya va Fokus Nuqtalari:**
   - Kognitiv yukni 40% ga kamaytirish uchun asosiy KPI kartalari yuqori chap burchakka 3D glassmorphism effekti bilan joylashtirildi.
   - Micro-interactions (Framer Motion silliq hover) orqali sekinlashishni yo'qotish.

2. **Tipografika va Kontrast Balansi:**
   - Asosiy shrift: \`Plus Jakarta Sans\` + \`JetBrains Mono\` raqamlar uchun.
   - Text contrast ratio: 14.8:1 (WCAG AAA talablariga to'liq javob beradi).

3. **Kutilayotgan Natija:**
   - Bounce rate: **-48%**
   - Click-through-rate (CTR): **+182%**
   - O'rtacha sessiya davomiyligi: **4m 12s**`,
  },
  {
    id: 'sql-db',
    category: 'Yuqori Tezlikdagi DB',
    title: 'PostgreSQL & ClickHouse Shard Optimizer',
    prompt: 'Sekundiga 500,000 ta so\'rov keluvchi analitik ma\'lumotlar bazasi uchun sub-millisekund indekslash sxemasini tuz.',
    model: 'Synapse DeepData Core',
    tokensPerSec: 510,
    latencyMs: 11,
    language: 'sql',
    response: `-- Synapse Ultra-Partitioning & Materialized View Strategy
CREATE TABLE telemetry_neural_events (
    event_id UUID DEFAULT gen_random_uuid(),
    tenant_id VARCHAR(64) NOT NULL,
    model_id VARCHAR(48) NOT NULL,
    prompt_tokens INT4 NOT NULL,
    completion_tokens INT4 NOT NULL,
    latency_microseconds INT8 NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CLOCK_TIMESTAMP()
) PARTITION BY RANGE (created_at);

-- 1-darajali tezkor GiST & BRIN indekslar
CREATE INDEX idx_telemetry_brin ON telemetry_neural_events 
USING BRIN (created_at) WITH (pages_per_range = 32);`,
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Yangi boshlayotgan dasturchilar va startup tadqiqotchilari uchun.',
    priceMonthly: 0,
    priceAnnual: 0,
    tokens: '1,000,000 token/oy',
    features: [
      'Synapse 4.0 Standart modeli',
      'API kechikishi: ~120ms',
      'Hamjamiyat yordami',
      '3 tagacha avtonom agent',
      'Standart SSL shifrlash',
    ],
    cta: 'Bepul boshlash',
  },
  {
    id: 'pro-max',
    name: 'Pro Max',
    badge: 'ENG MASHHUR • TAVSIYA ETILADI',
    popular: true,
    description: 'Yuqori yuklamali bizneslar, agent tizimlari va professional jamoalar uchun.',
    priceMonthly: 49,
    priceAnnual: 39,
    tokens: '50,000,000 token/oy',
    features: [
      'Synapse 4.5 Ultra & Reasoning Core',
      'Ultra-past kechikish: < 20ms',
      '24/7 Prioritetli VIP yordam',
      'Cheksiz parallel kognitiv agentlar',
      'Maxsus Fine-tuning imkoniyati',
      'SOC2 Type II va GDPR xavfsizlik kafolati',
      'Real-vaqtli analitika va telemetriya',
      'Multi-region global edge klaster'
    ],
    cta: 'Pro Max-ga o\'tish',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Cloud',
    badge: 'MAXSUS QUVVAT',
    description: 'Banklar, yirik korporatsiyalar va cheksiz miqyoslashni talab qiluvchi tizimlar.',
    priceMonthly: 199,
    priceAnnual: 159,
    tokens: 'Cheksiz ajratilgan kvota',
    features: [
      'To\'liq xususiy (On-Prem / Private VPC) joylashtirish',
      'Nol ma\'lumot saqlash kafolati (Zero-Data Retention)',
      'Kechikish: < 8ms SLA 99.999%',
      'Shaxsiy AI arxitektori va maslahatchi',
      'Cheksiz TPS va custom model quvvatlari',
      '256-bit harbiy darajadagi kvant-bardoshli shifrlash',
      'Maxsus shartnoma va to\'lov hisob-fakturalari'
    ],
    cta: 'Sotuv bo\'limi bilan bog\'lanish',
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sardor Mirzayev',
    role: 'Bosh Texnik Direktor (CTO)',
    company: 'FinPulse Global',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'Synapse AI orqali biz backend kechikish vaqtini 14 barobarga qisqartirdik. Uning multimodal kognitiv agentlari biznesimizdagi 80% operatsion ishlarni avtomatlashtirdi.',
    rating: 5,
    metric: '99.98% Aniqlik'
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Head of AI Infrastructure',
    company: 'Nexus Mobility Europe',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote: 'Dizayn va interfeys darajasi shunchaki aqlbovar qilmas. Har bir micro-interaction, tezlik va xavfsizlik Apple va Linear standartlaridan ham yuqori.',
    rating: 5,
    metric: '18ms O\'rtacha Kechikish'
  },
  {
    id: '3',
    name: 'Jamshid Aliyev',
    role: 'Asoschi & CEO',
    company: 'QuantumPay Technologies',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'Biz oldin GPT-4 va boshqa serverlar uchun oyiga $14,000 sarflar edik. Synapse Pro Max ga o\'tgach, xarajatlar 65% ga qisqardi, tezlik esa 3 barobar oshdi!',
    rating: 5,
    metric: '$85,000+ Yillik Tejamkorlik'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Texnologiya',
    question: 'Synapse AI boshqa standart AI modellardan qanday farq qiladi?',
    answer: 'Synapse AI oddiy matnli LLM emas, balki kognitiv avtonom agentlar klasteri. U parallel fikrlash (tree-of-thought), 18ms ultra-past kechikish va neyron xotira arxitekturasiga ega bo\'lib, murakkab muhandislik va moliya masalalarini o\'z xatolarini o\'zi to\'g\'rilab yechadi.'
  },
  {
    id: 'faq-2',
    category: 'Integratsiya',
    question: 'Mavjud loyihamga Synapse API ni qanchalik tez ulash mumkin?',
    answer: 'Atigi 3 qatordan iborat SDK kodi orqali! Biz Python, TypeScript, Go va cURL uchun to\'liq tiplashtirilgan rasmiy kutubxonalarni taqdim etamiz. O\'rtacha integratsiya vaqti 5 daqiqadan oshmaydi.'
  },
  {
    id: 'faq-3',
    category: 'Xavfsizlik',
    question: 'Bizning korporativ ma\'lumotlarimiz modelni o\'qitishda ishlatiladimi?',
    answer: 'Qat\'iyan yo\'q. Bizning tizimimiz Zero-Data Retention (ZDR) kafolatiga ega. Ma\'lumotlaringiz tranzitda va saqlashda AES-256 va TLS 1.3 shifrlanadi va hech qachon umumiy modelni o\'qitish uchun ishlatilmaydi.'
  },
  {
    id: 'faq-4',
    category: 'To\'lov va Sinov',
    question: 'Bepul sinov davri bormi va bekor qilish qoidalari qanday?',
    answer: 'Ha, ro\'yxatdan o\'tganingizda hisobingizga darhol 1,000,000 bepul test tokenlari beriladi. Kredit kartasi talab qilinmaydi. Istalgan vaqtda obunani bir tugma bilan bekor qilishingiz mumkin.'
  },
  {
    id: 'faq-5',
    category: 'Kechikish',
    question: '18ms kechikish qanday kafolatlanadi?',
    answer: 'Dunyo bo\'ylab 38 ta geo-taqsimlangan chekka ma\'lumotlar markazlari (Edge Nodes) orqali so\'rov eng yaqin serverda qayta ishlanadi va maxsus kvantlashtirilgan neyron yadrolarda tezlashtiriladi.'
  }
];

export const BENCHMARKS = [
  { metric: 'Kechikish (Latency)', synapse: '18 ms', gpt4: '620 ms', claude: '480 ms', winner: true },
  { metric: 'Token tezligi (Tokens/sec)', synapse: '420 t/s', gpt4: '75 t/s', claude: '90 t/s', winner: true },
  { metric: 'Kod Generatsiyasi (HumanEval)', synapse: '96.4%', gpt4: '90.2%', claude: '92.0%', winner: true },
  { metric: 'Kontekst oynasi (Context Window)', synapse: '2,000,000+', gpt4: '128,000', claude: '200,000', winner: true },
  { metric: 'Narx (1M Token uchun)', synapse: '$0.75', gpt4: '$10.00', claude: '$8.00', winner: true },
];
