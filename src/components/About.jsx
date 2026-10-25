import { useRef } from 'react'
import { gsap } from '../lib/gsap'
import useGsapMedia from '../hooks/useGsapMedia'
import Section from './Section'

export default function About({ about, experience }) {
  const root = useRef(null)

  useGsapMedia(root, ({ motion, desktop }) => {
    if (!motion) return
    const x = desktop ? 40 : 0
    gsap.from('.about-text > *', {
      autoAlpha: 0, x: -x, y: desktop ? 0 : 20, duration: 0.8, ease: 'power3.out', stagger: 0.12,
      scrollTrigger: { trigger: root.current, start: 'top 80%', once: true },
    })
    // La línea de la timeline se dibuja con el scroll (solo transform).
    gsap.fromTo('.timeline-fill', { scaleY: 0 }, { scaleY: 1, ease: 'none', transformOrigin: 'top',
      scrollTrigger: { trigger: '.timeline', start: 'top 80%', end: 'bottom 60%', scrub: true } })
    gsap.utils.toArray('.timeline-item', root.current).forEach((item) => {
      gsap.from(item, {
        autoAlpha: 0, x, y: desktop ? 0 : 20, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: item, start: 'top 88%', once: true },
      })
    })
  })

  return (
    <Section id="sobre-mi" eyebrow="Perfil" title="Sobre mí y experiencia">
      <div className="about" ref={root}>
        <div className="about-text">
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <ol className="timeline">
          <span className="timeline-fill" aria-hidden="true" />
          {experience.map((e) => (
            <li className="timeline-item" key={e.title + e.period}>
              <span className="period">{e.period}</span>
              <h3>{e.title} {e.sample && <span className="badge">Ejemplo</span>}</h3>
              <p className="place">{e.place}</p>
              <p>{e.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
