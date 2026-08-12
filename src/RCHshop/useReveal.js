import { useEffect } from 'react'

/**
 * هر المانی که ویژگی data-reveal داشته باشد،
 * هنگام ورود به کادر دید کلاس is-visible می‌گیرد.
 */
export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])
}
