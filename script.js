// Language translations
const translations = {
    zh: {
        // Navigation
        'nav.about': '關於我',
        'nav.experience': '工作經驗',
        'nav.skills': '技能專長',
        'nav.projects': '專案作品',
        'nav.education': '教育背景',
        'nav.contact': '聯絡資訊',
        
        // Hero Section
        'hero.greeting': '你好，我是',
        'hero.title': 'Senior Software Engineer',
        'hero.description': '後端系統 • 全端交付 • AI 整合 • 基礎設施維運',
        'hero.description2': '擁有超過 5 年經驗的資深軟體工程師，專注於打造可擴展、可靠的生產級系統。',
        'hero.contact': '關於我',
        'hero.projects': '查看作品',
        
        // About Section
        'about.title': '關於我',
        'about.subtitle': '專業背景',
        'about.description': '我是一名資深軟體工程師，擁有超過 5 年橫跨電商、倉儲營運與企業應用的生產級系統開發經驗。專長結合後端工程、全端交付、基礎設施維運與 AI 整合，能從商業需求轉化為可擴展的解決方案，並負責在 Linux 環境中部署與營運系統。',
        'about.location': 'Taipei, Taiwan',
        'about.languages': '語言能力',
        'about.chinese': '中文',
        'about.native': '母語',
        'about.english': '英文',
        'about.fluent': '精通',
        'about.korean': '韓文',
        'about.readable': '可讀可說',
        
        // Experience Section
        'experience.title': '工作經驗',
        'experience.jtx.title': 'Senior Software Engineer',
        'experience.jtx.period': 'Aug 2025 - Present',
        'experience.jtx.achievement1': '• 從零主導開發生產級倉儲管理系統 (WMS)，使用 PHP (Laravel)、Vue 3、MySQL、Redis',
        'experience.jtx.achievement2': '• 設計庫存追蹤、進出貨、訂單處理與物流整合等系統模組，並交付前後端功能',
        'experience.jtx.achievement3': '• 運用 Redis 佇列與非同步處理打造可擴展後端服務，並實作併發控制確保資料一致性',
        'experience.jtx.achievement4': '• 以 Python 開發企業知識檢索平台 (RAG)，建立文件擷取、切塊、嵌入與語意檢索流程',
        'experience.jtx.achievement5': '• 將 AI 助理能力整合進 WMS，讓使用者在工作環境中即可取得流程指引與營運知識',
        'experience.jtx.achievement6': '• 透過 Docker、Nginx 管理應用環境與反向代理，並透過 JNI 整合 Rust 與 Kotlin 模組',
        'experience.current.title': 'Full Stack Engineer',
        'experience.current.period': 'May 2025 - Jul 2025',
        'experience.current.achievement1': '• 開發整合掃描槍的「出貨覆核系統」，提升倉儲準確性並大幅降低出貨錯誤',
        'experience.current.achievement2': '• 與營運團隊緊密協作，理解痛點並優化工作流程',
        'experience.current.achievement3': '• 設計模組化應用架構，兼顧交付速度與長期程式品質',
        'experience.current.achievement4': '• 運用 Docker 與 Git 工作流維持跨環境部署一致性',
        'experience.current.achievement5': '• 協助員工工作站建置、軟體設定與跨部門技術支援，並自動化重複性內部流程',
        'experience.astral.title': 'Senior Backend Developer',
        'experience.astral.period': 'Feb 2024 - Apr 2025',
        'experience.astral.achievement1': '• 開發並維護 20+ 個 Magento 2 模組，以可重用、模組化實作提升平台可維護性',
        'experience.astral.achievement2': '• 建立可重用的認證與社交登入解決方案，降低對第三方實作的依賴',
        'experience.astral.achievement3': '• 整合金流、訊息系統與商業 API，並客製化結帳體驗與後端流程',
        'experience.astral.achievement4': '• 導入 Docker 開發環境並以 GitHub Actions 支援 CI/CD 流程',
        'experience.astral.achievement5': '• 運用 Redis 改善應用效能與快取策略，提升發布一致性與部署品質',
        'experience.twhg.title': 'Web Developer',
        'experience.twhg.period': 'Aug 2018 - May 2019',
        'experience.twhg.achievement1': '• 將舊有系統遷移至 Laravel 框架，提升可維護性和效能',
        'experience.twhg.achievement2': '• 使用 MySQL 重建房地產管理平台，優化查詢效率和搜尋排名邏輯',
        'experience.twhg.achievement3': '• 建立並部署 LineBot，提供自動化用戶互動服務',
        'experience.adbert.title': 'Backend Engineer',
        'experience.adbert.period': 'Dec 2017 - Jul 2018',
        'experience.adbert.achievement1': '• 使用 Laravel 和 RESTful API 設計開發電信廣告平台後端',
        'experience.adbert.achievement2': '• 運用 Redis 和 MongoDB 處理即時事件資料和用戶分群',
        'experience.adbert.achievement3': '• 與分析師協作，從原始後端日誌中生成用戶行為洞察',
        'experience.educator.title': 'English & Math Educator',
        'experience.educator.company': 'Creativity Kindergarten & Creativity Cram School (Kaohsiung)',
        'experience.educator.period': 'Apr 2020 - Nov 2023',
        'experience.educator.achievement1': '• 設計幼兒和中等教育的模組化英語和數學課程計劃',
        'experience.educator.achievement2': '• 運用工程思維開發課程地圖和個性化學習系統',
        'experience.educator.achievement3': '• 使用試算表和視覺化進行跨群組績效分析',
        'experience.educator.achievement4': '• 完成早期教育方法和學習心理學課程',
        'experience.educator.achievement5': '• 通過個人專案和線上學習保持兼職編程技能',
        
        // Skills Section
        'skills.title': '技能專長',
        'skills.programming': '程式語言',
        'skills.backend': '後端工程',
        'skills.testing': '測試框架',
        'skills.tools': '基礎設施與 DevOps',
        'skills.ai': 'AI 與系統整合',
        'skills.ai.rag': 'RAG / LLM 整合',
        'skills.ai.semantic': '語意檢索 / 文件處理',
        'skills.ai.jni': 'JNI (Rust + Kotlin)',
        'skills.web': '前端技術',
        'skills.certification': '認證',
        'skills.cert1.title': 'Prompt Design in Vertex AI',
        'skills.cert1.issuer': 'Google Cloud Skills Boost',
        
        // Projects Section
        'projects.title': '專案作品',
        'projects.wms.title': '倉儲管理系統 (WMS)',
        'projects.wms.description': '從零打造生產級倉儲管理系統，涵蓋庫存追蹤、進出貨、訂單履行與物流流程。',
        'projects.rag.title': '企業知識檢索平台 (RAG)',
        'projects.rag.description': '以 Python 建立 RAG 平台，處理 SOP 與操作手冊的文件擷取、切塊、嵌入與語意檢索，並整合至 WMS 的 AI 助理。',
        'projects.scan.title': '掃描覆核專案',
        'projects.scan.description': '使用 PHP + Laravel 開發文件掃描和覆核系統，提升工作效率和準確性。',
        'projects.review.title': '商品評論專案',
        'projects.review.description': '使用 PHP + MySQL + Magento 2 建立商品評論管理系統，包含評分、回覆和統計分析功能。',
        'projects.social.title': 'Social Login模組',
        'projects.social.description': '整合 Facebook、Line、Google 等多種社交媒體登入功能，提供便捷的用戶認證體驗。',
        'projects.linebot.title': 'LineBot + AI LLM Modal',
        'projects.linebot.description': '使用 Laravel 框架開發 LineBot，結合 AI 語言模型，提供智能對話服務。',
        'projects.linebot.docs': '查看開發文件',
        'projects.capstone.title': '畢業專案：視覺輔助系統',
        'projects.capstone.description': '開發圖像識別行動系統，協助視障用戶識別物體和環境。',
        
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
        
        // Contact Section
        'contact.title': '聯絡資訊',
        'contact.subtitle': '讓我們開始合作',
        'contact.description': '如果您對我的技能和經驗感興趣，或者有任何專案需要討論，請隨時與我聯絡。我很樂意與您討論如何為您的專案帶來價值。',
        'contact.email.label': '電子郵件',
        'contact.phone.label': '電話',
        'contact.github.label': 'GitHub',
        'contact.location.label': '所在地',
        'contact.location.value': 'New Taipei City, Taiwan',
        'contact.form.title': '發送訊息',
        'contact.form.name': '姓名',
        'contact.form.email': '電子郵件',
        'contact.form.message': '訊息',
        'contact.form.submit': '發送訊息',
        
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
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.greeting': 'Hello, I\'m',
        'hero.title': 'Senior Software Engineer',
        'hero.description': 'Backend Systems • Full-Stack Delivery • AI Integration • Infrastructure',
        'hero.description2': 'Senior Software Engineer with over 5 years of experience building scalable, reliable production-grade systems.',
        'hero.contact': 'About Me',
        'hero.projects': 'View Projects',
        
        // About Section
        'about.title': 'About Me',
        'about.subtitle': 'Professional Background',
        'about.description': 'Senior Software Engineer with over 5 years of experience delivering production-grade systems across e-commerce, warehouse operations, and enterprise applications. My background combines backend engineering, full-stack delivery, infrastructure operations, and AI integration, turning business requirements into scalable solutions and operating systems in Linux environments.',
        'about.location': 'Taipei, Taiwan',
        'about.languages': 'Language Skills',
        'about.chinese': 'Chinese',
        'about.native': 'Native',
        'about.english': 'English',
        'about.fluent': 'Fluent',
        'about.korean': 'Korean',
        'about.readable': 'Readable & Speakable',
        
        // Experience Section
        'experience.title': 'Work Experience',
        'experience.jtx.title': 'Senior Software Engineer',
        'experience.jtx.period': 'Aug 2025 - Present',
        'experience.jtx.achievement1': '• Led end-to-end development of a production-grade Warehouse Management System (WMS) using PHP (Laravel), Vue 3, MySQL, and Redis',
        'experience.jtx.achievement2': '• Designed system modules covering inventory tracking, inbound/outbound, order processing, and logistics integration, delivering both backend and frontend features',
        'experience.jtx.achievement3': '• Built scalable backend services using Redis queues and asynchronous processing, with concurrency control to ensure data consistency',
        'experience.jtx.achievement4': '• Developed a Python-based enterprise knowledge retrieval platform (RAG) with document ingestion, chunking, embedding, and semantic retrieval pipelines',
        'experience.jtx.achievement5': '• Integrated AI assistant capabilities into the WMS, enabling users to retrieve workflow guidance without leaving their working environment',
        'experience.jtx.achievement6': '• Managed application environments and reverse proxy via Docker and Nginx, and integrated Rust modules with Kotlin applications through JNI',
        'experience.current.title': 'Full Stack Engineer',
        'experience.current.period': 'May 2025 - Jul 2025',
        'experience.current.achievement1': '• Developed a Shipping Verification System integrated with barcode scanners, improving warehouse accuracy and significantly reducing shipping errors',
        'experience.current.achievement2': '• Collaborated closely with operations teams to understand pain points and optimize workflows',
        'experience.current.achievement3': '• Designed modular application architectures balancing delivery speed with long-term code quality',
        'experience.current.achievement4': '• Used Docker and Git-based workflows to maintain deployment consistency across environments',
        'experience.current.achievement5': '• Supported workstation provisioning, software setup, cross-department troubleshooting, and automated repetitive internal processes',
        'experience.astral.title': 'Senior Backend Developer',
        'experience.astral.period': 'Feb 2024 - Apr 2025',
        'experience.astral.achievement1': '• Developed and maintained 20+ Magento 2 modules, enhancing maintainability through reusable, modular implementations',
        'experience.astral.achievement2': '• Built reusable authentication and social login solutions, reducing dependency on third-party implementations',
        'experience.astral.achievement3': '• Integrated payment providers, messaging systems, and business APIs, customizing checkout experiences and backend workflows',
        'experience.astral.achievement4': '• Implemented Docker-based development environments and GitHub Actions to support CI/CD',
        'experience.astral.achievement5': '• Leveraged Redis to improve application performance and caching strategies, enhancing release consistency and deployment quality',
        'experience.twhg.title': 'Web Developer',
        'experience.twhg.period': 'Aug 2018 - May 2019',
        'experience.twhg.achievement1': '• Migrated legacy systems to Laravel framework, improving maintainability and performance',
        'experience.twhg.achievement2': '• Rebuilt real estate management platform using MySQL, enhancing query efficiency and search ranking logic',
        'experience.twhg.achievement3': '• Created and deployed LineBot to engage users with automated interaction',
        'experience.adbert.title': 'Backend Engineer',
        'experience.adbert.period': 'Dec 2017 - Jul 2018',
        'experience.adbert.achievement1': '• Developed telecom ad platform backend using Laravel and RESTful API design',
        'experience.adbert.achievement2': '• Leveraged Redis and MongoDB for real-time event data handling and user segmentation',
        'experience.adbert.achievement3': '• Collaborated with analysts to generate user behavior insights from raw backend logs',
        'experience.educator.title': 'English & Math Educator',
        'experience.educator.company': 'Creativity Kindergarten & Creativity Cram School (Kaohsiung)',
        'experience.educator.period': 'Apr 2020 - Nov 2023',
        'experience.educator.achievement1': '• Designed modular lesson plans for early childhood and secondary education in English and Math',
        'experience.educator.achievement2': '• Utilized engineering mindset to develop curriculum maps and personalized learning systems',
        'experience.educator.achievement3': '• Performed performance analysis across cohorts using spreadsheets and visualizations',
        'experience.educator.achievement4': '• Completed coursework in early education methodologies and learning psychology',
        'experience.educator.achievement5': '• Maintained part-time coding skills through personal projects and online learning',
        
        // Skills Section
        'skills.title': 'Skills & Expertise',
        'skills.programming': 'Programming Languages',
        'skills.backend': 'Backend Engineering',
        'skills.testing': 'Testing Frameworks',
        'skills.tools': 'Infrastructure & DevOps',
        'skills.ai': 'AI & System Integration',
        'skills.ai.rag': 'RAG / LLM Integration',
        'skills.ai.semantic': 'Semantic Search / Doc Processing',
        'skills.ai.jni': 'JNI (Rust + Kotlin)',
        'skills.web': 'Frontend Technologies',
        'skills.certification': 'Certifications',
        'skills.cert1.title': 'Prompt Design in Vertex AI',
        'skills.cert1.issuer': 'Google Cloud Skills Boost',
        
        // Projects Section
        'projects.title': 'Projects',
        'projects.wms.title': 'Warehouse Management System (WMS)',
        'projects.wms.description': 'Built a production-grade WMS from the ground up, covering inventory tracking, inbound/outbound, order fulfillment, and logistics workflows.',
        'projects.rag.title': 'Enterprise Knowledge Retrieval (RAG)',
        'projects.rag.description': 'Built a Python-based RAG platform processing SOPs and manuals via ingestion, chunking, embedding, and semantic retrieval, integrated into the WMS AI assistant.',
        'projects.scan.title': 'Scan Review Project',
        'projects.scan.description': 'Developed document scanning and review system using PHP + Laravel to improve work efficiency and accuracy.',
        'projects.review.title': 'Product Review Project',
        'projects.review.description': 'Built product review management system using PHP + MySQL + Magento 2 with rating, reply, and statistical analysis features.',
        'projects.social.title': 'Social Login Module',
        'projects.social.description': 'Integrated Facebook, Line, Google and other social media login features to provide convenient user authentication experience.',
        'projects.linebot.title': 'LineBot + AI LLM Modal',
        'projects.linebot.description': 'Developed LineBot using Laravel framework combined with AI language model to provide intelligent conversation services.',
        'projects.linebot.docs': 'View Documentation',
        'projects.capstone.title': 'Capstone Project: Visual Assistance System',
        'projects.capstone.description': 'Developed image recognition mobile system to assist visually impaired users in identifying objects and environments.',
        
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
        
        // Contact Section
        'contact.title': 'Contact Information',
        'contact.subtitle': 'Let\'s Start Collaborating',
        'contact.description': 'If you are interested in my skills and experience, or have any projects to discuss, please feel free to contact me. I am happy to discuss how I can bring value to your projects.',
        'contact.email.label': 'Email',
        'contact.phone.label': 'Phone',
        'contact.github.label': 'GitHub',
        'contact.location.label': 'Location',
        'contact.location.value': 'New Taipei City, Taiwan',
        'contact.form.title': 'Send Message',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send Message',
        
        // Footer
        'footer.rights': 'All rights reserved.'
    },
    
    ko: {
        // Navigation
        'nav.about': '소개',
        'nav.experience': '경력',
        'nav.skills': '기술',
        'nav.projects': '프로젝트',
        'nav.education': '학력',
        'nav.contact': '연락처',
        
        // Hero Section
        'hero.greeting': '안녕하세요, 저는',
        'hero.title': 'Senior Software Engineer',
        'hero.description': '백엔드 시스템 • 풀스택 딜리버리 • AI 통합 • 인프라 운영',
        'hero.description2': '5년 이상의 경험을 가진 시니어 소프트웨어 엔지니어로, 확장 가능하고 안정적인 프로덕션급 시스템 구축에 집중합니다.',
        'hero.contact': '소개',
        'hero.projects': '프로젝트 보기',
        
        // About Section
        'about.title': '소개',
        'about.subtitle': '전문 배경',
        'about.description': '전자상거래, 창고 운영, 엔터프라이즈 애플리케이션 전반에 걸쳐 프로덕션급 시스템을 제공한 5년 이상의 경험을 가진 시니어 소프트웨어 엔지니어입니다. 백엔드 엔지니어링, 풀스택 딜리버리, 인프라 운영, AI 통합을 결합하여 비즈니스 요구사항을 확장 가능한 솔루션으로 전환하고 Linux 환경에서 시스템을 운영합니다.',
        'about.location': 'Taipei, Taiwan',
        'about.languages': '언어 능력',
        'about.chinese': '중국어',
        'about.native': '모국어',
        'about.english': '영어',
        'about.fluent': '유창함',
        'about.korean': '한국어',
        'about.readable': '읽기 및 말하기 가능',
        
        // Experience Section
        'experience.title': '경력',
        'experience.jtx.title': 'Senior Software Engineer',
        'experience.jtx.period': '2025년 8월 - 현재',
        'experience.jtx.achievement1': '• PHP (Laravel), Vue 3, MySQL, Redis를 사용하여 프로덕션급 창고 관리 시스템(WMS)을 처음부터 주도 개발',
        'experience.jtx.achievement2': '• 재고 추적, 입출고, 주문 처리, 물류 통합 등 시스템 모듈을 설계하고 백엔드와 프론트엔드 기능을 모두 제공',
        'experience.jtx.achievement3': '• Redis 큐와 비동기 처리를 활용한 확장 가능한 백엔드 서비스를 구축하고, 동시성 제어로 데이터 일관성 보장',
        'experience.jtx.achievement4': '• Python 기반 엔터프라이즈 지식 검색 플랫폼(RAG)을 개발하여 문서 수집, 청킹, 임베딩, 시맨틱 검색 파이프라인 구축',
        'experience.jtx.achievement5': '• AI 어시스턴트 기능을 WMS에 통합하여 사용자가 작업 환경을 벗어나지 않고 워크플로우 가이드를 얻을 수 있도록 함',
        'experience.jtx.achievement6': '• Docker와 Nginx로 애플리케이션 환경 및 리버스 프록시를 관리하고, JNI를 통해 Rust 모듈과 Kotlin 애플리케이션 통합',
        'experience.current.title': 'Full Stack Engineer',
        'experience.current.period': '2025년 5월 - 7월',
        'experience.current.achievement1': '• 바코드 스캐너와 통합된 출하 검증 시스템을 개발하여 창고 정확도를 높이고 출하 오류를 크게 감소',
        'experience.current.achievement2': '• 운영 팀과 긴밀히 협력하여 문제점을 파악하고 워크플로우 최적화',
        'experience.current.achievement3': '• 전달 속도와 장기적인 코드 품질의 균형을 맞춘 모듈형 애플리케이션 아키텍처 설계',
        'experience.current.achievement4': '• Docker와 Git 기반 워크플로우로 환경 전반의 배포 일관성 유지',
        'experience.current.achievement5': '• 워크스테이션 프로비저닝, 소프트웨어 설정, 부서 간 기술 지원 및 반복적인 내부 프로세스 자동화 지원',
        'experience.astral.title': 'Senior Backend Developer',
        'experience.astral.period': '2024년 2월 - 2025년 4월',
        'experience.astral.achievement1': '• 20개 이상의 Magento 2 모듈을 개발 및 유지보수하여 재사용 가능한 모듈형 구현으로 플랫폼 유지보수성 향상',
        'experience.astral.achievement2': '• 재사용 가능한 인증 및 소셜 로그인 솔루션을 구축하여 타사 구현에 대한 의존도 감소',
        'experience.astral.achievement3': '• 결제 제공업체, 메시징 시스템, 비즈니스 API를 통합하고 결제 경험과 백엔드 워크플로우 맞춤화',
        'experience.astral.achievement4': '• Docker 기반 개발 환경을 구현하고 GitHub Actions로 CI/CD 지원',
        'experience.astral.achievement5': '• Redis를 활용하여 애플리케이션 성능과 캐싱 전략을 개선하고 릴리스 일관성과 배포 품질 향상',
        'experience.twhg.title': '웹 개발자',
        'experience.twhg.period': '2018년 8월 - 2019년 5월',
        'experience.twhg.achievement1': '• 레거시 시스템을 Laravel 프레임워크로 마이그레이션',
        'experience.twhg.achievement2': '• MySQL을 사용한 부동산 관리 플랫폼 재구축',
        'experience.twhg.achievement3': '• 자동화된 상호작용을 위한 LineBot 생성 및 배포',
        'experience.adbert.title': '백엔드 엔지니어',
        'experience.adbert.period': '2017년 12월 - 2018년 7월',
        'experience.adbert.achievement1': '• Laravel과 RESTful API 설계를 사용한 통신 광고 플랫폼 백엔드 개발',
        'experience.adbert.achievement2': '• 실시간 이벤트 데이터 처리 및 사용자 세분화를 위한 Redis와 MongoDB 활용',
        'experience.adbert.achievement3': '• 원시 백엔드 로그에서 사용자 행동 인사이트 생성',
        'experience.educator.title': '영어 및 수학 교육자',
        'experience.educator.company': 'Creativity Kindergarten & Creativity Cram School (Kaohsiung)',
        'experience.educator.period': '2020년 4월 - 2023년 11월',
        'experience.educator.achievement1': '• 유아 및 중등 교육을 위한 모듈형 영어 및 수학 수업 계획 설계',
        'experience.educator.achievement2': '• 커리큘럼 맵과 개인화된 학습 시스템 개발을 위한 엔지니어링 사고 활용',
        'experience.educator.achievement3': '• 스프레드시트와 시각화를 사용한 코호트 간 성과 분석 수행',
        'experience.educator.achievement4': '• 조기 교육 방법론 및 학습 심리학 과정 완료',
        'experience.educator.achievement5': '• 개인 프로젝트와 온라인 학습을 통한 파트타임 코딩 기술 유지',
        
        // Skills Section
        'skills.title': '기술 및 전문성',
        'skills.programming': '프로그래밍 언어',
        'skills.backend': '백엔드 엔지니어링',
        'skills.testing': '테스트 프레임워크',
        'skills.tools': '인프라 및 DevOps',
        'skills.ai': 'AI 및 시스템 통합',
        'skills.ai.rag': 'RAG / LLM 통합',
        'skills.ai.semantic': '시맨틱 검색 / 문서 처리',
        'skills.ai.jni': 'JNI (Rust + Kotlin)',
        'skills.web': '프론트엔드 기술',
        'skills.certification': '자격증',
        'skills.cert1.title': 'Prompt Design in Vertex AI',
        'skills.cert1.issuer': 'Google Cloud Skills Boost',
        
        // Projects Section
        'projects.title': '프로젝트',
        'projects.wms.title': '창고 관리 시스템 (WMS)',
        'projects.wms.description': '재고 추적, 입출고, 주문 처리, 물류 워크플로우를 다루는 프로덕션급 창고 관리 시스템을 처음부터 구축했습니다.',
        'projects.rag.title': '엔터프라이즈 지식 검색 (RAG)',
        'projects.rag.description': 'Python 기반 RAG 플랫폼을 구축하여 SOP와 매뉴얼의 수집, 청킹, 임베딩, 시맨틱 검색을 처리하고 WMS AI 어시스턴트에 통합했습니다.',
        'projects.scan.title': '스캔 검토 프로젝트',
        'projects.scan.description': 'PHP + Laravel을 사용하여 문서 스캔 및 검토 시스템을 개발하여 작업 효율성과 정확성을 향상시켰습니다.',
        'projects.review.title': '상품 리뷰 프로젝트',
        'projects.review.description': 'PHP + MySQL + Magento 2를 사용하여 평점, 답변 및 통계 분석 기능이 포함된 상품 리뷰 관리 시스템을 구축했습니다.',
        'projects.social.title': '소셜 로그인 모듈',
        'projects.social.description': 'Facebook, Line, Google 및 기타 소셜 미디어 로그인 기능을 통합하여 편리한 사용자 인증 경험을 제공합니다.',
        'projects.linebot.title': 'LineBot + AI LLM Modal',
        'projects.linebot.description': 'Laravel 프레임워크를 사용하여 LineBot을 개발하고 AI 언어 모델과 결합하여 지능형 대화 서비스를 제공합니다.',
        'projects.linebot.docs': '문서 보기',
        'projects.capstone.title': '졸업 프로젝트: 시각 보조 시스템',
        'projects.capstone.description': '시각 장애 사용자가 물체와 환경을 식별하는 데 도움이 되는 이미지 인식 모바일 시스템을 개발했습니다.',
        
        // Education Section
        'education.title': '학력',
        'education.degree2': '유아교육과 (2년제)',
        'education.school2': '가남약리대학',
        'education.period2': '2021 - 2023',
        'education.degree': '정보관리학 학사',
        'education.school': '국립고雄대학교',
        'education.location': '대만',
        'education.period': '2013 - 2017',
        'education.capstone.title': '졸업 프로젝트',
        'education.capstone.description': '시각 장애 사용자가 물체와 환경을 식별하는 데 도움이 되는 이미지 인식 모바일 시스템을 개발했습니다. 머신 러닝과 컴퓨터 비전 기술을 적용하여 시각 장애인을 위한 실용적인 보조 도구를 제공합니다.',
        
        // Contact Section
        'contact.title': '연락처 정보',
        'contact.subtitle': '협업을 시작해보겠습니다',
        'contact.description': '제 기술과 경험에 관심이 있거나 논의할 프로젝트가 있다면 언제든지 연락해 주세요. 귀하의 프로젝트에 가치를 가져올 수 있는 방법에 대해 논의하는 것을 기쁘게 생각합니다.',
        'contact.email.label': '이메일',
        'contact.phone.label': '전화',
        'contact.github.label': 'GitHub',
        'contact.location.label': '위치',
        'contact.location.value': 'New Taipei City, Taiwan',
        'contact.form.title': '메시지 보내기',
        'contact.form.name': '이름',
        'contact.form.email': '이메일',
        'contact.form.message': '메시지',
        'contact.form.submit': '메시지 보내기',
        
        // Footer
        'footer.rights': '모든 권리 보유.'
    }
};

// Current language
let currentLang = 'zh';

// DOM elements
const langButtons = document.querySelectorAll('.lang-btn');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeMobileMenu();
    initializeScrollAnimations();

    initializeScrollIndicator();
    initializeSmoothScrolling();
});

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
            element.textContent = translations[lang][key];
        }
    });
    
    // Update document title
    document.title = lang === 'zh' ? '林書弘 Damian Lin - Senior Software Engineer' : 
                    lang === 'en' ? 'Damian Lin - Senior Software Engineer' : 
                    'Damian Lin (林書弘) - Senior Software Engineer';
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

// Add hover effects to project cards
document.querySelectorAll('.bg-white').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

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

window.addEventListener('scroll', debouncedScrollHandler); 