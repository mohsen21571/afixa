import './style.css'

const PD = s => String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])

const I = {
  v1:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19.5 5.5a9 9 0 0 1 0 13" opacity=".55"/></svg>',
  v3:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4Z"/><path d="m16.5 9.5 5 5m0-5-5 5"/></svg>',
  v2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5v4"/><path d="M8.5 21.5h7"/></svg>',
  v4:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h9M4 12h6M4 17h9"/><path d="M17.5 8.5v7M20.5 6.5v11"/></svg>',
  v5:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/></svg>',
  v6:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="m17 8.5 4.5 4.5m0-4.5L17 13"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
}

const FEAT = [
  { c:1, ic:I.v1, name:'تغییر و تبدیل صدا', desc:'صدای خود را به صداهای متنوع تبدیل کنید؛ تغییر لحن، جنسیت و حال‌وهوای صدا.' },
  { c:3, ic:I.v3, name:'حذف نویز و بهبود کیفیت', desc:'نویز پس‌زمینه را پاک و گفتار را شفاف و واضح کنید.' },
  { c:2, ic:I.v2, name:'ساخت و ویرایش پادکست', desc:'پادکست را ضبط، ویرایش و به‌صورت خودکار بهبود دهید.' },
  { c:4, ic:I.v4, name:'تبدیل گفتار و متن', desc:'گفتار را به متن پیاده کنید یا متن را با صدای طبیعی و فارسی بخوانید.' },
  { c:5, ic:I.v5, name:'ساخت موسیقی', desc:'موسیقی اختصاصی و بدون کپی‌رایت را در چند ثانیه بسازید.' },
  { c:6, ic:I.v6, name:'جداسازی صدای خواننده', desc:'صدای خواننده را از ساز جدا کنید و نسخه‌ی کارائوکه بسازید.' },
]

const SAMP = [
  { c:3, name:'حذف نویز صدا', proj:'گفتار شفاف', note:'قبل و بعد از حذف نویز' },
  { c:1, name:'تغییر صدا', proj:'چند صدا از یک نفر', note:'تبدیل تُن و جنسیت صدا' },
  { c:4, name:'گویندگی متن', proj:'روایت فارسی', note:'متن به گفتار طبیعی' },
  { c:5, name:'ساخت موسیقی', proj:'قطعه‌ی بی‌کلام', note:'موسیقی بدون کپی‌رایت' },
  { c:6, name:'جداسازی وکال', proj:'نسخه‌ی کارائوکه', note:'جدا کردن خواننده از ساز' },
  { c:2, name:'بهبود پادکست', proj:'اپیزود تمیز', note:'نرمال‌سازی و حذف سکوت' },
]

const FAQ = [
  ['آیا استفاده از افیکسا رایگان است؟','بله، افیکسا یک پلن رایگان دارد که دسترسی به همه‌ی توانایی‌ها را با استفاده‌ی روزانه‌ی محدود فراهم می‌کند. برای حجم بیشتر و کیفیت بالاتر می‌توانید به پلن حرفه‌ای ارتقا دهید.'],
  ['چه فرمت‌هایی پشتیبانی می‌شوند؟','رایج‌ترین فرمت‌های صوتی مانند MP3، WAV، M4A و OGG پشتیبانی می‌شوند.'],
  ['آیا فایل‌های من ذخیره می‌شوند؟','حریم خصوصی شما مهم است؛ فایل‌ها فقط برای انجام پردازش استفاده و پس از مدتی کوتاه به‌صورت خودکار حذف می‌شوند.'],
  ['آیا به نصب نرم‌افزار نیاز دارم؟','خیر. افیکسا کاملاً در مرورگر کار می‌کند؛ کافی است سایت را باز کنید.'],
  ['کیفیت خروجی‌ها چطور است؟','در پلن رایگان کیفیت استاندارد و در پلن حرفه‌ای بالاترین کیفیت و بدون واترمارک ارائه می‌شود.'],
]

const bars = (n, seed) => {
  let h = ''
  for (let i = 0; i < n; i++) {
    const r = Math.abs(Math.sin((i + seed) * 0.7) * 0.6 + Math.sin((i + seed) * 0.23) * 0.4)
    h += `<i style="height:${Math.round((0.18 + r * 0.82) * 100)}%"></i>`
  }
  return h
}
const abars = (n, seed) => {
  let h = ''
  for (let i = 0; i < n; i++) {
    const hh = Math.round((0.2 + Math.abs(Math.sin((i + seed) * 0.6)) * 0.8) * 100)
    h += `<i style="height:${hh}%;--dur:${(0.8 + ((i * 7) % 9) / 10).toFixed(2)}s;--dl:${((i % 9) * 0.07).toFixed(2)}s"></i>`
  }
  return h
}

// توانایی‌ها
document.getElementById('fgrid').innerHTML = FEAT.map((f, i) => `
  <div class="fcard" style="--cat:var(--c${f.c})">
    <div class="fi">${f.ic}</div>
    <h4 class="text-[16.5px] font-extrabold mb-[7px]">${f.name}</h4>
    <p class="text-[13.5px] text-muted flex-1">${f.desc}</p>
    <div class="fwave">${bars(30, i * 4 + 1)}</div>
    <div class="text-[11px] font-semibold text-faint mt-2 font-mono">خروجی نمونه</div>
  </div>`).join('')

// نمونه‌ها
document.getElementById('sgrid').innerHTML = SAMP.map((s, i) => `
  <article class="samp" style="--cat:var(--c${s.c})">
    <div class="samp-thumb">
      <span class="glow"></span>
      <span class="badge">نمونه</span>
      <button class="play" aria-label="پیش‌نمایش ${s.name}">${I.play}</button>
      <div class="eqov">${abars(26, i * 5)}</div>
      <h4 class="ttl">${s.name}</h4>
    </div>
    <div class="flex items-center justify-between gap-2.5 px-4 py-[14px]">
      <b class="text-[13.5px] text-[color:var(--cat)]">«${s.proj}»</b>
      <span class="text-[12.5px] text-muted text-end">${s.note}</span>
    </div>
  </article>`).join('')

document.querySelectorAll('.samp .play').forEach(btn => btn.onclick = () => {
  const card = btn.closest('.samp')
  const on = card.classList.toggle('playing')
  if (on) setTimeout(() => card.classList.remove('playing'), 3200)
})

// سؤالات متداول
document.getElementById('acc').innerHTML = FAQ.map((q, i) => `
  <details class="ai"${i === 0 ? ' open' : ''}>
    <summary class="flex items-center justify-between gap-3 px-5 py-[17px] text-[15px] font-bold text-ink">
      ${q[0]}
      <span class="pm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
    </summary>
    <div class="px-5 pb-[18px] text-[14px] text-muted leading-loose">${q[1]}</div>
  </details>`).join('')

// موج صوتی هیرو
;(() => {
  let h = ''
  for (let i = 0; i < 34; i++) {
    const v = Math.abs(Math.sin(i * 0.55) * 0.6 + Math.sin(i * 0.19) * 0.4)
    h += `<span class="pv-bar" style="height:${Math.round(14 + v * 86)}%;--dur:${(0.9 + ((i * 7) % 9) / 10).toFixed(2)}s;--dl:${((i % 11) * 0.08).toFixed(2)}s"></span>`
  }
  document.getElementById('pvwave').innerHTML = h
})()

// پوسته روشن/تاریک
const tb = document.getElementById('theme')
const moon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>'
const sun = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg>'
const sysDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches
const curDark = () => { const a = document.documentElement.getAttribute('data-theme'); return a ? a === 'dark' : sysDark() }
const paint = () => { tb.innerHTML = curDark() ? sun : moon }
try { const s = localStorage.getItem('fxa-th'); if (s) document.documentElement.setAttribute('data-theme', s) } catch (e) {}
paint()
tb.onclick = () => {
  const d = !curDark()
  document.documentElement.setAttribute('data-theme', d ? 'dark' : 'light')
  try { localStorage.setItem('fxa-th', d ? 'dark' : 'light') } catch (e) {}
  paint()
}
