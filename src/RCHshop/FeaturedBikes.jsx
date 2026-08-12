import { useMemo, useState } from 'react'
import BikeCard from './BikeCard.jsx'
import { bikes, categories } from './bikes.js'
import './FeaturedBikes.css'

export default function FeaturedBikes() {
  const [active, setActive] = useState('all')

  const visible = useMemo(
    () => (active === 'all' ? bikes : bikes.filter((b) => b.category === active)),
    [active]
  )

  return (
    <section className="section section--paper" id="bikes">
      <div className="container">
        <header className="bikes__head" data-reveal>
          <div>
            <p className="eyebrow">IN STOCK</p>
            <h2 className="section-title">موتورهای موجود</h2>
            <p className="section-lead">
              قیمت‌ها روزانه به‌روز می‌شود و شامل پلاک و بیمه است.
            </p>
          </div>

          <div className="bikes__filter" role="group" aria-label="فیلتر دسته">
            {categories.map((cat) => (
              <button
                key={cat.id}
                aria-pressed={active === cat.id}
                className={`chip ${active === cat.id ? 'is-active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </header>

        {visible.length > 0 ? (
          <div className="bikes__grid">
            {visible.map((bike, i) => (
              <div
                key={bike.id}
                data-reveal
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                <BikeCard bike={bike} />
              </div>
            ))}
          </div>
        ) : (
          <p className="bikes__empty">
            در این دسته فعلاً موتوری موجود نیست. دسته‌ی دیگری را انتخاب کن.
          </p>
        )}

        <div className="bikes__more">
          <a href="#top" className="btn btn--outline">
            دیدن همه‌ی ۱۲۰ مدل
          </a>
        </div>
      </div>
    </section>
  )
}
