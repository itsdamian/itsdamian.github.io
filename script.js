// Split-screen ("Front vs Back") portfolio. Long-form copy lives in i18n.js
// (`translations`); the strings below are only what this layout adds.

const EXTRA = {
    zh: {
        skip: '跳到內容', 'nav.index': '首頁', 'nav.work': '作品', 'nav.experience2': '經歷', 'nav.about2': '關於', 'nav.contact': '聯絡',
        'hero.l1': '每個<em>系統</em>', 'hero.l2': '都有<em>兩面</em>…', 'hero.l1b': '我負責', 'hero.l2b': '<em>兩面</em>。',
        'hero.c1': '多數工程師<em>只選一邊</em>。', 'hero.c2': '這一位，<em>兩邊都扛</em>。',
        front: '前端', back: '後端', scroll: '往下滑', skipstory: '跳過開場',
        'nav.factory': '工廠',
        's02.k': '街道', 's02.h': '前台，是使用者看得到的。', 'hint.side': '← 左右滑動 →',
        'sf.k': '工廠', 'sf.h': '幕後，<em>是一座工廠。</em>', 'sf.hint': '往下滑，輸送帶會橫向移動', 'sf.shipped': '已出貨',
        'type.system': '系統', 'type.wip': '開發中', 'sf.wip': '開發中', 'type.stream': '即時串流', 'type.bot': 'LINE Bot', 'type.research': '研究', 'type.pipeline': '管線', 'type.tool': '工具', 'type.personal': '個人專案', 'type.more': '更多',
        'sf.d.wcs': '連接 WMS 與 PLC 的倉儲控制系統，支援 Siemens S7-1500 與 Mitsubishi SLMP。',
        'sf.d.rag': '不依賴框架的 RAG 檢索研究系統，與 GraphRAG、LightRAG、Self-RAG 做系統性比較。',
        'sf.d.pipeline': 'OCR → 摘要 → 向量化 → 向量資料庫的文件處理管線，含 chunk 級去重。',
        'sf.d.scan': '整合 composer audit、npm audit、gitleaks、semgrep、enlightn 的資安掃描腳本。',
        'sf.d.agents': '視覺化 PM / SWE / QA / DevOps AI agent 協作的多代理開發平台（個人專案）。',
        'sf.d.cube': '即時比特幣儀表板：Coinbase / Kraken WebSocket → Kafka Streams K 線 → SSE → React，主備來源自動切換，k3d + Argo CD GitOps。',
        'sf.d.linebot': 'LINE Bot 微服務架構，整合 OpenAI 與 Gemini，支援文字對話與圖片辨識。',
        'sf.d.laravelbot': 'Laravel 的 LINE Bot，串接 OpenAI / Gemini，採 Service / Repository 分層。',
        'sf.d.jobagent': '個人求職 Agent：以經歷資料庫為唯一事實來源（RAG）評估職缺適配度並產出可追溯的客製履歷。PostgreSQL + pgvector、BGE-M3，開發中。',
        'sf.d.github': '更多程式碼在 GitHub。',
        'sc.k': '經歷', 'sc.h': '走過的地方。', 'job.more': '展開全部', 'job.badge': '現任',
        's04.k': '引擎蓋下', 's04.h': '引擎蓋下是誰？', p1: 'Player 1', open: '尋找 FDE 機會',
        'fact.since': '開始交付', 'fact.clients': '企業客戶', 'fact.layers': '技術層', 'fact.based': '所在地', 'fact.basedv': '台北',
        's05.k': '裝備', 's05.h': '挑一個技術層。', 's05.p': '點選左側任一層，查看細節',
        'cta.h': '一起把整個系統做完。', 'cta.btn': '寄信聊聊', 'foot.touch': '聯絡我', top: '回到頂端'
    },
    en: {
        skip: 'Skip to content', 'nav.index': 'Index', 'nav.work': 'Work', 'nav.experience2': 'Experience', 'nav.about2': 'About', 'nav.contact': 'Contact',
        'hero.l1': 'Every <em>system</em>', 'hero.l2': 'has two <em>sides</em>…', 'hero.l1b': 'I build', 'hero.l2b': '<em>both</em> sides.',
        'hero.c1': 'Most engineers <em>pick a side.</em>', 'hero.c2': 'This one <em>carries both.</em>',
        front: 'Front', back: 'Back', scroll: 'Scroll down', skipstory: 'Skip the story',
        'nav.factory': 'Factory',
        's02.k': 'The street', 's02.h': 'The front is what people see.', 'hint.side': '← Scroll sideways →',
        'sf.k': 'The factory', 'sf.h': 'Behind the shops, <em>a factory.</em>', 'sf.hint': 'Scroll down, the belt moves sideways', 'sf.shipped': 'shipped',
        'type.system': 'System', 'type.wip': 'In progress', 'sf.wip': 'In progress', 'type.stream': 'Streaming', 'type.bot': 'LINE Bot', 'type.research': 'Research', 'type.pipeline': 'Pipeline', 'type.tool': 'Tool', 'type.personal': 'Personal', 'type.more': 'More',
        'sf.d.wcs': 'Warehouse control system bridging the WMS and PLCs; Siemens S7-1500 and Mitsubishi SLMP.',
        'sf.d.rag': 'Framework-free RAG research system, benchmarked against GraphRAG, LightRAG and Self-RAG.',
        'sf.d.pipeline': 'OCR → summary → embedding → vector DB document pipeline with chunk-level dedup.',
        'sf.d.scan': 'Security scan script combining composer audit, npm audit, gitleaks, semgrep and enlightn.',
        'sf.d.agents': 'Multi-agent dev platform visualizing PM / SWE / QA / DevOps AI agents at work (personal project).',
        'sf.d.cube': 'Live BTC dashboard: Coinbase / Kraken WebSocket → Kafka Streams candles → SSE → React, automatic primary/standby failover, k3d + Argo CD GitOps.',
        'sf.d.linebot': 'LINE Bot microservices integrating OpenAI and Gemini for text chat and image recognition.',
        'sf.d.laravelbot': 'Laravel LINE bot on OpenAI / Gemini with a Service / Repository architecture.',
        'sf.d.jobagent': 'Personal job-search agent: a grounded RAG over my own experience scores job fit and writes traceable tailored resumes. PostgreSQL + pgvector, BGE-M3; in development.',
        'sf.d.github': 'More code on GitHub.',
        'sc.k': 'Career', 'sc.h': 'Where I have worked.', 'job.more': 'Show all', 'job.badge': 'Current',
        's04.k': 'Under the hood', 's04.h': 'Who is under the hood?', p1: 'Player 1', open: 'Open to FDE roles',
        'fact.since': 'Shipping since', 'fact.clients': 'Enterprise clients', 'fact.layers': 'Stack layers', 'fact.based': 'Based in', 'fact.basedv': 'Taipei',
        's05.k': 'Loadout', 's05.h': 'Choose your layer.', 's05.p': 'Pick a layer on the left to see the details',
        'cta.h': "Let's build the whole thing.", 'cta.btn': 'Start a conversation', 'foot.touch': 'Get in touch', top: 'Back to top'
    }
};

const JOBS = [
    { id: 'jtx', co: 'JTX Corp.', n: 9, current: true },
    { id: 'current', co: 'YFLD Health Co., Ltd', n: 3 },
    { id: 'astral', co: 'AstralWeb Taiwan', n: 5, period: 'experience.astral.period.short' },
    { id: 'educator', coKey: 'experience.educator.company', n: 2 },
    { id: 'twhg', co: 'TWHG IT Department', n: 3 },
    { id: 'adbert', co: 'ADBERT', n: 3 }
];

const LAYERS = [
    ['skills.ai', [['RAG', 'skills.note.rag'], ['skills.tag.llm'], ['sentence-transformers', 'skills.note.sbert'], ['BGE-large-zh-v1.5'], ['ChromaDB', 'skills.note.chromadb'], ['skills.tag.ragas'], ['LLM-as-judge'], ['Cursor'], ['Claude Code'], ['AWS Kiro']]],
    ['skills.backend', [['Kafka', 'skills.note.kafka'], ['Kafka Streams'], ['SSE'], ['Laravel'], ['Magento 2'], ['FastAPI', 'skills.note.fastapi'], ['Celery', 'skills.note.celery'], ['Node.js'], ['RESTful API'], ['MVC'], ['Redis Queue', 'skills.note.redisqueue'], ['skills.tag.async'], ['skills.tag.concurrency'], ['skills.tag.distributed'], ['MySQL'], ['PostgreSQL', 'skills.note.pgvector'], ['MongoDB'], ['Oracle'], ['MSSQL'], ['Redis']]],
    ['skills.programming', [['Python'], ['PHP'], ['JavaScript'], ['Java', 'skills.note.java'], ['TypeScript'], ['SQL'], ['Rust'], ['Kotlin', 'skills.note.kotlin']]],
    ['skills.tools', [['Docker', 'skills.note.docker'], ['Linux'], ['Nginx'], ['Git'], ['Kubernetes', 'skills.note.k8s'], ['Argo CD'], ['Prometheus / Grafana'], ['GitHub Actions CI/CD', 'skills.note.githubactions'], ['Cloudflare DNS'], ['AWS'], ['GCP'], ['Azure'], ['Vultr']]],
    ['skills.web', [['Vue 3'], ['React', 'skills.note.react'], ['JavaScript'], ['HTML'], ['CSS']]],
    ['skills.hardware', [['skills.tag.barcode'], ['OpenCV'], ['pyzbar'], ['skills.tag.zpl'], ['PLC'], ['WES'], ['WCS'], ['AGV'], ['MQTT', 'skills.note.mqtt'], ['skills.tag.erp'], ['JNI (Rust + Kotlin)', 'skills.note.jni']]],
    ['skills.testing', [['Pytest'], ['PHPUnit'], ['skills.sast']]]
];

// The street: what operators and customers touch.
const PROJECTS = [
    { id: 'wms', featured: true, tags: ['PHP', 'Laravel', 'Vue 3', 'MySQL', 'Oracle', 'Redis'], stats: [['3', 'stat1'], ['<5%', 'stat3'], ['-30%', 'stat4'], ['-70%', 'stat5']] },
    { id: 'assistant', featured: true, tags: ['PHP', 'Laravel', 'LLM', 'Ollama'] },
    { id: 'lms', tags: ['FastAPI', 'Vue 3', 'ZPL', 'Konva'] },
    { id: 'android', tags: ['Kotlin', 'Rust', 'JNI', 'actix-web'] }
];

// The factory: the machinery behind them. One box per project, plus a link-out box.
const BELT = [
    { id: 'cube', name: 'cube_test', type: 'stream', repo: 'https://github.com/itsdamian/cube_test' },
    { id: 'wcs', name: 'WCS', type: 'system' },
    { id: 'rag', name: 'SOP-LLM', type: 'research' },
    { id: 'pipeline', name: 'doc-pipeline', type: 'pipeline' },
    { id: 'linebot', name: 'line_genai_services', type: 'bot', repo: 'https://github.com/itsdamian/line_genai_services' },
    { id: 'laravelbot', name: 'new_gen_PDA', type: 'bot', repo: 'https://github.com/itsdamian/new_gen_PDA' },
    { id: 'scan', name: 'security-scan', type: 'tool' },
    { id: 'agents', name: 'agent-factory', type: 'personal' },
    { id: 'jobagent', name: 'job-agent', type: 'wip', wip: true },
    { id: 'github', name: 'GitHub ↗', type: 'more', href: 'https://github.com/itsdamian' }
];
const SHIPPABLE = BELT.filter(b => !b.href && !b.wip).length;

const TERM_LINES = [
    ['$ docker compose up -d', ''],
    ['✔ laravel · redis · mysql', 'ok'],
    ['$ curl /api/health', ''],
    ['HTTP/2 200', 'ok'],
    ['$ celery -A wcs worker', '']
];

let lang = 'zh';
try { lang = localStorage.getItem('lang') || 'zh'; } catch (e) {}

const t = key => (EXTRA[lang][key] ?? translations[lang][key] ?? translations.zh[key] ?? key);
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
let layerIdx = 2;

// ------------------------------------------------------------ render
function renderStatic() {
    $$('[data-i]').forEach(el => { el.innerHTML = t(el.dataset.i); });
    $('#lang-btn').textContent = lang === 'zh' ? 'EN' : '中';
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
}

function renderStrip() {
    $('#strip').innerHTML = PROJECTS.map((p, i) => `<article class="proj${p.featured ? ' featured' : ''}" role="listitem">
        <div class="proj-no"><span>${String(i + 1).padStart(2, '0')}</span><span>${p.featured ? t('projects.featured.badge') : ''}</span></div>
        <h3>${t(`projects.${p.id}.title`)}</h3>
        ${p.stats ? `<div class="stats">${p.stats.map(([n, k]) => `<div class="stat"><b>${n}</b><span>${t(`projects.wms.${k}`)}</span></div>`).join('')}</div>` : ''}
        <p>${t(`projects.${p.id}.description`)}</p>
        <div class="chips">${p.tags.map(x => `<span>${x}</span>`).join('')}</div></article>`).join('');
    updateCount();
}

function renderJobs() {
    $('#jobs').innerHTML = JOBS.map(j => {
        const lis = Array.from({ length: j.n }, (_, i) => `<li>${t(`experience.${j.id}.achievement${i + 1}`)}</li>`);
        const head = lis.slice(0, 3).join('');
        const rest = lis.slice(3).join('');
        return `<li class="job">
            <div class="job-meta"><span class="period">${t(j.period || `experience.${j.id}.period`)}</span></div>
            <div><h3>${j.coKey ? t(j.coKey) : j.co}${j.current ? `<span class="badge">${t('job.badge')}</span>` : ''}</h3>
            <p class="jr">${t(`experience.${j.id}.title`)}</p>
            <ul>${head}</ul>
            ${rest ? `<details><summary>${t('job.more')} +${j.n - 3}</summary><ul>${rest}</ul></details>` : ''}</div></li>`;
    }).join('');
}

function renderFacts() {
    $('#facts').innerHTML = [['fact.since', '2017'], ['fact.clients', '3'], ['fact.layers', String(LAYERS.length)], ['fact.based', t('fact.basedv')]]
        .map(([k, v]) => `<div><dt>${t(k)}</dt><dd>${v}</dd></div>`).join('');
}

function renderStack() {
    $('#picker').innerHTML = LAYERS.map(([title], i) =>
        `<li><button type="button" data-layer="${i}" aria-pressed="${i === layerIdx}"><span>L0${i + 1}</span>${t(title)}</button></li>`).join('');
    const [title, items] = LAYERS[layerIdx];
    $('#detail').innerHTML = `<p class="k">L0${layerIdx + 1}</p><h3>${t(title)}</h3><div class="chips">${items.map(([label, note]) => {
        const text = label.startsWith('skills.') ? t(label) : label;
        return `<span>${text}${note ? `<small class="note">${t(note)}</small>` : ''}</span>`;
    }).join('')}</div>`;
}

function renderExtra() {
    $('#certs').innerHTML = [1, 2, 3].map(n => `<li>${t(`skills.cert${n}.title`)}<small>${t(`skills.cert${n}.issuer`)}</small></li>`).join('');
    $('#edu').innerHTML = [
        ['CNU.svg', 'education.degree2', 'education.school2', 'education.period2'],
        ['NUK.jpg', 'education.degree', 'education.school', 'education.period']
    ].map(([img, d, s, p]) => `<li><img src="${img}" alt=""><div><b>${t(s)}</b>${t(d)}<small>${t(p)}</small></div></li>`).join('');
}

// ---- factory: boxes ride a belt that is driven by scroll progress through a tall, pinned section
const beltSec = $('#factory');
const boxesEl = $('#boxes');
const bandEl = $('#band');
const pressEl = $('#press');
const CODE_ICON = '<svg viewBox="0 0 48 28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4 3 14l11 10M34 4l11 10-11 10M28 2 20 26"/></svg>';
const B = { travel: 1, x0: 0, cx: 0, step: 0, bw: 0, active: -1, shipped: -1 };
let staticBelt = reduced;
let gears = [];

function gearPath(teeth, outer, inner) {
    const pts = [];
    for (let i = 0; i < teeth; i++) {
        const a = (i / teeth) * Math.PI * 2, w = Math.PI / teeth;
        [[a - w * .5, inner], [a - w * .28, outer], [a + w * .28, outer], [a + w * .5, inner]].forEach(([ang, r]) => pts.push(`${(50 + r * Math.cos(ang)).toFixed(1)},${(50 + r * Math.sin(ang)).toFixed(1)}`));
    }
    return `M${pts.join('L')}Z M50,32a18,18 0 1,0 .01,0Z`;
}

function buildGears() {
    const scene = $('#scene');
    const defs = [
        { teeth: 12, size: 170, left: '4%', speed: 1 },
        { teeth: 9, size: 100, left: '15%', speed: -1.7 },
        { teeth: 14, size: 140, right: '9%', speed: 1.3 }
    ];
    defs.forEach(d => {
        const el = document.createElement('div');
        el.className = 'gear';
        el.style.cssText = `width:${d.size}px;height:${d.size}px;bottom:calc(var(--floor) - 12px);${d.left ? `left:${d.left}` : `right:${d.right}`}`;
        el.innerHTML = `<svg viewBox="0 0 100 100" width="100%" height="100%"><path fill="currentColor" fill-rule="evenodd" d="${gearPath(d.teeth, 48, 38)}"/></svg>`;
        scene.appendChild(el);
        gears.push({ el, speed: d.speed });
    });
}

function renderBelt() {
    boxesEl.innerHTML = BELT.map((b, i) => {
        const faces = `<span class="face raw">${CODE_ICON}<span class="box-name">${b.name}</span><span class="box-type">${t(`type.${b.type}`)}</span></span>
            <span class="face done"><i class="hazard"></i>
                <span class="done-body"><span class="d-by">Damian /</span><span class="d-name">${b.name}</span><span class="d-desc">${t(`sf.d.${b.id}`)}</span></span>
                <span class="d-foot">${t(`type.${b.type}`)}${b.repo ? ' · GitHub ↗' : ''}</span>${b.href ? '' : `<span class="stamp${b.wip ? ' wip' : ''}">${t(b.wip ? 'sf.wip' : 'sf.shipped')}</span>`}</span>`;
        const url = b.href || b.repo;
        const hit = url
            ? `<a class="box-in" href="${url}" target="_blank" rel="noopener">${faces}</a>`
            : `<button class="box-in" type="button">${faces}</button>`;
        return `<li class="box" data-n="${i}">${hit}<p class="box-desc">${t(`sf.d.${b.id}`)}</p></li>`;
    }).join('');
    $('#shipped-total').textContent = String(SHIPPABLE).padStart(2, '0');
    layoutBelt();
}

function layoutBelt() {
    beltSec.classList.toggle('static', staticBelt);
    if (staticBelt) { beltSec.style.height = ''; return; }
    const boxes = $$('.box', boxesEl);
    if (!boxes.length) return;
    B.bw = boxes[0].offsetWidth;
    B.step = B.bw + Math.round(B.bw * 0.4);
    boxes.forEach((b, i) => { b.style.left = `${i * B.step}px`; });
    B.cx = innerWidth / 2;
    B.x0 = B.cx + 60;
    B.travel = 60 + (boxes.length - 1) * B.step + B.bw / 2;
    beltSec.style.height = `${$('.belt-pin').offsetHeight + B.travel}px`;
    B.active = B.shipped = -1;
    updateBelt();
}

function updateBelt() {
    if (staticBelt) return;
    const p = Math.min(1, Math.max(0, -beltSec.getBoundingClientRect().top / B.travel));
    const shift = p * B.travel;
    boxesEl.style.transform = `translate3d(${(B.x0 - shift).toFixed(1)}px,0,0)`;
    bandEl.style.backgroundPositionX = `${(-shift).toFixed(1)}px`;
    bandEl.style.setProperty('--hz', `${(-shift).toFixed(1)}px`);
    gears.forEach(g => { g.el.style.transform = `rotate(${(shift * g.speed / 3).toFixed(1)}deg)`; });

    const boxes = $$('.box', boxesEl);
    let active = 0, best = Infinity, bestPress = Infinity, shipped = 0;
    BELT.forEach((b, i) => {
        const c = B.x0 + i * B.step + B.bw / 2 - shift;
        if (Math.abs(c - B.cx) < best) { best = Math.abs(c - B.cx); active = i; }
        if (b.href) return; // the link-out box is never pressed
        bestPress = Math.min(bestPress, Math.abs(c - B.cx));
        const done = c < B.cx;
        if (done && !b.wip) shipped++;
        // crossing the press flips the crate to its stamped face (and squashes it on the way in)
        if (done !== boxes[i].classList.contains('is-done')) {
            boxes[i].classList.toggle('is-done', done);
            if (done) {
                boxes[i].classList.remove('hit');
                void boxes[i].offsetWidth;
                boxes[i].classList.add('hit');
            }
        }
    });
    // piston follows how close the nearest box is to the press: fully down when it is right under it
    const near = Math.max(0, 1 - bestPress / (B.bw * 0.5));
    pressEl.style.setProperty('--dip', `${(26 * near * near * (3 - 2 * near)).toFixed(1)}px`);
    if (active !== B.active) {
        B.active = active;
        $$('.box', boxesEl).forEach((el, i) => el.classList.toggle('on', i === active));
        $('#belt-cap').innerHTML = `<b>${BELT[active].name}</b>${t(`sf.d.${BELT[active].id}`)}`;
    }
    if (shipped !== B.shipped) {
        B.shipped = shipped;
        $('#shipped').textContent = String(shipped).padStart(2, '0');
    }
}

boxesEl.addEventListener('animationend', e => { if (e.animationName === 'squash') e.target.classList.remove('hit'); });
boxesEl.addEventListener('click', e => {
    const li = e.target.closest('.box');
    if (!li || staticBelt || e.target.closest('a')) return;
    const i = Number(li.dataset.n);
    const p = (B.x0 + i * B.step + B.bw / 2 - B.cx) / B.travel;
    scrollTo({ top: beltSec.offsetTop + p * B.travel, behavior: 'smooth' });
});

// ---- headings: letters rise one by one when the title scrolls into view
const CJK = /[\u3000-\u9fff\uff00-\uffef]/;
function splitHeading(el) {
    const label = el.textContent.trim();
    let n = 0;
    const chars = txt => [...txt].map(c => `<span class="ch" aria-hidden="true" style="--i:${n++}">${c}</span>`).join('');
    const walk = node => [...node.childNodes].map(c => {
        if (c.nodeType === 3) {
            return c.textContent.split(/(\s+)/).map(tok => !tok.trim() ? tok
                : CJK.test(tok) ? chars(tok) : `<span class="w">${chars(tok)}</span>`).join('');
        }
        return c.nodeType === 1 ? `<${c.tagName.toLowerCase()}>${walk(c)}</${c.tagName.toLowerCase()}>` : '';
    }).join('');
    el.setAttribute('aria-label', label);
    el.innerHTML = walk(el);
    el.classList.remove('split-in');
    el.classList.add('split');
}
const headIO = 'IntersectionObserver' in window && !reduced ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('split-in'); headIO.unobserve(e.target); }
}), { threshold: 0.4 }) : null;
function splitHeadings() {
    $$('.sec-head h2, .belt-head h2, .cta h2').forEach(h => {
        if (reduced || !headIO) return;
        splitHeading(h);
        headIO.observe(h);
    });
}

function render() {
    renderStatic(); renderStrip(); renderJobs(); renderFacts(); renderStack(); renderExtra(); renderBelt(); splitHeadings();
    document.title = '林書弘 Damian Lin - Senior Software Engineer';
}

// ------------------------------------------------------------ interactions
$('#lang-btn').addEventListener('click', () => {
    lang = lang === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('lang', lang); } catch (e) {}
    render();
});

$('#picker').addEventListener('click', e => {
    const b = e.target.closest('[data-layer]');
    if (!b) return;
    layerIdx = Number(b.dataset.layer);
    renderStack();
});

const strip = $('#strip');
const step = () => (strip.firstElementChild ? strip.firstElementChild.offsetWidth + 20 : 300);
const updateCount = () => {
    const i = Math.min(PROJECTS.length, Math.round(strip.scrollLeft / step()) + 1);
    $('#strip-count').textContent = `${String(i).padStart(2, '0')} / ${String(PROJECTS.length).padStart(2, '0')}`;
};
$('#prev').addEventListener('click', () => strip.scrollBy({ left: -step(), behavior: 'smooth' }));
$('#next').addEventListener('click', () => strip.scrollBy({ left: step(), behavior: 'smooth' }));
strip.addEventListener('scroll', updateCount, { passive: true });
strip.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') strip.scrollBy({ left: step(), behavior: 'smooth' });
    if (e.key === 'ArrowLeft') strip.scrollBy({ left: -step(), behavior: 'smooth' });
});

const nav = $('#nav');
const burger = $('#burger');
const setMenu = open => { nav.classList.toggle('open', open); burger.setAttribute('aria-expanded', String(open)); };
burger.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// header turns solid once the hero is behind us; highlight the current section
const hero = $('#hero');
const sections = $$('#nav a').map(a => ({ a, el: $(a.getAttribute('href')) }));
function onScroll() {
    updateStory();
    updateBelt();
    $('#top').classList.toggle('solid', scrollY > hero.offsetHeight - 80);
    const y = scrollY + 140;
    let cur = sections[0];
    sections.forEach(s => { if (s.el && s.el.offsetTop <= y) cur = s; });
    sections.forEach(s => s.a.classList.toggle('on', s === cur));
}
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', () => { layoutStory(); layoutBelt(); });

// Taipei clock
function tick() {
    const f = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Taipei' });
    $('#clock span').textContent = `TAIPEI ${f.format(new Date())}`;
}
tick(); setInterval(tick, 20000);

// ---- hero story: scroll progress u (0..1 across the pinned stretch) drives everything
//   0.00-0.10  FRONT vs BACK pill and hint fade out, headline swaps to its second line
//   0.00-0.50  halves part like doors; figure rises on the stage
//   0.12-0.88  centre line: "pick a side" -> "carries both"; name tag appears
//   0.62-0.92  halves close again behind the figure
const storyEl = hero;
const storyPin = $('#story-pin');
const S = {
    halfF: $('#half-f'), halfB: $('#half-b'), figure: $('#figure'), vs: $('#vs'), cue: $('#cue'), tag: $('#nametag'),
    a: $$('.hl .s.a', storyEl), b: $$('.hl .s.b', storyEl), c1: $('.c1', storyEl), c2: $('.c2', storyEl), cl: $('#center-line'), hl: $$('.hl', storyEl)
};
const STORY_NODES = [S.halfF, S.halfB, S.figure, S.vs, S.cue, S.tag, S.cl, ...S.hl, ...S.a, ...S.b, S.c1, S.c2];
let staticStory = true;
let storyLen = 1;
const clamp01 = x => Math.min(1, Math.max(0, x));
const seg = (u, a, b) => clamp01((u - a) / (b - a));
const ease = x => x * x * (3 - 2 * x);

function layoutStory() {
    staticStory = reduced || innerWidth <= 900;
    storyEl.classList.toggle('static', staticStory);
    $('#top').classList.remove('on-dark');
    if (staticStory) {
        storyEl.style.height = '';
        STORY_NODES.forEach(n => n.removeAttribute('style'));
        return;
    }
    storyLen = innerHeight * 3.4;
    storyEl.style.height = `${storyPin.offsetHeight + storyLen}px`;
    updateStory();
}

function updateStory() {
    if (staticStory) return;
    const u = clamp01(-storyEl.getBoundingClientRect().top / storyLen);
    const open = ease(seg(u, 0, 0.5)) * 0.62 * (1 - ease(seg(u, 0.62, 0.92)));
    const w = innerWidth / 2;
    S.halfF.style.transform = `translate3d(${(-open * w).toFixed(1)}px,0,0)`;
    S.halfB.style.transform = `translate3d(${(open * w).toFixed(1)}px,0,0)`;
    S.figure.style.transform = `translate(-50%, ${((1 - ease(seg(u, 0.02, 0.5))) * 0.85 * innerHeight).toFixed(1)}px)`;

    const pill = 1 - seg(u, 0, 0.1);
    [S.vs, S.cue].forEach(n => { n.style.opacity = pill.toFixed(3); n.style.scale = (0.85 + 0.15 * pill).toFixed(3); n.style.pointerEvents = pill < 0.2 ? 'none' : ''; });

    // the halves' own headline swaps lines, then clears the way for the centre line (and returns when they close)
    const swap = ease(seg(u, 0.03, 0.08));
    const hlOpacity = (1 - seg(u, 0.12, 0.24)) + seg(u, 0.86, 0.94);
    S.hl.forEach(n => n.style.setProperty('--hl', Math.min(1, hlOpacity).toFixed(3)));
    S.a.forEach(n => { n.style.opacity = ((1 - swap) * hlOpacity).toFixed(3); });
    S.b.forEach(n => { n.style.opacity = (swap * hlOpacity).toFixed(3); });

    // centre lines only show once the stage is wide enough to hold them
    const c1 = seg(u, 0.26, 0.32) * (1 - seg(u, 0.4, 0.45));
    const c2 = seg(u, 0.46, 0.5) * (1 - seg(u, 0.72, 0.78));
    S.c1.style.opacity = c1.toFixed(3);
    S.c2.style.opacity = c2.toFixed(3);
    S.cl.style.setProperty('--cl', Math.max(c1, c2).toFixed(3));
    S.tag.style.opacity = seg(u, 0.3, 0.45).toFixed(3);

    // the logo is ink on the cream half; switch to cream once that half has slid past it
    $('#top').classList.toggle('on-dark', w - open * w < 150);
}

// terminal typing
function typeTerm() {
    const el = $('#term');
    const cursor = '<span class="cur"></span>';
    if (reduced) {
        el.innerHTML = TERM_LINES.map(([s, c]) => c ? `<span class="${c}">${s}</span>` : s).join('\n') + '\n' + cursor;
        return;
    }
    let line = 0, ch = 0, out = '';
    (function type() {
        if (line >= TERM_LINES.length) { el.innerHTML = out + cursor; return; }
        const [s, c] = TERM_LINES[line];
        const isCmd = s.startsWith('$');
        if (isCmd && ch < s.length) {
            ch++;
            el.innerHTML = out + s.slice(0, ch) + cursor;
            return setTimeout(type, 38);
        }
        out += (c ? `<span class="${c}">${s}</span>` : s) + '\n';
        line++; ch = 0;
        el.innerHTML = out + cursor;
        setTimeout(type, isCmd ? 260 : 380);
    })();
}

// scroll reveal
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 }) : null;
$$('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

$('#year').textContent = new Date().getFullYear();
if (!staticBelt) buildGears();
layoutStory();
render();
typeTerm();
onScroll();
