import { 
  SolutionItem, 
  SystemModuleItem, 
  AISquadMemberItem, 
  ProjectItem, 
  TimelineNode 
} from './types';

// Let's create high-quality, professional data to power Dachuang AI tech platform

export const SOLUTION_CAROUSEL_DATA: SolutionItem[] = [
  {
    id: 1,
    title: 'AI 顧問導入',
    subtitle: '客製化企業 AI 工作流程與落地培訓',
    desc: '協助企業核心團隊釐清日常流程痛點，精準規劃 AI 工具與工作流導入地圖。透過真實落地培訓與指引，讓 AI 轉化為真實的營運效能與產值，而非僅是討論噱頭。',
    details: ['流程瓶頸深度診斷與分析', 'AI Agent 客製搭建與對接', '全員 AI 操作手冊與落地培訓', '長期營運指標與優化方案']
  },
  {
    id: 2,
    title: '自動化工作流',
    subtitle: '無縫串接多平台消滅重複性行政工時',
    desc: '串聯多平台 API（如 Ragic、LINE、試算表、雲端硬碟），讓客服諮詢、名單分流、異動提醒、檔案整理等高頻繁重複流程 24 小時全自動無感運作，實現極致自動化。',
    details: ['Make / Zapier 自動化流規劃', '跨軟體雲端 API 高效對接', '文件自動結構化解析與存檔', '即時營運警報與通知模組']
  },
  {
    id: 3,
    title: '企業系統建置',
    subtitle: '搭建大容量且穩定的底層數據化骨幹',
    desc: '從無到有，或串接重組舊有流程。客製搭建敏捷高效的 ERP、進銷存、CRM、合約核簽與專案管理系統，打破部門間的「資訊孤島」，讓數據流動，輔佐決策有據。',
    details: ['Ragic 客製系統整合設計', '進銷存自動化調撥警示', 'VIP 會員卡與點數追蹤模組', '多層級安全權限管理規劃']
  },
  {
    id: 4,
    title: '網站與搜尋曝光',
    subtitle: '極致美學網頁與 SEO / GEO 全程佈局',
    desc: '將奢華冷感數位美學與 SEO 自然排序、GEO 區域地圖曝光相互結合。在極優雅的形象加載下，打通 Google 主動意向客群，讓潛在客戶在尋找解決方案時，搶先看見你。',
    details: ['品牌極簡響應式官網開發', 'RWD 玻璃擬態一頁式銷售頁', '全站在地化語意 SEO 佈局', 'GEO 商家版圖覆蓋與曝光優化']
  },
  {
    id: 5,
    title: 'AI 戰隊',
    subtitle: '部署高度協作的虛擬智能助手群',
    desc: '針對特定崗位（如客服、文案行銷、合約比對、簡報美化）客製訓練高度匹配企業知識庫的 AI 助手。全天候待命、標準化執行，成為企業最穩定的智能勞動力。',
    details: ['匹配專屬知識庫的高情商客服', '自動行銷腳本與文案生成器', '精準業務開發名單自動分類', '數據清洗與自動化周報撰寫']
  }
];

export const SYSTEM_MODULES_DATA: SystemModuleItem[] = [
  {
    id: 'ai-module',
    title: 'AI 顧問導入',
    subTitle: 'AI 顧問、工具導入、AI Agent 與自動工作流',
    desc: '深度拆解企業既有工作流，對接頂尖大語言模型 API 與中繼引擎，客製專屬核心 AI 解決方案，讓多步驟任務一鍵自動完結。',
    features: ['專屬企業知識庫對接', '自動化 AI 工作流機制', '語意分類與流程觸發器', 'AI 顧問落地導入培訓']
  },
  {
    id: 'system-module',
    title: '企業系統建置',
    subTitle: 'Ragic 快速擴充、CRM、客製進銷存與專案系統',
    desc: '透過敏捷好維護的 Ragic 底層與 API，打造百分百貼合經營邏輯的進銷存、合約、客戶生命週期、考勤與專案指派系統。',
    features: ['Ragic 資料夾架構美化', '自動化出貨與合約警示', '進銷存零時差庫存調撥', 'CRM 全自動名單跟進']
  },
  {
    id: 'web-module',
    title: '品牌官網與平台',
    subTitle: '客製品牌官網、Landing Page 與 LMS 線上學院',
    desc: '融匯高端設計品味、絲滑特效與高響應體驗，提供 WordPress 架站、獨家客製一頁面、以及具有嚴密安全機制防錄影的 LMS 數位學院平台。',
    features: ['高質感沉浸式前端微動效', 'LMS 線上課程防拷安全播放', '整合多金流刷卡收付系統', '高轉換一頁式行銷網頁']
  },
  {
    id: 'search-module',
    title: 'SEO / GEO 搜尋曝光',
    subTitle: '品牌 SEO、GEO 區域地圖與搜尋版位曝光',
    desc: '拒絕盲目投廣。透過精確的長尾語意詞庫與在地化地圖優化，覆蓋高意向消費者必看的搜尋結果版面，實現持續的主動進案。',
    features: ['SEO 全站結構化語意診斷', 'Google Map 商家大量體曝光', '競爭對手關鍵字流量壓制', 'GEO 在地地圖群聚攻勢']
  },
  {
    id: 'marketing-module',
    title: '整合行銷與 LINE 自動化',
    subTitle: '數位整合行銷、主流廣告投放與 LINE 行銷模組',
    desc: '從廣告點擊到 LINE 社群留存，一條龍規劃品牌引流與轉換工作流。串聯多管道像素，科學化調整投放預算，發揮更穩定的投資回報。',
    features: ['Google & FB 精準受眾再行銷', 'LINE 官方帳號 API 自動化卡片', '行銷像素與數據追蹤漏斗', '全通路廣告數據即時整合']
  },
  {
    id: 'ads-operation-module',
    title: '廣告代操',
    subTitle: 'Google Ads、Meta 廣告代操與成效追蹤優化',
    desc: '不只是投放廣告，而是讓廣告、網站、SEO / GEO 與轉換追蹤形成同一條成長路徑。從帳戶健檢、素材方向、受眾設定到數據回收，協助企業把預算花在更接近成交的位置。',
    features: ['Google Ads 廣告帳戶健檢', 'Meta / FB 廣告代操管理', '轉換追蹤與再行銷設定', '廣告成效週期優化建議']
  },
  {
    id: 'verification-module',
    title: 'Google Ads / G2 驗證',
    subTitle: 'Google Ads、Google 商家與 G2 驗證協助',
    desc: '協助企業處理 Google Ads 驗證、Google 商家資料驗證與 G2 品牌資料建置，讓品牌具備更完整的可信度訊號，也為搜尋曝光與廣告投放建立穩定基礎。',
    features: ['Google Ads 驗證流程協助', 'Google 商家資料驗證輔導', 'G2 品牌資料建置規劃', '商家可信度與曝光基礎優化']
  },
  {
    id: 'custom-website-module',
    title: '客製網站',
    subTitle: '客製品牌官網、形象網站與高轉換前台設計',
    desc: '依照品牌定位、服務內容與搜尋曝光目標，客製打造具備視覺記憶點、SEO 結構與轉換引導的品牌官網。讓網站不只是門面，而是能被搜尋、能被理解、能累積信任的數位資產。',
    features: ['品牌官網客製設計', 'SEO / GEO 架構預埋', 'RWD 響應式前台開發', 'CTA 轉換路徑規劃']
  },
  {
    id: 'content-module',
    title: 'AI 數位人與短影音',
    subTitle: 'AI 數位虛擬人、短影音腳本與跨平台內容矩陣',
    desc: '克服真人出鏡痛點。利用 AI 擬真數位分身製作教育訓練、品牌宣傳與產品提案影片，快速生成腳本、聲音與視覺素材，讓內容產能成倍提升。',
    features: ['擬真虛擬主播克隆輸出', '多語系口音自動編譯與生成', 'AI 精準分鏡影音大綱規劃', '跨平台高產社群影片調研']
  }
];

export const AI_SQUAD_DATA: AISquadMemberItem[] = [
  {
    id: 'squad-admin',
    role: 'AI 行政助理',
    name: 'XPS-1 Alpha',
    tag: 'ADMINISTRATIVE ASSISTANT',
    desc: '自動化重組每日會議記錄，產出具備明確待辦事項、指派人與期程的摘要。還能主動核對日常報帳單據與合約要項。',
    capabilities: ['會議語意結構化分析', '待辦自動排程對接 Trello', '日常單據合規基礎檢驗', '自定義團隊日程管轄控制']
  },
  {
    id: 'squad-support',
    role: 'AI 客服助理',
    name: 'XPS-2 Beta',
    tag: 'CUSTOMER SUCCESS AGENT',
    desc: '24 小時駐守 LINE、官網及 FB 訊息，自動辨識客戶意圖，從企業知識庫中秒級抓取答案。遇到極特例情況可平滑指派真人跟進。',
    capabilities: ['全通路一體化整合監聽', '高情商擬人語氣對談適配', '歷史客群檔案庫歸納關聯', '高熱度 FAQ 自動更新優化']
  },
  {
    id: 'squad-content',
    role: 'AI 內容助理',
    name: 'XPS-3 Gamma',
    tag: 'CONTENT MATRIX GENERATOR',
    desc: '深諳時事熱點與行銷調性，能在一秒內為您寫出 5 個高點閱的 Reels 短影片腳本、SEO 部落格骨幹、或精美提案簡報結構。',
    capabilities: ['社群短影音分鏡設計', '多管道風格（幽默/專業）適應', '文案自動置入品牌 SEO 詞彙', '簡報骨架與提案投片大綱']
  },
  {
    id: 'squad-sales',
    role: 'AI 業務助理',
    name: 'XPS-4 Delta',
    tag: 'INTELLIGENT SALES PIPELINE',
    desc: '主動鎖定目標受眾，發送高度客製化的商業開發信，並根據對方的回信意圖、進行跟進分類、或一鍵代定諮詢會議。',
    capabilities: ['意圖深度判定與自動回信', '郵件自動追蹤與防判垃圾信', 'CRM 新進商機自動建立', '個人約會日誌流暢對接']
  },
  {
    id: 'squad-pm',
    role: 'AI 專案助理',
    name: 'XPS-5 Epsilon',
    tag: 'PROJECT MONITOR SYSTEM',
    desc: '主動排查專案甘特圖與卡片，當某個程序發生底層瓶頸或期程落後，會立即自動通知相關部門代辦，並回傳最佳替代資源。',
    capabilities: ['專案里程碑落後預先警示', '團隊各員能值自動分析調配', '跨部門待辦整合與同步', '全方位專案狀態週報自動組建']
  },
  {
    id: 'squad-data',
    role: 'AI 資料整理助理',
    name: 'XPS-6 Zeta',
    tag: 'DATA REFINERY ENGINE',
    desc: '定期連接雲端資料夾，自如清洗試算表中的重複、髒亂數據，將零散客資、銷售數目全自動繪製成可視化週報分析。',
    capabilities: ['多源數據清洗與對齊合併', '自動偵測異常與遺漏值填補', '商業交叉趨勢直覺化研判', '自動按時發布視覺化報表']
  }
];

export const TIMELINE_BUILD_DATA: TimelineNode[] = [
  {
    id: '01',
    step: 'STEP 01',
    title: '探索需求，深挖本質',
    desc: '與企業決策層及一線團隊傾聽對談。盤點手邊散落的工作管道，找出消耗最高行政工時、或高客訴、流失商機的核心盲點。',
    completionRate: '15%'
  },
  {
    id: '02',
    step: 'STEP 02',
    title: '工作流地圖拆解',
    desc: '不盲目引入昂貴大系統。將企業真實運行軌跡白板化、地圖化，明確劃分「可自動化」與「須高度人腦決策」的分隔線。',
    completionRate: '35%'
  },
  {
    id: '03',
    step: 'STEP 03',
    title: '客製智能化解決方案',
    desc: '為您量身配置 AI Agent 助理、Ragic 資料庫底層、精美網頁及意向客戶曝光方式，提供一份具備 ROI 與可行性的時程規劃。',
    completionRate: '50%'
  },
  {
    id: '04',
    step: 'STEP 04',
    title: '智能模組與系統建置',
    desc: '達創工程小組展開高頻率、小步快跑的敏捷建置。串接 LLM API、整合系統，並與企業管理核心保持緊密透明溝通。',
    completionRate: '75%'
  },
  {
    id: '05',
    step: 'STEP 05',
    title: '多維測試與順利上線',
    desc: '進行全面沙盒阻抗與例外测试。確保資料吞吐穩固、AI Agent 知識庫回復得體無偏誤後，高質感轉移至線上熱環境部署。',
    completionRate: '90%'
  },
  {
    id: '06',
    step: 'STEP 06',
    title: '長期調校與工作流升級',
    desc: '系統上線後的首月密切觀測流動數據。依據實際回饋優化 AI 提示詞架構、補充知識庫，讓整體智能系統隨企業成長進化增強。',
    completionRate: '100%'
  }
];

export const PORTFOLIO_PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'demo-enterprise-system',
    title: '企業智能管理系統 Demo',
    category: '企業系統建置',
    summary: '以企業後台管理為核心，展示客戶資料、流程控管、狀態追蹤與營運資料整合的系統雛形。適合用於 CRM、進銷存、專案管理、內部審核與多部門協作場景，讓企業從零散表格轉向可視化管理。',
    tools: ['Vite', 'React', 'Tailwind CSS', 'Dashboard UI', 'Ragic Concept'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'demo-lms-platform',
    title: '智慧學習平台 Demo',
    category: 'LMS 線上課程',
    summary: '展示線上課程平台、教師管理、課程內容、會員學習與數位教學入口的規劃方向。適合教育品牌、講師平台、企業內訓與知識付費型服務，用於建立可營運的線上學習系統。',
    tools: ['Vite', 'React', 'Tutor LMS Concept', 'Course UI', 'Member System'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'demo-ai-workflow',
    title: 'AI 智能工作流 Demo',
    category: 'AI 整合與自動化',
    summary: '以 AI 流程引擎為核心，展示企業如何將重複性行政、客服、資料整理、通知與任務分派整合成自動化工作流。適合想導入 AI Agent、自動提醒、跨平台串接與流程降耗的企業。',
    tools: ['AI Workflow', 'Automation Concept', 'Make / Zapier Logic', 'React', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'demo-ai-media',
    title: 'AI 數位人與短影音 Demo',
    category: 'AI 內容與影音',
    summary: '展示 AI 數位人、照片說話、短影音腳本、產品介紹與品牌內容生成的應用方向。適合需要大量內容產出、品牌曝光、教育訓練影片、社群短影音與無真人出鏡方案的客戶。',
    tools: ['AI Avatar', 'Short Video', 'Script Planning', 'Content Matrix', 'Brand Media'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
  },
  {
   id: 'demo-seo-geo',
    title: 'SEO / GEO 搜尋曝光 Demo',
    category: 'SEO / GEO',
    summary: '展示品牌如何透過 SEO 結構、GEO 地圖曝光、Google 商家優化與 AI 搜尋語意佈局，提高被搜尋、被看見、被信任的機會。適合需要自然搜尋流量、在地曝光與品牌搜尋資產的企業。',
    tools: ['SEO Strategy', 'GEO Optimization', 'Google Business Profile', 'Semantic Content', 'Search Growth'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'demo-official-website',
    title: '達創智能科技 AI 官方網站',
    category: '品牌官網與平台',
    summary: '達創官方品牌官網，整合 Galaxy 科技視覺、品牌 Logo、服務模組、作品集入口、AI 顧問定位與需求表單。此案同時作為達創對外展示品牌風格、服務能力與客製網站設計能力的代表作品。',
    tools: ['Vite', 'React', 'Tailwind CSS', 'Galaxy Background', 'Brand Website'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
  }
];