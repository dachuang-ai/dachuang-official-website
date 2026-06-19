import { useState, useEffect, FormEvent } from 'react';
import { 
  ArrowRight, 
  HelpCircle, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Compass, 
  Network, 
  FileText, 
  ShieldCheck, 
  Lightbulb, 
  AlertTriangle,
  Flame,
  MousePointerClick
} from 'lucide-react';
import Navbar from './components/Navbar';
import TargetCursor from './components/TargetCursor';
import SolutionCarousel from './components/SolutionCarousel';
import PortfolioPage from './components/PortfolioPage';
import brandLogo from './assets/dachuang-logo.png';

// Static assets data
import { 
  SYSTEM_MODULES_DATA, 
  AI_SQUAD_DATA, 
  TIMELINE_BUILD_DATA 
} from './data';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    needs: [] as string[],
    message: ''
  });

  // Keep track of the brower URL path
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNeedToggle = (need: string) => {
    if (formData.needs.includes(need)) {
      setFormData({ ...formData, needs: formData.needs.filter(n => n !== need) });
    } else {
      setFormData({ ...formData, needs: [...formData.needs, need] });
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      return;
    }
    setIsFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      needs: [],
      message: ''
    });
    setIsFormSubmitted(false);
  };

  // Trigger smooth scroll to target consultation form
  const handleScrollToContact = () => {
    if (currentPath !== '/') {
      navigateTo('/');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div id="application-container" className="min-h-screen bg-brand-bg text-text-main relative selection:bg-electric-blue/30 selection:text-white">
      
      {/* 🔴 CUSTOM ADVANCED SNAPPING TARGET CURSOR 🔴 */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        hoverDuration={0.25}
      />

      {/* Floating Translucent Navigation Desk */}
      <Navbar currentPath={currentPath} navigateTo={navigateTo} />

      {/* RENDER LOGIC: Conditionally mount Main Home Page or Portfolio Page */}
      {currentPath === '/portfolio' ? (
        <PortfolioPage navigateTo={navigateTo} onContactClick={handleScrollToContact} />
      ) : (
        <main id="homepage-main">
          
          {/* SECTION 01: ENTER DACHUANG (SYSTEM BOOT HERO) */}
          <section
            id="home"
            className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-bg"
          >
            {/* Tech backgrounds & radial matrix orbs */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-bg-dark to-transparent pointer-events-none" />
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

            {/* Glowing sweep line */}
            <div className="scan-line" />

            <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
              
              {/* Right Column: Dachuang Brand Logo with System Boot Anim & Cyber Effects */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center">
                <div className="relative w-full flex items-center justify-center">
                  
                  {/* Cyber Halo / Particle glow backing */}
                  <div className="absolute w-[130%] h-[130%] rounded-full bg-electric-blue/5 blur-[90px] pointer-events-none animate-pulse-slow z-0" />
                  <div className="absolute inset-0 rounded-full border border-dashed border-electric-blue/15 animate-spin z-0" style={{ animationDuration: '45s' }} />
                  <div className="absolute inset-8 rounded-full border border-electric-blue/5 animate-spin z-0" style={{ animationDuration: '28s', animationDirection: 'reverse' }} />
                  
                  {/* Light streams */}
                  <div className="absolute -top-12 left-1/4 w-[1px] h-24 bg-gradient-to-b from-electric-blue/40 to-transparent pointer-events-none" />
                  <div className="absolute -bottom-12 right-1/4 w-[1px] h-24 bg-gradient-to-t from-electric-blue/30 to-transparent pointer-events-none" />

                  {/* Logo frame container with object-fit: contain */}
                  <div className="relative z-10 w-[78vw] max-w-[360px] lg:w-[480px] xl:w-[560px] 2xl:w-[620px] aspect-square rounded-2xl bg-[#03060A]/60 border border-white/[0.03] backdrop-blur-md shadow-[0_0_40px_rgba(0,163,255,0.06)] overflow-hidden flex items-center justify-center group hover:border-electric-blue/25 hover:shadow-[0_0_55px_rgba(0,163,255,0.16)] transition-all duration-700 animate-system-boot">
                    
                    <img 
                      src={brandLogo} 
                      alt="達創智能科技 AI 官方品牌 Logo" 
                      className="w-full h-full object-contain p-4 md:p-6 select-none pointer-events-none transition-transform duration-700 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />

                    {/* Cyber system laser scanner sweep overlay */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent animate-laser-sweep pointer-events-none opacity-50 shadow-[0_0_8px_#00A3FF]" />
                  </div>
                </div>
              </div>

              {/* Left Column: Premium Typography and CTA Action Entrance */}
              <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-blue/10 border border-electric-blue/30 text-electric-blue text-xs font-mono tracking-widest uppercase mb-6 self-center lg:self-start shadow-[0_0_15px_rgba(0,163,255,0.1)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_8px_#00A3FF] animate-ping" />
                  DACHUANG SYSTEM ONLINE // 智能系統入口
                </div>

                <h1 className="font-display font-semibold text-3.5xl sm:text-4.5xl md:text-5.5xl lg:text-6xl text-text-main tracking-tight leading-tight md:leading-[1.12]">
                  達創智能科技
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-[#468DFE] to-brand-silver">
                    智能科技 AI
                  </span>
                </h1>

                {/* Subtitle with proper line formatting */}
                <p className="font-sans text-base md:text-[19px] text-text-main mt-6 max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium opacity-95">
                  不是每一套系統一開始都看得見。<br />
                  但每一家企業，都有值得被重新啟動的可能。
                </p>

                <p className="font-sans text-sm sm:text-[15px] text-text-muted mt-4 max-w-xl leading-relaxed mx-auto lg:mx-0">
                  我們用 AI、系統、自動化與數位技術，<br />
                  協助企業找到下一個成長入口。
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-9 w-full sm:w-auto">
                  <button
                    onClick={handleScrollToContact}
                    className="cursor-target w-full sm:w-auto px-8 py-3.5 rounded-md font-sans font-medium text-xs tracking-wider uppercase bg-electric-blue text-brand-bg font-bold hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300"
                  >
                    啟動探索
                  </button>
                  <button
                    onClick={() => navigateTo('/portfolio')}
                    className="cursor-target w-full sm:w-auto px-8 py-3.5 rounded-md font-sans font-medium text-xs tracking-wider uppercase bg-white/[0.03] border border-brand-silver/20 text-text-main hover:border-electric-blue hover:text-electric-blue hover:bg-electric-blue/5 active:scale-95 transition-all duration-300"
                  >
                    查看作品集
                  </button>
                </div>
              </div>

            </div>

            {/* FOUNDER VIDEO BLOCK PLACEHOLDER (Hidden on first build as requested to prevent visual gap) */}
            {/* 
            <div id="founder-video-container" className="hidden">
              <video 
                src="" 
                className="aspect-[9/16] bg-brand-bg border border-electric-blue/35 shadow-blue rounded-xl"
                controls
              />
            </div>
            */}
          </section>

          {/* SECTION 02: THE HIDDEN CHAOS (看不見的混亂) */}
          <section
            id="chaos"
            className="relative py-24 md:py-32 bg-brand-bg-dark border-y border-brand-silver/5 overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-gradient-to-l from-red-500/2 to-transparent pointer-events-none" />
            <div className="absolute left-10 top-1/3 w-72 h-72 bg-white/[0.01] rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left side text narratives */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="font-mono text-xs tracking-widest text-red-400 uppercase">
                      PRE-DIAGNOSTIC ANALYSIS // 企業隱蔽混亂
                    </span>
                  </div>

                  <h2 className="font-display font-medium text-3xl md:text-4.5xl text-text-main tracking-tight leading-tight">
                    看不見的混亂，<br />正在侵蝕你的成長版圖
                  </h2>

                  <div className="mt-8 space-y-4">
                    <p className="font-sans text-[15px] sm:text-[16px] text-text-muted leading-relaxed">
                      資料散落在不同地方。流程靠人記憶。系統無法串接。網站沒有轉換。AI 只是聽過，卻不知道從哪裡開始。
                    </p>
                    <p className="font-sans text-[15px] sm:text-[16px] text-text-muted leading-relaxed">
                      這些問題不一定會立刻讓企業停止運作，但會像漏水一樣，慢慢且無情地消耗員工的專注力、拉高無謂的管理成本、拖慢應對市場的回彈速度。
                    </p>
                  </div>
                </div>

                {/* Right side: High-Tech Snapping Gravity Well Graphic */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-[420px] aspect-square rounded-2xl border border-white/[0.04] bg-brand-bg/60 overflow-hidden p-6 shadow-2xl flex items-center justify-center">
                    
                    {/* Dark Gravity core in center representing Dachuang core */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-slate-950 border border-electric-blue/30 shadow-[0_0_35px_rgba(0,163,255,0.2)] flex items-center justify-center">
                      <div className="absolute inset-1 rounded-full border border-dashed border-white/10 animate-spin" style={{ animationDuration: '8s' }} />
                      <Cpu className="w-8 h-8 text-electric-blue animate-pulse" />
                    </div>

                    {/* Drifting Chaos Element Nodes with CSS gravity orbits */}
                    {/* Top Left: LINE chat groups */}
                    <div className="absolute top-[16%] left-[12%] px-3 py-1.5 rounded-md border border-red-500/10 bg-red-500/5 backdrop-blur-md flex items-center gap-2 text-[11px] font-mono whitespace-nowrap text-red-200 animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      LINE 對話群組 (靠人記)
                    </div>

                    {/* Top Right: Excel storage */}
                    <div className="absolute top-[20%] right-[10%] px-3 py-1.5 rounded-md border border-white/5 bg-white/[0.01] backdrop-blur-md flex items-center gap-2 text-[11px] font-mono whitespace-nowrap text-text-muted">
                      <span>EXCEL 離散單據</span>
                    </div>

                    {/* Middle Left: Hand copy paste */}
                    <div className="absolute left-[8%] top-[45%] px-3 py-1.5 rounded-md border border-white/5 bg-white/[0.01] backdrop-blur-md flex items-center gap-2 text-[11px] font-mono whitespace-nowrap text-text-muted">
                      <span>人工複製貼上</span>
                    </div>

                    {/* Middle Right: Ads loss */}
                    <div className="absolute right-[8%] top-[50%] px-3 py-1.5 rounded-md border border-red-500/10 bg-red-500/5 backdrop-blur-md flex items-center gap-2 text-[11px] font-mono whitespace-nowrap text-red-200">
                      <span>行銷投廣漏單</span>
                    </div>

                    {/* Bottom Left: Static obsolete site */}
                    <div className="absolute bottom-[20%] left-[14%] px-3 py-1.5 rounded-md border border-white/5 bg-white/[0.01] backdrop-blur-md flex items-center gap-2 text-[11px] font-mono whitespace-nowrap text-text-muted">
                      <span>老舊靜態官網</span>
                    </div>

                    {/* Bottom Right: AI concept only */}
                    <div className="absolute bottom-[16%] right-[12%] px-3 py-1.5 rounded-md border border-white/5 bg-white/[0.01] backdrop-blur-md flex items-center gap-2 text-[11px] font-mono whitespace-nowrap text-text-muted">
                      <span>AI 聽過卻未落地</span>
                    </div>

                    {/* Dynamic Blue flow tracks connecting items to Center Gravity core */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 120 70 Q 200 150 210 210" fill="none" stroke="#00A3FF" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M 320 90 Q 250 170 210 210" fill="none" stroke="#00A3FF" strokeWidth="1" />
                      <path d="M 80 200 Q 150 210 210 210" fill="none" stroke="#00A3FF" strokeWidth="1" strokeDasharray="4 4" />
                      <path d="M 320 220 Q 250 210 210 210" fill="none" stroke="#00A3FF" strokeWidth="1" />
                      <path d="M 120 330 Q 180 270 210 210" fill="none" stroke="#00A3FF" strokeWidth="1" />
                      <path d="M 310 330 Q 240 270 210 210" fill="none" stroke="#00A3FF" strokeWidth="1" strokeDasharray="3 3" />
                    </svg>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 03: REBUILD THE FLOW (重組企業工作流) */}
          <section
            id="rebuild"
            className="relative py-24 md:py-32 bg-brand-bg border-b border-brand-silver/5 overflow-hidden"
          >
            {/* Glow overlays */}
            <div className="absolute left-[10%] top-[40%] w-[380px] h-[380px] bg-electric-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 md:px-10">
              
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_8px_#00A3FF]" />
                  <span className="font-mono text-xs tracking-widest text-electric-blue uppercase">
                    DACHUANG RECON METHODOLOGY // 核心重組方法
                  </span>
                </div>
                <h2 className="font-display font-medium text-3xl md:text-4.5xl text-text-main tracking-tight leading-tight">
                  重組企業工作流
                </h2>
                <p className="font-sans text-sm sm:text-base text-text-muted mt-3 leading-relaxed">
                  達創不是單純替你加一個工具。我們會先拆解流程、辨識問題、重組資料，再用 AI、網站、企業系統與自動化，把分散的工作轉成高效無阻的智能流程。
                </p>
              </div>

              {/* THREE LARGE TECH CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* CARD 1: 拆解 */}
                <div className="cursor-target glass-card glass-card-hover p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[60px] text-white/[0.02] font-extrabold leading-none select-none group-hover:text-electric-blue/5 transition-colors duration-300">
                    01
                  </div>
                  
                  <div className="w-12 h-12 rounded bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mb-6">
                    <Compass className="w-5 h-5 text-electric-blue" />
                  </div>

                  <h3 className="font-display font-medium text-xl text-text-main group-hover:text-electric-blue transition-colors duration-300">
                    拆解
                  </h3>
                  
                  <span className="font-mono text-[10px] text-electric-blue tracking-wider block mt-1 uppercase">
                    Deconstruct Process
                  </span>

                  <p className="font-sans text-xs md:text-sm text-text-muted mt-4 leading-relaxed">
                    深入業務第一線，盤點表單、對話、舊有系統與人工瓶頸。明確標出高重複、低管理回報的核心摩擦點，告別盲目導入。
                  </p>
                </div>

                {/* CARD 2: 重組 */}
                <div className="cursor-target glass-card glass-card-hover p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[60px] text-white/[0.02] font-extrabold leading-none select-none group-hover:text-electric-blue/5 transition-colors duration-300">
                    02
                  </div>
                  
                  <div className="w-12 h-12 rounded bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mb-6">
                    <Network className="w-5 h-5 text-electric-blue" />
                  </div>

                  <h3 className="font-display font-medium text-xl text-text-main group-hover:text-electric-blue transition-colors duration-300">
                    重組
                  </h3>
                  
                  <span className="font-mono text-[10px] text-electric-blue tracking-wider block mt-1 uppercase">
                    Reorganize Data
                  </span>

                  <p className="font-sans text-xs md:text-sm text-text-muted mt-4 leading-relaxed">
                    將割裂的資料檔案（Excel, LINE 客名) 重組進統一的 Ragic 或安全型資料底盤。釐清數據脈絡與對應權限，打造穩健骨幹。
                  </p>
                </div>

                {/* CARD 3: 啟動 */}
                <div className="cursor-target glass-card glass-card-hover p-8 rounded-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[60px] text-white/[0.02] font-extrabold leading-none select-none group-hover:text-electric-blue/5 transition-colors duration-300">
                    03
                  </div>
                  
                  <div className="w-12 h-12 rounded bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center mb-6">
                    <Cpu className="w-5 h-5 text-electric-blue" />
                  </div>

                  <h3 className="font-display font-medium text-xl text-text-main group-hover:text-electric-blue transition-colors duration-300">
                    啟動
                  </h3>
                  
                  <span className="font-mono text-[10px] text-electric-blue tracking-wider block mt-1 uppercase">
                    Launch Intelligently
                  </span>

                  <p className="font-sans text-xs md:text-sm text-text-muted mt-4 leading-relaxed">
                    部署客製化 AI 顧問及 Agent 助手群，接手客戶秒級回覆與單據自動清洗、讓自動工作流開始不知疲倦地為你擴充客源。
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 04: SYSTEM MODULES (達創能力模組) */}
          <section
            id="modules"
            className="relative py-24 md:py-32 bg-brand-bg-dark border-b border-brand-silver/5 overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute right-[5%] bottom-[10%] w-[450px] h-[450px] bg-[#005BFF]/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-brand-bg to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 md:px-10">
              
              <div className="max-w-3xl mb-16 text-center md:text-left">
                <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_8px_#00A3FF]" />
                  <span className="font-mono text-xs tracking-widest text-electric-blue uppercase">
                    SYSTEM CAPABILITY MATRIX // 達創能力模組
                  </span>
                </div>
                <h2 className="font-display font-medium text-3xl md:text-4.5xl text-text-main tracking-tight leading-tight">
                  未來感能力模組
                </h2>
                <p className="font-sans text-sm sm:text-base text-text-muted mt-3 leading-relaxed">
                  不要叫我們「服務項目」，我們為企業提供像硬體般即插即用的智能系統能力模組，彈性對接所需。
                </p>
              </div>

              {/* RWD Columns Container */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SYSTEM_MODULES_DATA.map((mod) => (
                  <div
                    key={mod.id}
                    className="cursor-target glass-card glass-card-hover p-6 md:p-8 rounded-xl relative group flex flex-col justify-between"
                  >
                    <div>
                      {/* Laser identifier index */}
                      <div className="font-mono text-[10px] text-electric-blue mb-4 tracking-wider uppercase">
                        CODE // {mod.id.toUpperCase()} MODULE_L
                      </div>

                      <h3 className="font-display font-medium text-xl text-text-main group-hover:text-electric-blue transition-colors duration-300">
                        {mod.title}
                      </h3>
                      
                      <p className="font-sans text-xs md:text-sm text-text-muted mt-3 leading-relaxed">
                        {mod.desc}
                      </p>
                    </div>

                    {/* Features checklist inside mod */}
                    <div className="mt-6 pt-5 border-t border-white/[0.04]">
                      <div className="space-y-2">
                        {mod.features.map((feat, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-electric-blue shrink-0" />
                            <span className="font-sans text-xs text-text-main">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* 🔘 SLIDESHOW SOLUTIONS CAROUSEL (5 solutions) 🔘 */}
          <SolutionCarousel />

          {/* SECTION 05: PROJECT GATE (作品集入口傳送門) */}
          <section
            id="project-gate"
            className="relative py-24 md:py-32 bg-brand-bg border-b border-brand-silver/5 overflow-hidden"
          >
            {/* Cyber gate radar elements */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-electric-blue/[0.03] rounded-full border border-dashed border-electric-blue/10 animate-spin" style={{ animationDuration: '60s' }} />

            <div className="max-w-5xl mx-auto px-5 md:px-10">
              
              {/* Giant Futuristic Portal styled Glass-card */}
              <div className="cursor-target relative rounded-2xl border border-electric-blue/20 bg-brand-bg-dark p-8 md:p-14 overflow-hidden shadow-[0_0_50px_rgba(0,163,255,0.15)] group hover:border-electric-blue/45 transition-all duration-500">
                
                {/* Scan light lines overlay */}
                <div className="scan-line" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left content detail */}
                  <div className="lg:col-span-7 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-electric-blue/10 border border-electric-blue/35 text-electric-blue text-[10px] font-mono mb-4 tracking-wider">
                      PROJECT GATEWAY ACTIVE // 系統傳送門
                    </div>

                    <h2 className="font-display font-medium text-2xl md:text-3.5xl text-text-main tracking-tight leading-snug">
                      PROJECT GATE <br />
                      作品集入口
                    </h2>

                    <p className="font-sans text-xs md:text-sm text-text-muted mt-4 leading-relaxed">
                      每一個專案，都是一次企業流程被重新整理的過程。
                    </p>

                    <p className="font-sans text-xs md:text-sm text-text-muted mt-2 leading-relaxed opacity-85">
                      進入作品集，看見達創如何將 AI、網站、系統、數位行銷轉化為可落地、具備實體增長回報的成果報告。
                    </p>

                    <div className="mt-8 flex justify-center lg:justify-start">
                      <button
                        onClick={() => navigateTo('/portfolio')}
                        className="cursor-target inline-flex items-center gap-2 px-6 py-3 rounded border border-electric-blue text-electric-blue bg-electric-blue/5 hover:bg-electric-blue/15 hover:shadow-[0_0_20px_rgba(0,163,255,0.25)] transition-all duration-300 font-sans font-medium text-xs tracking-wider"
                      >
                        進入作品集 SYSTEM PORTAL
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right abstract project previews */}
                  <div className="lg:col-span-5 flex justify-center relative my-4 lg:my-0">
                    <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                      {/* Stacked layout mimicking floating windows */}
                      <div className="absolute w-36 h-24 rounded-lg bg-slate-900 border border-white/5 shadow-xl rotate-[5deg] translate-x-8 -translate-y-4 overflow-hidden opacity-50 group-hover:rotate-[2deg] group-hover:translate-x-12 transition-all duration-500">
                        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="prev-1" />
                      </div>
                      <div className="absolute w-36 h-24 rounded-lg bg-slate-900 border border-white/10 shadow-xl -rotate-[10deg] -translate-x-8 translate-y-4 overflow-hidden opacity-50 group-hover:-rotate-[5deg] group-hover:-translate-x-12 transition-all duration-500">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="prev-2" />
                      </div>
                      <div className="absolute w-44 h-28 rounded-lg bg-brand-bg-dark border border-electric-blue/50 shadow-2xl relative overflow-hidden z-10 scale-105 group-hover:scale-110 transition-all duration-500">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=300&auto=format&fit=crop" className="w-full h-full object-cover" alt="prev-main" />
                        <div className="absolute inset-x-0 bottom-0 bg-brand-bg-dark/80 backdrop-blur-sm p-1.5 text-center text-[8px] font-mono text-electric-blue">
                          PROJ_ACTIVE_SECURE //
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* SECTION 06: AI SQUAD (企業 AI 戰隊) */}
          <section
            id="squad"
            className="relative py-24 md:py-32 bg-brand-bg-dark border-b border-brand-silver/5 overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute left-[3%] top-[30%] w-[350px] h-[350px] bg-electric-blue/5 rounded-full blur-[110px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 md:px-10">
              
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_8px_#00A3FF]" />
                  <span className="font-mono text-xs tracking-widest text-electric-blue uppercase">
                    VIRTUAL AGENT CORPS // 虛擬協作戰隊
                  </span>
                </div>
                <h2 className="font-display font-medium text-3xl md:text-4.5xl text-text-main tracking-tight leading-tight">
                  企業 AI 戰隊
                </h2>
                <p className="font-sans text-sm sm:text-base text-text-muted mt-3 leading-relaxed">
                  未來的企業，不一定需要龐雜的物理部門與多餘人力。而是需要更聰明的分工。行政、客服、內容、業務、專案，都可以部署專屬 AI 助理。
                </p>
              </div>

              {/* RWD columns cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {AI_SQUAD_DATA.map((member) => (
                  <div
                    key={member.id}
                    className="cursor-target glass-card glass-card-hover p-6 md:p-8 rounded-xl relative overflow-hidden group flex flex-col justify-between"
                  >
                    {/* Glowing blue laser corner decoration */}
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-electric-blue/40" />

                    <div>
                      {/* Role title card */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[10px] text-electric-blue font-bold tracking-widest uppercase">
                          {member.tag}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-electric-blue shadow-[0_0_8px_#00A3FF]" />
                      </div>

                      <h3 className="font-display font-medium text-xl text-text-main group-hover:text-electric-blue transition-colors duration-300">
                        {member.role}
                      </h3>
                      <div className="font-mono text-xs text-text-muted mt-0.5 font-bold">
                        CODE_NAME: {member.name}
                      </div>

                      <p className="font-sans text-xs md:text-sm text-text-muted mt-4 leading-relaxed">
                        {member.desc}
                      </p>
                    </div>

                    {/* Skill points capabilities */}
                    <div className="mt-6 pt-5 border-t border-white/[0.04]">
                      <div className="flex flex-wrap gap-1.5">
                        {member.capabilities.map((cap, capIdx) => (
                          <span
                            key={capIdx}
                            className="font-sans text-[10px] text-[#A6C0FE] bg-[#A6C0FE]/5 border border-[#A6C0FE]/12 px-2 py-0.5 rounded"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* SECTION 07: START THE BUILD (從想法到啟動合作流程) */}
          <section
            id="process"
            className="relative py-24 md:py-32 bg-brand-bg border-b border-brand-silver/5 overflow-hidden"
          >
            {/* Glowing paths background */}
            <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 md:px-10">
              
              <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_8px_#00A3FF]" />
                  <span className="font-mono text-xs tracking-widest text-electric-blue uppercase">
                    PROJECT INGRESS PIPELINE // 任務啟動流程
                  </span>
                </div>
                <h2 className="font-display font-medium text-3xl md:text-4.5xl text-text-main tracking-tight leading-tight">
                  從想法到系統啟動
                </h2>
                <p className="font-sans text-sm sm:text-base text-text-muted mt-3 leading-relaxed">
                  拒接老派拖沓流程。我們將需求探索到建置實作、包裝成透明、高反對的任務推進時間軸。
                </p>
              </div>

              {/* DESKTOP TIMELINE VIEW (Horizontal) */}
              <div className="hidden lg:block relative py-10">
                {/* Center linking pipeline bar */}
                <div className="absolute left-[8%] right-[8%] top-[100px] h-1 bg-gradient-to-r from-electric-blue/10 via-electric-blue/40 to-electric-blue/10 rounded" />
                
                <div className="grid grid-cols-6 gap-6 relative z-10">
                  {TIMELINE_BUILD_DATA.map((node) => (
                    <div
                      key={node.id}
                      className="cursor-target flex flex-col items-center text-center group"
                    >
                      {/* Large Glowing status node */}
                      <div className="w-12 h-12 rounded-full border border-electric-blue/30 bg-brand-bg-dark flex items-center justify-center mb-6 group-hover:border-electric-blue group-hover:shadow-[0_0_15px_rgba(0,163,255,0.4)] transition-all duration-300">
                        <span className="font-mono text-xs text-electric-blue font-bold">
                          {node.id}
                        </span>
                      </div>

                      {/* Info Cards */}
                      <div className="glass-card p-4 rounded-lg bg-brand-bg-dark/80 backdrop-blur-md">
                        <span className="font-mono text-[9px] text-[#00A3FF] tracking-wider block mb-1">
                          {node.step}
                        </span>
                        <h4 className="font-display font-medium text-sm text-text-main group-hover:text-electric-blue transition-colors duration-300">
                          {node.title}
                        </h4>
                        <p className="font-sans text-[11px] text-text-muted mt-2 leading-relaxed h-[110px] overflow-hidden">
                          {node.desc}
                        </p>
                        
                        {/* Process rate tag */}
                        <div className="mt-3 pt-2.5 border-t border-white/[0.03] flex items-center justify-between font-mono text-[9px] text-text-muted">
                          <span>SYS_RATE //</span>
                          <span className="text-electric-blue">{node.completionRate}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MOBILE TIMELINE VIEW (Vertical) */}
              <div className="block lg:hidden space-y-6 relative ml-4">
                {/* Vertical linking pipeline line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-electric-blue/20" />

                {TIMELINE_BUILD_DATA.map((node) => (
                  <div
                    key={node.id}
                    className="cursor-target relative pl-12 flex gap-4 items-start group"
                  >
                    {/* Glowing index circle */}
                    <div className="absolute left-3 top-1 w-6.5 h-6.5 rounded-full border border-electric-blue/40 bg-brand-bg-dark text-electric-blue flex items-center justify-center font-mono text-[10px] font-bold shadow-lg z-10 group-hover:border-electric-blue">
                      {node.id}
                    </div>

                    {/* Fluid Text card */}
                    <div className="flex-1 glass-card p-5 rounded-lg">
                      <span className="font-mono text-[9px] text-electric-blue block">
                        {node.step} // DISPATCHING
                      </span>
                      <h4 className="font-display font-medium text-base text-text-main mt-0.5 group-hover:text-electric-blue transition-colors">
                        {node.title}
                      </h4>
                      <p className="font-sans text-xs text-text-muted mt-2 leading-relaxed">
                        {node.desc}
                      </p>
                      
                      <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono">
                        <span className="text-text-muted">SYS_DEPLOY_PROGRESS</span>
                        <span className="text-electric-blue font-bold">{node.completionRate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* SECTION 08: READY TO ACTIVATE? (準備啟動你的智能系統) */}
          <section
            id="contact"
            className="relative py-24 md:py-32 bg-brand-bg-dark overflow-hidden min-h-[70vh] flex items-center"
          >
            {/* Deep fusion cosmic background nodes */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/[0.04] rounded-full blur-[140px] pointer-events-none" />
            
            <div className="max-w-4xl mx-auto px-5 md:px-10 relative z-10 w-full">
              
              {/* Form submit confirmation box */}
              {isFormSubmitted ? (
                <div className="glass-card border-electric-blue p-8 md:p-14 rounded-2xl text-center shadow-[0_0_50px_rgba(0,163,255,0.2)]">
                  <div className="w-16 h-16 rounded-full bg-electric-blue/10 border border-electric-blue flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-9 h-9 text-electric-blue animate-pulse" />
                  </div>
                  
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-text-main">
                    智能需求接收成功 / RECON SUBMITTED
                  </h3>
                  
                  <p className="font-sans text-sm md:text-base text-text-muted mt-3 max-w-lg mx-auto leading-relaxed">
                    精準系統終端已錄入您的詢問檔案。達創核心顧問將於一個工作天內、依據您勾選的智能模組方案進行沙盒模擬盤點，並主動聯絡您。
                  </p>

                  <div className="mt-10 border-t border-white/[0.04] pt-8 font-mono text-xs text-text-muted">
                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto text-left">
                      <span>CLIENT_ID: DA_TX_9650</span>
                      <span className="text-right text-electric-blue">STATUS: RESERVED_OK</span>
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="cursor-target mt-8 px-6 py-2.5 rounded border border-brand-silver/20 text-xs font-mono text-text-muted hover:border-electric-blue hover:text-electric-blue transition-all"
                  >
                    重組另一個需求表單 // WRITE NEW
                  </button>
                </div>
              ) : (
                <div className="glass-card rounded-2xl border border-white/[0.05] p-8 md:p-12 shadow-2xl">
                  
                  <div className="text-center md:text-left mb-10">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <Cpu className="w-4 h-4 text-electric-blue" />
                      <span className="font-mono text-xs tracking-widest text-electric-blue uppercase">
                        AI SYSTEM CONSULT ENTRY // 需求與顧問終端
                      </span>
                    </div>
                    <h2 className="font-display font-medium text-2xl md:text-3.5xl text-text-main tracking-tight leading-snug">
                      準備啟動你的智能系統？
                    </h2>
                    <p className="font-sans text-xs md:text-sm text-text-muted mt-2 max-w-lg leading-relaxed">
                      如果你的企業正卡在流程、網站、系統、曝光或 AI 導入，請留下需求。達創協助你從第一個可落地的方案開始。
                    </p>
                  </div>

                  {/* Sleek form terminal layout */}
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div>
                        <label className="block text-xs font-mono text-text-muted uppercase mb-2">
                          Your Name // 聯絡大名 *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="例如：達先生"
                          className="w-full bg-brand-bg-dark border border-white/10 rounded px-4 py-3 text-sm text-text-main placeholder:text-text-muted/30 focus:border-electric-blue focus:outline-none transition-all cursor-target"
                        />
                      </div>

                      {/* Company input */}
                      <div>
                        <label className="block text-xs font-mono text-text-muted uppercase mb-2">
                          Organization // 企業 / 公司名稱
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="例如：達創智能股份有限公司"
                          className="w-full bg-brand-bg-dark border border-white/10 rounded px-4 py-3 text-sm text-text-main placeholder:text-text-muted/30 focus:border-electric-blue focus:outline-none transition-all cursor-target"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Phone input */}
                      <div>
                        <label className="block text-xs font-mono text-text-muted uppercase mb-2">
                          Communication ID // 電話號碼 / LINE
                        </label>
                        <input
                          type="text"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="例如：0912-345-678 或 ID"
                          className="w-full bg-brand-bg-dark border border-white/10 rounded px-4 py-3 text-sm text-text-main placeholder:text-text-muted/30 focus:border-electric-blue focus:outline-none transition-all cursor-target"
                        />
                      </div>

                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-mono text-text-muted uppercase mb-2">
                          Secure Email // 聯絡信箱 *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="例如：service@dachuang.ai"
                          className="w-full bg-brand-bg-dark border border-white/10 rounded px-4 py-3 text-sm text-text-main placeholder:text-text-muted/30 focus:border-electric-blue focus:outline-none transition-all cursor-target"
                        />
                      </div>
                    </div>

                    {/* Needs Categories checkbox selectors */}
                    <div>
                      <label className="block text-xs font-mono text-text-muted uppercase mb-3 text-left">
                        Aims Modules // 希望導入哪種模組？ (多選)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                          'AI 工作智能流 (AI Mode)',
                          '企業系統核骨 (Sys Mode)',
                          '品牌官網與平台 (Web Mode)',
                          '地圖 SEO/GEO (Search Mode)',
                          '廣告行銷整合 (Market Mode)',
                          'AI 數位人短片 (Content Mode)',
                        ].map((interest) => {
                          const checked = formData.needs.includes(interest);
                          return (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => handleNeedToggle(interest)}
                              className={`cursor-target p-3 rounded border text-left text-xs transition-all duration-300 ${
                                checked
                                  ? 'bg-electric-blue/10 border-electric-blue text-electric-blue font-semibold'
                                  : 'bg-brand-bg-dark border-white/5 text-text-muted hover:border-brand-silver/20 hover:text-text-main'
                              }`}
                            >
                              {interest}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message input */}
                    <div>
                      <label className="block text-xs font-mono text-text-muted uppercase mb-2">
                        System Requirements // 簡述目前流程混亂或需求痛點
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="請簡短描述目前最想被自動化或整理的企業流程，例如：客服手動回覆 LINE 非常慢，需要自動對答..."
                        className="w-full bg-brand-bg-dark border border-white/10 rounded px-4 py-3 text-sm text-text-main placeholder:text-text-muted/30 focus:border-electric-blue focus:outline-none transition-all cursor-target"
                      />
                    </div>

                    {/* Form submit terminal button */}
                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="cursor-target w-full md:w-auto px-8 py-3.5 rounded bg-electric-blue text-brand-bg font-sans font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(0,163,255,0.4)] hover:brightness-110 active:scale-95 transition-all"
                      >
                        提交系統對接需求 // CONTACT NOW
                      </button>
                    </div>

                  </form>
                </div>
              )}

            </div>
          </section>

        </main>
      )}

      {/* FOOTER DIVISION BAR */}
      <footer
        id="applet-footer"
        className="bg-brand-bg border-t border-brand-silver/5 py-10 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-5.5 h-5.5 rounded bg-electric-blue/10 border border-electric-blue/40 flex items-center justify-center">
              <Cpu className="w-3.5 h-3.5 text-electric-blue animate-pulse" />
            </div>
            <span className="font-display text-sm font-medium text-text-main">
              達創智能科技 // DACHUANG AI
            </span>
          </div>

          <div className="font-mono text-[11px] text-text-muted text-center md:text-right">
            <span>© {new Date().getFullYear()} DACHUANG CO. ALL RIGHTS INTEGRATED. </span>
            <span className="block mt-1 text-[9px] text-white/10">CORE_MODULES // AI_SYSTEM_ONLINE_STABLE</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
