import BikeArt from './BikeArt.jsx'
import { formatPrice } from './bikes.js'
import './BikeCard.css'

export default function BikeCard({ bike }) {
  const { name, brand, art, price, oldPrice, specs, badge, stock } = bike
  const low = stock <= 4

  return (
    <article className="card">
      <div className="card__top">
        {badge && <span className="card__badge">{badge}</span>}
        <span className="card__brand num">{brand}</span>
      </div>

      <div className="card__art">
        <BikeArt type={art} />
      </div>

      <h3 className="card__name">{name}</h3>

      <dl className="card__specs">
        <div>
          <dt>حجم</dt>
          <dd className="num">{specs.cc}</dd>
        </div>
        <div>
          <dt>قدرت</dt>
          <dd className="num">{specs.power}</dd>
        </div>
        <div>
          <dt>وزن</dt>
          <dd className="num">{specs.weight}</dd>
        </div>
        <div>
          <dt>دنده</dt>
          <dd className="num">{specs.gear}</dd>
        </div>
      </dl>

      <div className="card__price">
        {oldPrice && (
          <span className="card__old num">{formatPrice(oldPrice)}</span>
        )}
        <span className="card__now">
          <b className="num">{formatPrice(price)}</b> تومان
        </span>
      </div>

      <div className="card__foot">
        <button className="btn btn--hiviz card__btn">افزودن به سبد</button>
        <span className={`card__stock ${low ? 'is-low' : ''}`}>
          {low ? `فقط ${stock} عدد مانده` : 'موجود در انبار'}
        </span>
      </div>
    </article>
  )
}
