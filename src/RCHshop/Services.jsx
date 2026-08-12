import './Services.css'

const services = [
  {
    icon: (
      <>
        <path d="M2 7h11v9H2z" />
        <path d="M13 10h4l3 3v3h-7z" />
        <circle cx="6.5" cy="17.5" r="2" />
        <circle cx="16.5" cy="17.5" r="2" />
      </>
    ),
    title: 'ارسال و پلاک‌گذاری',
    desc: 'موتور را پلاک‌شده و بیمه‌شده تحویل می‌گیری. ارسال به ۳۸ شهر رایگان است.',
  },
  {
    icon: (
      <>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    title: 'گارانتی اصالت',
    desc: 'هر موتور با شماره شاسی ثبت‌شده و ۱۸ ماه گارانتی موتور و گیربکس.',
  },
  {
    icon: (
      <>
        <path d="M3 6h18v12H3z" />
        <path d="M3 10h18" />
        <path d="M7 14h4" />
      </>
    ),
    title: 'پرداخت اقساطی',
    desc: 'بدون ضامن و بدون چک. اعتبارسنجی آنلاین در کمتر از ۲۴ ساعت.',
  },
  {
    icon: (
      <>
        <path d="M14 4a5 5 0 00-6.5 6.5L4 14l6 6 3.5-3.5A5 5 0 0020 10l-3 3-3-3 3-3a5 5 0 00-3-3z" />
      </>
    ),
    title: 'سرویس دوره‌ای',
    desc: 'دو سرویس اول رایگان است؛ در تعمیرگاه ما یا با پیک درِ خانه.',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">SERVICES</p>
          <h2 className="section-title">بعد از خرید هم تنهایت نمی‌گذاریم</h2>
        </header>

        <div className="srv">
          {services.map((s, i) => (
            <article
              className="srv__item"
              key={s.title}
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="srv__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {s.icon}
                </svg>
              </span>
              <h3 className="srv__title">{s.title}</h3>
              <p className="srv__desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
