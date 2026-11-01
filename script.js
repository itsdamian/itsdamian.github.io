// Terminal-style portfolio. Copy lives in i18n.js (`translations`); this file
// renders the views, the letter-field background and the scramble effect.

const EMAIL = 'greetinitsdamian@gmail.com';
const PHONE = '+886 978 609 130';

const VIEWS = ['home', 'experience', 'skills', 'projects', 'education'];
const NAV_KEYS = { home: null, experience: 'nav.experience', skills: 'nav.skills', projects: 'nav.projects', education: 'nav.education' };

let lang = 'zh';
try { lang = localStorage.getItem('lang') || 'zh'; } catch (e) {}

const t = key => (translations[lang] && translations[lang][key]) || translations.zh[key] || key;
const $ = (sel, root = document) => root.querySelector(sel);
const view = $('#view');

// ---------------------------------------------------------------- data
const JOBS = [
    { id: 'jtx', co: 'JTX Corp.', n: 9, badge: true },
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

const FEATURED = [
    { id: 'wms', tags: ['PHP', 'Laravel', 'Vue 3', 'MySQL', 'Oracle', 'Redis'], stats: [['3', 'stat1'], ['<5%', 'stat3'], ['-30%', 'stat4'], ['-70%', 'stat5']] },
    { id: 'assistant', tags: ['PHP', 'Laravel', 'LLM', 'Ollama'] }
];
const OTHERS = [
    { id: 'rag', tags: ['Python', 'RAG', 'ChromaDB', 'Benchmark'] },
    { id: 'wcs', tags: ['Python', 'FastAPI', 'Celery', 'PLC'] },
    { id: 'lms', tags: ['FastAPI', 'Vue 3', 'ZPL', 'Konva'] },
    { id: 'pipeline', tags: ['OCR', 'LLM', 'Embedding', 'Vector DB'] },
    { id: 'scan', tags: ['gitleaks', 'semgrep', 'composer audit', 'enlightn'] },
    { id: 'android', tags: ['Kotlin', 'Rust', 'JNI', 'actix-web'] },
    { id: 'agents', tags: ['Multi-Agent', 'Docker Compose', 'LLM'] }
];

const LOGO = `<svg class="logo" viewBox="0 0 28 32" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" aria-label="DL">
  <path d="M3 3h9a11 11 0 0 1 0 22H3z"/><path d="M18 8v18h8" opacity=".6"/></svg>`;

// ---------------------------------------------------------------- views
const tags = list => `<div class="tags">${list.map(x => `<span class="tag">${x}</span>`).join('')}</div>`;

const RENDER = {
    home() {
        return `<article class="col">
            ${LOGO}
            <h1>Damian Lin · 林書弘</h1>
            <p class="lead">${t('hero.title')}</p>
            <p>${t('hero.description2')}</p>
            <a class="scramble" id="email" href="mailto:${EMAIL}" data-text="${EMAIL}">${EMAIL}</a>
            <hr class="rule">
            <p class="quote">${t('hero.description')}</p>
            <hr class="rule">
            <div class="go"><a href="#experience">start →</a></div>
        </article>`;
    },

    experience() {
        const items = JOBS.map(j => {
            const period = t(j.period || `experience.${j.id}.period`);
            const lis = Array.from({ length: j.n }, (_, i) => `<li>${t(`experience.${j.id}.achievement${i + 1}`)}</li>`).join('');
            return `<section class="entry">
                <div class="entry-head">
                    <div><h3 class="entry-co">${j.coKey ? t(j.coKey) : j.co}${j.badge ? `<span class="badge">${t('experience.spotlight.badge')}</span>` : ''}</h3>
                    <p class="entry-role">${t(`experience.${j.id}.title`)}</p></div>
                    <span class="entry-period">${period}</span>
                </div><ul>${lis}</ul></section>`;
        }).join('');
        return `<article class="col wide"><h2 class="view-title">${t('experience.title')}</h2>${items}</article>`;
    },

    skills() {
        const layers = LAYERS.map(([title, items], i) => `<section class="layer">
            <h3 class="layer-title"><span>L0${i + 1}</span>${t(title)}</h3>
            <div class="tags">${items.map(([label, note]) => {
                const text = label.startsWith('skills.') ? t(label) : label;
                return `<span class="tag"${note ? ` data-note="${t(note)}"` : ''}>${text}</span>`;
            }).join('')}</div></section>`).join('');
        const certs = [1, 2, 3].map(n => `<div class="cert"><div>${t(`skills.cert${n}.title`)}</div><div class="muted">${t(`skills.cert${n}.issuer`)}</div></div>`).join('');
        return `<article class="col wide"><h2 class="view-title">${t('skills.title')}</h2>${layers}
            <p class="sub">${t('skills.certification')}</p>${certs}</article>`;
    },

    projects() {
        const full = p => `<section class="entry">
            <div class="entry-head"><h3 class="entry-co">${t(`projects.${p.id}.title`)}</h3></div>
            ${p.stats ? `<div class="stats">${p.stats.map(([n, k]) => `<div class="stat"><b>${n}</b><span>${t(`projects.wms.${k}`)}</span></div>`).join('')}</div>` : ''}
            <p style="margin-top:12px">${t(`projects.${p.id}.description`)}</p>${tags(p.tags)}</section>`;
        return `<article class="col wide"><h2 class="view-title">${t('projects.title')}</h2>
            <p class="badge" style="margin:0 0 18px">${t('projects.featured.badge')}</p>
            ${FEATURED.map(full).join('')}
            <p class="sub">${t('projects.list.heading')}</p>
            ${OTHERS.map(full).join('')}</article>`;
    },

    education() {
        const school = (img, alt, deg, sch, per, extra = '') => `<section class="entry"><div class="edu">
            <img class="edu-logo" src="${img}" alt="${alt}">
            <div><h3 class="entry-co">${t(sch)}</h3><p class="entry-role">${t(deg)}</p>
            <p class="muted">${t(per)}${extra}</p></div></div></section>`;
        return `<article class="col wide"><h2 class="view-title">${t('education.title')}</h2>
            ${school('CNU.svg', 'CNU', 'education.degree2', 'education.school2', 'education.period2')}
            ${school('NUK.jpg', 'NUK', 'education.degree', 'education.school', 'education.period', ' · ' + t('education.location'))}
            <p class="sub">${t('education.capstone.title')}</p>
            <p>${t('education.capstone.description')}</p>
            <div class="contact">
                <span><span class="muted">loc</span>${t('about.location')}</span>
                <a href="mailto:${EMAIL}"><span class="muted">mail</span>${EMAIL}</a>
                <a href="tel:${PHONE.replace(/\s/g, '')}"><span class="muted">tel</span>${PHONE}</a>
                <a href="https://github.com/itsdamian" target="_blank" rel="noopener"><span class="muted">git</span>github.com/itsdamian</a>
            </div></article>`;
    }
};

// ---------------------------------------------------------------- scramble
const GLYPHS = '!<>-_\\/[]{}=+*^?#0123456789abcdefghijklmnopqrstuvwxyz';
let scrambleTimer = 0;

function scramble(el) {
    cancelAnimationFrame(scrambleTimer);
    const target = el.dataset.text;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = target; return; }
    const start = performance.now();
    const step = now => {
        const progress = (now - start) / 1400;
        el.textContent = [...target].map((c, i) => (i / target.length < progress || c === '@' || c === '.')
            ? c : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join('');
        if (progress < 1) scrambleTimer = requestAnimationFrame(step); else el.textContent = target;
    };
    scrambleTimer = requestAnimationFrame(step);
}

// ---------------------------------------------------------------- router
function current() {
    const h = location.hash.replace('#', '');
    return VIEWS.includes(h) ? h : 'home';
}

function renderNav() {
    const active = current();
    $('#nav').innerHTML = VIEWS.map(v =>
        `<a href="#${v}" class="${v === active ? 'active' : ''}">${v === 'home' ? 'home' : t(NAV_KEYS[v])}</a>`).join('');
}

function render() {
    const name = current();
    view.innerHTML = RENDER[name]();
    renderNav();
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
    document.title = name === 'home' ? '林書弘 Damian Lin - Senior Software Engineer' : `${t(NAV_KEYS[name])} · Damian Lin`;
    $('[data-lang="zh"]').classList.toggle('on', lang === 'zh');
    $('[data-lang="en"]').classList.toggle('on', lang === 'en');
    const theme = document.documentElement.dataset.theme;
    document.querySelectorAll('[data-theme-set]').forEach(b => b.classList.toggle('on', b.dataset.themeSet === theme));
    const email = $('#email');
    if (email) scramble(email);
}

window.addEventListener('hashchange', () => { render(); window.scrollTo(0, 0); });

// ---------------------------------------------------------------- more panel
const moreBtn = $('#more-btn');
const panel = $('#more-panel');
const togglePanel = open => {
    panel.hidden = !open;
    moreBtn.setAttribute('aria-expanded', String(open));
};
moreBtn.addEventListener('click', () => togglePanel(panel.hidden));
document.addEventListener('keydown', e => { if (e.key === 'Escape') togglePanel(false); });
document.addEventListener('click', e => { if (!panel.hidden && !panel.contains(e.target) && e.target !== moreBtn) togglePanel(false); });

panel.addEventListener('click', e => {
    const l = e.target.closest('[data-lang]');
    const th = e.target.closest('[data-theme-set]');
    if (l) {
        lang = l.dataset.lang;
        try { localStorage.setItem('lang', lang); } catch (err) {}
        render();
    } else if (th) {
        document.documentElement.dataset.theme = th.dataset.themeSet;
        try { localStorage.setItem('theme', th.dataset.themeSet); } catch (err) {}
        render();
        readColors();
    }
});

// ---------------------------------------------------------------- letter field
const canvas = $('#field');
const ctx = canvas.getContext('2d');
const CELL_W = 11, CELL_H = 20;
const ALPHABET = 'abcdefghilmnopqrstuvzàèéìòù.,;:\'';
let cols = 0, rows = 0, grid = [], bright = [], mouse = { x: -999, y: -999 }, rgb = '255,255,255', hi = '240,190,77';

function readColors() {
    const cs = getComputedStyle(document.documentElement);
    rgb = cs.getPropertyValue('--field').trim();
    hi = cs.getPropertyValue('--field-hi').trim();
}

function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(innerWidth / CELL_W);
    rows = Math.ceil(innerHeight / CELL_H);
    const n = cols * rows;
    grid = Array.from({ length: n }, () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]);
    bright = new Float32Array(n);
    ctx.font = '13px "JetBrains Mono", monospace';
    ctx.textBaseline = 'top';
}

function frame() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const n = grid.length;
    // Randomly ignite a few letters; they fade out on their own.
    for (let i = 0; i < 3; i++) bright[Math.floor(Math.random() * n)] = 1;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const i = r * cols + c;
            const x = c * CELL_W, y = r * CELL_H;
            const dx = x - mouse.x, dy = y - mouse.y;
            const near = Math.max(0, 1 - Math.hypot(dx, dy) / 160);
            if (near > 0.6 && Math.random() < 0.08) grid[i] = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
            const b = bright[i];
            if (b > 0.01) bright[i] = b * 0.97; else bright[i] = 0;
            const glow = Math.max(b, near);
            ctx.fillStyle = glow > 0.05 ? `rgba(${hi},${0.15 + glow * 0.75})` : `rgba(${rgb},0.07)`;
            ctx.fillText(grid[i], x, y);
        }
    }
    requestAnimationFrame(frame);
}

window.addEventListener('mousemove', e => { mouse = { x: e.clientX, y: e.clientY }; });
window.addEventListener('resize', resize);

// ---------------------------------------------------------------- boot
readColors();
resize();
render();
if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    frame = () => {};
    ctx.fillStyle = `rgba(${rgb},0.07)`;
    grid.forEach((ch, i) => ctx.fillText(ch, (i % cols) * CELL_W, Math.floor(i / cols) * CELL_H));
} else {
    requestAnimationFrame(frame);
}
