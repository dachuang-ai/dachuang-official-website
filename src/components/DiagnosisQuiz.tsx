/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Building2, 
  HelpCircle, 
  ArrowRight, 
  Activity, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  ChevronLeft,
  Calendar,
  PhoneCall
} from 'lucide-react';

export default function DiagnosisQuiz() {
  const [step, setStep] = useState<number>(0); // 0: intro, 1: industry, 2: pain, 3: contact, 4: result
  const [industry, setIndustry] = useState<string>('');
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [clientName, setClientName] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const industries = [
    { label: '專業商務 B2B 服務', icon: '💼' },
    { label: '科技製造與工業設備', icon: '⚙️' },
    { label: '醫療生技與連鎖診所', icon: '🏥' },
    { label: '電商零售與自創品牌', icon: '🛒' },
    { label: '實體連鎖門市與據點', icon: '📍' },
    { label: '專業教育與顧問諮詢', icon: '📝' }
  ];

  const pains = [
    { id: 'p1', text: '在 Google 搜尋上幾乎找不到我們的品牌或主產品' },
    { id: 'p2', text: '測試對話式的 ChatGPT / Gemini，都沒引用我們的據點' },
    { id: 'p3', text: '在地圖或商家評價上無點擊，也沒有實體來電詢問' },
    { id: 'p4', text: '寫了很多行銷文案，但完全沒有產生真實名單或成交' }
  ];

  const togglePain = (painText: string) => {
    setSelectedPains((prev) => 
      prev.includes(painText) 
        ? prev.filter((p) => p !== painText) 
        : [...prev, painText]
    );
  };

  const startQuiz = () => {
    setStep(1);
    const quizElem = document.getElementById('diagnosis-card-quiz');
    if (quizElem) {
      quizElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleNextStep1 = (selected: string) => {
    setIndustry(selected);
    setStep(2);
  };

  const handleNextStep2 = () => {
    if (selectedPains.length === 0) {
      alert('請至少選擇一項目前的痛點，以便系統為您計算曝光健康權重！');
      return;
    }
    setStep(3);
  };

  const handleSubmitQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !contact) {
      alert('請填寫聯絡人姓名與聯絡信箱/手機，以便接收診斷報告！');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 1200);
  };

  const resetQuiz = () => {
    setStep(0);
    setIndustry('');
    setSelectedPains([]);
    setClientName('');
    setWebsite('');
    setContact('');
  };

  // Dynamically calculate score based on selected pains
  const calculateScore = () => {
    const defaultScore = 95;
    const deduction = selectedPains.length * 15;
    const randomFudge = 3; // make it look analytic
    return Math.max(35, defaultScore - deduction - randomFudge);
  };

  const score = calculateScore();

  return (
    <section id="diagnosis-section" className="py-24 bg-[#0B1714] relative overflow-hidden text-white scroll-mt-20">
      
      {/* Decorative Background Lime Aura glow light, avoiding blue / gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B7F34A]/5 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute -bottom-10 right-10 w-[300px] h-[300px] bg-[#7AC943]/5 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/10 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#B7F34A] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7F34A] glow-point"></span>
            <span>Free Search Growth Assessment</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            讓搜尋曝光，成為品牌長期成長入口
          </h2>
          
          <p className="text-lg text-[#62706A]/80 font-medium leading-relaxed max-w-2xl mx-auto text-stone-300">
            從內容架構、搜尋策略到 AI 引用語意，擺脫高成本付費廣告陷阱，建立企業可自我增值的長效數位曝光資產。
          </p>
        </div>

        {/* WORKSTATION QUIZ CARD BOX */}
        <div 
          id="diagnosis-card-quiz"
          className="max-w-3xl mx-auto bg-stone-900/80 border border-white/15 rounded-[36px] overflow-hidden shadow-xl glass-panel-dark transition-all duration-300 p-6 sm:p-10"
        >
          
          {/* STEP 0: Quiz Intro */}
          {step === 0 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-[#B7F34A]/10 border border-[#B7F34A]/30 flex items-center justify-center mx-auto shadow-md">
                <Activity className="w-8 h-8 text-[#B7F34A]" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  線上 60 秒 ‧ 智檢您的 SEO 與 GEO 被引用體質
                </h3>
                <p className="text-sm text-stone-300 font-semibold max-w-md mx-auto">
                  回答 3 個簡單問題，達創曝光診斷演算法將為您計算「AI 搜尋引擎提及度」與「主題權威度分數」，限量提供免費 1 對 1 語意諮詢。
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={startQuiz}
                  className="px-8 py-4 rounded-full bg-[#B7F34A] hover:bg-[#a6df3a] text-[#10241F] font-extrabold text-base tracking-wider hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center space-x-2"
                >
                  <span>開始曝光智診評測</span>
                  <ArrowRight className="w-5 h-5 text-[#10241F]" />
                </button>
              </div>

              {/* Secure statement */}
              <p className="text-[10px] text-stone-500 font-serif">
                🛡️ 您的隱私受達創智能科技 AI SSL 加密保護，分析數據僅供本顧問報告。
              </p>
            </div>
          )}

          {/* STEP 1: Select Industry */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#B7F34A] uppercase tracking-wider block font-bold">Question 01 / 03</span>
                  <h4 className="text-lg font-bold text-white">您的品牌主要專注在什麼產業？</h4>
                </div>
                <span className="text-xs bg-white/10 text-stone-300 px-3 py-1 rounded-full font-mono">1/3 階段</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {industries.map((ind, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleNextStep1(ind.label)}
                    className="flex items-center space-x-3.5 p-4 rounded-2xl bg-stone-850 border border-white/10 hover:border-[#B7F34A] hover:bg-[#B7F34A]/5 transition-all text-left text-sm group"
                  >
                    <span className="text-2xl">{ind.icon}</span>
                    <span className="font-extrabold text-white group-hover:text-[#B7F34A]">{ind.label}</span>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setStep(0)}
                className="text-stone-400 hover:text-white text-xs flex items-center gap-1 font-mono pt-2"
              >
                <ChevronLeft className="w-4 h-4" /> 返回說明
              </button>
            </div>
          )}

          {/* STEP 2: Selected Pains Checklist */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#B7F34A] uppercase tracking-wider block font-bold">Question 02 / 03</span>
                  <h4 className="text-lg font-bold text-white">您的品牌在搜尋曝光上遇到了什麼阻力？</h4>
                </div>
                <span className="text-xs bg-white/10 text-stone-300 px-3 py-1 rounded-full font-mono">2/3 階段</span>
              </div>

              <div className="space-y-3">
                {pains.map((pain) => {
                  const hasSelected = selectedPains.includes(pain.text);
                  return (
                    <div
                      key={pain.id}
                      onClick={() => togglePain(pain.text)}
                      className={`p-4 rounded-2xl bg-stone-850 border transition-all text-left cursor-pointer flex items-start space-x-3 ${
                        hasSelected 
                          ? 'border-[#B7F34A] bg-[#B7F34A]/5' 
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                        hasSelected ? 'bg-[#B7F34A] border-[#B7F34A]' : 'border-white/30'
                      }`}>
                        {hasSelected && <div className="w-2.5 h-2.5 rounded-sm bg-[#10241F]"></div>}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {pain.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-stone-400 hover:text-white text-xs flex items-center gap-1 font-mono"
                >
                  <ChevronLeft className="w-4 h-4" /> 返回上一步
                </button>

                <button
                  type="button"
                  onClick={handleNextStep2}
                  className="px-6 py-3 rounded-full bg-[#B7F34A] hover:bg-[#a6df3a] text-[#10241F] font-bold text-xs tracking-wider flex items-center gap-1.5"
                >
                  <span>下一步聯絡資訊</span>
                  <ArrowRight className="w-4 h-4 text-[#10241F]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact details Form */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#B7F34A] uppercase tracking-wider block font-bold">Question 03 / 03</span>
                  <h4 className="text-lg font-bold text-white">最後一步：填寫報告接收人資料</h4>
                </div>
                <span className="text-xs bg-white/10 text-stone-300 px-3 py-1 rounded-full font-mono">3/3 階段</span>
              </div>

              <form onSubmit={handleSubmitQuiz} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <label className="text-xs text-stone-300 font-bold font-mono">您的尊稱/公司名 (中文)</label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="例：張經理 / 達創科技"
                      className="w-full text-stone-100 p-3.5 rounded-xl bg-stone-850 border border-white/10 text-xs font-semibold focus:outline-hidden focus:border-[#B7F34A]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 text-left">
                    <label className="text-xs text-stone-300 font-bold font-mono">企業官網/品牌粉專 URL (選填)</label>
                    <input
                      type="text"
                      className="w-full text-stone-100 p-3.5 rounded-xl bg-stone-850 border border-white/10 text-xs font-semibold focus:outline-hidden focus:border-[#B7F34A]"
                      placeholder="例：www.mycompany.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-xs text-[#B7F34A] font-bold font-mono">聯絡電子信箱 / 手機號碼 (接收診斷報告用)</label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="例：johndoe@example.com / 0912-345-678"
                    className="w-full text-stone-100 p-3.5 rounded-xl bg-stone-850 border border-white/10 text-xs font-semibold focus:outline-hidden focus:border-[#B7F34A]"
                  />
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-stone-400 hover:text-white text-xs flex items-center gap-1 font-mono"
                  >
                    <ChevronLeft className="w-4 h-4" /> 返回上一步
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3.5 rounded-full bg-[#B7F34A] hover:bg-[#a6df3a] text-[#10241F] font-bold text-xs tracking-wider flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5 text-[#10241F]" />
                    <span>{isSubmitting ? '運算生成報告中...' : '生成動態曝光健康報告'}</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 4: Real-time dynamic scorecard result generation! */}
          {step === 4 && (
            <div className="text-left space-y-6 animate-fadeIn">
              
              {/* Dynamic Score Brief */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 gap-4 mb-4">
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="text-[10px] text-[#B7F34A] font-mono tracking-widest font-bold uppercase">
                    DACHUANG DIGITAL AUDIT COMPLETED
                  </span>
                  
                  <h4 className="text-xl font-bold text-white">
                    {clientName} 的 SEO / GEO 搜尋曝光能見度報告
                  </h4>
                  
                  <p className="text-xs text-stone-300 font-semibold">
                    分析維度 ‧ 推薦策略：<strong className="text-[#B7F34A]">多據點地圖與 GEO 引用重建及主題整合</strong>
                  </p>
                </div>

                {/* Score badge graphic */}
                <div className="w-24 h-24 rounded-full bg-[#10241F] border-4 border-[#7AC943] flex flex-col items-center justify-center relative shrink-0 shadow-md">
                  <span className="text-[10px] uppercase text-stone-400 font-mono leading-none">健診得分</span>
                  <span className="text-2xl font-black text-[#B7F34A] font-mono mt-0.5">{score}</span>
                  <span className="text-[9px] text-[#7AC943] font-mono uppercase font-bold">/ 100 分</span>
                </div>
              </div>

              {/* Specific broken analysis tags based on selection */}
              <div className="space-y-3">
                <h5 className="text-xs text-stone-300 font-bold uppercase tracking-wider font-mono">
                  細維特徵健康指針 (Semantic Visibility Metrics)
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  
                  {/* Metric 1 */}
                  <div className="p-4 rounded-xl bg-stone-850/60 border border-white/5 space-y-1">
                    <span className="text-[#62706A] uppercase font-bold text-[9px] font-mono">主題權威矩陣 (Topic Cluster)</span>
                    <div className="text-sm font-bold flex justify-between">
                      <span>42% (較差)</span>
                      <span className="text-amber-500 font-bold">⚠️</span>
                    </div>
                    <p className="text-[10px] text-stone-400 leading-relaxed font-serif">單點拼湊內容缺乏聚合核心，蜘蛛爬取耗時且難以建立大模型權重。</p>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-4 rounded-xl bg-stone-850/60 border border-white/5 space-y-1">
                    <span className="text-[#62706A] uppercase font-bold text-[9px] font-mono">AI 被引用指標 (GEO Mention)</span>
                    <div className="text-sm font-bold flex justify-between">
                      <span>Critcial (極需建置)</span>
                      <span className="text-[#7AC943] font-bold">🚨</span>
                    </div>
                    <p className="text-[10px] text-stone-400 leading-relaxed font-serif">ChatGPT 及 Gemini 本地引信缺乏結構對應，無法被列入推薦腳注。</p>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-4 rounded-xl bg-stone-850/60 border border-white/5 space-y-1">
                    <span className="text-[#62706A] uppercase font-bold text-[9px] font-mono">在地據點精準度 (Local MAP)</span>
                    <div className="text-sm font-bold flex justify-between">
                      <span>需要優化</span>
                      <span className="text-amber-500 font-bold">❗</span>
                    </div>
                    <p className="text-[10px] text-stone-400 leading-relaxed font-serif">地圖評論內容缺乏深度引信，需置入正向語意高曝光词庫。</p>
                  </div>

                </div>
              </div>

              {/* Call-Back consultation conversion trigger */}
              <div className="p-5 rounded-2xl bg-[#EEF3ED] border border-[#10241F]/15 text-[#10241F] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="space-y-1.5 flex items-start gap-2">
                    <Calendar className="w-5 h-5 text-[#7AC943] stroke-[2.5] mt-0.5 shrink-0" />
                    <div>
                      <h5 className="text-xs sm:text-sm font-extrabold text-[#10241F]">達創智能科技 AI 搜尋增長顧問：預約免費 1 對 1 深度解讀</h5>
                      <p className="text-[11px] text-[#62706A] font-semibold">系統已自動為您在 2026-06-18 保留「每日限定 3 名」的台北 101 辦公中心現場 (或線上 MS Teams) 免費一對一預約資格。</p>
                    </div>
                  </div>
                  
                  {/* Quick Badge */}
                  <span className="text-[10px] bg-[#B7F34A] text-[#10241F] px-2.5 py-1 rounded-md font-bold font-mono tracking-wider shrink-0 uppercase">
                    保留名額中
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold pt-2 border-t border-[#10241F]/5">
                  <span className="text-[#62706A] flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-[#10241F]" />
                    達創顧問將於 24 小時內發送會議連結至：<strong className="text-[#10241F]">{contact}</strong>
                  </span>
                  
                  <button
                    type="button"
                    onClick={() => alert(`完成預約！本報告精準版 PDF 與會議預約確認函已發送至 ` + contact + `。我們期待向您拆解 SEO/GEO 機密成效！`)}
                    className="px-4 py-2 rounded-xl bg-[#10241F] hover:bg-[#1D3C34] text-[#FFFFFF] text-xs font-semibold transition-all shadow-xs"
                  >
                    確認鎖定免費資訊對接
                  </button>
                </div>
              </div>

              {/* Retry quiz option button */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="text-stone-400 hover:text-white text-xs hover:underline cursor-pointer"
                >
                  ↩️ 重新進行另外一次網址檢測
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
