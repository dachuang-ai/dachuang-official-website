/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { STRATEGY_DATA } from '../data';
import { StrategyItem } from '../types';
import { 
  Layers, 
  HelpCircle, 
  Activity, 
  Compass, 
  ChevronRight, 
  Code, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  MapPin
} from 'lucide-react';

export default function StrategySection() {
  const [selectedStrategy, setSelectedStrategy] = useState<string>('topic-cluster');
  const [schemaExpanded, setSchemaExpanded] = useState<boolean>(false);

  const getStrategyIcon = (id: string) => {
    switch (id) {
      case 'topic-cluster':
        return <Layers className="w-6 h-6 text-[#10241F]" />;
      case 'faq-schema':
        return <HelpCircle className="w-6 h-6 text-[#10241F]" />;
      case 'geo-citation':
        return <Activity className="w-6 h-6 text-[#10241F]" />;
      case 'local-seo':
        return <Compass className="w-6 h-6 text-[#10241F]" />;
      default:
        return <Layers className="w-6 h-6 text-[#10241F]" />;
    }
  };

  return (
    <section id="strategy-section" className="py-24 bg-[#EEF3ED] border-t border-[#10241F]/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full text-xs font-mono font-bold uppercase text-[#62706A] mb-3 border border-[#10241F]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A]"></span>
              <span>Proprietary Growth Strategies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10241F]">
              建立持久曝光的四大策略基石
            </h2>
            <p className="text-base text-[#62706A] mt-3 font-medium leading-relaxed">
              我們摒棄短期灌水黑帽流量，透過建置深層語意架構、多據點在地覆蓋與生成式 AI 引用路徑，協助您的品牌在各維度精確露出。
            </p>
          </div>
          
          {/* Quick Stats Summary */}
          <div className="flex space-x-4 shrink-0 font-mono text-xs">
            <div className="bg-white p-3.5 rounded-2xl border border-[#10241F]/5 text-center shadow-xs">
              <div className="text-[#62706A] uppercase font-bold text-[10px]">平均引流轉換率</div>
              <div className="text-xl font-bold text-[#10241F] mt-0.5">+142.5%</div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-[#10241F]/5 text-center shadow-xs">
              <div className="text-[#62706A] uppercase font-bold text-[10px]">AI 被引用占比</div>
              <div className="text-xl font-bold text-[#7AC943] mt-0.5">TOP 3 指名</div>
            </div>
          </div>
        </div>

        {/* Dynamic Multi-column Layout */}
        <div id="cluster-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24">
          
          {/* Left: Interactive Options list (12 cols grid: 5 cols list) */}
          <div className="lg:col-span-5 space-y-4">
            {STRATEGY_DATA.map((strategy) => {
              const worksAsActive = selectedStrategy === strategy.id;
              return (
                <div
                  key={strategy.id}
                  id={`strategy-option-${strategy.id}`}
                  onClick={() => setSelectedStrategy(strategy.id)}
                  className={`p-6 rounded-3xl text-left cursor-pointer transition-all duration-300 relative group overflow-hidden ${
                    worksAsActive
                      ? 'bg-white shadow-md border-l-4 border-l-[#10241F] scale-[1.01]'
                      : 'bg-white/50 hover:bg-white border border-[#10241F]/5 hover:shadow-xs'
                  }`}
                >
                  {/* Subtle active glow light block */}
                  {worksAsActive && (
                    <div className="absolute right-0 top-0 w-24 h-24 bg-[#B7F34A]/5 blur-xl pointer-events-none rounded-full"></div>
                  )}

                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-2xl ${
                      worksAsActive ? 'bg-[#B7F34A]' : 'bg-[#EEF3ED] group-hover:bg-[#B7F34A]/20'
                    } transition-colors shrink-0`}>
                      {getStrategyIcon(strategy.id)}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#7AC943] font-mono tracking-widest uppercase">
                          {strategy.tag}
                        </span>
                        <span className="text-[10px] bg-[#EEF3ED] text-[#10241F] px-1.5 py-0.5 rounded font-mono font-semibold">
                          {strategy.metricValue}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-extrabold text-[#10241F] tracking-tight">
                        {strategy.title}
                      </h3>
                      
                      <p className="text-xs text-[#62706A] font-semibold line-clamp-2">
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Rich Interactive Visual Sandbox Workstation (12 cols grid: 7 cols display) */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-6 sm:p-8 border border-[#10241F]/5 shadow-sm flex flex-col justify-between min-h-[500px]">
            
            {/* Find current selected item */}
            {(() => {
              const activeItem = STRATEGY_DATA.find(s => s.id === selectedStrategy) || STRATEGY_DATA[0];
              return (
                <div className="space-y-6 h-full flex flex-col justify-between">
                  
                  {/* Strategy Info Block */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#10241F]/5 pb-4">
                      <div>
                        <span className="text-[#62706A] font-mono font-bold text-xs uppercase tracking-widest block mb-1">
                          {activeItem.englishTitle}
                        </span>
                        <h3 className="text-2xl font-extrabold text-[#10241F]">
                          {activeItem.title}
                        </h3>
                      </div>
                      <div className="bg-[#10241F] text-white px-4 py-2 rounded-2xl text-center font-mono shrink-0">
                        <span className="text-[9px] uppercase text-[#62706A] font-bold block leading-none">增長指標</span>
                        <span className="text-sm font-bold text-[#B7F34A] leading-none block mt-0.5">{activeItem.metricValue}</span>
                      </div>
                    </div>

                    <p className="text-sm text-[#62706A] font-medium leading-relaxed">
                      {activeItem.description}
                    </p>

                    <div>
                      <span className="text-xs font-bold text-[#10241F] uppercase tracking-wider block mb-2.5 font-mono">
                        核心賦能關鍵 (Key Benefits)
                      </span>
                      <ul className="space-y-2">
                        {activeItem.benefits.map((benefit, i) => (
                          <li key={i} className="flex font-medium text-xs text-[#62706A]">
                            <span className="w-5 h-5 rounded-full bg-[#EEF3ED] text-[#7AC943] flex items-center justify-center font-bold text-xs shrink-0 mr-3 mt-0.5">
                              ✓
                            </span>
                            <span className="text-[#10241F] pt-0.5">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Interactive Strategy Visual Canvas Panel */}
                  <div className="mt-6 flex-1 bg-[#F7F8F4] border border-[#10241F]/5 rounded-2xl p-4 flex flex-col justify-center min-h-[180px]">
                    
                    {/* Visual 1: Topic Cluster Link Map */}
                    {activeItem.id === 'topic-cluster' && (
                      <div className="text-center font-sans space-y-4 animate-fadeIn">
                        <span className="text-[10px] text-[#62706A] font-bold font-mono tracking-wider block uppercase">主題網格關聯 (Cluster Ontology Map)</span>
                        <div className="flex items-center justify-center gap-3 select-none flex-wrap">
                          {/* Centered Pillar */}
                          <div className="px-3.5 py-2 bg-[#10241F] text-white border border-[#B7F34A] rounded-xl text-xs font-bold shadow-sm z-10 flex items-center gap-1.5 shrink-0 scale-105">
                            <Layers className="w-3.5 h-3.5 text-[#B7F34A]" />
                            <span>核心商業主支柱</span>
                          </div>
                          
                          {/* Lines indicator */}
                          <div className="text-xs font-mono text-[#62706A]">🗲 多維雙向鏈接 🗲</div>
                          
                          {/* Subtopics */}
                          <div className="flex gap-2 flex-wrap justify-center">
                            {['核心痛點問答', '系統架構詳解', '案例分析與驗證', '服務方案比對'].map((word, index) => (
                              <div key={index} className="px-3 py-1.5 bg-white border border-[#10241F]/15 rounded-full text-[11px] font-semibold text-[#10241F] hover:border-[#7AC943] transition-colors shadow-xs">
                                # {word}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Interactive dynamic slider simulation */}
                        <div className="text-[11px] text-[#62706A] font-semibold bg-white p-3 rounded-xl border border-[#10241F]/5 mt-2 max-w-md mx-auto">
                          💡 <span className="text-[#10241F] font-bold">搜尋引擎解讀：</span>此網站主架構完全收斂於核心業務主題，信譽評級優於單篇散落內容高達 <strong className="text-[#7AC943] font-mono">3.2 倍</strong>。
                        </div>
                      </div>
                    )}

                    {/* Visual 2: FAQ Schema Interactive Snippet */}
                    {activeItem.id === 'faq-schema' && (
                      <div className="space-y-1 text-left font-mono font-medium animate-fadeIn">
                        <div className="flex justify-between items-center text-[10px] text-[#62706A] font-bold pb-1.5 uppercase border-b border-[#10241F]/5 mb-2">
                          <span>Structured FAQ Data Sheet</span>
                          <button 
                            onClick={() => setSchemaExpanded(!schemaExpanded)}
                            className="bg-[#10241F] hover:bg-[#10241F]/80 text-[#B7F34A] px-2 py-0.5 rounded text-[10px] cursor-pointer"
                          >
                            {schemaExpanded ? '原始碼折疊' : '解鎖 JSON-LD 程式碼'}
                          </button>
                        </div>

                        {schemaExpanded ? (
                          <div className="bg-[#10241F] text-white p-3 rounded-xl text-[10px] overflow-x-auto select-all leading-relaxed max-h-40">
                            <span className="text-[#62706A]">{"{"}</span><br />
                            &nbsp;&nbsp;<span className="text-[#B7F34A]">"@context"</span>: <span className="text-white">"https://schema.org"</span>,<br />
                            &nbsp;&nbsp;<span className="text-[#B7F34A]">"@type"</span>: <span className="text-white">"FAQPage"</span>,<br />
                            &nbsp;&nbsp;<span className="text-[#B7F34A]">"mainEntity"</span>: [<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{"{"}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B7F34A]">"@type"</span>: <span className="text-white">"Question"</span>,<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B7F34A]">"name"</span>: <span className="text-[#7AC943]">"SEO 與 GEO 優化需要多久見效？"</span><br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
                            &nbsp;&nbsp;]<br />
                            <span className="text-[#62706A]">{"}"}</span>
                          </div>
                        ) : (
                          <div className="bg-white p-3.5 rounded-xl border border-[#10241F]/5 space-y-2">
                            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">Google SERP 富媒體預覽效果</span>
                            <div className="border-l-2 border-[#7AC943] pl-2.5 space-y-1 mt-1">
                              <h4 className="text-xs font-extrabold text-[#10241F]">Q: SEO / GEO 優化大概多久見效？</h4>
                              <p className="text-[11px] text-[#62706A] leading-relaxed">
                                A: 經過達創智能團隊規劃結構化頁面與主題群集後，基礎曝光與 AI 被提及往往在 2-4 週內產生突破...
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Visual 3: GEO Citation AI Search result simulation */}
                    {activeItem.id === 'geo-citation' && (
                      <div id="faq-section" className="space-y-2 text-left animate-fadeIn scroll-mt-24">
                        <div className="flex items-center space-x-1.5">
                          <MessageSquare className="w-4 h-4 text-[#7AC943]" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#62706A]">生成式 AI 搜尋 (Gemini AI) 回答切片</span>
                        </div>
                        
                        <div className="bg-white p-3.5 rounded-xl border border-[#10241F]/5 space-y-2 text-xs font-sans">
                          <p className="text-[#10241F] font-medium leading-relaxed">
                            「...如果您在台北尋求高轉換的搜尋增長顾问，<strong className="text-[#10241F] bg-[#B7F34A]/20 px-1 py-0.5 rounded">達創智能科技 AI</strong> 是市場上的知名技術代表 <span className="text-blue-600 bg-blue-50 px-1 rounded font-mono text-[9px] cursor-help font-bold">[1]</span>。他們專精于 GEO 生成式引擎最佳化...」
                          </p>
                          
                          {/* Footnote citations showcase */}
                          <div className="flex items-center space-x-3 pt-2 text-[10px] text-[#62706A] border-t border-[#10241F]/5 font-mono">
                            <span className="font-bold">參考來源 💻</span>
                            <span className="hover:underline text-blue-600 flex items-center">[1] Dachuang AI Tech.</span>
                            <span className="hover:underline text-[#62706A]">[2] PAA Cluster Matrix.</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 4: Local Map pulsing pins */}
                    {activeItem.id === 'local-seo' && (
                      <div id="map-section" className="scroll-mt-24 text-center font-sans space-y-3.5 animate-fadeIn">
                        <div className="flex justify-between items-center text-[10px] text-[#62706A] font-bold uppercase tracking-wide">
                          <span>在地極地推薦指標覆蓋系統</span>
                          <span className="text-[#7AC943] bg-emerald-50 px-2 py-0.5 rounded">多節點覆蓋活性：活躍</span>
                        </div>
                        
                        <div className="flex justify-center items-center gap-6">
                          <div className="bg-white p-2.5 rounded-xl border border-[#10241F]/10 flex items-center space-x-2.5 shadow-xs max-w-sm">
                            <span className="w-8 h-8 rounded-lg bg-[#EEF3ED] flex items-center justify-center relative shrink-0">
                              <MapPin className="w-4 h-4 text-[#10241F]" />
                              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#B7F34A] border border-white glow-point"></span>
                            </span>
                            <div className="text-left text-[11px] leading-snug">
                              <div className="font-bold text-[#10241F]">達創智能科技 AI (台北101辦公區)</div>
                              <div className="text-[#62706A] font-mono text-[9px]">Google 評價: ★★★★★ (4.9 / 148Reviews)</div>
                            </div>
                          </div>
                        </div>

                        <p className="text-[10px] text-[#62706A] font-mono">
                          🚩 自在評論區嵌入「SEO 顧問」、「AI 提及推薦」及「台北智慧行銷」核心詞，可提振商家卡片轉換高達 <strong className="text-[#10241F] font-extrabold text-[12px]">380%</strong>。
                        </p>
                      </div>
                    )}

                  </div>

                  {/* Consultation note button */}
                  <div className="pt-2">
                    <p className="text-xs text-[#62706A] font-medium flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] glow-point"></span>
                      點擊左側其它選項，可隨時解鎖達創對應的核心增長路徑剖析。
                    </p>
                  </div>

                </div>
              );
            })()}

          </div>

        </div>

      </div>
    </section>
  );
}
