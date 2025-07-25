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
        'hero.title': '資深後端工程師',
        'hero.description': '熟悉PHP, Python的後端工程師，也具有前端基礎技術包含HTML, JS JQuery等。專注於建立高效能、可擴展的網路應用程式。',
        'hero.contact': '關於我',
        'hero.projects': '查看作品',
        
        // About Section
        'about.title': '關於我',
        'about.subtitle': '專業背景',
        'about.description': '我是一名資深的後端工程師，擁有豐富的PHP和Python開發經驗。專注於建立高效能、可擴展的網路應用程式，並具備完整的前端技術基礎。',
        'about.location': 'New Taipei City, Taiwan',
        'about.languages': '語言能力',
        'about.chinese': '中文',
        'about.native': '母語',
        'about.english': '英文',
        'about.fluent': '精通',
        'about.korean': '韓文',
        'about.readable': '可讀可說',
        
        // Experience Section
        'experience.title': '工作經驗',
        'experience.current.title': 'Full Stack Engineer',
        'experience.current.period': 'May 2025 - Present',
        'experience.current.achievement1': '• 使用 PHP + Laravel + Python 技術棧進行全端開發',
        'experience.current.achievement2': '• 自行開發 Python 工具，自動建立或更新 VSCode 的 SFTP 設定，簡化遠端部署流程',
        'experience.current.achievement3': '• 開發企業內部「出貨覆核管理系統」，結合掃描槍操作流程，提升出貨效率與準確性',
        'experience.current.achievement4': '• 設計功能模組化架構，提升程式維護性與擴充彈性',
        'experience.current.achievement5': '• 導入 Git 版本控制並整合 Docker 容器化部署',
        'experience.current.achievement6': '• 系統成功上線後，出貨錯誤率降低超過 50%，顯著優化作業流程',
        'experience.astral.title': '資深後端工程師',
        'experience.astral.period': 'Feb 2024 - Apr 2025',
        'experience.astral.achievement1': '• 主導開發 20+ 模組化功能於高流量 Magento 2 電商系統，優化可擴展性和可維護性',
        'experience.astral.achievement2': '• 設計並實作可重用的 OAuth 社交登入模組，顯著降低第三方依賴成本',
        'experience.astral.achievement3': '• 與基礎設施團隊協作，透過 Docker 容器化服務並實作 GitHub Actions CI/CD 流程',
        'experience.astral.achievement4': '• 使用 Magento 2 原生 cron 功能自動化排程任務，整合簡訊閘道等第三方 API',
        'experience.astral.achievement5': '• 整合 Redis 速率限制和快取層，確保系統在高峰負載時的穩定性，關鍵端點延遲降低 30%',
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
        'skills.testing': '測試框架',
        'skills.tools': '開發工具',
        'skills.api': 'API 技術',
        'skills.web': '前端技術',
        'skills.certification': '認證',
        'skills.cert1.title': 'Prompt Design in Vertex AI',
        'skills.cert1.issuer': 'Google Cloud Skills Boost',
        
        // Projects Section
        'projects.title': '專案作品',
        'projects.scan.title': '掃描覆核專案',
        'projects.scan.description': '使用 PHP + Laravel 開發文件掃描和覆核系統，提升工作效率和準確性。',
        'projects.review.title': '商品評論專案',
        'projects.review.description': '使用 PHP + MySQL + Magento 2 建立商品評論管理系統，包含評分、回覆和統計分析功能。',
        'projects.social.title': 'Social Login模組',
        'projects.social.description': '整合 Facebook、Line、Google 等多種社交媒體登入功能，提供便捷的用戶認證體驗。',
        'projects.linebot.title': 'LineBot + AI LLM Modal',
        'projects.linebot.description': '使用 Laravel 框架開發 LineBot，結合 AI 語言模型，提供智能對話服務。',
        'projects.capstone.title': '畢業專案：視覺輔助系統',
        'projects.capstone.description': '開發圖像識別行動系統，協助視障用戶識別物體和環境。',
        
        // Education Section
        'education.title': '教育背景',
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
        'hero.title': 'Senior PHP Developer',
        'hero.description': 'Backend engineer proficient in PHP and Python, with solid foundation in frontend technologies including HTML, JS, jQuery. Focused on building high-performance, scalable web applications.',
        'hero.contact': 'About Me',
        'hero.projects': 'View Projects',
        
        // About Section
        'about.title': 'About Me',
        'about.subtitle': 'Professional Background',
        'about.description': 'I am a senior backend engineer with extensive experience in PHP and Python development. Focused on building high-performance, scalable web applications with solid frontend technology foundation.',
        'about.location': 'New Taipei City, Taiwan',
        'about.languages': 'Language Skills',
        'about.chinese': 'Chinese',
        'about.native': 'Native',
        'about.english': 'English',
        'about.fluent': 'Fluent',
        'about.korean': 'Korean',
        'about.readable': 'Readable & Speakable',
        
        // Experience Section
        'experience.title': 'Work Experience',
        'experience.current.title': 'Full Stack Engineer',
        'experience.current.period': 'May 2025 - Present',
        'experience.current.achievement1': '• Full-stack development using PHP + Laravel + Python technology stack',
        'experience.current.achievement2': '• Developed custom Python tools to automatically create or update VSCode SFTP settings, streamlining remote deployment processes',
        'experience.current.achievement3': '• Developed enterprise internal "Shipping Review Management System" with barcode scanner integration, improving shipping efficiency and accuracy',
        'experience.current.achievement4': '• Designed modular functional architecture to enhance code maintainability and scalability',
        'experience.current.achievement5': '• Implemented Git version control and integrated Docker containerization for deployment',
        'experience.current.achievement6': '• After system launch, shipping error rate reduced by over 50%, significantly optimizing workflow and reducing human errors',
        'experience.astral.title': 'Senior Backend Engineer',
        'experience.astral.period': 'Feb 2024 - Apr 2025',
        'experience.astral.achievement1': '• Led development of 20+ modular features in high-traffic Magento 2 e-commerce system, optimizing for scalability and maintainability',
        'experience.astral.achievement2': '• Designed and implemented reusable OAuth-based social login module, significantly reducing third-party dependency costs',
        'experience.astral.achievement3': '• Collaborated with infrastructure team to containerize services via Docker and implement GitHub Actions CI/CD pipelines',
        'experience.astral.achievement4': '• Automated scheduled tasks in Magento 2 using native cron features and integrated third-party APIs such as SMS gateway services',
        'experience.astral.achievement5': '• Integrated Redis-based rate limiting and caching layers, ensuring system resilience during peak loads with up to 30% latency reduction on key endpoints',
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
        'skills.testing': 'Testing Frameworks',
        'skills.tools': 'Development Tools',
        'skills.api': 'API Technologies',
        'skills.web': 'Frontend Technologies',
        'skills.certification': 'Certifications',
        'skills.cert1.title': 'Prompt Design in Vertex AI',
        'skills.cert1.issuer': 'Google Cloud Skills Boost',
        
        // Projects Section
        'projects.title': 'Projects',
        'projects.scan.title': 'Scan Review Project',
        'projects.scan.description': 'Developed document scanning and review system using PHP + Laravel to improve work efficiency and accuracy.',
        'projects.review.title': 'Product Review Project',
        'projects.review.description': 'Built product review management system using PHP + MySQL + Magento 2 with rating, reply, and statistical analysis features.',
        'projects.social.title': 'Social Login Module',
        'projects.social.description': 'Integrated Facebook, Line, Google and other social media login features to provide convenient user authentication experience.',
        'projects.linebot.title': 'LineBot + AI LLM Modal',
        'projects.linebot.description': 'Developed LineBot using Laravel framework combined with AI language model to provide intelligent conversation services.',
        'projects.capstone.title': 'Capstone Project: Visual Assistance System',
        'projects.capstone.description': 'Developed image recognition mobile system to assist visually impaired users in identifying objects and environments.',
        
        // Education Section
        'education.title': 'Education',
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
        'hero.title': '시니어 PHP 개발자',
        'hero.description': 'PHP와 Python에 능숙한 백엔드 엔지니어로, HTML, JS, jQuery 등 프론트엔드 기술 기반을 갖추고 있습니다. 고성능, 확장 가능한 웹 애플리케이션 구축에 중점을 둡니다.',
        'hero.contact': '소개',
        'hero.projects': '프로젝트 보기',
        
        // About Section
        'about.title': '소개',
        'about.subtitle': '전문 배경',
        'about.description': 'PHP와 Python 개발에 풍부한 경험을 가진 시니어 백엔드 엔지니어입니다. 고성능, 확장 가능한 웹 애플리케이션 구축에 중점을 두며 견고한 프론트엔드 기술 기반을 갖추고 있습니다.',
        'about.location': 'New Taipei City, Taiwan',
        'about.languages': '언어 능력',
        'about.chinese': '중국어',
        'about.native': '모국어',
        'about.english': '영어',
        'about.fluent': '유창함',
        'about.korean': '한국어',
        'about.readable': '읽기 및 말하기 가능',
        
        // Experience Section
        'experience.title': '경력',
        'experience.current.title': 'Full Stack Engineer',
        'experience.current.period': '2025년 5월 - 현재',
        'experience.current.achievement1': '• PHP + Laravel + Python 기술 스택을 사용한 풀스택 개발',
        'experience.current.achievement2': '• VSCode SFTP 설정을 자동으로 생성하거나 업데이트하는 Python 도구 개발',
        'experience.current.achievement3': '• 바코드 스캐너 통합으로 기업 내부 "출하 검토 관리 시스템" 개발',
        'experience.current.achievement4': '• 코드 유지보수성과 확장성을 향상시키는 모듈형 기능 아키텍처 설계',
        'experience.current.achievement5': '• Git 버전 관리 구현 및 Docker 컨테이너화 배포 통합',
        'experience.current.achievement6': '• 시스템 출시 후 출하 오류율 50% 이상 감소',
        'experience.astral.title': '시니어 백엔드 엔지니어',
        'experience.astral.period': '2024년 2월 - 2025년 4월',
        'experience.astral.achievement1': '• 고트래픽 Magento 2 전자상거래 시스템에서 20+ 모듈형 기능 개발',
        'experience.astral.achievement2': '• 재사용 가능한 OAuth 기반 소셜 로그인 모듈 설계 및 구현',
        'experience.astral.achievement3': '• Docker를 통한 서비스 컨테이너화 및 GitHub Actions CI/CD 파이프라인 구현',
        'experience.astral.achievement4': '• Magento 2 네이티브 cron 기능을 사용한 자동화된 예약 작업',
        'experience.astral.achievement5': '• Redis 기반 속도 제한 및 캐싱 레이어 통합',
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
        'skills.testing': '테스트 프레임워크',
        'skills.tools': '개발 도구',
        'skills.api': 'API 기술',
        'skills.web': '프론트엔드 기술',
        'skills.certification': '자격증',
        'skills.cert1.title': 'Prompt Design in Vertex AI',
        'skills.cert1.issuer': 'Google Cloud Skills Boost',
        
        // Projects Section
        'projects.title': '프로젝트',
        'projects.scan.title': '스캔 검토 프로젝트',
        'projects.scan.description': 'PHP + Laravel을 사용하여 문서 스캔 및 검토 시스템을 개발하여 작업 효율성과 정확성을 향상시켰습니다.',
        'projects.review.title': '상품 리뷰 프로젝트',
        'projects.review.description': 'PHP + MySQL + Magento 2를 사용하여 평점, 답변 및 통계 분석 기능이 포함된 상품 리뷰 관리 시스템을 구축했습니다.',
        'projects.social.title': '소셜 로그인 모듈',
        'projects.social.description': 'Facebook, Line, Google 및 기타 소셜 미디어 로그인 기능을 통합하여 편리한 사용자 인증 경험을 제공합니다.',
        'projects.linebot.title': 'LineBot + AI LLM Modal',
        'projects.linebot.description': 'Laravel 프레임워크를 사용하여 LineBot을 개발하고 AI 언어 모델과 결합하여 지능형 대화 서비스를 제공합니다.',
        'projects.capstone.title': '졸업 프로젝트: 시각 보조 시스템',
        'projects.capstone.description': '시각 장애 사용자가 물체와 환경을 식별하는 데 도움이 되는 이미지 인식 모바일 시스템을 개발했습니다.',
        
        // Education Section
        'education.title': '학력',
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
    document.title = lang === 'zh' ? '林書弘 - Senior PHP Developer' : 
                    lang === 'en' ? 'Shu-Hong Lin - Senior PHP Developer' : 
                    '임서홍 - Senior PHP Developer';
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

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
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