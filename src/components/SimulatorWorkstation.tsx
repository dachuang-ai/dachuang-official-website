/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { APP_MOCK_RESPONSES, getCustomSimulationResult } from '../data';
import { SimulationResult } from '../types';
import { 
  Search, 
  Sparkles, 
  MapPin, 
  Code, 
  FileText, 
  Globe, 
  Brain, 
  RefreshCw, 
  CheckCircle2, 
  Compass, 
  HelpCircle,
  Terminal,
  Activity
} from 'lucide-react';

export default function SimulatorWorkstation() {
  const presetChips = [
    '達創智能科技 服務評價',
    '企業如何導入 GEO AI 搜尋優化',
    '台北 專業智慧搜尋曝光 顧問推薦'
  ];

  const [searchQuery, setSearchQuery] = useState<string>(presetChips[0]);
  const [activeTab, setActiveTab] = useState<'serp' | 'aiAnswer' | 'mapSignal' | 'faqSchema'>('aiAnswer');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisStep, setAnalysisStep] = useState<number>(0);
  const [result, setResult] = useState<SimulationResult>(APP_MOCK_RESPONSES[presetChips[0]]);
  const [customCodeCopied, setCustomCodeCopied] = useState<boolean>(false);

  // Analysis compiler steps
  const analysisStatuses = [
    '正在傳遞搜尋請求至 達創 AI 搜尋語意演算接口...',
    '分析大語言模型 (LLM) 共現提及權值與 GEO 腳註位置...',
    '抽取全網 FAQ Schema 結構化數據與 PAA (People Also Ask) 問答節點...',
    '載入在地商家 Google Map 與實體導航來電轉化權重因子...',
    '分析完成！正在為您渲染多維曝光透視儀表卡...'
  ];

  const handlePresetSelect = (chip: string) => {
    setSearchQuery(chip);
    triggerAnalysis(chip);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerAnalysis(searchQuery);
  };

  const triggerAnalysis = (query: string) => {
    setIsAnalyzing(true);
    setAnalysisStep(0);
    
    // Simulate multi-stage laboratory analyzer loaders
    const interval = setInterval(() => {
      setAnalysisStep((prev) => {
        if (prev >= analysisStatuses.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            // Find in mock data or generate custom
            const searchResult = APP_MOCK_RESPONSES[query] || getCustomSimulationResult(query);
            setResult(searchResult);
            setIsAnalyzing(false);
          }, 300);
          return prev;
        }
        return prev + 1;
      });
    }, 250);
  };

  // Helper to highlight terms (very high-fidelity SERP previews)
  const renderHighlightedText = (text: string, terms: string[]) => {
    if (!text) return '';
    let pattern = terms.join('|');
    // Sanitize term symbols just in case
    pattern = pattern.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    const regex = new RegExp(`(${pattern})`, 'gi');
    
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, index) => 
          regex.test(part) ? (
            <mark key={index} className="bg-[#B7F34A]/30 text-[#10241F] font-bold px-0.5 rounded">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  // Split query terms to highlight
  const queryTerms = searchQuery.split(/\s+/).filter(t => t.length > 0);

  const copyCodeToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCustomCodeCopied(true);
    setTimeout(() => setCustomCodeCopied(false), 2000);
  };

  return (
    <section id="cluster-section" className="py-24 bg-[#F7F8F4] scroll-mt-20 border-t border-[#10241F]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#EEF3ED] border border-[#10241F]/10 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#62706A] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B7F34A] animate-ping shrink-0"></span>
            <span>Interactive Live Simulation Lab</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10241F] mb-4">
            GEO / AI Search 搜尋模擬工作台
          </h2>
          
          <p className="text-lg text-[#62706A] font-medium leading-relaxed">
            輸入您的品牌關鍵字或選擇以下推薦，親自驗收達創優化方案在搜尋引擎、大模型語意回答、地圖卡片與 Schema 的多渠道爆點。
          </p>
        </div>

        {/* WORKSTATION LAYOUT CONTROLS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left panel: Query Controller (col span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-[32px] border border-[#10241F]/5 shadow-sm space-y-6">
              
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#62706A] font-mono block">
                  Step 1: 輸入檢測字詞 (Query input)
                </span>
                <h3 className="text-lg font-extrabold text-[#10241F]">
                  搜尋分析控制板
                </h3>
              </div>

              {/* Action Form */}
              <form onSubmit={handleSearchSubmit} className="space-y-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-[#62706A]" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="請輸入您想檢驗的曝光字詞..."
                    className="block w-full pl-11 pr-4 py-4 rounded-2xl bg-[#EEF3ED]/60 border border-[#10241F]/10 text-sm font-semibold text-[#10241F] focus:outline-hidden focus:ring-2 focus:ring-[#10241F] focus:bg-white transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="w-full py-4 rounded-2xl bg-[#10241F] hover:bg-[#1C3E35] text-white font-bold text-sm tracking-wider shadow-md hover:shadow-lg disabled:bg-[#10241F]/40 flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#B7F34A]" />
                  <span>{isAnalyzing ? '深度演算優化中...' : '立即進行 3D 增長模擬'}</span>
                </button>
              </form>

              {/* Suggestion Chips */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-[#62706A] font-mono uppercase tracking-wider block">
                  或選擇經典產業範例 (Preset Chips)
                </span>
                <div className="flex flex-col gap-2">
                  {presetChips.map((chip, idx) => {
                    const isSelected = searchQuery === chip;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handlePresetSelect(chip)}
                        className={`text-left px-4 py-3 rounded-xl text-xs font-semibold border transition-all ${
                          isSelected
                            ? 'bg-[#EEF3ED] border-[#10241F] text-[#10241F] font-bold shadow-xs'
                            : 'bg-white border-[#10241F]/5 text-[#62706A] hover:border-[#10241F]/30 hover:bg-[#EEF3ED]/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="truncate pr-1"># {chip}</span>
                          <span className="text-[9px] font-mono text-[#7AC943] shrink-0">
                            {idx === 0 ? '口碑評價' : idx === 1 ? 'GEO導入' : '顧問推薦'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Info Box */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/50 text-xs text-[#10241F] leading-relaxed">
                📢 <strong className="font-extrabold text-amber-950">模擬小撇步：</strong>您可以直接輸入與您的商品有關的自訂詞彙（例如「AI 餐飲最佳化」或「新北 醫療器材 SEO」），達創系統將會即時逆向模擬「符合生成式 AI 與 Schema 的精準引流架構解答」！
              </div>

            </div>
          </div>

          {/* Right panel: Live Visualizer workspace (col span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] border border-[#10241F]/15 shadow-sm overflow-hidden flex flex-col min-h-[500px]">
              
              {/* Analyzer Header Bar - Swiss Tech Style */}
              <div className="bg-[#10241F] px-6 py-4 flex items-center justify-between text-white border-b border-[#254A41]">
                <div className="flex items-center space-x-2.5">
                  <Terminal className="w-4 h-4 text-[#B7F34A]" />
                  <span className="text-xs font-bold font-mono tracking-widest text-white/50 uppercase">
                    dachuang search-growth lab v2.0
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 font-mono text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-[#7AC943] glow-point"></span>
                  <span className="text-white/80">系統狀態：就緒</span>
                </div>
              </div>

              {/* SEARCH MOCK TABS SELECTOR */}
              <div className="bg-[#EEF3ED]/80 border-b border-[#10241F]/5 px-4 py-1.5 flex flex-wrap gap-1.5 select-none text-xs">
                
                {/* Tab: Google SERP */}
                <button
                  type="button"
                  onClick={() => setActiveTab('serp')}
                  className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all text-xs ${
                    activeTab === 'serp'
                      ? 'bg-white text-[#10241F] shadow-xs'
                      : 'text-[#62706A] hover:bg-white/45'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 stroke-[2.2]" />
                  <span>Google 搜尋 preview</span>
                </button>

                {/* Tab: AI Answers */}
                <button
                  type="button"
                  onClick={() => setActiveTab('aiAnswer')}
                  className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all text-xs ${
                    activeTab === 'aiAnswer'
                      ? 'bg-white text-[#10241F] shadow-xs'
                      : 'text-[#62706A] hover:bg-white/45'
                  }`}
                >
                  <Brain className="w-3.5 h-3.5 stroke-[2.2] text-[#7AC943]" />
                  <span>Gemini / AI 回答</span>
                </button>

                {/* Tab: Local Map */}
                <button
                  type="button"
                  onClick={() => setActiveTab('mapSignal')}
                  className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all text-xs ${
                    activeTab === 'mapSignal'
                      ? 'bg-white text-[#10241F] shadow-xs'
                      : 'text-[#62706A] hover:bg-white/45'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 stroke-[2.2]" />
                  <span>地圖商家 preview</span>
                </button>

                {/* Tab: FAQ Schema */}
                <button
                  type="button"
                  onClick={() => setActiveTab('faqSchema')}
                  className={`px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all text-xs ${
                    activeTab === 'faqSchema'
                      ? 'bg-white text-[#10241F] shadow-xs'
                      : 'text-[#62706A] hover:bg-white/45'
                  }`}
                >
                  <Code className="w-3.5 h-3.5 stroke-[2.2]" />
                  <span>FAQ 結構標記</span>
                </button>

              </div>

              {/* RENDER SPACE WITH LOADER CONDITIONAL */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                
                {isAnalyzing ? (
                  /* LABORATORY COMPILING STEP INDICATOR */
                  <div className="flex-1 flex flex-col items-center justify-center space-y-6 py-12 animate-pulse select-none text-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#B7F34A]/25 blur-md"></div>
                      <RefreshCw className="h-10 w-10 text-[#10241F] animate-spin relative" />
                    </div>
                    
                    <div className="space-y-2 max-w-sm">
                      <h4 className="font-extrabold text-[#10241F]">達創智能搜尋引流編譯中...</h4>
                      <p className="text-xs text-[#62706A] font-mono leading-relaxed h-12">
                        {analysisStatuses[analysisStep]}
                      </p>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex items-center space-x-1.5">
                      {analysisStatuses.map((_, dotIdx) => (
                        <div
                          key={dotIdx}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            dotIdx <= analysisStep ? 'bg-[#7AC943] scale-110' : 'bg-[#10241F]/10'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* MAIN RESULTS VIEWER */
                  <div className="flex-1 flex flex-col justify-between">
                    
                    {/* TAB SPECIFIC PREVIEWS */}
                    <div className="mb-4">
                      
                      {/* TAB 1: Google SERP */}
                      {activeTab === 'serp' && result.serp && (
                        <div className="space-y-6 text-left animate-fadeIn">
                          
                          {/* Breadcrumb info */}
                          <div>
                            <span className="text-[11px] text-[#62706A] block mb-1 font-mono tracking-xs">
                              {result.serp.breadcrumbs}
                            </span>
                            <h4 className="text-lg sm:text-xl font-bold text-[#1a0dab] hover:underline cursor-pointer leading-tight">
                              {renderHighlightedText(result.serp.title, queryTerms)}
                            </h4>
                            <p className="text-xs text-[#4d5156] mt-1.5 leading-relaxed font-sans">
                              <span className="text-[#70757a] font-mono">2026年6月18日 — </span>
                              {renderHighlightedText(result.serp.snippet, queryTerms)}
                            </p>
                          </div>

                          {/* Site links array - premium rich snippet */}
                          {result.serp.sitelines && result.serp.sitelines.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4 border-l border-[#10241F]/10 py-1">
                              {result.serp.sitelines.map((site, i) => (
                                <div key={i} className="text-left space-y-0.5">
                                  <h5 className="text-[#1a0dab] font-semibold text-xs hover:underline cursor-pointer">
                                    {site.title}
                                  </h5>
                                  <p className="text-[11px] text-[#4d5156] leading-relaxed">
                                    {site.desc}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Google SERP note banner */}
                          <div className="border-t border-[#10241F]/5 pt-4">
                            <span className="inline-flex items-center text-[10px] font-bold text-[#7AC943] bg-emerald-50 px-2 py-0.5 rounded font-mono">
                              Google Rich snippets label injected
                            </span>
                          </div>

                        </div>
                      )}

                      {/* TAB 2: AI Answer Summary Container */}
                      {activeTab === 'aiAnswer' && result.aiAnswer && (
                        <div className="space-y-4 text-left animate-fadeIn font-sans">
                          
                          {/* Query Bubbles header */}
                          <div className="p-3.5 bg-[#EEF3ED] border border-[#10241F]/5 rounded-2xl flex items-start space-x-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#10241F] mt-1.5 shrink-0"></div>
                            <p className="text-[#10241F] font-bold text-xs">
                              {result.aiAnswer.query}
                            </p>
                          </div>

                          {/* Response Block - Perplexity Inspired */}
                          <div className="space-y-3.5 text-xs text-[#10241F] leading-relaxed border-l-2 border-[#7AC943] pl-4 py-1">
                            {/* Format paragraphs */}
                            {result.aiAnswer.text.split('\n\n').map((paragraph, pIdx) => {
                              // Render bold lists
                              if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.')) {
                                return (
                                  <div key={pIdx} className="space-y-2 pl-2">
                                    {paragraph.split('\n').map((listItem, liIdx) => (
                                      <p key={liIdx}>
                                        {renderHighlightedText(listItem, queryTerms)}
                                      </p>
                                    ))}
                                  </div>
                                );
                              }
                              return (
                                <p key={pIdx} className="font-semibold text-xs">
                                  {renderHighlightedText(paragraph, queryTerms)}
                                </p>
                              );
                            })}
                          </div>

                          {/* Reference footers listing */}
                          <div className="pt-3 border-t border-[#10241F]/5">
                            <span className="text-[10px] text-[#62706A] uppercase font-bold tracking-widest block mb-2 font-mono">
                              AI model cited sources ({result.aiAnswer.citations.length} 來源)
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {result.aiAnswer.citations.map((cite, cIdx) => (
                                <a
                                  key={cIdx}
                                  href={cite.url}
                                  className="inline-flex items-center space-x-1 px-2.5 py-1 bg-[#EEF3ED] border border-[#10241F]/5 rounded-lg text-[10px] text-[#10241F] hover:border-[#7AC943] transition-colors"
                                >
                                  <span className="font-mono text-[9px] bg-[#10241F] text-white w-3.5 h-3.5 rounded-md flex items-center justify-center shrink-0">
                                    {cite.key}
                                  </span>
                                  <span className="font-bold">{cite.name}</span>
                                </a>
                              ))}
                            </div>
                          </div>

                        </div>
                      )}

                      {/* TAB 3: Local Map Exposure Preview */}
                      {activeTab === 'mapSignal' && result.mapSignal && (
                        <div className="space-y-5 text-left animate-fadeIn">
                          
                          {/* Top listing brief */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#10241F]/5 pb-4">
                            <div>
                              <h4 className="text-base font-extrabold text-[#10241F]">
                                {result.mapSignal.name}
                              </h4>
                              <p className="text-[11px] text-[#62706A] mt-1 font-semibold">
                                📍 {result.mapSignal.address}
                              </p>
                            </div>
                            
                            {/* Rating badge */}
                            <div className="flex items-center space-x-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-2xl shrink-0 font-mono">
                              <span className="text-sm font-black text-amber-950">
                                {result.mapSignal.rating}
                              </span>
                              <span className="text-xs text-[#62706A]">
                                ({result.mapSignal.reviewsCount} 評價)
                              </span>
                            </div>
                          </div>

                          {/* Real-time sync status */}
                          <div className="flex items-center space-x-2 text-xs">
                            <span className="w-2 h-2 rounded-full bg-[#7AC943] glow-point"></span>
                            <span className="text-[#10241F] font-bold">
                              {result.mapSignal.status}
                            </span>
                          </div>

                          {/* Dynamic Comments List */}
                          <div className="space-y-2.5">
                            <span className="text-[10px] text-[#62706A] uppercase font-bold tracking-widest block font-mono">
                              高曝光關聯與地圖正向引用特徵詞
                            </span>
                            <div className="grid grid-cols-1 gap-2">
                              {result.mapSignal.highlights.map((comment, commentIdx) => (
                                <blockquote
                                  key={commentIdx}
                                  className="p-3 bg-[#EEF3ED]/60 border border-[#10241F]/5 rounded-xl text-xs text-[#10241F] italic font-semibold relative pl-7"
                                >
                                  <span className="absolute left-2.5 top-2 text-xl text-[#7AC943] leading-none select-none font-serif">“</span>
                                  {renderHighlightedText(comment, queryTerms)}
                                </blockquote>
                              ))}
                            </div>
                          </div>

                        </div>
                      )}

                      {/* TAB 4: FAQ Schema Details */}
                      {activeTab === 'faqSchema' && result.faqSchema && (
                        <div className="space-y-4 text-left animate-fadeIn">
                          
                          {/* Live Rendered Accordion preview */}
                          <div className="bg-[#EEF3ED] p-4 rounded-2xl border border-[#10241F]/5 text-xs">
                            <span className="text-[10px] text-[#62706A] font-bold uppercase tracking-widest block mb-2 font-mono">
                              前端實體渲染問答組件效果
                            </span>
                            <div className="bg-white p-3.5 rounded-xl block border border-[#10241F]/5">
                              <details className="group" open>
                                <summary className="font-extrabold text-[#10241F] pr-4 cursor-pointer list-none relative flex justify-between items-center">
                                  <span>{result.faqSchema.question}</span>
                                  <span className="text-xl text-[#10241F]/40 group-open:rotate-45 transition-transform duration-200">+</span>
                                </summary>
                                <p className="text-[11px] text-[#62706A] mt-2 leading-relaxed border-t border-[#10241F]/5 pt-2 font-medium">
                                  {result.faqSchema.answer}
                                </p>
                              </details>
                            </div>
                          </div>

                          {/* Structured Code preview block */}
                          <div className="space-y-2.5 text-left font-mono">
                            <div className="flex items-center justify-between text-[10px] text-[#62706A] font-bold uppercase tracking-wider">
                              <span>JSON-LD Schema Markup (合規檢證通過)</span>
                              <button
                                type="button"
                                onClick={() => copyCodeToClipboard(result.faqSchema.codeSnippet)}
                                className="bg-[#10241F] hover:bg-[#10241F]/80 text-[#B7F34A] py-1 px-2.5 rounded-lg text-[10px] cursor-pointer"
                              >
                                {customCodeCopied ? '✓ 複製成功' : '複製標籤碼'}
                              </button>
                            </div>
                            
                            <pre className="bg-[#10241F] text-white p-4 rounded-xl text-[10px] overflow-x-auto leading-relaxed max-w-full">
                              <code>{result.faqSchema.codeSnippet}</code>
                            </pre>
                          </div>

                        </div>
                      )}

                    </div>

                    {/* Workstation summary feedback footer */}
                    <div className="border-t border-[#10241F]/5 pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#62706A] font-semibold gap-3">
                      <div>
                        本 Demo 使用達創 <span className="font-mono font-bold text-[#10241F]">SEO/GEO Dynamic Simulator API v2</span> 生成模擬輸出
                      </div>
                      <div className="flex gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-950 font-bold border border-emerald-100">
                          JSON-LD 完好
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#B7F34A]/25 text-[#10241F] font-bold border border-[#B7F34A]/40">
                          AI 引用就緒
                        </span>
                      </div>
                    </div>

                  </div>
                )}

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
