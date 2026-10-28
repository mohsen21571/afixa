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

const PF = [
  { c:1, t:'صوت', dur:'۰:۱۲', name:'تقلید صدا', sub:'تبدیل صدای گوینده', size:'lg', freq:196 },
  { c:3, t:'صوت', dur:'۰:۰۸', name:'حذف نویز', sub:'قبل / بعد', size:'', freq:220 },
  { c:4, t:'صوت', dur:'۰:۱۵', name:'گویندگی فارسی', sub:'متن به گفتار', size:'', freq:262 },
  { c:5, t:'صوت', dur:'۰:۲۰', name:'ساخت موسیقی', sub:'قطعه‌ی بی‌کلام', size:'wide', freq:174 },
  { c:6, t:'صوت', dur:'۰:۱۸', name:'کارائوکه', sub:'جداسازی وکال', size:'', freq:233 },
  { c:2, t:'صوت', dur:'۰:۲۵', name:'بهبود پادکست', sub:'نرمال‌سازی صدا', size:'', freq:208 },
  { c:1, t:'صوت', dur:'۰:۱۰', name:'تغییر صدای زنده', sub:'افکت بلادرنگ', size:'', freq:294 },
  { c:5, t:'صوت', dur:'۰:۳۰', name:'افکت صوتی', sub:'ساخت ساند‌افکت', size:'wide', freq:147 },
]
const micIc = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/></svg>'
const pauseIc = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>'
const pfbars = (n, seed) => {
  let h = ''
  for (let i = 0; i < n; i++) {
    const r = Math.abs(Math.sin((i + seed) * 0.6) * 0.6 + Math.sin((i + seed) * 0.21) * 0.4)
    h += `<i style="height:${Math.round((0.22 + r * 0.78) * 100)}%;--d:${(0.7 + ((i * 5) % 8) / 10).toFixed(2)}s;--dd:${((i % 7) * 0.06).toFixed(2)}s"></i>`
  }
  return h
}
document.getElementById('pfgrid').innerHTML = PF.map((p, i) => {
  const big = p.size === 'lg' || p.size === 'wide'
  const nb = big ? 34 : 20
  return `<article class="pf ${p.size}" style="--cat:var(--c${p.c})" data-freq="${p.freq}" tabindex="0" role="button" aria-label="پخش نمونه ${p.name}">
    <span class="pf-ov"></span>
    <div class="pf-top"><span class="pf-type">${micIc}${p.t}</span><span class="pf-dur">${p.dur}</span></div>
    <div class="pf-wave">${pfbars(nb, i * 4)}</div>
    <div class="pf-bot"><span class="pf-meta"><b>${p.name}</b><span>${p.sub}</span></span>
      <button class="pf-play" aria-label="پخش یا توقف"><span class="ic-play">${I.play}</span><span class="ic-pause">${pauseIc}</span></button></div>
    <span class="pf-prog"><i></i></span></article>`
}).join('')

let actx, curr = null, ctimer = null
const stopAll = () => {
  document.querySelectorAll('.pf.playing').forEach(x => {
    x.classList.remove('playing')
    const b = x.querySelector('.pf-prog i')
    if (b) { b.style.transition = 'none'; b.style.width = '0' }
  })
  if (curr) { curr.stop(); curr = null }
  if (ctimer) { clearTimeout(ctimer); ctimer = null }
}
const playPF = (tile) => {
  const on = tile.classList.contains('playing')
  stopAll()
  if (on) return
  tile.classList.add('playing')
  const dur = 4.6
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)()
    if (actx.state === 'suspended') actx.resume()
  } catch (e) { actx = null }
  if (actx) {
    const base = +tile.dataset.freq || 220, now = actx.currentTime
    const master = actx.createGain()
    master.gain.setValueAtTime(0.0001, now)
    master.gain.exponentialRampToValueAtTime(0.12, now + 0.08)
    master.connect(actx.destination)
    const o = actx.createOscillator(); o.type = 'triangle'; o.connect(master)
    const pad = actx.createGain(); pad.gain.value = 0.045; pad.connect(actx.destination)
    const o2 = actx.createOscillator(); o2.type = 'sine'; o2.connect(pad)
    const seq = [0, 7, 12, 7, 5, 10, 3, 12], step = dur / seq.length
    seq.forEach((nn, k) => {
      const f = base * Math.pow(2, nn / 12)
      o.frequency.setValueAtTime(f, now + k * step)
      o2.frequency.setValueAtTime(f / 2, now + k * step)
    })
    master.gain.setValueAtTime(0.12, now + dur - 0.4)
    master.gain.exponentialRampToValueAtTime(0.0001, now + dur)
    o.start(now); o2.start(now); o.stop(now + dur); o2.stop(now + dur)
    curr = { stop () { try { o.stop(); o2.stop() } catch (e) {} } }
  }
  const bar = tile.querySelector('.pf-prog i')
  if (bar) {
    bar.style.transition = 'none'; bar.style.width = '0'
    requestAnimationFrame(() => { bar.style.transition = 'width ' + dur + 's linear'; bar.style.width = '100%' })
  }
  ctimer = setTimeout(() => { tile.classList.remove('playing'); curr = null }, dur * 1000 + 60)
}
document.querySelectorAll('.pf').forEach(el => {
  el.addEventListener('click', () => playPF(el))
  el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); playPF(el) } })
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
