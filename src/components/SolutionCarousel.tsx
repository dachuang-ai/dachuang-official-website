import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckSquare, Layers, Database, Globe, Cpu, Infinity } from 'lucide-react';
import { SOLUTION_CAROUSEL_DATA } from '../data';

export default function SolutionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === SOLUTION_CAROUSEL_DATA.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? SOLUTION_CAROUSEL_DATA.length - 1 : prev - 1));
  };

  // Helper to render high-tech animated canvas placeholder based on content type
  const renderVisualIllustration = (id: number) => {
    switch (id) {
      case 1: // AI 顧問導入
        return (
          <div className="relative w-full h-full bg-slate-950/80 overflow-hidden flex items-center justify-center border border-white/[0.03]">
            {/* Pulsing orbit lines */}
            <div className="absolute w-44 h-44 rounded-full border border-electric-blue/25 animate-ping opacity-25" />
            <div className="absolute w-64 h-64 rounded-full border border-deep-blue/20 animate-pulse" />
            <div className="absolute w-32 h-32 rounded-full border border-dashed border-electric-blue/40 animate-spin" style={{ animationDuration: '20s' }} />
            
            {/* Glowing Core */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-deep-blue to-electric-blue flex items-center justify-center shadow-[0_0_30px_rgba(0,163,255,0.6)]">
              <Cpu className="w-8 h-8 text-white animate-pulse" />
            </div>

            {/* Orbiting data points */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-electric-blue glow-blue" />
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-brand-silver/80" />
            <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full border border-electric-blue/40 flex items-center justify-center text-[8px] text-electric-blue font-mono font-bold">AI</div>

            <div className="absolute bottom-12 left-10 font-mono text-[9px] text-text-muted opacity-40">
              [CONSULTING_DIAGNOSTICS_ACTIVE]
            </div>
          </div>
        );
      case 2: // 自動化工作流
        return (
          <div className="relative w-full h-full bg-slate-950/80 overflow-hidden flex items-center justify-center border border-white/[0.03]">
            {/* Flowing infinity pathway */}
            <div className="relative w-48 h-24 flex items-center justify-center text-electric-blue/20">
              <Infinity className="w-40 h-40 animate-pulse" />
            </div>

            {/* Floating connecting chips */}
            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 p-2 rounded border border-white/10 bg-brand-bg-dark/90 flex items-center gap-1.5 shadow-lg">
              <Layers className="w-4 h-4 text-electric-blue" />
              <span className="font-mono text-[8px] text-text-main">API INPUT</span>
            </div>
            
            <div className="absolute right-[20%] top-1/2 -translate-y-1/2 p-2 rounded border border-electric-blue/30 bg-brand-bg-dark/90 flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,163,255,0.1)]">
              <CheckSquare className="w-4 h-4 text-electric-blue" />
              <span className="font-mono text-[8px] text-electric-blue font-bold">AUTOMATION</span>
            </div>

            {/* Connecting laser beam line */}
            <div className="absolute left-[38%] right-[42%] top-1/2 h-[1px] bg-gradient-to-r from-electric-blue via-white to-electric-blue animate-pulse" />

            <div className="absolute top-10 right-10 font-mono text-[9px] text-electric-blue opacity-40">
              FLOW_STATUS: STABLE_200
            </div>
          </div>
        );
      case 3: // 企業系統建置
        return (
          <div className="relative w-full h-full bg-slate-950/80 overflow-hidden flex items-center justify-center border border-white/[0.03]">
            {/* Isometric database blocks */}
            <div className="relative flex flex-col gap-3 items-center justify-center">
              <div className="w-24 h-8 rounded border border-white/10 bg-brand-bg-dark/90 flex items-center justify-center gap-2 shadow-lg transform -skew-x-12">
                <Database className="w-3.5 h-3.5 text-electric-blue" />
                <span className="font-mono text-[9px] text-text-main">CRM DATABASE</span>
              </div>
              <div className="w-28 h-8 rounded border border-electric-blue/30 bg-electric-blue/5 flex items-center justify-center gap-2 shadow-lg transform -skew-x-12">
                <Database className="w-3.5 h-3.5 text-electric-blue" />
                <span className="font-mono text-[9px] text-electric-blue font-bold">RAGIC INVENTORY</span>
              </div>
              <div className="w-24 h-8 rounded border border-white/10 bg-brand-bg-dark/90 flex items-center justify-center gap-2 shadow-lg transform -skew-x-12">
                <Database className="w-3.5 h-3.5 text-brand-silver" />
                <span className="font-mono text-[9px] text-text-muted">ERP MASTER</span>
              </div>
            </div>

            {/* Vertical grid line traces */}
            <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
            <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />

            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-text-muted opacity-30">
              SYS_INTEGRATION_RECON_TRUE
            </div>
          </div>
        );
      case 4: // 網站與搜尋曝光
        return (
          <div className="relative w-full h-full bg-slate-950/80 overflow-hidden flex items-center justify-center border border-white/[0.03]">
            {/* Global concentric world grid */}
            <div className="absolute w-40 h-40 rounded-full border border-dashed border-white/[0.06] animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute w-56 h-56 rounded-full border border-white/[0.04]" />
            
            <div className="relative z-10 p-4 rounded-xl border border-electric-blue/20 bg-brand-bg-dark/90 text-center shadow-2xl">
              <Globe className="w-7 h-7 text-electric-blue mx-auto mb-2 animate-bounce" />
              <div className="font-sans font-bold text-xs text-text-main">Google SEO #1</div>
              <div className="font-mono text-[8px] text-electric-blue mt-0.5">GEO TARGET: INBOUND</div>
            </div>

            {/* Radar swept line */}
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/0 via-electric-blue/2 to-transparent origin-center animate-spin" style={{ animationDuration: '6s' }} />

            <div className="absolute top-10 left-10 font-mono text-[9px] text-text-muted opacity-30">
              GEO_版圖分析_A01
            </div>
          </div>
        );
      case 5: // AI 戰隊
        return (
          <div className="relative w-full h-full bg-slate-950/80 overflow-hidden flex items-center justify-center border border-white/[0.03]">
            {/* Five orbiting nodes surrounding the master matrix */}
            <div className="relative w-28 h-28 rounded-full border border-electric-blue/15 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-electric-blue/40 bg-electric-blue/5 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-electric-blue animate-pulse" />
              </div>

              {/* Surrounding micro subnodes */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border border-white/20 bg-brand-bg-dark flex items-center justify-center text-[8px] text-electric-blue font-mono">01</div>
              <div className="absolute top-1/3 -right-3 w-6 h-6 rounded-full border border-white/20 bg-brand-bg-dark flex items-center justify-center text-[8px] text-text-main font-mono">02</div>
              <div className="absolute -bottom-3 left-2/3 w-6 h-6 rounded-full border border-white/20 bg-brand-bg-dark flex items-center justify-center text-[8px] text-text-main font-mono">03</div>
              <div className="absolute -bottom-3 left-1/12 w-6 h-6 rounded-full border border-white/20 bg-brand-bg-dark flex items-center justify-center text-[8px] text-text-main font-mono">04</div>
              <div className="absolute top-1/3 -left-3 w-6 h-6 rounded-full border border-white/20 bg-brand-bg-dark flex items-center justify-center text-[8px] text-text-main font-mono">05</div>
            </div>

            <div className="absolute bottom-6 right-6 font-mono text-[9px] text-electric-blue/50">
              SQUAD_MATRIX: DEPLOYED
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const currentItem = SOLUTION_CAROUSEL_DATA[activeIndex];

  return (
    <section
      id="solutions"
      className="relative py-24 md:py-32 bg-brand-bg border-b border-brand-silver/5 overflow-hidden"
    >
      {/* Background Matrix Decorative Glows */}
      <div className="absolute left-1/3 top-1/4 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -right-32 top-1/2 w-[350px] h-[350px] bg-[#005BFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Module Header Group */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_8px_#00A3FF]" />
              <span className="font-mono text-xs tracking-widest text-electric-blue uppercase">
                DACHUANG SERVICES PROGRAM
              </span>
            </div>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-text-main tracking-tight leading-snug">
              達創智能解決方案
            </h2>
            <p className="font-sans text-[15px] md:text-base text-text-muted mt-2 max-w-xl">
              深度對研企業日常所耗，將痛點化為前台營收推進力與後勤超凡自動體。
            </p>
          </div>

          {/* Indicator Counter Block */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-text-muted">
              PROGRAM CODE //
            </span>
            <div className="flex gap-1.5">
              {SOLUTION_CAROUSEL_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`cursor-target w-7 h-1 transition-all duration-300 rounded-full ${
                    i === activeIndex ? 'bg-electric-blue w-11 glow-blue' : 'bg-white/10'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Primary Interactive Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* LEFT COLUMN: Visual Illustrative Box */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative group overflow-hidden rounded-xl border border-white/[0.08] bg-brand-bg-dark shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Force precise aspect ratio rendering */}
              <div className="aspect-video md:aspect-[16/9] w-full">
                {renderVisualIllustration(currentItem.id)}
              </div>

              {/* Scanning visual overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="scan-line" />
              </div>
              
              {/* Glass footer badge banner */}
              <div className="absolute bottom-0 inset-x-0 bg-brand-bg-dark/85 backdrop-blur-md border-t border-white/[0.06] py-3.5 px-5 flex justify-between items-center text-xs font-mono text-text-muted">
                <span>MODULE ATTACH_0{currentItem.id}L</span>
                <span className="text-electric-blue animate-pulse">● MATRIX OPERATIONS</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Literal service item explanation text */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
            
            {/* Index label tag */}
            <div className="font-mono text-xs text-electric-blue mb-4">
              SESSION INDEX // 0{currentItem.id} . SLIDE
            </div>

            <span className="font-sans text-[15px] font-bold tracking-wider text-[#00A3FF] uppercase mb-2">
              {currentItem.subtitle}
            </span>

            <h3 className="font-display font-medium text-2xl md:text-3.5xl text-text-main leading-tight mb-5">
              {currentItem.title}
            </h3>

            {/* Core Description text block */}
            <p className="font-sans text-[16px] text-text-muted leading-relaxed mb-6">
              {currentItem.desc}
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {currentItem.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric-blue/40 mt-2 shrink-0" />
                  <span className="font-sans text-xs md:text-[13px] text-text-main">
                    {detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Carousel Control Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="cursor-target w-12 h-12 rounded-full border border-brand-silver/15 bg-white/[0.02] text-text-main hover:border-electric-blue hover:text-electric-blue hover:bg-electric-blue/5 flex items-center justify-center transition-all duration-300"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="cursor-target w-12 h-12 rounded-full border border-brand-silver/15 bg-white/[0.02] text-text-main hover:border-electric-blue hover:text-electric-blue hover:bg-electric-blue/5 flex items-center justify-center transition-all duration-300"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
