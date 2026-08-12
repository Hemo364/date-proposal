import BikeArt from './BikeArt.jsx'
import './Hero.css'

const stats = [
  { value: '۱۲۰+', label: 'مدل موجود' },
  { value: '۳۸', label: 'شهر با ارسال رایگان' },
  { value: '۲۴', label: 'ماه اقساط' },
  { value: '۹', label: 'سال سابقه' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow hero__eyebrow">RCH SHOP — EST. 2017</p>

          <h1 className="hero__title">
            موتوری که می‌خوای،
            <br />
            با قیمتی که <mark>شفافه</mark>.
          </h1>

          <p className="hero__lead">
            اسپرت، تریل، کلاسیک و برقی — همه با قیمت روز، مشخصات کامل و گارانتی
            اصالت. سفارش بده، ما پلاک می‌کنیم و تا در خانه‌ات می‌آوریم.
          </p>

          <div className="hero__actions">
            <a href="#bikes" className="btn btn--hiviz">
              دیدن موتورها
            </a>
            <a href="#installments" className="btn btn--outline-light">
              محاسبه‌ی قسط ماهانه
            </a>
          </div>

          <ul className="hero__stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__art">
            <BikeArt type="sport" />
          </div>

          <div className="hero__plate">
            <span className="hero__plate-title num">SPEC PLATE</span>
            <dl>
              <div>
                <dt>حجم موتور</dt>
                <dd className="num">249 cc</dd>
              </div>
              <div>
                <dt>قدرت</dt>
                <dd className="num">25 HP</dd>
              </div>
              <div>
                <dt>گیربکس</dt>
                <dd className="num">6</dd>
              </div>
              <div>
                <dt>وزن</dt>
                <dd className="num">154 kg</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
