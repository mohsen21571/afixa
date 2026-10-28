# افیکسا — نسخه‌ی Tailwind CSS 4 (Vite)

نسخه‌ی قابل‌توسعه‌ی سایت افیکسا با **Vite** و **Tailwind CSS نسخه ۴** و بیلد واقعی.

## اجرا
```bash
npm install
npm run dev      # سرور توسعه با HMR
npm run build    # خروجی تولید در dist/
npm run preview  # پیش‌نمایش خروجی build
```

## ساختار
- `index.html` — ساختار صفحه با کلاس‌های یوتیلیتی Tailwind.
- `src/style.css` — ورود Tailwind (`@import "tailwindcss"`)، توکن‌های طراحی در `@theme`،
  متغیرهای تم (روشن/تاریک) و کلاس‌های کامپوننتی برندشده در `@layer components`.
- `src/main.js` — داده‌ها و رندر کارت‌ها/نمونه‌ها/سؤالات و کلید تغییر پوسته.

## نکته‌های Tailwind v4
- رنگ‌های معنایی به متغیر CSS وصل‌اند، پس حالت تاریک خودکار سوییچ می‌شود؛
  نیازی به `dark:` در markup نیست. کلاس‌هایی مثل `bg-surface`، `text-ink`،
  `text-muted`، `border-line`، `text-brand` همه تم‌آگاه هستند.
- رنگ شش دسته‌ی توانایی (`--c1`..`--c6`) از طریق متغیر `--cat` روی کارت‌ها ست می‌شود
  (در `main.js` با `style="--cat:var(--c3)"`) تا با رندر داینامیک سازگار بماند.
- بدون فایل `tailwind.config.js`؛ پیکربندی داخل همان CSS است (روش نسخه ۴).

## انتشار روی GitHub Pages
۱. در `vite.config.js` مقدار `base` را برابر نام مخزن بگذارید (مثلاً `/afixa/`).
۲. `npm run build` بزنید و محتوای `dist/` را روی شاخه‌ی انتشار قرار دهید.
