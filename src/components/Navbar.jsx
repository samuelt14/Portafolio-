import { useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import useGsapMedia from '../hooks/useGsapMedia'
import { scrollToSection } from '../lib/scroll'
import { PLAY_INTRO, INTRO_DELAY } from '../lib/intro'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  ['proyectos', 'Proyectos'],
  ['habilidades', 'Habilidades'],
  ['sobre-mi', 'Sobre mí'],
  ['contacto', 'Contacto'],
]

export default function Navbar({ name }) {
  const root = useRef(null)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useGsapMedia(root, ({ motion }) => {
    // Enlace activo según la sección visible (funcional, no depende del movimiento).
    LINKS.forEach(([id]) => {
      ScrollTrigger.create({
        trigger: document.getElementById(id), start: 'top 45%', end: 'bottom 45%',
        onToggle: (self) => self.isActive && setActive(id),
      })
    })
    ScrollTrigger.create({
      trigger: document.getElementById('inicio'), start: 'top 45%', end: 'bottom 45%',
      onToggle: (self) => self.isActive && setActive(''),
    })
    if (!motion) return
    gsap.from(root.current, { yPercent: -100, autoAlpha: 0, duration: 0.8, delay: PLAY_INTRO ? INTRO_DELAY : 0.2, ease: 'power3.out' })
    // Barra de progreso de lectura (solo transform => barato).
    gsap.to(root.current.querySelector('.progress'), {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
    })
  })

  const go = (id) => (e) => { e.preventDefault(); setOpen(false); scrollToSection(id) }

  return (
    <nav className="nav" ref={root} aria-label="Principal">
      <div className="container nav-inner">
        <a href="#inicio" className="logo" onClick={go('inicio')}>{name}<span>.</span></a>
        <ThemeToggle />
        <button className="nav-toggle" aria-expanded={open} aria-label="Abrir menú" onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? 'active' : ''} onClick={go(id)}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="progress" />
    </nav>
  )
}
