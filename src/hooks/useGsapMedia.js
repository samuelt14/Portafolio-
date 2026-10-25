import { useLayoutEffect } from 'react'
import { gsap } from '../lib/gsap'

/**
 * Envuelve gsap.matchMedia() (skill gsap-core):
 *  - `setup` recibe { motion, desktop } y se ejecuta con scope = scopeRef.
 *  - Si cambia el media query, GSAP revierte tweens y ScrollTriggers solo.
 *  - Al desmontar se llama mm.revert() => limpieza completa (también en StrictMode).
 * No se anida gsap.context(): matchMedia ya crea uno internamente.
 */
export default function useGsapMedia(scopeRef, setup) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(
      {
        always: '(min-width: 0px)',
        motion: '(prefers-reduced-motion: no-preference)',
        desktop: '(min-width: 900px)',
      },
      (ctx) => {
        const { motion, desktop } = ctx.conditions
        return setup({ motion, desktop })
      },
      scopeRef.current
    )
    return () => mm.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
