import { useRef } from 'react'
import { gsap } from '../lib/gsap'
import useGsapMedia from '../hooks/useGsapMedia'
import SplitText from './SplitText'
import Button from './Button'
import CodeCard from './CodeCard'
import { PLAY_INTRO, INTRO_DELAY } from '../lib/intro'

export default function Hero({ profile, skills, cv }) {
  const root = useRef(null)

  useGsapMedia(root, ({ motion, desktop }) => {
    if (!motion) return

    const tl = gsap.timeline({ delay: PLAY_INTRO ? INTRO_DELAY : 0, defaults: { ease: 'power3.out' } })
    tl.from('.hero-eyebrow', { autoAlpha: 0, y: 14, duration: 0.6 })
      .from('.char', { yPercent: 115, duration: 0.9, stagger: 0.05 }, '-=0.3')
      .from('.hero-role, .hero-tagline', { autoAlpha: 0, y: 20, duration: 0.7, stagger: 0.12 }, '-=0.5')
      .from('.hero-actions > *', { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.1 }, '-=0.4')
      .from('.code-card', { autoAlpha: 0, y: 30, duration: 0.8 }, '-=0.9')
      .from('.code-line', { autoAlpha: 0, x: -10, duration: 0.4, stagger: 0.07 }, '-=0.4')
      .from('.scroll-cue', { autoAlpha: 0, duration: 0.6 }, '-=0.2')
    // Indicador de scroll: rebota unas pocas veces y se detiene (sin animaciones eternas).
    gsap.to('.scroll-cue i', { y: 8, duration: 0.7, ease: 'sine.inOut', repeat: 5, yoyo: true, delay: 2 })

    if (desktop) {
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to('.hero-glow', { yPercent: 35, ease: 'none', scrollTrigger: st })
      gsap.to('.hero-inner', { y: -70, autoAlpha: 0.15, ease: 'none', scrollTrigger: st })

      // Foco de luz que sigue al puntero (el cursor nativo no se toca).
      if (window.matchMedia('(hover: hover)').matches) {
        const spot = root.current.querySelector('.hero-spot')
        const xTo = gsap.quickTo(spot, 'x', { duration: 0.7, ease: 'power3' })
        const yTo = gsap.quickTo(spot, 'y', { duration: 0.7, ease: 'power3' })
        const move = (e) => {
          const r = root.current.getBoundingClientRect()
          xTo(e.clientX - r.left); yTo(e.clientY - r.top)
        }
        root.current.addEventListener('pointermove', move)
        return () => root.current && root.current.removeEventListener('pointermove', move)
      }
    }
  })

  return (
    <header id="inicio" className="hero" ref={root}>
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-spot" aria-hidden="true" />
      <div className="container hero-inner hero-grid">
        <div>
          <p className="hero-eyebrow eyebrow">Hola, soy</p>
          <h1><SplitText text={profile.name} /></h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <Button href="#proyectos">Ver proyectos</Button>
            <Button href="#contacto" variant="ghost">Contactarme</Button>
            {cv.url && <Button href={cv.url} download variant="ghost">{cv.label}</Button>}
          </div>
        </div>
        <CodeCard profile={profile} skills={skills} />
      </div>
      <a href="#proyectos" className="scroll-cue" aria-label="Ir a proyectos"><i /></a>
    </header>
  )
}
