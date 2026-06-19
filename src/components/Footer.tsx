/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, ChevronUp, Share2, Globe, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1714] text-white border-t border-white/10 pt-20 pb-8 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links & Bio grids */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-16 border-b border-white/5">
          
          {/* Logo & Bio columns (colspan 5) */}
          <div className="md:col-span-5 space-y-6 text-left">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={scrollToTop}>
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center relative shadow-sm">
                <Search className="w-4.5 h-4.5 text-[#B7F34A]" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#7AC943] border border-[#0B1714] glow-point"></span>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <span className="text-base font-black text-white font-sans">達創智能科技</span>
                  <span className="text-[9px] uppercase font-bold bg-[#B7F34A] text-[#10241F] px-1 rounded-sm">AI</span>
                </div>
                <span className="text-[9px] tracking-widest font-mono text-stone-400 uppercase font-semibold">Search Growth Lab</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 font-medium leading-relaxed max-w-sm">
              達創智能科技 AI 是全台領先結合 SEO、GEO 生成式搜尋優化、FAQ 結構化與 Hyperlocal Inbound 地圖訊號的搜尋增長策略科學團隊。我們致力於將行銷流量轉化為企業最具實戰效益的多渠道可累積品牌數位資產。
            </p>

            {/* Strategic categories tags array requested by prompt */}
            <div className="space-y-2">
              <span className="text-[10px] text-stone-500 font-mono uppercase tracking-widest block font-bold">SEO / GEO Keyword FrameworkTags</span>
              <div className="flex flex-wrap gap-1.5 max-w-md">
                {['SEO', 'GEO', 'Local SEO', 'Schema', 'Topic Cluster', 'AI Search Visibility'].map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-[9px] font-mono font-bold border border-white/10 text-[#62706A] px-2 py-0.5 rounded-md uppercase hover:border-[#B7F34A] hover:text-[#B7F34A] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links Column A (colspan 3) B2B */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              搜尋曝光技術 (Exploration Tech)
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-semibold">
              <li><button onClick={() => { const el = document.getElementById('strategy-section'); if(el) el.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-[#B7F34A] transition-colors">Topic Cluster 主題群集優化</button></li>
              <li><button onClick={() => { const el = document.getElementById('faq-section'); if(el) el.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-[#B7F34A] transition-colors">FAQ Schema 結構化數據注入</button></li>
              <li><button onClick={() => { const el = document.getElementById('geo-section'); if(el) el.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-[#B7F34A] transition-colors">GEO Citation AI 逆向引用</button></li>
              <li><button onClick={() => { const el = document.getElementById('map-section'); if(el) el.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-[#B7F34A] transition-colors">Local Map Exposure 地圖三板斧</button></li>
            </ul>
          </div>

          {/* Links Column B (colspan 2) Resources */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              實驗室資源 (Lab Assets)
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-semibold">
              <li><button onClick={() => { const el = document.getElementById('cluster-section'); if(el) el.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-[#B7F34A] transition-colors">GEO 搜尋模擬工作台</button></li>
              <li><button onClick={() => { const el = document.getElementById('geo-section'); if(el) el.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-[#B7F34A] transition-colors">Search Intelligence Matrix</button></li>
              <li><button onClick={() => { const el = document.getElementById('diagnosis-section'); if(el) el.scrollIntoView({behavior: 'smooth'}); }} className="hover:text-[#B7F34A] transition-colors">一對一搜尋曝光體質檢測</button></li>
            </ul>
          </div>

          {/* Links Column C (colspan 2) Contact info */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-mono">
              研發基地 (Headquarters)
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed font-semibold">
              台北市信義區信義路五段 7 號 (台北 101 大樓 72 樓 達創技術中心)
            </p>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943] glow-point"></span>
              <span className="text-[10px] font-mono text-stone-400 font-bold">每日限額 3 組預約</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright area */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left text-[11px] text-stone-500 font-medium">
            Copyright © 2026 Dachuang AI Technology. All rights reserved. 達創智能科技 AI 搜尋學會與增長代理。
          </div>
          
          {/* Back to top & sharing badges */}
          <div className="flex items-center space-x-4">
            <span className="text-[10px] text-stone-500 font-mono">SSL Secure Connection Ingress 3000</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#B7F34A]/50 hover:bg-white/10 text-stone-300 hover:text-[#B7F34A] transition-all"
              aria-label="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
