/**
 * داده‌های نمونه‌ی فروشگاه.
 * قیمت‌ها فقط نمونه‌اند — با قیمت روز خودت جایگزین کن.
 */

export const categories = [
  { id: 'all', label: 'همه' },
  { id: 'sport', label: 'اسپرت' },
  { id: 'trail', label: 'تریل و آفرود' },
  { id: 'classic', label: 'کلاسیک و شهری' },
  { id: 'electric', label: 'برقی' },
]

export const bikes = [
  {
    id: 1,
    name: 'بنلی TNT 249S',
    brand: 'Benelli',
    category: 'sport',
    art: 'sport',
    price: 465000000,
    oldPrice: 498000000,
    specs: { cc: '249', power: '25 HP', weight: '154 kg', gear: '6' },
    badge: 'پرفروش',
    stock: 4,
  },
  {
    id: 2,
    name: 'باجاج پالسار NS200',
    brand: 'Bajaj',
    category: 'sport',
    art: 'sport',
    price: 289000000,
    oldPrice: null,
    specs: { cc: '199', power: '24 HP', weight: '156 kg', gear: '6' },
    badge: null,
    stock: 9,
  },
  {
    id: 3,
    name: 'کویر KMC 200 اسپرت',
    brand: 'Kavir',
    category: 'sport',
    art: 'sport',
    price: 148000000,
    oldPrice: 159000000,
    specs: { cc: '200', power: '17 HP', weight: '138 kg', gear: '5' },
    badge: 'تخفیف',
    stock: 12,
  },
  {
    id: 4,
    name: 'تریل کویر 250',
    brand: 'Kavir',
    category: 'trail',
    art: 'trail',
    price: 212000000,
    oldPrice: null,
    specs: { cc: '249', power: '21 HP', weight: '142 kg', gear: '5' },
    badge: null,
    stock: 6,
  },
  {
    id: 5,
    name: 'آپاچی تریل 200',
    brand: 'TVS',
    category: 'trail',
    art: 'trail',
    price: 178000000,
    oldPrice: 189000000,
    specs: { cc: '197', power: '20 HP', weight: '148 kg', gear: '5' },
    badge: 'تخفیف',
    stock: 3,
  },
  {
    id: 6,
    name: 'هوندا CG 125 استارتی',
    brand: 'Honda',
    category: 'classic',
    art: 'classic',
    price: 68000000,
    oldPrice: null,
    specs: { cc: '124', power: '11 HP', weight: '118 kg', gear: '4' },
    badge: 'اقتصادی',
    stock: 24,
  },
  {
    id: 7,
    name: 'سیم ولکان 200',
    brand: 'SYM',
    category: 'classic',
    art: 'classic',
    price: 175000000,
    oldPrice: null,
    specs: { cc: '200', power: '16 HP', weight: '135 kg', gear: '5' },
    badge: null,
    stock: 7,
  },
  {
    id: 8,
    name: 'دایان برقی E-3000',
    brand: 'Dayang',
    category: 'electric',
    art: 'electric',
    price: 92000000,
    oldPrice: 99000000,
    specs: { cc: '3000 W', power: 'برد 90 km', weight: '96 kg', gear: 'اتومات' },
    badge: 'بدون بنزین',
    stock: 15,
  },
]

export const brands = [
  'HONDA',
  'BENELLI',
  'BAJAJ',
  'KAVIR',
  'SYM',
  'TVS',
  'DAYANG',
]

/** ۶۲٬۰۰۰٬۰۰۰ → "62,000,000" */
export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US').format(value)
