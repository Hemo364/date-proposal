import './TapeStrip.css'

const items = [
  'ارسال رایگان به ۳۸ شهر',
  'گارانتی اصالت کالا',
  'اقساط بدون ضامن',
  'پلاک‌گذاری رایگان',
  'بیمه‌ی شخص ثالث یک‌ساله',
  'بازگشت تا ۷ روز',
]

export default function TapeStrip() {
  /* دو نسخه از لیست پشت هم می‌آید تا حرکت بی‌وقفه دیده شود */
  const row = [...items, ...items]

  return (
    <div className="strip" aria-label="خدمات فروشگاه">
      <div className="tape" />
      <div className="strip__track">
        <div className="strip__row">
          {row.map((item, i) => (
            <span className="strip__item" key={i}>
              {item}
              <i className="strip__dot" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
      <div className="tape" />
    </div>
  )
}
