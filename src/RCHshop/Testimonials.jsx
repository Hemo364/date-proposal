import { brands } from './bikes.js'
import './Testimonials.css'

const reviews = [
  {
    text: 'سه روز بعد از سفارش، موتور پلاک‌شده دم در بود. مشخصاتی که در سایت نوشته بودند دقیقاً همان چیزی بود که تحویل گرفتم.',
    name: 'امیر رستمی',
    city: 'اصفهان',
    bought: 'بنلی TNT 249S',
    rating: 5,
  },
  {
    text: 'برای اقساط فکر می‌کردم باید ضامن ببرم. اعتبارسنجی همان روز انجام شد و قسط ماهانه دقیقاً همان عددی بود که ماشین‌حساب سایت نشان داد.',
    name: 'مریم کاظمی',
    city: 'کرج',
    bought: 'هوندا CG 125',
    rating: 5,
  },
  {
    text: 'سرویس اول رایگان بود و زنجیر را هم بدون هزینه تنظیم کردند. پشتیبانی تلفنی واقعاً جواب می‌دهد، نه ربات.',
    name: 'سعید نوروزی',
    city: 'مشهد',
    bought: 'تریل کویر 250',
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <section className="section section--paper" id="reviews">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">REVIEWS</p>
          <h2 className="section-title">۴٬۲۰۰ موتور تحویل داده‌شده</h2>
          <p className="section-lead">
            امتیاز رضایت خرید در سه سال گذشته: ۴.۸ از ۵
          </p>
        </header>

        <div className="rev">
          {reviews.map((r, i) => (
            <figure
              className="rev__card"
              key={r.name}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="rev__stars" aria-label={`امتیاز ${r.rating} از ۵`}>
                {'★'.repeat(r.rating)}
                <span className="rev__stars-off">{'★'.repeat(5 - r.rating)}</span>
              </div>
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span>
                  {r.city} — {r.bought}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="brands" data-reveal>
          <span className="brands__label">نمایندگی رسمی</span>
          <ul>
            {brands.map((b) => (
              <li className="num" key={b}>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
