/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { METRIC_CARDS } from '../data';
import { MetricCard } from '../types';
import { 
  Globe, 
  Brain, 
  MapPin, 
  Code, 
  TrendingUp, 
  CheckCircle2, 
  ChevronDown, 
  Activity, 
  ArrowUpRight, 
  Compass, 
  Layers 
} from 'lucide-react';

interface MetricDetailProps {
  cardId: string;
}

function MetricVisualDetail({ cardId }: MetricDetailProps) {
  // Renders a high-fidelity interactive sub-widget based on the active metric
  switch (cardId) {
    case 'm1': // Google SERP Visibility
      return (
        <div className="mt-4 p-4 rounded-xl bg-[#EEF3ED]/80 border border-[#10241F]/5 space-y-3 font-sans animate-fadeIn">
          <div className="flex justify-between items-center text-xs text-[#62706A]">
            <span className="font-semibold">歷史搜尋能見度曲線 (6 個月)</span>
            <span className="font-mono text-[#7AC943]">+12.8% 突破</span>
          </div>
          {/* Custom vector representation of a ranking chart */}
          <div className="h-24 w-full flex items-end justify-between px-1 pt-4 relative">
            <div className="absolute inset-x-0 top-1/2 border-t border-[#10241F]/5 border-dashed"></div>
            {/* Bars with growing height & lime color spots */}
            {[45, 52, 58, 67, 81, 92.4].map((val, i) => (
              <div key={i} className="flex flex-col items-center flex-1 group">
                <span className="text-[9px] font-mono font-bold text-[#10241F] scale-0 group-hover:scale-100 transition-all mb-1 bg-white px-1 shadow-sm rounded">
                  {val}%
                </span>
                <div 
                  className={`w-4/5 rounded-t-md transition-all duration-500 relative ${
                    i === 5 ? 'bg-[#7AC943]' : 'bg-[#10241F]/20 group-hover:bg-[#10241F]/40'
                  }`}
                  style={{ height: `${val}%` }}
                >
                  {i === 5 && (
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#B7F34A] border-2 border-white pointer-events-none shadow"></span>
                  )}
                </div>
                <span className="text-[9px] font-mono text-[#62706A] mt-1.5">
                  {['1月', '2月', '3月', '4月', '5月', '本月'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'm2': // AI Answer Mention
      return (
        <div className="mt-4 p-4 rounded-xl bg-[#EEF3ED]/80 border border-[#10241F]/5 space-y-2.5 text-xs text-[#10241F] animate-fadeIn">
          <span className="text-[10px] uppercase tracking-wider text-[#62706A] font-mono font-bold block mb-1">
            大語言模型 (LLM) 引用權重矩陣
          </span>
          <div className="space-y-1.5 font-mono">
            {/* Perplexity cite */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/70 border border-[#10241F]/5">
              <span className="font-semibold text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A] glow-point"></span>
                Perplexity AI
              </span>
              <span className="text-[10px] text-[#7AC943] font-bold">強烈推薦 ‧ 腳注 [1]</span>
            </div>
            {/* Gemini Cite */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/70 border border-[#10241F]/5">
              <span className="font-semibold text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A] glow-point"></span>
                Google Gemini
              </span>
              <span className="text-[10px] text-[#7AC943] font-bold">高亮引用 ‧ 段落引用 [3]</span>
            </div>
            {/* ChatGPT Cite */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/70 border border-[#10241F]/5">
              <span className="font-semibold text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A] glow-point"></span>
                OpenAI SearchGPT
              </span>
              <span className="text-[10px] text-[#7AC943] font-bold">語意最佳配對 ‧ 頂部來源</span>
            </div>
          </div>
        </div>
      );

    case 'm3': // Local Map Exposure
      return (
        <div className="mt-4 p-4 rounded-xl bg-[#EEF3ED]/80 border border-[#10241F]/5 text-xs animate-fadeIn">
          <div className="flex justify-between items-center text-[10px] text-[#62706A] font-bold uppercase tracking-wider mb-2 font-mono">
            <span>台北核心服務地圖訊號點</span>
            <span className="text-[#10241F]">同步率 100%</span>
          </div>
          {/* Visual representation of nodes */}
          <div className="relative h-20 bg-white/60 rounded-lg overflow-hidden border border-[#10241F]/5 flex items-center justify-center">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#10241F_1px,transparent_1px)] [background-size:12px_12px] opacity-10"></div>
            {/* Connectivity paths */}
            <svg className="absolute inset-0 w-full h-full text-[#7AC943]/20" xmlns="http://www.w3.org/2000/svg">
              <line x1="30" y1="40" x2="110" y2="25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="110" y1="25" x2="210" y2="50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="110" y1="25" x2="160" y2="65" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
            {/* Map point nodes */}
            <div className="absolute left-[30px] top-[35px] flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10241F]"></div>
              <span className="text-[8px] font-mono scale-90 mt-0.5 text-[#62706A]">板橋</span>
            </div>
            <div className="absolute left-[110px] top-[20px] flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-[#7AC943] border-4 border-white shadow-md flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B7F34A]"></div>
              </div>
              <span className="text-[9px] font-bold mt-0.5 text-[#10241F]">台北信義 (總部)</span>
            </div>
            <div className="absolute left-[210px] top-[45px] flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10241F]"></div>
              <span className="text-[8px] font-mono scale-90 mt-0.5 text-[#62706A]">內湖</span>
            </div>
            <div className="absolute left-[160px] top-[60px] flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10241F]"></div>
              <span className="text-[8px] font-mono scale-90 mt-0.5 text-[#62706A]">松山</span>
            </div>
          </div>
        </div>
      );

    case 'm4': // Structured Content Signal
      return (
        <div className="mt-4 p-4 rounded-xl bg-[#EEF3ED]/80 border border-[#10241F]/5 text-xs animate-fadeIn space-y-2">
          <div className="flex items-center justify-between text-[10px] uppercase font-mono font-bold text-[#62706A]">
            <span>Schema.org JSON-LD 規範檢驗</span>
            <span className="text-[#7AC943] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 通過
            </span>
          </div>
          {/* Mock code block snippet */}
          <div className="bg-[#10241F] text-white p-2.5 rounded-lg font-mono text-[9px] overflow-x-auto leading-relaxed max-w-full">
            <span className="text-[#62706A]">// FAQ Schema JSON 注入</span><br />
            <span className="text-[#B7F34A]">"@type"</span>: <span className="text-[#FFFFFF]">"FAQPage"</span>,<br />
            <span className="text-[#B7F34A]">"mainEntity"</span>: [<br />
            &nbsp;&nbsp;&#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B7F34A]">"@type"</span>: <span className="text-[#FFFFFF]">"Question"</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B7F34A]">"name"</span>: <span className="text-[#FFFFFF]">"智慧極速搜尋排名解方..."</span><br />
            &nbsp;&nbsp;&#125;<br />
            ]
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function DashboardMetrics() {
  const [activeCard, setActiveCard] = useState<string>('m1');

  const getIcon = (id: string) => {
    switch (id) {
      case 'm1': return <Globe className="w-5 h-5 text-[#10241F]" />;
      case 'm2': return <Brain className="w-5 h-5 text-[#10241F]" />;
      case 'm3': return <MapPin className="w-5 h-5 text-[#10241F]" />;
      case 'm4': return <Code className="w-5 h-5 text-[#10241F]" />;
      default: return <Activity className="w-5 h-5 text-[#10241F]" />;
    }
  };

  const statusColors = {
    EXCELLENT: 'bg-[#B7F34A]/25 text-[#10241F] border-[#B7F34A]/50',
    HIGH: 'bg-[#7AC943]/15 text-[#10241F] border-[#7AC943]/30',
    ACTIVE: 'bg-emerald-100 text-emerald-950 border-emerald-200',
    READY: 'bg-[#10241F]/10 text-[#10241F] border-[#10241F]/15',
  };

  return (
    <section id="geo-section" className="py-20 bg-[#F7F8F4] border-t border-[#10241F]/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#EEF3ED] border border-[#10241F]/10 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#62706A] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#7AC943] glow-point"></span>
            <span>Search Intelligence Matrix</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10241F] mb-4">
            搜尋不是排名，而是品牌被理解的入口
          </h2>
          
          <p className="text-lg text-[#62706A] font-medium leading-relaxed">
            唯有優化全網結構與多點引用，企業才能在 Google 網頁、AI 搜尋摘要與地圖訊號中，全天候成為客戶的可信解決方案。
          </p>
        </div>

        {/* Dashboard Cards Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRIC_CARDS.map((card) => {
            const isActive = activeCard === card.id;
            return (
              <div
                key={card.id}
                id={`metric-card-${card.id}`}
                onClick={() => setActiveCard(card.id)}
                className={`relative p-6 rounded-3xl cursor-pointer text-left transition-all duration-300 group select-none flex flex-col justify-between ${
                  isActive 
                    ? 'bg-white border-[#10241F] shadow-md ring-2 ring-[#10241F]/5 translate-y-[-4px]' 
                    : 'bg-white border border-[#10241F]/5 hover:border-[#10241F]/25 hover:shadow-xs hover:translate-y-[-2px]'
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF3ED] flex items-center justify-center transition-colors group-hover:bg-[#B7F34A]/10">
                      {getIcon(card.id)}
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md border font-mono ${statusColors[card.status]}`}>
                      {card.status}
                    </span>
                  </div>

                  {/* Rating or Value */}
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-extrabold text-[#10241F] tracking-tight font-mono">
                      {card.value}
                    </span>
                    <span className="text-xs font-bold text-[#7AC943] font-mono flex items-center bg-emerald-50 px-1.5 py-0.5 rounded">
                      <ArrowUpRight className="w-3 h-3 mr-0.5" />
                      {card.trend}
                    </span>
                  </div>

                  {/* Title & Short Details */}
                  <h3 className="text-base font-bold text-[#10241F] mt-2 mb-1">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs text-[#62706A] font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Expanded content */}
                <div className="mt-4 pt-4 border-t border-[#10241F]/5">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#10241F] select-none">
                    <span className="text-[#62706A] font-mono text-[10px] uppercase tracking-wide">
                      {card.timeframe}
                    </span>
                    <span className="text-[11px] text-[#7AC943] group-hover:underline flex items-center">
                      {isActive ? '點擊收起詳情' : '點擊查看數據庫'}
                      <ChevronDown className={`w-3.5 h-3.5 ml-0.5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                    </span>
                  </div>

                  {/* Render detail graph if active */}
                  {isActive && (
                    <div className="pt-2">
                      <MetricVisualDetail cardId={card.id} />
                      <ul className="mt-3.5 space-y-1.5 text-[11px] text-[#62706A] font-medium border-t border-[#10241F]/5 pt-3">
                        {card.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#7AC943] mr-1.5 font-bold">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#EEF3ED] border border-[#10241F]/5 flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5 text-[#7AC943] stroke-[2.5]" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-[#10241F]">達創智慧搜尋監控系統</h4>
              <p className="text-xs text-[#62706A] font-medium">我們的系統能每天自動模擬各大洲、各模型(Copilot, Gemini)之被引用比，為企業維持穩固的AI曝光權益。</p>
            </div>
          </div>
          <div className="shrink-0 flex gap-2">
            <span className="text-[11px] font-semibold text-[#10241F] bg-white border border-[#10241F]/5 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] glow-point"></span>
              7x24 即時健診
            </span>
            <span className="text-[11px] font-semibold text-[#10241F] bg-[#B7F34A]/30 border border-[#B7F34A]/50 px-3 py-1.5 rounded-full">
              技術白皮書 v2.4
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
