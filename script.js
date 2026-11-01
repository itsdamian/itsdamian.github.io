// Split-screen ("Front vs Back") portfolio. Long-form copy lives in i18n.js
// (`translations`); the strings below are only what this layout adds.

const EXTRA = {
    zh: {
        skip: '跳到內容', 'nav.index': '首頁', 'nav.work': '作品', 'nav.experience2': '經歷', 'nav.about2': '關於', 'nav.contact': '聯絡',
        'hero.l1': '每個<em>系統</em>', 'hero.l2': '都有<em>兩面</em>…', front: '前端', back: '後端',
        tagline: 'Damian · Senior Software Engineer · 台北 · Since 2017', scroll: '往下滑', skipstory: '跳過開場',
        's02.k': '作品', 's02.h': '做出來、上線的東西。', 'hint.side': '← 左右滑動 →',
        's03.k': '工廠', 's03.h': '每個畫面背後，都有一座工廠。', 'job.more': '展開全部', 'job.badge': '現任',
        's04.k': '引擎蓋下', 's04.h': '引擎蓋下是誰？', p1: 'Player 1', open: '尋找 FDE 機會',
        'fact.since': '開始交付', 'fact.clients': '企業客戶', 'fact.layers': '技術層', 'fact.based': '所在地', 'fact.basedv': '台北',
        's05.k': '裝備', 's05.h': '挑一個技術層。', 's05.p': '點選左側任一層，查看細節',
        'cta.h': '一起把整個系統做完。', 'cta.btn': '寄信聊聊', 'foot.touch': '聯絡我', top: '回到頂端'
    },
    en: {
        skip: 'Skip to content', 'nav.index': 'Index', 'nav.work': 'Work', 'nav.experience2': 'Experience', 'nav.about2': 'About', 'nav.contact': 'Contact',
        'hero.l1': 'Every <em>system</em>', 'hero.l2': 'has two <em>sides</em>…', front: 'Front', back: 'Back',
        tagline: 'Damian · Senior Software Engineer · Taipei · Since 2017', scroll: 'Scroll down', skipstory: 'Skip the story',
        's02.k': 'Work', 's02.h': 'Things that shipped.', 'hint.side': '← Scroll sideways →',
        's03.k': 'The factory', 's03.h': 'Behind every screen, a factory.', 'job.more': 'Show all', 'job.badge': 'Current',
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
    ['skills.backend', [['Laravel'], ['Magento 2'], ['FastAPI', 'skills.note.fastapi'], ['Celery', 'skills.note.celery'], ['Node.js'], ['RESTful API'], ['MVC'], ['Redis Queue', 'skills.note.redisqueue'], ['skills.tag.async'], ['skills.tag.concurrency'], ['skills.tag.distributed'], ['MySQL'], ['PostgreSQL'], ['MongoDB'], ['Oracle'], ['MSSQL'], ['Redis']]],
    ['skills.programming', [['Python'], ['PHP'], ['JavaScript'], ['Java'], ['SQL'], ['Rust'], ['Kotlin', 'skills.note.kotlin']]],
    ['skills.tools', [['Docker', 'skills.note.docker'], ['Linux'], ['Nginx'], ['Git'], ['GitHub Actions CI/CD', 'skills.note.githubactions'], ['Cloudflare DNS'], ['AWS'], ['GCP'], ['Azure'], ['Vultr']]],
    ['skills.web', [['Vue 3'], ['JavaScript'], ['HTML'], ['CSS']]],
    ['skills.hardware', [['skills.tag.barcode'], ['OpenCV'], ['pyzbar'], ['skills.tag.zpl'], ['PLC'], ['WES'], ['WCS'], ['AGV'], ['MQTT', 'skills.note.mqtt'], ['skills.tag.erp'], ['JNI (Rust + Kotlin)', 'skills.note.jni']]],
    ['skills.testing', [['Pytest'], ['PHPUnit'], ['skills.sast']]]
];

const PROJECTS = [
    { id: 'wms', featured: true, tags: ['PHP', 'Laravel', 'Vue 3', 'MySQL', 'Oracle', 'Redis'], stats: [['3', 'stat1'], ['<5%', 'stat3'], ['-30%', 'stat4'], ['-70%', 'stat5']] },
    { id: 'assistant', featured: true, tags: ['PHP', 'Laravel', 'LLM', 'Ollama'] },
    { id: 'rag', tags: ['Python', 'RAG', 'ChromaDB', 'Benchmark'] },
    { id: 'wcs', tags: ['Python', 'FastAPI', 'Celery', 'PLC'] },
    { id: 'lms', tags: ['FastAPI', 'Vue 3', 'ZPL', 'Konva'] },
    { id: 'pipeline', tags: ['OCR', 'LLM', 'Embedding', 'Vector DB'] },
    { id: 'scan', tags: ['gitleaks', 'semgrep', 'composer audit', 'enlightn'] },
    { id: 'android', tags: ['Kotlin', 'Rust', 'JNI', 'actix-web'] },
    { id: 'agents', tags: ['Multi-Agent', 'Docker Compose', 'LLM'] }
];

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

function render() {
    renderStatic(); renderStrip(); renderJobs(); renderFacts(); renderStack(); renderExtra();
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
    $('#top').classList.toggle('solid', scrollY > hero.offsetHeight - 80);
    const y = scrollY + 140;
    let cur = sections[0];
    sections.forEach(s => { if (s.el && s.el.offsetTop <= y) cur = s; });
    sections.forEach(s => s.a.classList.toggle('on', s === cur));
}
addEventListener('scroll', onScroll, { passive: true });

// Taipei clock
function tick() {
    const f = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Taipei' });
    $('#clock span').textContent = `TAIPEI ${f.format(new Date())}`;
}
tick(); setInterval(tick, 20000);

// hero divider follows the pointer (desktop only), eased
const heroEl = $('#hero');
let target = 50, split = 50, raf = 0;
function glide() {
    split += (target - split) * 0.12;
    heroEl.style.setProperty('--split', split.toFixed(2) + '%');
    raf = Math.abs(target - split) > 0.05 ? requestAnimationFrame(glide) : 0;
}
heroEl.addEventListener('pointermove', e => {
    if (reduced || innerWidth <= 900) return;
    target = Math.min(60, Math.max(40, (e.clientX / innerWidth) * 100));
    if (!raf) raf = requestAnimationFrame(glide);
});
heroEl.addEventListener('pointerleave', () => { target = 50; if (!raf) raf = requestAnimationFrame(glide); });

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
render();
typeTerm();
onScroll();
