import { useState } from 'react'
import './Footer.css'

const columns = [
  {
    title: 'فروشگاه',
    links: ['اسپرت', 'تریل و آفرود', 'کلاسیک و شهری', 'برقی', 'لوازم جانبی'],
  },
  {
    title: 'خرید',
    links: ['شرایط اقساط', 'هزینه ارسال', 'پلاک‌گذاری', 'بیمه', 'بازگشت کالا'],
  },
  {
    title: 'فروشگاه ما',
    links: ['درباره RCH', 'تعمیرگاه', 'همکاری با ما', 'وبلاگ', 'تماس'],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const subscribe = () => {
    if (!email.includes('@')) return
    setSent(true)
    setEmail('')
  }

  return (
    <footer className="foot">
      <div className="tape" />

      <div className="container foot__inner">
        <div className="foot__brand">
          <a href="#top" className="logo">
            <span className="logo__mark">RCH</span>
            <span className="logo__word">Shop</span>
          </a>
          <p>
            فروش آنلاین موتورسیکلت با قیمت شفاف، از سال ۱۳۹۶. تهران، خیابان
            آزادی، پلاک ۱۲۸.
          </p>
          <a className="foot__phone num" href="tel:02191000000">
            021-9100 0000
          </a>
        </div>

        {columns.map((col) => (
          <nav className="foot__col" key={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#top">{l}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="foot__news">
          <h3>خبر تخفیف‌ها را زودتر بگیر</h3>
          <p>هفته‌ای یک ایمیل، فقط وقتی قیمتی تغییر کند.</p>

          {sent ? (
            <p className="foot__sent">ثبت شد. اولین ایمیل جمعه می‌رسد.</p>
          ) : (
            <div className="foot__form">
              <input
                type="email"
                value={email}
                placeholder="ایمیل شما"
                aria-label="ایمیل برای دریافت تخفیف‌ها"
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && subscribe()}
              />
              <button className="btn btn--hiviz" onClick={subscribe}>
                عضویت
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="container foot__bottom">
        <span>© ۱۴۰۴ RCH Shop — همه‌ی حقوق محفوظ است.</span>
        <span className="num">Made in Tehran</span>
      </div>
    </footer>
  )
}
