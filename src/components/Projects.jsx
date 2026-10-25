import { useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'
import useGsapMedia from '../hooks/useGsapMedia'
import Section from './Section'
import ProjectCard from './ProjectCard'
import ProjectDialog from './ProjectDialog'

// Se remonta al cambiar el filtro (key) => las tarjetas vuelven a entrar con ScrollTrigger.
function ProjectGrid({ items, onOpen }) {
  const grid = useRef(null)
  useGsapMedia(grid, ({ motion, desktop }) => {
    if (!motion) return
    const cards = gsap.utils.toArray('.project-card', grid.current)
    gsap.set(cards, { autoAlpha: 0, y: desktop ? 60 : 24 })
    ScrollTrigger.batch(cards, {
      start: 'top 88%', once: true,
      onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12, overwrite: true }),
    })
  })
  return (
    <div className="projects-grid" ref={grid}>
      {items.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={onOpen} />)}
    </div>
  )
}

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('Todos')
  const [selected, setSelected] = useState(null)
  const categories = ['Todos', ...new Set(projects.map((p) => p.category))]
  const items = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Section id="proyectos" eyebrow="Trabajo" title="Proyectos">
      <div className="filters" role="group" aria-label="Filtrar proyectos por categoría">
        {categories.map((c) => (
          <button key={c} className="filter" aria-pressed={filter === c} onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{items.length} proyectos mostrados</p>
      {items.length ? <ProjectGrid key={filter} items={items} onOpen={setSelected} />
        : <p className="empty">No hay proyectos en esta categoría todavía.</p>}
      {selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}
    </Section>
  )
}
