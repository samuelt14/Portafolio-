import { gsap } from './gsap'

// Transición fluida entre secciones (respeta prefers-reduced-motion).
export function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.scrollIntoView()
    return
  }
  gsap.to(window, {
    scrollTo: { y: el, offsetY: 64, autoKill: true },
    duration: 1.1,
    ease: 'power3.inOut',
  })
}
