# RCH Shop — لندینگ پیج فروشگاه موتورسیکلت

React + Vite، راست‌به‌چپ، CSS خالص و بدون وابستگی اضافه.
**همه‌ی فایل‌ها در یک پوشه‌اند** و همه‌ی ایمپورت‌ها به همین شکل تنظیم شده‌اند
(`./Navbar.jsx`، `./bikes.js`، `./globals.css` و ...).

## اجرا

```bash
npm install
npm run dev
```

## فایل‌ها (همه در یک سطح)

| فایل | کار |
|---|---|
| `index.html` | ‏`lang="fa" dir="rtl"` + فونت‌ها + `<script src="./main.jsx">` |
| `main.jsx` | نقطه‌ی ورود؛ اول `globals.css` بعد `App` |
| `App.jsx` | چیدمان بخش‌ها |
| `globals.css` | متغیرهای رنگ و فونت، ریست، دکمه‌ها، نوار خطر |
| `useReveal.js` | انیمیشن ظاهرشدن هنگام اسکرول |
| `bikes.js` | لیست موتورها، دسته‌ها، برندها، `formatPrice` |
| `Navbar.jsx/.css` | منوی چسبان + منوی موبایل |
| `Hero.jsx/.css` | هدر اصلی + پلاک مشخصات |
| `TapeStrip.jsx/.css` | نوار متحرک خدمات |
| `Categories.jsx/.css` | کارت دسته‌بندی‌ها |
| `FeaturedBikes.jsx/.css` | گرید محصولات + فیلتر |
| `BikeCard.jsx/.css` | کارت تکی محصول |
| `BikeArt.jsx/.css` | نقشه‌ی فنی SVG موتور (۴ حالت) |
| `Installments.jsx/.css` | ماشین‌حساب اقساط |
| `Services.jsx/.css` | خدمات پس از فروش |
| `Testimonials.jsx/.css` | نظر مشتری‌ها + برندها |
| `Footer.jsx/.css` | فوتر + خبرنامه |

> اگر ترجیح می‌دهی `index.html` را بیرون بگذاری و بقیه را در `src/` ببری،
> فقط کافی است در `index.html` مقدار `src="./main.jsx"` را به
> `src="/src/main.jsx"` تغییر دهی. بقیه‌ی ایمپورت‌ها دست‌نخورده کار می‌کنند.

## سفارشی‌سازی

**رنگ‌ها** — در `globals.css` داخل `:root`:

| متغیر | مقدار | کاربرد |
|---|---|---|
| `--ink` | `#101419` | متن و بلوک‌های تیره |
| `--steel` | `#d6dce1` | پس‌زمینه‌ی صفحه |
| `--paper` | `#f3f5f6` | کارت‌ها |
| `--hiviz` | `#f5c400` | رنگ تأکید (زرد شبرنگ) |
| `--redline` | `#d5222b` | قیمت حذف‌شده / هشدار موجودی |

**محصولات و قیمت‌ها** — `bikes.js` (قیمت‌ها نمونه‌اند).

**نرخ سود اقساط** — `Installments.jsx`، خط `const RATE = 0.23`.

**عکس واقعی به‌جای نقشه‌ی فنی** — در `BikeCard.jsx`، `Categories.jsx` و
`Hero.jsx` به‌جای `<BikeArt type={...} />` بگذار:

```jsx
<img src={bike.image} alt={bike.name} />
```

و در `bikes.js` فیلد `image` را به هر موتور اضافه کن.
