import { useRef } from 'react'
import { gsap } from '../lib/gsap'
import useGsapMedia from '../hooks/useGsapMedia'

// Contenedor de sección: revela cabecera, línea y cuerpo al entrar en pantalla.
export default function Section({ id, eyebrow, title, children }) {
  const root = useRef(null)

  useGsapMedia(root, ({ motion, desktop }) => {
    if (!motion) return
    const head = root.current.querySelector('.section-head')
    const line = root.current.querySelector('.section-line')
    const body = root.current.querySelector('.section-body')
    const dist = desktop ? 40 : 20

    gsap.from(head.children, {
      autoAlpha: 0, y: dist, duration: 0.8, ease: 'power3.out', stagger: 0.1,
      scrollTrigger: { trigger: head, start: 'top 88%', once: true },
    })
    gsap.from(line, {
      scaleX: 0, transformOrigin: 'left center', duration: 1.1, ease: 'power3.inOut',
      scrollTrigger: { trigger: line, start: 'top 92%', once: true },
    })
    gsap.from(body, {
      autoAlpha: 0, y: dist, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: body, start: 'top 92%', once: true },
    })
  })

  return (
    <section id={id} className="section" ref={root}>
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </header>
        <div className="section-line" />
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
