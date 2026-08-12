import { useMemo, useState } from 'react'
import { bikes, formatPrice } from './bikes.js'
import './Installments.css'

const TERMS = [6, 12, 18, 24]
const RATE = 0.23 // نرخ سود سالانه — با نرخ واقعی خودت جایگزین کن

export default function Installments() {
  const [bikeId, setBikeId] = useState(bikes[2].id)
  const [downPct, setDownPct] = useState(40)
  const [months, setMonths] = useState(12)

  const bike = bikes.find((b) => b.id === bikeId)

  const { down, monthly, total } = useMemo(() => {
    const downValue = Math.round((bike.price * downPct) / 100)
    const financed = bike.price - downValue
    const interest = financed * RATE * (months / 12)
    const totalValue = downValue + financed + interest
    return {
      down: downValue,
      monthly: Math.round((financed + interest) / months),
      total: Math.round(totalValue),
    }
  }, [bike, downPct, months])

  return (
    <section className="section section--ink inst" id="installments">
      <div className="container inst__inner">
        <div className="inst__intro" data-reveal>
          <p className="eyebrow">INSTALLMENTS</p>
          <h2 className="section-title">
            قسط ماهانه‌ات را قبل از سفارش ببین.
          </h2>
          <p className="section-lead">
            بدون ضامن و بدون چک، فقط با کارت ملی و یک فیش حقوقی. عدد پایین همان
            چیزی است که در قرارداد می‌نویسیم.
          </p>

          <ul className="inst__points">
            <li>پیش‌پرداخت از ۳۰٪ شروع می‌شود</li>
            <li>سود سالانه ثابت ۲۳٪، بدون کارمزد پنهان</li>
            <li>تسویه‌ی زودتر از موعد جریمه ندارد</li>
          </ul>
        </div>

        <div className="calc" data-reveal>
          <div className="calc__field">
            <label htmlFor="calc-bike">موتور</label>
            <select
              id="calc-bike"
              value={bikeId}
              onChange={(e) => setBikeId(Number(e.target.value))}
            >
              {bikes.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          <div className="calc__field">
            <label htmlFor="calc-down">
              پیش‌پرداخت
              <b className="num">
                {downPct}٪ — {formatPrice(down)} تومان
              </b>
            </label>
            <input
              id="calc-down"
              type="range"
              min="30"
              max="80"
              step="5"
              value={downPct}
              onChange={(e) => setDownPct(Number(e.target.value))}
            />
          </div>

          <div className="calc__field">
            <span className="calc__label">مدت بازپرداخت</span>
            <div className="calc__terms">
              {TERMS.map((m) => (
                <button
                  key={m}
                  className={`calc__term ${months === m ? 'is-active' : ''}`}
                  onClick={() => setMonths(m)}
                >
                  <span className="num">{m}</span> ماه
                </button>
              ))}
            </div>
          </div>

          <div className="calc__result">
            <span className="calc__result-label">قسط ماهانه</span>
            <strong className="num">{formatPrice(monthly)}</strong>
            <span className="calc__unit">تومان در ماه</span>
            <p className="calc__total num">
              مبلغ کل: {formatPrice(total)} تومان
            </p>
          </div>

          <a href="#top" className="btn btn--hiviz calc__cta">
            ثبت درخواست اقساط
          </a>
          <p className="calc__note">
            محاسبه تقریبی است؛ عدد نهایی پس از تأیید اعتبارسنجی اعلام می‌شود.
          </p>
        </div>
      </div>
    </section>
  )
}
