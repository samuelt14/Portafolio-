import { useRef } from 'react'
import { gsap } from '../lib/gsap'
import useGsapMedia from '../hooks/useGsapMedia'
import SplitText from './SplitText'
import { markIntroSeen } from '../lib/intro'

// Intro de pantalla completa (~2.9 s). Una sola timeline; al terminar se desmonta (App).
export default function Intro({ profile, onDone }) {
  const root = useRef(null)
  const tlRef = useRef(null)

  useGsapMedia(root, ({ motion }) => {
    const html = document.documentElement
    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      html.classList.remove('intro-lock')
      markIntroSeen()
      onDone()
    }
    if (!motion) { finish(); return }

    html.classList.add('intro-lock')
    const safety = setTimeout(finish, 6000) // red de seguridad: la web nunca queda bloqueada
    const skip = () => tlRef.current && tlRef.current.timeScale(4)
    const onKey = (e) => e.key === 'Escape' && skip()
    window.addEventListener('keydown', onKey)
    root.current.querySelector('.intro-skip').addEventListener('click', skip)

    try {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, onComplete: finish })
      tl.fromTo('.intro-line', { scaleX: 0 }, { scaleX: 1, duration: 2.1, ease: 'power1.inOut' }, 0)
        .from('.intro-glow', { autoAlpha: 0, scale: 0.6, duration: 1.4 }, 0)
        .from('.intro-skip', { autoAlpha: 0, duration: 0.5 }, 0.4)
        .from('.intro-name .char', { yPercent: 115, duration: 0.9, stagger: 0.06 }, 0.25)
        .fromTo('.intro-name', { scale: 1.05 }, { scale: 1, duration: 2, ease: 'none' }, 0.25)
        .from('.intro-role', { autoAlpha: 0, y: 10, duration: 0.6 }, 0.9)
        // salida: las letras salen por la máscara y el telón se abre
        .to('.intro-name .char', { yPercent: -115, duration: 0.6, stagger: 0.03, ease: 'power3.in' }, 1.65)
        .to(['.intro-role', '.intro-track', '.intro-glow', '.intro-skip'], { autoAlpha: 0, duration: 0.4, ease: 'none' }, 1.75)
        .to('.intro-panel--top', { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, 2.1)
        .to('.intro-panel--bottom', { yPercent: 100, duration: 0.8, ease: 'power4.inOut' }, 2.1)
      tlRef.current = tl
    } catch {
      finish()
    }

    return () => {
      clearTimeout(safety)
      window.removeEventListener('keydown', onKey)
      html.classList.remove('intro-lock')
    }
  })

  return (
    <div className="intro" ref={root} aria-label="Introducción">
      <div className="intro-panel intro-panel--top" />
      <div className="intro-panel intro-panel--bottom" />
      <div className="intro-center">
        <div className="intro-glow" aria-hidden="true" />
        <p className="intro-name"><SplitText text={profile.name} /></p>
        <p className="intro-role">{profile.role}</p>
        <div className="intro-track" aria-hidden="true"><div className="intro-line" /></div>
      </div>
      <button type="button" className="intro-skip">Omitir</button>
    </div>
  )
}
