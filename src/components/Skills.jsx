import { useRef } from 'react'
import { gsap } from '../lib/gsap'
import useGsapMedia from '../hooks/useGsapMedia'
import Section from './Section'

export default function Skills({ skills, projects }) {
  const grid = useRef(null)

  useGsapMedia(grid, ({ motion }) => {
    if (!motion) return
    gsap.utils.toArray('.skill-card', grid.current).forEach((card) => {
      gsap.timeline({ scrollTrigger: { trigger: card, start: 'top 88%', once: true } })
        .from(card, { autoAlpha: 0, y: 30, duration: 0.7, ease: 'power3.out' })
        .from(card.querySelectorAll('.chip'), { autoAlpha: 0, scale: 0.85, duration: 0.4, ease: 'back.out(1.7)', stagger: 0.05 }, '-=0.3')
    })
  })

  // Evidencia: proyectos que usan alguna tecnología de la categoría (sin porcentajes arbitrarios).
  const evidence = (items) => projects.filter((p) => p.stack.some((s) => items.includes(s))).map((p) => p.title)

  return (
    <Section id="habilidades" eyebrow="Stack" title="Habilidades técnicas">
      <div className="skills-grid" ref={grid}>
        {skills.map((g) => (
          <div className="skill-card" key={g.category}>
            <h3>{g.category}</h3>
            <ul>{g.items.map((s) => <li className="chip" key={s}>{s}</li>)}</ul>
            <p className="evidence"><strong>Evidencia:</strong> {evidence(g.items).join(' · ')}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
