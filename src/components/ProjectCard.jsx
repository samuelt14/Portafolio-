import { useRef } from 'react'
import useInteractive from '../hooks/useInteractive'
import Button from './Button'

export default function ProjectCard({ project, index, onOpen }) {
  const inner = useRef(null)
  useInteractive(inner, { lift: 6, scale: 1 })
  const { title, summary, stack, repo, demo, hue, status, category } = project

  return (
    <article className="project-card">
      <div className="project-inner" ref={inner}>
        <div className="project-thumb" style={{ '--hue': hue }} aria-hidden="true">
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className="project-body">
          <p className="meta"><span className="status">{status}</span> · {category}</p>
          <h3>{title}</h3>
          <p>{summary}</p>
          <ul className="tags">{stack.map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="project-links">
            <Button onClick={() => onOpen(project)} aria-label={`Ver detalle de ${title}`}>Ver detalle</Button>
            <Button href={repo} variant="ghost">Repositorio</Button>
            <Button href={demo} variant="ghost">Demo</Button>
          </div>
        </div>
      </div>
    </article>
  )
}
