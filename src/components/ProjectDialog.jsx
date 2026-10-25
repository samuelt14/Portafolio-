import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import Button from './Button'

// Detalle accesible con <dialog> nativo: foco atrapado, Esc cierra, foco vuelve al botón de origen.
export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const origin = document.activeElement

    // Evitar llamar showModal() si el diálogo ya está abierto (React Strict Mode)
    if (!el.open) el.showModal()

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const panel = el.querySelector('.dialog-panel')

    // Asegurar visibilidad base antes de animar
    gsap.set(panel, { clearProps: 'all' })

    if (!reduce) {
      gsap.fromTo(
        panel,
        { autoAlpha: 0, y: 24, scale: 0.98 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out' }
      )
    }

    return () => {
      gsap.killTweensOf(panel)
      gsap.set(panel, { clearProps: 'all' })
      origin && origin.focus && origin.focus()
    }
  }, [])

  const { title, status, category, problem, solution, features, stack, repo, demo } = project
  return (
    <dialog ref={ref} className="dialog" aria-labelledby="dlg-title" onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}>
      <div className="dialog-panel">
        <button className="dialog-close" aria-label="Cerrar detalle" onClick={() => ref.current.close()}>×</button>
        <p className="meta"><span className="status">{status}</span> · {category}</p>
        <h3 id="dlg-title">{title}</h3>
        <h4>Problema</h4><p>{problem}</p>
        <h4>Solución</h4><p>{solution}</p>
        <h4>Funcionalidades</h4>
        <ul className="feature-list">{features.map((f) => <li key={f}>{f}</li>)}</ul>
        <ul className="tags">{stack.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="project-links">
          <Button href={repo} variant="ghost">Repositorio</Button>
          <Button href={demo} variant="ghost">Demo</Button>
        </div>
      </div>
    </dialog>
  )
}
