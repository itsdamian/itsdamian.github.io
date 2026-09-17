// Language translations
const translations = {
    zh: {
        // Navigation
        'nav.about': '關於我',
        'nav.experience': '工作經驗',
        'nav.skills': '技能專長',
        'nav.projects': '專案作品',
        'nav.education': '教育背景',

        // Hero Section
        'hero.greeting': '你好，我是',
        'hero.title': 'Senior Software Engineer',
        'hero.description': 'WMS 端到端交付 • RAG/AI 應用 • 倉儲自動化 • 基礎設施維運',
        'hero.description2': '現任 JTX Corp. 資深軟體工程師，端到端擁有核心倉儲管理系統 (WMS)，已交付 3 個企業客戶。同時打造 RAG 知識檢索研究系統與 AI 客服助手，正朝 Forward Deployed Engineer 方向發展。',

        // About Section
        'about.title': '關於我',
        'about.subtitle': '專業背景',
        'about.description': '現任 <strong class="tech-term">JTX Corp.</strong> 資深軟體工程師，端到端擁有公司核心倉儲管理系統（<strong class="tech-term">WMS</strong>）的開發與維運，技術涵蓋 <strong class="tech-term">PHP (Laravel)</strong>、<strong class="tech-term">Vue 3</strong>、<strong class="tech-term">MySQL</strong>/<strong class="tech-term">Oracle</strong>、<strong class="tech-term">Redis</strong> 全端開發，並延伸到 DevOps 部署、硬體整合與資安掃描。',
        'about.description2': '近期將重心擴展到 AI/LLM 應用領域：自行手刻（不依賴 LangChain 等框架）一套 <strong class="tech-term">RAG</strong> 知識檢索研究系統，並另外設計開發整合進 WMS 的<strong class="tech-term">AI 對話式客服助手</strong>。',
        'about.description3': '正在往 <strong class="tech-term">Forward Deployed Engineer（FDE）</strong>方向發展，希望將既有的企業級系統落地經驗與 AI 應用整合能力結合，協助企業客戶把 AI 原型真正落地成可用的生產系統。',
        'about.location': '台北市板橋區',
        'about.languages': '語言能力',
        'about.chinese': '中文',
        'about.native': '母語',
        'about.english': '英文',
        'about.fluent': '日常對話程度',

        // Experience Section
        'experience.title': '工作經驗',
        'experience.spotlight.badge': '現在',
        'experience.timeline.heading': '職涯時間軸',
        'experience.timeline.hint': '點選任一階段查看詳細內容',
        'experience.jtx.title': 'Senior Software Engineer',
        'experience.jtx.period': 'Aug 2025 - Present',
        'experience.jtx.achievement1': '端到端擁有公司核心倉儲管理系統 (<strong class="tech-term">WMS</strong>)：<strong class="tech-term">PHP (Laravel)</strong> + <strong class="tech-term">Vue 3</strong> + <strong class="tech-term">MySQL</strong>/<strong class="tech-term">Oracle</strong> + <strong class="tech-term">Redis</strong>，並負責 <strong class="tech-term">MSSQL</strong> ERP 雙向回寫整合，雲端與地端混合部署 (<strong class="tech-term">Docker</strong>)',
        'experience.jtx.achievement2': '已交付 3 個客戶；上線後錯誤率低於 5%，人工作業時間減少約 30%',
        'experience.jtx.achievement3': '開發 <strong class="tech-term">Python</strong> 標籤列印管理平台 (<strong class="tech-term">LMS</strong>，<strong class="tech-term">FastAPI</strong> + <strong class="tech-term">Vue</strong>)，依客戶回饋標籤生成時間縮短約 70%',
        'experience.jtx.achievement4': '自建 <strong class="tech-term">RAG</strong> 知識檢索研究與評測系統（<strong class="tech-term">BGE-large-zh-v1.5</strong> embedding + <strong class="tech-term">ChromaDB</strong> + 專家圖卡重排），並與 <strong class="tech-term">GraphRAG</strong>/<strong class="tech-term">LightRAG</strong>/<strong class="tech-term">Self-RAG</strong> 進行系統性 benchmark 比較；另外設計開發整合進 WMS 的 AI 對話式客服助手（模組化架構，串接本機 <strong class="tech-term">Ollama</strong> LLM 並管理多輪對話 session）',
        'experience.jtx.achievement5': '建置 <strong class="tech-term">Kotlin</strong> Android App (<strong class="tech-term">WebView</strong> + 雙向 <strong class="tech-term">JNI</strong> 橋接 <strong class="tech-term">Rust</strong>)，本地端以 <strong class="tech-term">actix-web</strong> 起 HTTP 服務取代集中式列印佇列，達成 PDA 裝置藍芽標籤機的低延遲離線列印架構，並完成簽章打包供客戶安裝',
        'experience.jtx.achievement6': '整合硬體裝置（<strong class="tech-term">條碼/QR 辨識</strong>、<strong class="tech-term">ZPL</strong> 標籤列印，並以 <strong class="tech-term">Rust</strong> 常駐程式處理列印佇列）與 <strong class="tech-term">ERP</strong> 資料流串接；建立可擴充多物流商架構，整合<strong class="tech-term">嘉里大榮 (Kerry TJ)</strong> 物流 API',
        'experience.jtx.achievement7': '從零主導設計開發倉儲控制系統 (<strong class="tech-term">WCS</strong>，<strong class="tech-term">Python</strong>/<strong class="tech-term">FastAPI</strong>/<strong class="tech-term">Celery</strong>)，串接 <strong class="tech-term">Siemens S7-1500</strong> 與 <strong class="tech-term">Mitsubishi</strong> PLC 雙廠牌協議，支援堆垛機/輸送機/穿梭車任務派工與狀態機管理，並建立完整單元/整合/壓力測試',
        'experience.jtx.achievement8': '建立結構化資安弱點掃描腳本，整合 <strong class="tech-term">composer audit</strong>、<strong class="tech-term">npm audit</strong>、<strong class="tech-term">gitleaks</strong>、<strong class="tech-term">semgrep</strong>、<strong class="tech-term">enlightn</strong>',
        'experience.jtx.achievement9': '獨立負責訪談上市櫃公司與政府機關以蒐集系統需求，提供上線支援 (go-live support) 並執行現場使用者訓練；同時參與公司官網 (Vue 3 + Vite 多語系) 前端開發',
        'experience.current.title': 'Full Stack Engineer',
        'experience.current.period': 'May 2025 - Jul 2025',
        'experience.current.achievement1': '開發整合<strong class="tech-term">條碼掃描器</strong>的出貨驗證系統，採模組化架構設計，出貨錯誤率降低 93%',
        'experience.current.achievement2': '使用 <strong class="tech-term">Docker</strong> 及 <strong class="tech-term">Git</strong> 建立開發流程，支援內部工具與流程自動化',
        'experience.current.achievement3': '與營運團隊緊密協作，理解痛點並優化工作流程',
        'experience.astral.title': 'Senior Backend Developer',
        'experience.astral.period': 'Feb 2024 - Apr 2025 (Senior：Feb 2025)',
        'experience.astral.period.short': 'Feb 2024 - Apr 2025',
        'experience.astral.achievement1': '開發並維護 20+ 個 <strong class="tech-term">Magento 2</strong> 模組，以可重用、模組化實作提升平台可維護性',
        'experience.astral.achievement2': '建立可重用的認證與社交登入解決方案，降低對第三方實作的依賴',
        'experience.astral.achievement3': '整合金流、訊息系統與商業 <strong class="tech-term">API</strong>，並客製化結帳體驗與後端流程',
        'experience.astral.achievement4': '導入 <strong class="tech-term">Docker</strong> 開發環境並以 <strong class="tech-term">GitHub Actions</strong> 支援 CI/CD 流程',
        'experience.astral.achievement5': '運用 <strong class="tech-term">Redis</strong> 改善應用效能與快取策略，提升發布一致性與部署品質',
        'experience.educator.title': 'English & Math Educator',
        'experience.educator.stage': '職涯轉換',
        'experience.educator.company': 'Creativity Kindergarten & Creativity Cram School (Kaohsiung)',
        'experience.educator.period': 'Apr 2020 - Nov 2023',
        'experience.educator.achievement1': '為 4 至 12 歲學生設計並教授模組化英語與數學課程，依個別學生程度調整教材與進度',
        'experience.educator.achievement2': '期間持續透過個人專案與線上課程自學新技術，為 2024 年重返軟體工程領域做準備',
        'experience.twhg.title': 'Web Developer',
        'experience.twhg.period': 'Aug 2018 - Jun 2019',
        'experience.twhg.achievement1': '將舊有系統遷移至 <strong class="tech-term">Laravel</strong> 框架，提升可維護性和效能',
        'experience.twhg.achievement2': '使用 <strong class="tech-term">MySQL</strong> 重建房地產管理平台，優化查詢效率和搜尋排名邏輯',
        'experience.twhg.achievement3': '建立並部署 <strong class="tech-term">LineBot</strong>，提供自動化用戶互動服務',
        'experience.adbert.title': 'Backend Engineer',
        'experience.adbert.period': 'Sep 2017 - Aug 2018',
        'experience.adbert.achievement1': '使用 <strong class="tech-term">Laravel</strong> 和 <strong class="tech-term">RESTful API</strong> 設計開發電信廣告平台後端',
        'experience.adbert.achievement2': '運用 <strong class="tech-term">Redis</strong> 和 <strong class="tech-term">MongoDB</strong> 處理即時事件資料和用戶分群',
        'experience.adbert.achievement3': '與分析師協作，從原始後端日誌中生成用戶行為洞察',

        // Skills Section
        'skills.title': '技能專長',
        'skills.programming': '程式語言',
        'skills.backend': '後端框架與架構',
        'skills.testing': '測試與資安',
        'skills.sast': 'SAST 掃描 (composer/npm audit、gitleaks、semgrep、enlightn)',
        'skills.tools': '基礎設施與 DevOps',
        'skills.ai': 'AI / LLM',
        'skills.tag.async': '非同步處理',
        'skills.tag.concurrency': '併發控制',
        'skills.tag.distributed': '分散式系統',
        'skills.tag.llm': 'LLM 整合',
        'skills.tag.ragas': 'RAGAS 風格評估',
        'skills.tag.barcode': '條碼/QR Code 辨識',
        'skills.tag.zpl': 'ZPL 標籤列印',
        'skills.tag.erp': 'ERP 整合',
        'skills.hardware': '硬體與系統整合',
        'skills.web': '前端技術',
        'skills.certification': '認證',
        'skills.cert1.title': 'AWS Academy Graduate - Cloud Architecting',
        'skills.cert1.issuer': 'Amazon Web Services',
        'skills.cert2.title': 'Prompt Design in Vertex AI - Introductory Badge',
        'skills.cert2.issuer': 'Google Cloud Skills Boost',
        'skills.cert3.title': 'Machine Learning Operations (MLOps) in Generative AI',
        'skills.cert3.issuer': 'Google Cloud Skills Boost',
        'skills.note.rag': 'SOP Assistant，已上線 WMS',
        'skills.note.sbert': 'BGE-large-zh-v1.5 embedding',
        'skills.note.chromadb': 'RAG 向量檢索資料庫',
        'skills.note.redisqueue': 'WMS 非同步任務處理',
        'skills.note.fastapi': 'LMS 標籤列印平台',
        'skills.note.celery': 'WCS 任務派工與排程',
        'skills.note.kotlin': 'PDA 裝置 Android App',
        'skills.note.docker': 'WMS 全服務容器化部署',
        'skills.note.githubactions': 'AstralWeb Taiwan CI/CD 流程',
        'skills.note.mqtt': 'WMS 感測器資料串接',
        'skills.note.jni': 'Android App 原生橋接',

        // Projects Section
        'projects.title': '專案作品',
        'projects.featured.badge': '正式營運中',
        'projects.research.badge': '研究專案',
        'projects.list.heading': '延伸與其他實作',
        'projects.wms.stat1': '客戶',
        'projects.wms.stat3': '錯誤率',
        'projects.wms.stat4': '人工時間',
        'projects.wms.stat5': '標籤生成',
        'projects.rag.stat1': '向量維度',
        'projects.rag.stat2': '基準比較',
        'projects.rag.stat3': '自建評估機制',
        'projects.rag.stat4': '框架依賴',
        'projects.assistant.title': 'WMS AI 客服助手',
        'projects.assistant.description': '設計並開發整合進 WMS 的模組化 AI 客服助手，透過 session 管理多輪對話，串接本機 Ollama LLM 回答入庫、出庫、盤點、標籤列印、ERP 整合等操作問題，並支援功能模組開關與多租戶隔離，已上線於正式營運的 WMS 系統。',
        'projects.rag.title': 'RAG 知識檢索研究系統 (SOP-LLM)',
        'projects.rag.description': '自建（無框架依賴）RAG 研究系統：sentence-transformers 載入 BGE-large-zh-v1.5（1024 維）embedding，透過 ChromaDB 做向量搜尋，並以圖節點 embedding 做專家重新排序，自建兩套 RAGAS 風格評估機制，並與 GraphRAG、LightRAG、Self-RAG 進行系統性 benchmark 比較。',
        'projects.wcs.title': '倉儲控制系統 (WCS)',
        'projects.wcs.description': '從零主導設計開發的倉儲控制系統，銜接上層 WMS 與底層 PLC。支援 Siemens S7-1500 與 Mitsubishi SLMP 雙廠牌協議，設計任務狀態機、Job/Task 分段派工模型與心跳監控，約 8,700 行程式碼並建立完整單元/整合/壓力測試。',
        'projects.lms.title': '標籤列印管理平台 (LMS)',
        'projects.lms.description': '以 FastAPI + Vue 3 重建的標籤列印管理系統，內建 ZPL 產生引擎與 Konva 畫布式範本編輯器，支援一維條碼、QR Code 與中日文字元點陣化，並整合 Labelary API 預覽（失敗自動降級本機解譯）。依客戶回饋，標籤生成時間縮短約 70%。',
        'projects.pipeline.title': 'LLM 文件處理 Pipeline (OCR → 摘要 → Embedding → 向量資料庫)',
        'projects.pipeline.description': '通用文件智能處理流程：OCR 文字擷取 → LLM 摘要 → 文字分塊（chunking）→ embedding 向量化 → 向量資料庫儲存，並設計 chunk 層級的內容雜湊去重機制，避免重複資料佔用檢索空間。',
        'projects.wms.title': '倉儲管理系統 (WMS) — 端到端產品擁有',
        'projects.wms.description': '獨自負責架構、開發、部署、維運的完整生命週期。Docker 容器化（Laravel + Vue 3 + Nginx + Redis + MySQL/Oracle + Queue Worker），並負責 MSSQL ERP 雙向回寫整合；整合硬體裝置（ZPL 標籤列印、條碼/QR 辨識），並與自建的 WCS 倉儲控制系統對接。已交付 3 個客戶，上線後錯誤率低於 5%，人工作業時間減少約 30%，LMS 標籤列印平台依客戶回饋生成時間縮短約 70%。',
        'projects.scan.title': '資安掃描自動化 (security-scan.sh)',
        'projects.scan.description': '為 PHP/Laravel 技術堆疊建立的自動化弱點掃描腳本，整合 composer audit、npm audit、gitleaks、semgrep、enlightn 等開源 SAST 工具，並理解其與商業工具（Fortify、Checkmarx）在 taint analysis 能力上的差異。',
        'projects.android.title': 'Kotlin Android App (WebView + Rust JNI)',
        'projects.android.description': '提供給客戶安裝於 PDA 裝置的行動端應用，以 Kotlin 開發、WebView 承載內容，並透過雙向 JNI 橋接 Rust：本地端以 actix-web 起 HTTP 服務取代集中式列印佇列，達成低延遲離線藍芽標籤列印，並具備當機自動重啟等生產級容錯設計。',
        'projects.agents.title': 'Agent Factory Platform (多 Agent 協作開發平台)',
        'projects.agents.description': '個人專案：將 PM/SWE/QA/DevOps 多個 AI agent 協作流程視覺化的開發自動化平台，以工廠流水線風格即時呈現任務狀態，QA 失敗自動退回重工。支援多 LLM provider 與零設定 Mock 模式，Docker Compose 一鍵啟動。',

        // Education Section
        'education.title': '教育背景',
        'education.degree2': '幼兒保育系 二年制',
        'education.school2': '嘉南藥理大學',
        'education.period2': '2021 - 2023',
        'education.degree': '資訊管理學士',
        'education.school': '國立高雄大學',
        'education.location': '台灣',
        'education.period': '2013 - 2017',
        'education.capstone.title': '畢業專案',
        'education.capstone.description': '開發圖像識別行動系統，協助視障用戶識別物體和環境。運用機器學習和電腦視覺技術，為視障人士提供實用的輔助工具。',

        // Footer
        'footer.rights': '保留所有權利。'
    },

    en: {
        // Navigation
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.education': 'Education',

        // Hero Section
        'hero.greeting': 'Hello, I\'m',
        'hero.title': 'Senior Software Engineer',
        'hero.description': 'WMS End-to-End Delivery • RAG/AI Applications • Warehouse Automation • Infrastructure',
        'hero.description2': 'Senior Software Engineer at JTX Corp., owning a core Warehouse Management System (WMS) end-to-end and delivering it to 3 enterprise clients. Also building a RAG research system and an AI support assistant, working toward a Forward Deployed Engineer role.',

        // About Section
        'about.title': 'About Me',
        'about.subtitle': 'Professional Background',
        'about.description': 'Senior Software Engineer currently owning the end-to-end development and operations of a core Warehouse Management System (<strong class="tech-term">WMS</strong>) at <strong class="tech-term">JTX Corp.</strong> — full-stack delivery across <strong class="tech-term">PHP (Laravel)</strong>, <strong class="tech-term">Vue 3</strong>, <strong class="tech-term">MySQL</strong>/<strong class="tech-term">Oracle</strong>, and <strong class="tech-term">Redis</strong>, extending into DevOps deployment, hardware integration, and security scanning.',
        'about.description2': 'Recently expanded into AI/LLM application work: hand-building a <strong class="tech-term">RAG</strong> retrieval research system (no framework dependency), and separately designing and shipping an <strong class="tech-term">AI conversational support assistant</strong> integrated into the WMS.',
        'about.description3': 'Currently working toward <strong class="tech-term">Forward Deployed Engineer (FDE)</strong> roles, aiming to combine hands-on enterprise system delivery experience with AI integration skills to help enterprise customers turn AI prototypes into real production systems.',
        'about.location': 'Banqiao Dist., Taipei, Taiwan',
        'about.languages': 'Language Skills',
        'about.chinese': 'Chinese',
        'about.native': 'Native',
        'about.english': 'English',
        'about.fluent': 'Conversational',

        // Experience Section
        'experience.title': 'Work Experience',
        'experience.spotlight.badge': 'Current',
        'experience.timeline.heading': 'Career Timeline',
        'experience.timeline.hint': 'Select any stage to see full details',
        'experience.jtx.title': 'Senior Software Engineer',
        'experience.jtx.period': 'Aug 2025 - Present',
        'experience.jtx.achievement1': 'End-to-end ownership of the company\'s core <strong class="tech-term">Warehouse Management System (WMS)</strong>: <strong class="tech-term">PHP (Laravel)</strong> + <strong class="tech-term">Vue 3</strong> + <strong class="tech-term">MySQL</strong>/<strong class="tech-term">Oracle</strong> + <strong class="tech-term">Redis</strong>, with <strong class="tech-term">MSSQL</strong>-based bidirectional ERP write-back integration, hybrid cloud/on-prem deployment (<strong class="tech-term">Docker</strong>)',
        'experience.jtx.achievement2': 'Delivered to 3 clients; post-launch error rate under 5%, manual labor time reduced by ~30%',
        'experience.jtx.achievement3': 'Built a <strong class="tech-term">Python</strong>-based label printing management platform (<strong class="tech-term">LMS</strong>, <strong class="tech-term">FastAPI</strong> + <strong class="tech-term">Vue</strong>), cutting label generation time by ~70% based on customer feedback',
        'experience.jtx.achievement4': 'Built a self-researched <strong class="tech-term">RAG</strong> retrieval and evaluation system (<strong class="tech-term">BGE-large-zh-v1.5</strong> embeddings + <strong class="tech-term">ChromaDB</strong> + expert-card reranking), benchmarked systematically against <strong class="tech-term">GraphRAG</strong>/<strong class="tech-term">LightRAG</strong>/<strong class="tech-term">Self-RAG</strong>; separately designed and shipped a modular AI conversational support assistant integrated into the WMS, backed by a local <strong class="tech-term">Ollama</strong> LLM with multi-turn session management',
        'experience.jtx.achievement5': 'Built a <strong class="tech-term">Kotlin</strong> Android app (<strong class="tech-term">WebView</strong> + bidirectional <strong class="tech-term">JNI</strong> bridging to <strong class="tech-term">Rust</strong>) that runs a local <strong class="tech-term">actix-web</strong> HTTP service in place of a centralized print queue, achieving low-latency offline Bluetooth label printing on PDA devices; signed and packaged for customer deployment',
        'experience.jtx.achievement6': 'Integrated hardware devices (<strong class="tech-term">barcode/QR recognition</strong>, <strong class="tech-term">ZPL</strong> label printing via a <strong class="tech-term">Rust</strong> daemon handling the print queue) with <strong class="tech-term">ERP</strong> data flows; built an extensible multi-carrier architecture integrating <strong class="tech-term">Kerry TJ</strong> logistics API',
        'experience.jtx.achievement7': 'Independently designed and built a Warehouse Control System (<strong class="tech-term">WCS</strong>, <strong class="tech-term">Python</strong>/<strong class="tech-term">FastAPI</strong>/<strong class="tech-term">Celery</strong>) from scratch, bridging both <strong class="tech-term">Siemens S7-1500</strong> and <strong class="tech-term">Mitsubishi</strong> PLC protocols to dispatch and track stacker crane/conveyor/shuttle tasks via a full state machine, with complete unit/integration/load test coverage',
        'experience.jtx.achievement8': 'Built a structured security vulnerability scanning script integrating <strong class="tech-term">composer audit</strong>, <strong class="tech-term">npm audit</strong>, <strong class="tech-term">gitleaks</strong>, <strong class="tech-term">semgrep</strong>, and <strong class="tech-term">enlightn</strong>',
        'experience.jtx.achievement9': 'Independently conducted requirement-gathering interviews with listed companies and government agencies, provided go-live support, and delivered on-site user training; also contributed to the company website\'s front end (Vue 3 + Vite, multi-language)',
        'experience.current.title': 'Full Stack Engineer',
        'experience.current.period': 'May 2025 - Jul 2025',
        'experience.current.achievement1': 'Developed a shipping verification system integrated with <strong class="tech-term">barcode scanners</strong> using a modular architecture, reducing shipping errors by 93%',
        'experience.current.achievement2': 'Established development workflows with <strong class="tech-term">Docker</strong> and <strong class="tech-term">Git</strong> to support internal tooling and process automation',
        'experience.current.achievement3': 'Collaborated closely with operations teams to understand pain points and optimize workflows',
        'experience.astral.title': 'Senior Backend Developer',
        'experience.astral.period': 'Feb 2024 - Apr 2025 (Senior: Feb 2025)',
        'experience.astral.period.short': 'Feb 2024 - Apr 2025',
        'experience.astral.achievement1': 'Developed and maintained 20+ <strong class="tech-term">Magento 2</strong> modules, enhancing maintainability through reusable, modular implementations',
        'experience.astral.achievement2': 'Built reusable authentication and social login solutions, reducing dependency on third-party implementations',
        'experience.astral.achievement3': 'Integrated payment providers, messaging systems, and business <strong class="tech-term">APIs</strong>, customizing checkout experiences and backend workflows',
        'experience.astral.achievement4': 'Implemented <strong class="tech-term">Docker</strong>-based development environments and <strong class="tech-term">GitHub Actions</strong> to support CI/CD',
        'experience.astral.achievement5': 'Leveraged <strong class="tech-term">Redis</strong> to improve application performance and caching strategies, enhancing release consistency and deployment quality',
        'experience.educator.title': 'English & Math Educator',
        'experience.educator.stage': 'Career Switch',
        'experience.educator.company': 'Creativity Kindergarten & Creativity Cram School (Kaohsiung)',
        'experience.educator.period': 'Apr 2020 - Nov 2023',
        'experience.educator.achievement1': 'Designed and taught modular English and Math curricula for students aged 4-12, adapting materials and pacing to individual student levels',
        'experience.educator.achievement2': 'Continued self-directed learning through personal projects and online coursework throughout, preparing for a return to software engineering in 2024',
        'experience.twhg.title': 'Web Developer',
        'experience.twhg.period': 'Aug 2018 - Jun 2019',
        'experience.twhg.achievement1': 'Migrated legacy systems to <strong class="tech-term">Laravel</strong> framework, improving maintainability and performance',
        'experience.twhg.achievement2': 'Rebuilt real estate management platform using <strong class="tech-term">MySQL</strong>, enhancing query efficiency and search ranking logic',
        'experience.twhg.achievement3': 'Created and deployed <strong class="tech-term">LineBot</strong> to engage users with automated interaction',
        'experience.adbert.title': 'Backend Engineer',
        'experience.adbert.period': 'Sep 2017 - Aug 2018',
        'experience.adbert.achievement1': 'Developed telecom ad platform backend using <strong class="tech-term">Laravel</strong> and <strong class="tech-term">RESTful API</strong> design',
        'experience.adbert.achievement2': 'Leveraged <strong class="tech-term">Redis</strong> and <strong class="tech-term">MongoDB</strong> for real-time event data handling and user segmentation',
        'experience.adbert.achievement3': 'Collaborated with analysts to generate user behavior insights from raw backend logs',

        // Skills Section
        'skills.title': 'Skills & Expertise',
        'skills.programming': 'Programming Languages',
        'skills.backend': 'Backend Frameworks & Architecture',
        'skills.testing': 'Testing & Security',
        'skills.sast': 'SAST Scanning (composer/npm audit, gitleaks, semgrep, enlightn)',
        'skills.tools': 'Infrastructure & DevOps',
        'skills.ai': 'AI / LLM',
        'skills.tag.async': 'Async Processing',
        'skills.tag.concurrency': 'Concurrency Control',
        'skills.tag.distributed': 'Distributed Systems',
        'skills.tag.llm': 'LLM Integration',
        'skills.tag.ragas': 'RAGAS-style Evaluation',
        'skills.tag.barcode': 'Barcode/QR Recognition',
        'skills.tag.zpl': 'ZPL Label Printing',
        'skills.tag.erp': 'ERP Integration',
        'skills.hardware': 'Hardware & Systems Integration',
        'skills.web': 'Frontend Technologies',
        'skills.certification': 'Certifications',
        'skills.cert1.title': 'AWS Academy Graduate - Cloud Architecting',
        'skills.cert1.issuer': 'Amazon Web Services',
        'skills.cert2.title': 'Prompt Design in Vertex AI - Introductory Badge',
        'skills.cert2.issuer': 'Google Cloud Skills Boost',
        'skills.cert3.title': 'Machine Learning Operations (MLOps) in Generative AI',
        'skills.cert3.issuer': 'Google Cloud Skills Boost',
        'skills.note.rag': 'SOP Assistant, live in production WMS',
        'skills.note.sbert': 'BGE-large-zh-v1.5 embeddings',
        'skills.note.chromadb': 'RAG vector retrieval store',
        'skills.note.redisqueue': 'WMS async task processing',
        'skills.note.fastapi': 'LMS label printing platform',
        'skills.note.celery': 'WCS task dispatch & scheduling',
        'skills.note.kotlin': 'PDA device Android app',
        'skills.note.docker': 'WMS full-stack containerized deployment',
        'skills.note.githubactions': 'AstralWeb Taiwan CI/CD pipeline',
        'skills.note.mqtt': 'WMS sensor data integration',
        'skills.note.jni': 'Android app native bridge',

        // Projects Section
        'projects.title': 'Projects',
        'projects.featured.badge': 'In Production',
        'projects.research.badge': 'Research Project',
        'projects.list.heading': 'Additional Work',
        'projects.wms.stat1': 'Clients',
        'projects.wms.stat3': 'Error Rate',
        'projects.wms.stat4': 'Manual Labor',
        'projects.wms.stat5': 'Label Gen',
        'projects.rag.stat1': 'Embedding Dims',
        'projects.rag.stat2': 'Benchmarks',
        'projects.rag.stat3': 'Eval Pipelines',
        'projects.rag.stat4': 'Framework Deps',
        'projects.assistant.title': 'WMS AI Support Assistant',
        'projects.assistant.description': 'Designed and built a modular AI support assistant integrated into the WMS, managing multi-turn conversations via sessions and calling a local Ollama LLM to answer operational questions on receiving, shipping, stocktaking, label printing, and ERP integration, with feature-module toggles and multi-tenant isolation — live in the production WMS.',
        'projects.rag.title': 'RAG Retrieval Research System (SOP-LLM)',
        'projects.rag.description': 'A self-built (no framework dependency) RAG research system: sentence-transformers loading BGE-large-zh-v1.5 (1024-dim) embeddings, ChromaDB for vector search, and graph-node embeddings for expert re-ranking. Built two custom RAGAS-style evaluation pipelines, benchmarked systematically against GraphRAG, LightRAG, and Self-RAG.',
        'projects.wcs.title': 'Warehouse Control System (WCS)',
        'projects.wcs.description': 'Independently designed and built a Warehouse Control System bridging the upper WMS with underlying PLCs from scratch. Supports both Siemens S7-1500 and Mitsubishi SLMP protocols, with a custom task state machine, Job/Task multi-leg dispatch model, and heartbeat monitoring — roughly 8,700 lines of code with full unit/integration/load test coverage.',
        'projects.lms.title': 'Label Printing Management Platform (LMS)',
        'projects.lms.description': 'A label printing management system rebuilt with FastAPI + Vue 3, featuring a built-in ZPL generation engine and a Konva canvas-based template editor, supporting 1D barcodes, QR codes, and CJK character rasterization, with Labelary API preview (falling back to local rendering on failure). Cut label generation time by ~70% based on customer feedback.',
        'projects.pipeline.title': 'LLM Document Processing Pipeline (OCR → Summarization → Embedding → Vector DB)',
        'projects.pipeline.description': 'A general-purpose document intelligence pipeline: OCR text extraction → LLM summarization → chunking → embedding → vector database storage, with a chunk-level content-hash deduplication mechanism to avoid duplicate data consuming retrieval space.',
        'projects.wms.title': 'Warehouse Management System (WMS) — End-to-End Product Ownership',
        'projects.wms.description': 'Solely responsible for the architecture, development, deployment, and operations across the full lifecycle. Dockerized (Laravel + Vue 3 + Nginx + Redis + MySQL/Oracle + Queue Worker), with MSSQL-based bidirectional ERP write-back integration; hardware integration (ZPL label printing, barcode/QR recognition), interfacing with a self-built WCS (Warehouse Control System). Delivered to 3 clients, with post-launch error rate under 5%, manual labor time reduced by ~30%, and LMS label generation time cut by ~70% based on customer feedback.',
        'projects.scan.title': 'Security Scanning Automation (security-scan.sh)',
        'projects.scan.description': 'An automated vulnerability scanning script built for the PHP/Laravel stack, integrating composer audit, npm audit, gitleaks, semgrep, and enlightn, with an understanding of how these open-source SAST tools differ from commercial tools (Fortify, Checkmarx) in taint analysis capability.',
        'projects.android.title': 'Kotlin Android App (WebView + Rust JNI)',
        'projects.android.description': 'A mobile app for customers to install on PDA devices, built in Kotlin with a WebView-hosted UI and bidirectional JNI bridging to Rust: a local actix-web HTTP service replaces a centralized print queue, achieving low-latency offline Bluetooth label printing, with production-grade fault tolerance like automatic crash recovery.',
        'projects.agents.title': 'Agent Factory Platform (Multi-Agent Dev Platform)',
        'projects.agents.description': 'Personal project: a development automation platform visualizing PM/SWE/QA/DevOps AI agents collaborating, showing task status in real time with a factory-assembly-line style UI; QA failures automatically route back for rework. Supports multiple LLM providers and a zero-config mock mode, with one-command Docker Compose startup.',

        // Education Section
        'education.title': 'Education',
        'education.degree2': 'Early Childhood Education (2-year program)',
        'education.school2': 'Chia Nan University of Pharmacy & Science',
        'education.period2': '2021 - 2023',
        'education.degree': 'Bachelor of Information Management',
        'education.school': 'National University of Kaohsiung',
        'education.location': 'Taiwan',
        'education.period': '2013 - 2017',
        'education.capstone.title': 'Capstone Project',
        'education.capstone.description': 'Developed image recognition mobile system to assist visually impaired users in identifying objects and environments. Applied machine learning and computer vision technologies to provide practical assistance tools for visually impaired individuals.',

        // Footer
        'footer.rights': 'All rights reserved.'
    }
};

// Current language
let currentLang = 'zh';

// DOM elements
const langButtons = document.querySelectorAll('.lang-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeMobileMenu();
    initializeScrollAnimations();
    initializeThemeToggle();
    initializeCareerTimeline();
    initializeSkillNotes();

    initializeScrollIndicator();
    initializeSmoothScrolling();
    initGSAPAnimations();
});

// Skill-tag hover annotations (see [data-note] in styles.css) rely on
// :hover/:focus-visible on desktop. Touch devices have no hover, so tapping
// a tag toggles the same annotation via this class instead.
function initializeSkillNotes() {
    const notedTags = document.querySelectorAll('.skill-tag[data-note-key]');
    if (!notedTags.length) return;

    notedTags.forEach(function(tag) {
        tag.setAttribute('tabindex', '0');
        tag.addEventListener('click', function() {
            const wasActive = tag.classList.contains('is-active');
            notedTags.forEach(function(t) { t.classList.remove('is-active'); });
            if (!wasActive) tag.classList.add('is-active');
        });
    });
}

// Career timeline: a Swiper carousel with centeredSlides + slideToClickedSlide,
// so the selected stage (by default, the current role) always sits in the
// middle instead of getting stranded at the scrollable strip's far end.
// The JTX panel is visible by default (progressive enhancement: it has no
// [hidden] attribute in the markup, so it still shows correctly even if
// this script fails to load).
function initializeCareerTimeline() {
    const nodes = document.querySelectorAll('.career-node');
    const panels = document.querySelectorAll('.career-detail-panel');
    const swiperEl = document.querySelector('.career-swiper');
    if (!nodes.length || !panels.length || !swiperEl || typeof Swiper === 'undefined') return;

    function selectStage(target) {
        nodes.forEach(function(n) {
            const isTarget = n.dataset.target === target;
            n.classList.toggle('is-active', isTarget);
            n.setAttribute('aria-selected', isTarget ? 'true' : 'false');
        });

        panels.forEach(function(panel) {
            const isTarget = panel.dataset.panel === target;
            panel.classList.toggle('is-active', isTarget);
            panel.hidden = !isTarget;
        });
    }

    const initialNode = document.querySelector('.career-node.is-active') || nodes[nodes.length - 1];
    const initialIndex = Array.prototype.indexOf.call(nodes, initialNode);

    new Swiper('.career-swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 24,
        slideToClickedSlide: true,
        initialSlide: initialIndex >= 0 ? initialIndex : nodes.length - 1,
        grabCursor: true,
        keyboard: { enabled: true },
        navigation: {
            nextEl: '.career-swiper .swiper-button-next',
            prevEl: '.career-swiper .swiper-button-prev'
        },
        on: {
            // Fires when a slide becomes active via arrows, keyboard, drag,
            // or slideToClickedSlide — but not for the initial slide, whose
            // detail panel is already correct in the static markup.
            slideChange: function() {
                const activeNode = this.slides[this.activeIndex] &&
                    this.slides[this.activeIndex].querySelector('.career-node');
                if (activeNode) selectStage(activeNode.dataset.target);
            }
        }
    });
}

// Theme (light/dark) toggle
// The actual theme is applied before first paint by an inline script in
// <head> (reads localStorage, falls back to prefers-color-scheme). This
// just wires up the button to flip and persist it.
function initializeThemeToggle() {
    if (!themeToggleBtn) return;

    themeToggleBtn.addEventListener('click', function() {
        const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// Language switching functionality
function initializeLanguage() {
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            switchLanguage(lang);

            // Update active button
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-lang-key]');

    elements.forEach(element => {
        const key = element.dataset.langKey;
        if (translations[lang] && translations[lang][key]) {
            // innerHTML (not textContent) so achievement bullets can wrap key
            // technologies in <strong class="tech-term"> for emphasis. All
            // translation strings are authored by us, not user input.
            element.innerHTML = translations[lang][key];
        }
    });

    // Skill-tag hover annotations live in a data-note attribute (read via
    // CSS attr()), not element text, so they need their own translation pass
    const notedElements = document.querySelectorAll('[data-note-key]');
    notedElements.forEach(element => {
        const key = element.dataset.noteKey;
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('data-note', translations[lang][key]);
        }
    });

    // Update document title
    document.title = lang === 'zh' ? '林書弘 Damian Lin - Senior Software Engineer' :
                    'Damian Lin - Senior Software Engineer';
}

// Mobile menu functionality
function initializeMobileMenu() {
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}



// Scroll indicator
function initializeScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });
}

// Smooth scrolling for navigation links and hero buttons
function initializeSmoothScrolling() {
    // Navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hero section buttons
    const aboutBtn = document.getElementById('about-btn');
    const projectsBtn = document.getElementById('projects-btn');

    if (aboutBtn) {
        aboutBtn.addEventListener('click', function() {
            const target = document.getElementById('about');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    if (projectsBtn) {
        projectsBtn.addEventListener('click', function() {
            const target = document.getElementById('projects');
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Add loading animation to skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Call skill bar animation when skills section is visible
const skillsSection = document.getElementById('skills');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    });
    observer.observe(skillsSection);
}

// Count the featured project stats (WMS + SOP-LLM stat strips) up from 0
// to their real value once scrolled into view — the numbers themselves are
// static facts already in the copy (see index.html), this just animates
// how they're revealed.
function animateStatNumbers() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const statEls = document.querySelectorAll('.project-stat-num[data-count-to]');

    statEls.forEach(function(el) {
        const target = parseFloat(el.dataset.countTo);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';

        if (prefersReducedMotion || target === 0) {
            el.textContent = prefix + target + suffix;
            return;
        }

        const duration = 900;
        const start = performance.now();

        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(target * eased);
            el.textContent = prefix + value + suffix;
            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = prefix + target + suffix;
            }
        }

        requestAnimationFrame(tick);
    });
}

const projectsSection = document.getElementById('projects');
if (projectsSection) {
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatNumbers();
                statObserver.unobserve(entry.target);
            }
        });
    });
    statObserver.observe(projectsSection);
}

// Add hover effects to project cards. Featured cards (.project-card--featured)
// are excluded here — they get a richer GSAP cursor-tilt effect instead (see
// initMicroInteractions()), and letting both handlers fight over
// element.style.transform on the same cards causes visible jitter.
document.querySelectorAll('.bg-white:not(.project-card--featured)').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==========================================================================
// GSAP + ScrollTrigger: larger-scale scroll choreography, hero parallax,
// the career timeline's SVG path draw, and richer micro-interactions.
// Additive on top of the plain CSS/IntersectionObserver animations above
// (initializeScrollAnimations, animateSkillBars, animateStatNumbers all
// still run regardless of whether GSAP loads). If the GSAP CDN scripts fail
// to load, the only thing that CSS pre-hides is .hero-fade-item (opacity:0
// in styles.css, so it doesn't flash unstyled before the JS entrance runs)
// — the fallback below just reveals those immediately so content can never
// get stuck invisible. Everything else in this file has no GSAP-only
// hidden state, so it renders normally with no animation if GSAP is absent.
// ==========================================================================
function initGSAPAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        document.querySelectorAll('.hero-fade-item').forEach(function(el) {
            el.style.opacity = 1;
        });
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Scroll-driven choreography (hero entrance/parallax, career path draw,
    // per-section reveals) lives inside matchMedia so it's rebuilt cleanly
    // if the visitor crosses the reduced-motion or desktop/mobile breakpoint
    // mid-session — GSAP auto-reverts tweens/ScrollTriggers created inside
    // a matchMedia callback when its conditions change.
    const mm = gsap.matchMedia();

    mm.add({
        reduceMotion: '(prefers-reduced-motion: reduce)',
        isDesktop: '(min-width: 768px)'
    }, function(context) {
        const reduceMotion = context.conditions.reduceMotion;
        const isDesktop = context.conditions.isDesktop;

        if (reduceMotion) {
            // Snap everything straight to its end state — no scroll-linked
            // motion at all for these visitors.
            gsap.set('.hero-fade-item', { opacity: 1, clearProps: 'transform' });
            gsap.set('.stack-layer', { opacity: 1, clipPath: 'none' });
            gsap.set('.project-card--featured, .project-list-item', { opacity: 1, clearProps: 'transform' });
            gsap.set('.edu-item, .edu-dot', { opacity: 1, clearProps: 'transform' });
            gsap.set('.career-path-progress', { strokeDashoffset: 0 });
            gsap.set('.career-dot', { clearProps: 'transform', opacity: 1 });
            return;
        }

        initHeroTimeline();
        if (isDesktop) initHeroParallax();
        initCareerPathDraw();
        initSectionChoreography();
    });

    // Hover/click micro-interactions are plain event listeners, not
    // GSAP-managed tweens tied to a breakpoint, so they're set up once
    // outside matchMedia — re-running matchMedia's callback on every resize
    // across 768px would otherwise stack duplicate listeners on the same
    // elements. Motion amplitude/attachment is instead checked live inside
    // each handler (see initMicroInteractions()).
    initMicroInteractions();
}

// Hero entrance: name, then tagline, then the two summary paragraphs, then
// the avatar, landing one beat apart. Base hidden state (opacity:0) already
// comes from CSS (.hero-fade-item in styles.css) so there's no flash before
// this runs; here we also set the transform origin so nothing pops in from
// a stale position if this fires more than once (e.g. after a matchMedia
// context rebuild).
function initHeroTimeline() {
    const items = document.querySelectorAll('.hero-fade-item');
    if (!items.length) return;

    gsap.set('#hero h1.hero-fade-item, #hero h2.hero-fade-item, #hero p.hero-fade-item', { opacity: 0, y: 18 });
    gsap.set('.hero-fade-item--avatar', { opacity: 0, scale: 0.92 });

    gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } })
        .to('#hero h1.hero-fade-item', { opacity: 1, y: 0 }, 0.05)
        .to('#hero h2.hero-fade-item', { opacity: 1, y: 0 }, 0.18)
        .to('#hero p.hero-fade-item', { opacity: 1, y: 0, stagger: 0.13 }, 0.31)
        .to('.hero-fade-item--avatar', { opacity: 1, scale: 1 }, 0.3);
}

// Background grid + glow (real DOM nodes now, not ::before/::after — see
// .hero-grid/.hero-glow in index.html/styles.css) drift at a different
// speed than the foreground content while the hero scrolls past, for a
// parallax depth cue. Desktop-only (see isDesktop gate in initGSAPAnimations).
function initHeroParallax() {
    if (!document.querySelector('.hero-grid')) return;

    const trigger = { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true };

    gsap.to('.hero-grid', { yPercent: 18, ease: 'none', scrollTrigger: trigger });
    gsap.to('.hero-glow', { yPercent: 32, xPercent: -8, ease: 'none', scrollTrigger: trigger });
    gsap.to('.hero-avatar-frame', { yPercent: -12, ease: 'none', scrollTrigger: trigger });
}

// Draws the career timeline's accent line left-to-right as #experience
// scrolls into view (stroke-dashoffset on the SVG line added in index.html),
// and pops each node's dot in a staggered wave timed to roughly track the
// draw. Purely a scroll-position visual layer — it doesn't read or drive
// Swiper's internal slide position, so the existing carousel click/keyboard
// interaction (initializeCareerTimeline()) is completely unaffected.
function initCareerPathDraw() {
    const progressLine = document.querySelector('.career-path-progress');
    const dots = gsap.utils.toArray('.career-dot');
    if (!progressLine) return;

    const trigger = {
        trigger: '#experience',
        start: 'top 75%',
        end: 'bottom 55%',
        scrub: 0.6
    };

    gsap.set(progressLine, { strokeDashoffset: 100 });
    gsap.set(dots, { scale: 0.5, opacity: 0.4, transformOrigin: '50% 50%' });

    gsap.to(progressLine, { strokeDashoffset: 0, ease: 'none', scrollTrigger: trigger });

    if (dots.length) {
        gsap.to(dots, {
            scale: 1,
            opacity: 1,
            stagger: { each: 1 / dots.length },
            ease: 'none',
            scrollTrigger: trigger
        });
    }
}

// Per-section entrance choreography: each section gets its own reveal
// treatment (slide/scale/clip-path) instead of the same fade+translateY
// repeated everywhere. Base hidden states are set here via gsap.set() —
// none of these elements have a CSS opacity:0 fallback, so if this never
// runs (GSAP unavailable) they simply render normally with no animation.
function initSectionChoreography() {
    // About: text column slides in from the left, language card from the
    // right with a slight scale — two columns converging reads better than
    // a shared fade for a two-column layout.
    const aboutCol1 = document.querySelector('#about .grid > div:first-child');
    const aboutCol2 = document.querySelector('#about .grid > div:last-child');
    if (aboutCol1 && aboutCol2) {
        gsap.set(aboutCol1, { opacity: 0, x: -40 });
        gsap.set(aboutCol2, { opacity: 0, x: 40, scale: 0.96 });
        const aboutTrigger = { trigger: '#about', start: 'top 75%' };
        gsap.to(aboutCol1, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: aboutTrigger });
        gsap.to(aboutCol2, { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: aboutTrigger });
    }

    // Skills: each tech-stack layer wipes in left-to-right via clip-path —
    // fits the "drawn" engineering-doc feel used elsewhere (career path,
    // section numbering) better than a plain fade.
    const stackLayers = gsap.utils.toArray('.stack-layer');
    if (stackLayers.length) {
        gsap.set(stackLayers, { clipPath: 'inset(0 100% 0 0)', opacity: 0 });
        gsap.to(stackLayers, {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 0.7,
            ease: 'power2.inOut',
            stagger: 0.12,
            scrollTrigger: { trigger: '#skills', start: 'top 70%' }
        });
    }

    // Projects: featured cards scale in together; the supporting list
    // slides in from the left with a stagger (replaces the old fixed
    // nth-child transition-delay list in styles.css).
    const featuredCards = gsap.utils.toArray('.project-card--featured');
    if (featuredCards.length) {
        gsap.set(featuredCards, { opacity: 0, scale: 0.92, y: 20 });
        gsap.to(featuredCards, {
            opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: '.project-featured-grid', start: 'top 80%' }
        });
    }

    const listItems = gsap.utils.toArray('.project-list-item');
    if (listItems.length) {
        gsap.set(listItems, { opacity: 0, x: -28 });
        gsap.to(listItems, {
            opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', stagger: 0.09,
            scrollTrigger: { trigger: '.project-list', start: 'top 85%' }
        });
    }

    // Education: each timeline entry rises in, its dot popping a beat later.
    const eduItems = gsap.utils.toArray('.edu-item');
    eduItems.forEach(function(item) {
        const dot = item.querySelector('.edu-dot');
        gsap.set(item, { opacity: 0, y: 24 });
        const tl = gsap.timeline({ scrollTrigger: { trigger: item, start: 'top 82%' } });
        tl.to(item, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
        if (dot) {
            gsap.set(dot, { scale: 0, transformOrigin: '50% 50%' });
            tl.to(dot, { scale: 1, duration: 0.4, ease: 'back.out(2.5)' }, 0.15);
        }
    });
}

// Richer hover/click feedback on top of the existing CSS :hover transitions.
// Kept deliberately small in amplitude — this is a résumé site, not a
// playground. Runs once (see the comment in initGSAPAnimations() on why
// this sits outside matchMedia); the tilt effect checks viewport width and
// prefers-reduced-motion live, at event time, rather than at setup time.
function initMicroInteractions() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Featured project cards: cursor-following tilt. Skipped on narrow
    // viewports at move-time (not just at setup) so rotating a tablet or
    // resizing the window doesn't leave the listener stuck in the wrong mode.
    document.querySelectorAll('.project-card--featured').forEach(function(card) {
        gsap.set(card, { transformPerspective: 800 });
        const maxTilt = 6;

        card.addEventListener('mousemove', function(e) {
            if (window.innerWidth < 768) return;
            const rect = card.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width - 0.5;
            const py = (e.clientY - rect.top) / rect.height - 0.5;
            gsap.to(card, {
                rotateY: px * maxTilt * 2,
                rotateX: py * -maxTilt * 2,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function() {
            gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power3.out' });
        });
    });

    // Career nodes: a small pop on the dot on hover, layered on the
    // existing CSS background-color hover.
    document.querySelectorAll('.career-node').forEach(function(node) {
        const dot = node.querySelector('.career-dot');
        if (!dot) return;
        node.addEventListener('mouseenter', function() {
            gsap.to(dot, { scale: 1.18, duration: 0.2, ease: 'power2.out' });
        });
        node.addEventListener('mouseleave', function() {
            gsap.to(dot, { scale: 1, duration: 0.25, ease: 'power2.out' });
        });
    });

    // Theme toggle + language buttons: a small confirm pulse on click,
    // separate from the actual state change (handled elsewhere).
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            gsap.fromTo(themeToggleBtn,
                { scale: 0.85, rotate: -12 },
                { scale: 1, rotate: 0, duration: 0.4, ease: 'back.out(3)' }
            );
        });
    }

    langButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            gsap.fromTo(btn, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: 'back.out(3)' });
        });
    });

    // Nav links: a small lift on hover, layered on the existing CSS
    // underline-grow effect.
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            gsap.to(link, { y: -2, duration: 0.2, ease: 'power2.out' });
        });
        link.addEventListener('mouseleave', function() {
            gsap.to(link, { y: 0, duration: 0.25, ease: 'power2.out' });
        });
    });
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Any scroll-based functionality can go here
}, 10);
