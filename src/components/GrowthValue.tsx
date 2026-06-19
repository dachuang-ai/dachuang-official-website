/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Brain, TrendingUp, CheckCircle, ArrowRightLeft } from 'lucide-react';

export default function GrowthValue() {
  const valueItems = [
    {
      id: 'v1',
      title: '被搜尋找到',
      englishLabel: 'Organic Search Dominate',
      icon: <Search className="w-6 h-6 text-[#10241F]" />,
      description: '在特定客戶群主動尋求商業解決方案的關鍵時刻，精確露出。透過網狀的主題權威佈局與地圖最佳化，覆蓋高含金量的產品意圖字詞。',
      submetric: '核心字詞首頁比例 75%+',
      tag: 'Google SERP'
    },
    {
      id: 'v2',
      title: '被 AI 引用',
      englishLabel: 'AI Generative Citing',
      icon: <Brain className="w-6 h-6 text-[#10241F]" />,
      description: '在前瞻生成式對話（如 ChatGPT、Gemini 與 Perplexity）歸納產業名單或優選方案時，品牌成為指定推薦來源，享有豐沛的 AI 流量紅利。',
      submetric: 'AI Answer Citation Ready',
      tag: 'GEO Optimization'
    },
    {
      id: 'v3',
      title: '讓曝光轉成成交',
      englishLabel: 'Conversion Ignition',
      icon: <TrendingUp className="w-6 h-6 text-[#10241F]" />,
      description: '不搞虛胖的多餘廢文與點擊量，深度聚焦具有高購買決策意圖的商務/實體字彙。每一篇導入的精準流量，都是客戶主動電話與表單詢問！',
      submetric: '平均詢問轉化率 +142.5%',
      tag: 'ROI Direct Growth'
    }
  ];

  return (
    <section className="py-24 bg-[#EEF3ED] border-t border-[#10241F]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#62706A] mb-4 border border-[#10241F]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7AC943]"></span>
            <span>Commercial Impact Statement</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#10241F] mb-4">
            搜尋曝光的最終回報：資產化成長
          </h2>
          
          <p className="text-lg text-[#62706A] font-medium leading-relaxed">
            我們將流量、地圖與 AI 語意標記融合成一套為企業長期累積被動詢問的曝光架構，終結買廣告即停、停廣告即死的燒錢惡性循環。
          </p>
        </div>

        {/* Value Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-[32px] border border-[#10241F]/5 shadow-xs flex flex-col justify-between group hover:shadow-md hover:translate-y-[-6px] transition-all duration-300 relative overflow-hidden"
            >
              {/* Background gradient hint */}
              <div className="absolute right-0 top-0 w-32 h-32 bg-[#B7F34A]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div>
                {/* Header indicators */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF3ED] flex items-center justify-center transition-colors group-hover:bg-[#B7F34A]">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#10241F]/5 text-[#62706A] px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Typography info */}
                <span className="text-[10px] tracking-wide font-mono text-[#62706A] block mb-1 uppercase font-bold">
                  {item.englishLabel}
                </span>
                
                <h3 className="text-xl font-extrabold text-[#10241F] mb-3">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#62706A] font-semibold leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom tag metrics */}
              <div className="pt-4 border-t border-[#10241F]/5 flex items-center justify-between text-xs font-bold">
                <span className="text-[#10241F]">{item.submetric}</span>
                <span className="text-[#7AC943] font-mono font-bold text-[10px] flex items-center gap-1">
                  Ready <div className="w-1.5 h-1.5 rounded-full bg-[#7AC943] glow-point"></div>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
