import BikeArt from './BikeArt.jsx'
import './Categories.css'

const items = [
  {
    art: 'sport',
    title: 'اسپرت',
    desc: 'برای کسی که شتاب و پیچ را با هم می‌خواهد.',
    count: 34,
  },
  {
    art: 'trail',
    title: 'تریل و آفرود',
    desc: 'کمک‌فنر بلند، لاستیک آجدار، جاده‌ی خاکی.',
    count: 21,
  },
  {
    art: 'classic',
    title: 'کلاسیک و شهری',
    desc: 'مصرف کم، تعمیر ارزان، هر روز قابل اعتماد.',
    count: 47,
  },
  {
    art: 'electric',
    title: 'برقی',
    desc: 'بی‌صدا، بدون بنزین، شارژ خانگی.',
    count: 18,
  },
]

export default function Categories() {
  return (
    <section className="section" id="categories">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">CATEGORIES</p>
          <h2 className="section-title">با چه‌جور موتوری راحت‌تری؟</h2>
          <p className="section-lead">
            از هر دسته شروع کنی، فیلتر قیمت و حجم موتور کنارت هست.
          </p>
        </header>

        <div className="cats">
          {items.map((item, i) => (
            <a
              className="cat"
              href="#bikes"
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="cat__art">
                <BikeArt type={item.art} />
              </div>
              <div className="cat__body">
                <h3 className="cat__title">{item.title}</h3>
                <p className="cat__desc">{item.desc}</p>
              </div>
              <div className="cat__foot">
                <span className="num">{item.count} مدل</span>
                <span className="cat__arrow" aria-hidden="true">
                  ←
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
