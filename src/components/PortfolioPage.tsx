import { useState } from 'react';
import { 
  PORTFOLIO_PROJECTS_DATA 
} from '../data';
import { ProjectItem } from '../types';
import { ArrowUpRight, Cpu, Layers, ExternalLink, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

interface PortfolioPageProps {
  navigateTo: (path: string) => void;
  onContactClick: () => void;
}

export default function PortfolioPage({ navigateTo, onContactClick }: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    '全部',
    'AI 整合與自動化',
    '企業系統建置',
    '網站與平台',
    'LMS 線上課程',
    'SEO / GEO',
    '品牌與顧問'
  ];

  const filteredProjects = selectedCategory === '全部'
    ? PORTFOLIO_PROJECTS_DATA
    : PORTFOLIO_PROJECTS_DATA.filter(proj => proj.category === selectedCategory);

  // Extra rich context for featured works (giving real tech insight depth)
  const getProjectInsights = (id: string) => {
    switch(id) {
      case 'proj-1':
        return {
          clienSector: '跨國美妝與日化連鎖零售商',
          duration: '8 週營運部署',
          challenge: '原先 4 名客服人工核對 LINE 諮詢。客戶下訂後，須手動登打進銷存與核帳，頻繁出錯且延遲達 2 天。',
          solution: '部署達創 AI 雙軌助理。自動語意拆解 LINE 與官網訊息並匹配 Ragic庫存。AI 正確辨別直接下訂或退換後，Make 自動更新 Ragic、同時拋送物流單，全無人化自動處理。',
          metrics: ['行政客服漏單率降至 0', '物流處理期程由 48小時 縮到 1小時', '節省 70% 行政覆核費用']
        };
      case 'proj-2':
        return {
          clienSector: '國內上市抗體生物製藥大廠',
          duration: '12 週系統架網',
          challenge: '研發處擁有大量專利、藥檢 PDF、跨國合作備忘錄與 Excel 檔案，分散各本地硬碟。主管無法即時同步追踪跨部門大專案。',
          solution: '使用 Ragic 設計多層樹狀結構資料夾，搭建極嚴密的機密級別存取權，自動追踪異動紀錄與簽核。當節點到期自動發送 LINE 及 Email 給指派研發員。',
          metrics: ['跨部門報告彙整時間由 3天 減為 0', '全面防範核心公式外流隱憂', '專案進展里程碑達成率 98%']
        };
      default:
        return {
          clienSector: '高端品牌與科技顧問企業',
          duration: '6 週交付執行',
          challenge: '現有數位品牌缺乏吸引精準意向客戶的着陸頁。推廣預算損耗高。',
          solution: '精巧建構高端拉絲金屬擬態 RWD 前端框架，嵌入無邊際微交互與全通路 SEO / GEO 的大面積覆蓋，降低被動依賴付費廣告的窘境。',
          metrics: ['自然意向搜尋回詢量 +120%', '網頁首屏載入優化 2.15x', '目標行銷投放 ROI 大幅攀升']
        };
    }
  };

  return (
    <div id="portfolio-root" className="min-h-screen bg-brand-bg pt-24 pb-20 relative">
      {/* Immersive background layouts */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-electric-blue/10 to-transparent pointer-events-none" />
      <div className="absolute left-1/10 top-1/5 w-[450px] h-[450px] bg-electric-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-1/10 bottom-1/4 w-[400px] h-[400px] bg-deep-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Diagonal grid lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
        
        {/* SECTION 1: Portfolio Hero */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric-blue/20 bg-electric-blue/5 mb-4 backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5 text-electric-blue" />
            <span className="font-mono text-[11px] tracking-widest text-electric-blue uppercase">
              DACHUANG PORTFOLIO SYSTEM
            </span>
          </div>
          
          <h1 className="font-display font-semibold text-3xl md:text-5.5xl text-text-main tracking-tight leading-tight mb-4">
            達創實戰作品集
          </h1>
          
          <p className="font-sans text-[16px] md:text-lg text-text-muted max-w-2xl leading-relaxed">
            我們拒絕對砌無感代碼或套置廉價網版。在這裡，您可以探索達創如何把 AI 系統、自動工作流、Ragic 架構以及品牌網頁，轉化為實體營收增幅。
          </p>
        </div>

        {/* SECTION 2: Category Filter Menu */}
        <div className="mb-12 flex flex-wrap gap-2.5 justify-center md:justify-start border-b border-white/[0.04] pb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-target px-4 py-2 rounded-md font-sans text-xs md:text-[13px] tracking-wide transition-all duration-300 border ${
                  isActive
                    ? 'bg-electric-blue/10 border-electric-blue text-electric-blue shadow-[0_0_15px_rgba(0,163,255,0.15)] font-medium'
                    : 'bg-white/[0.02] border-brand-silver/10 text-text-muted hover:border-white/20 hover:text-text-main'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* SECTION 3: Main Active Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group glass-card glass-card-hover rounded-xl flex flex-col justify-between overflow-hidden cursor-target"
              onClick={() => setSelectedProject(proj)}
            >
              {/* Cover visual with scaling */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-white/[0.04]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-dark via-transparent to-transparent opacity-60" />
                
                {/* Float Category Label */}
                <div className="absolute top-4 left-4 bg-brand-bg-dark/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded text-[10px] font-mono text-electric-blue uppercase">
                  {proj.category}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-medium text-lg md:text-xl text-text-main line-clamp-2 leading-snug group-hover:text-electric-blue transition-colors duration-300">
                    {proj.title}
                  </h3>
                  
                  <p className="font-sans text-xs md:text-[14px] text-text-muted mt-3 line-clamp-3 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                {/* Tags and Action */}
                <div className="mt-6 pt-5 border-t border-white/[0.04]">
                  {/* Tool chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.tools.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="font-mono text-[9px] text-[#A6C0FE] bg-[#A6C0FE]/5 px-2 py-0.5 rounded border border-[#A6C0FE]/10">
                        {t}
                      </span>
                    ))}
                    {proj.tools.length > 3 && (
                      <span className="font-mono text-[9px] text-text-muted bg-white/5 px-2 py-0.5 rounded">
                        +{proj.tools.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono font-medium text-electric-blue group-hover:translate-x-1 transition-transform duration-300">
                    <span>檢視架構細節 SYSTEM ARCH //</span>
                    <ArrowUpRight className="w-4 h-4 text-electric-blue shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 4: Featured Deep Dive Cases */}
        <div className="mb-24 py-16 px-6 md:px-12 bg-white/[0.01] rounded-2xl border border-white/[0.03] relative overflow-hidden">
          {/* Neon vertical stripes */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-blue to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="font-mono text-xs text-electric-blue mb-3">FEATURED STRATEGY // 精選深度指標</div>
              <h2 className="font-display font-medium text-2xl md:text-3.5xl text-text-main tracking-tight leading-snug mb-5">
                達創實踐：不只是系統，是「為營收打造骨幹」
              </h2>
              <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed mb-6">
                我們始終相信，任何未經流程重編、只替企業加上一套酷炫 AI 的工具都是在浪費儲備。真正的變革在於底層工作流的清掃與極致自動串接。這也是達創一對一專案成交率極高、深得大廠決策者信賴的底盤實力。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-mono text-electric-blue font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-sm md:text-base text-text-main">
                      百分之百客製設計
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-text-muted mt-0.5">
                      不強加套裝，不預售不需要的 API 算力。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-mono text-electric-blue font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-sm md:text-base text-text-main">
                      敏捷迭代，穩定交付
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-text-muted mt-0.5">
                      全沙盒阻抗與壓力測試，數據鏈不中斷、不塞車、完美熱部署。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-xl overflow-hidden relative border border-white/[0.06] bg-slate-950 flex flex-col justify-end p-6">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop" 
                alt="Architecture" 
                className="absolute inset-0 w-full h-full object-cover opacity-35"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-dark via-brand-bg-dark/40 to-transparent" />
              
              <div className="relative z-10">
                <div className="font-mono text-xs text-electric-blue mb-1">DACHUANG METRICS //</div>
                <div className="font-display font-bold text-3xl md:text-4xl text-text-main">30,000+ 小時</div>
                <div className="font-sans text-xs md:text-[13px] text-text-muted mt-1.5">
                  已為亞太企業省下因重複登記、客服遺漏、合約查找引起的無謂等待。
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: Footer Consulting Call to Action */}
        <div className="text-center max-w-3xl mx-auto border-t border-brand-silver/10 pt-16">
          <h3 className="font-display font-medium text-2xl md:text-3.5xl text-text-main mb-4 leading-tight">
            想要像這樣，重建你的企業工作流？
          </h3>
          <p className="font-sans text-sm md:text-base text-text-muted mb-8 max-w-lg mx-auto">
            一通 20 分鐘的顧問會談，可能正好是消滅這週混亂的開始。交給達創，我們為你搭置穩健的核心智能系統。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onContactClick}
              className="cursor-target w-full sm:w-auto px-8 py-3.5 rounded-md font-sans font-medium text-xs tracking-wider uppercase bg-electric-blue text-brand-bg font-bold hover:shadow-[0_0_25px_rgba(0,163,255,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300"
            >
              立刻預約 AI 諮詢
            </button>
            <button
              onClick={() => {
                navigateTo('/');
              }}
              className="cursor-target w-full sm:w-auto px-8 py-3.5 rounded-md font-sans font-medium text-xs tracking-wider uppercase bg-transparent border border-brand-silver/30 text-text-main hover:border-electric-blue hover:text-electric-blue transition-all duration-300 active:scale-95"
            >
              返回系統主控入口
            </button>
          </div>
        </div>

      </div>

      {/* PORTFOLIO MODAL INTERCATIVE SLIDE: SYSTEM ARCH REPORT */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-brand-bg-dark/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-brand-bg border border-electric-blue/40 rounded-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-[0_0_80px_rgba(0,163,255,0.25)] flex flex-col">
            
            {/* Modal sticky top */}
            <div className="sticky top-0 bg-brand-bg-dark border-b border-white/[0.04] p-5 flex justify-between items-center z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric-blue shadow-[0_0_8px_#00A3FF] animate-pulse" />
                <span className="font-mono text-xs text-electric-blue font-bold">SYSTEM ARCH REPORT // 專案解構報告</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="cursor-target p-1 text-text-muted hover:text-text-main hover:scale-105 transition-all font-mono text-xs bg-white/5 border border-white/10 rounded px-2 py-1"
              >
                CLOSE [ Esc ]
              </button>
            </div>

            {/* Modal scrolling content */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Main title block */}
              <div>
                <span className="font-sans text-xs uppercase text-electric-blue font-bold">
                  {selectedProject.category} // 達創交付成果
                </span>
                <h3 className="font-display font-medium text-xl md:text-2xl text-text-main leading-snug mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Cover visual inside reports */}
              <div className="aspect-video relative rounded-lg overflow-hidden bg-slate-950 border border-white/[0.04]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-80" />
              </div>

              {/* Insights Specs */}
              {(() => {
                const insights = getProjectInsights(selectedProject.id);
                return (
                  <div className="space-y-6">
                    {/* Horizontal stats metadata */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/[0.02] border border-white/[0.04] rounded-lg p-4 font-mono text-xs">
                      <div>
                        <span className="text-text-muted">CLIENT SECTOR // 業種：</span>
                        <div className="text-text-main font-sans font-medium mt-1">{insights.clienSector}</div>
                      </div>
                      <div>
                        <span className="text-text-muted">DELIVERY RUN // 時程：</span>
                        <div className="text-text-main font-sans font-medium mt-1">{insights.duration}</div>
                      </div>
                    </div>

                    {/* Challenge vs Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-white/[0.04] p-4.5 rounded-lg bg-red-900/5">
                        <h4 className="font-display font-bold text-xs text-red-400 tracking-wider">01 // PRE-CHAOS 導入前亂局</h4>
                        <p className="font-sans text-xs md:text-sm text-text-muted mt-2 leading-relaxed">
                          {insights.challenge}
                        </p>
                      </div>
                      <div className="border border-electric-blue/15 p-4.5 rounded-lg bg-electric-blue/5">
                        <h4 className="font-display font-bold text-xs text-electric-blue tracking-wider">02 // DACHUANG CORE REBUILD 達創重組方案</h4>
                        <p className="font-sans text-xs md:text-sm text-text-muted mt-2 leading-relaxed">
                          {insights.solution}
                        </p>
                      </div>
                    </div>

                    {/* Hard Metrics metrics */}
                    <div>
                      <h4 className="font-display font-bold text-xs text-text-main mb-3 uppercase tracking-wider">03 // DELIVERED PERFORMANCE 指標成效</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {insights.metrics.map((met, idx) => (
                          <div key={idx} className="border border-white/5 rounded-lg p-3 bg-white/[0.01]">
                            <div className="flex gap-2 items-start text-electric-blue">
                              <CheckCircle2 className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                              <span className="font-sans text-xs text-text-main font-medium leading-tight">{met}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Full Tools Array list */}
                    <div>
                      <h4 className="font-display font-bold text-xs text-text-main mb-2 uppercase tracking-wider">04 // SYSTEMS STACK 技術工具模組</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tag, idx) => (
                          <span key={idx} className="font-mono text-xs text-electric-blue bg-electric-blue/10 border border-electric-blue/30 px-3 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}

            </div>

            {/* Modal sticky bottom footer */}
            <div className="sticky bottom-0 bg-brand-bg-dark border-t border-white/[0.04] p-5 flex flex-col md:flex-row justify-between items-center gap-3.5 mt-auto z-10">
              <p className="font-sans text-xs text-text-muted text-center md:text-left">
                專案報告由 達創智能科技 AI 核准發布。保護隱私，真實商業名稱已作去敏。
              </p>
              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onContactClick();
                  }}
                  className="cursor-target w-full md:w-auto px-5 py-2.5 rounded bg-electric-blue hover:shadow-[0_0_15px_rgba(0,163,255,0.3)] hover:brightness-105 transition-all text-brand-bg font-sans font-bold text-xs"
                >
                  與本案顧問對談
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
