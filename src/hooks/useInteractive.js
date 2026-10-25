import { useEffect } from 'react'
import { gsap } from '../lib/gsap'

// Micro-interacciones: solo con puntero real (hover) y sin reduced-motion.
export default function useInteractive(ref, { lift = 3, scale = 1.03 } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const mm = gsap.matchMedia()
    mm.add('(hover: hover) and (prefers-reduced-motion: no-preference)', () => {
      const to = (vars) => gsap.to(el, { overwrite: 'auto', ...vars })
      const enter = () => to({ y: -lift, scale, duration: 0.3, ease: 'power2.out' })
      const leave = () => to({ y: 0, scale: 1, duration: 0.45, ease: 'power3.out' })
      const down = () => to({ scale: 0.97, duration: 0.12, ease: 'power2.out' })
      el.addEventListener('pointerenter', enter)
      el.addEventListener('pointerleave', leave)
      el.addEventListener('pointerdown', down)
      el.addEventListener('pointerup', enter)
      return () => {
        el.removeEventListener('pointerenter', enter)
        el.removeEventListener('pointerleave', leave)
        el.removeEventListener('pointerdown', down)
        el.removeEventListener('pointerup', enter)
        gsap.killTweensOf(el)
        gsap.set(el, { clearProps: 'transform' })
      }
    })
    return () => mm.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
