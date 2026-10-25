import { useRef, useState } from 'react'
import { gsap } from '../lib/gsap'
import useGsapMedia from '../hooks/useGsapMedia'
import Section from './Section'
import Button from './Button'
import ContactForm from './ContactForm'

export default function Contact({ links, cv }) {
  const root = useRef(null)
  const [copied, setCopied] = useState(false)

  useGsapMedia(root, ({ motion }) => {
    if (!motion) return
    gsap.from('.contact > *', {
      autoAlpha: 0, y: 24, duration: 0.7, ease: 'power3.out', stagger: 0.1,
      scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
    })
  })

  const copy = async () => {
    try { await navigator.clipboard.writeText(links.email); setCopied(true); setTimeout(() => setCopied(false), 2000) }
    catch { setCopied(false) }
  }

  return (
    <Section id="contacto" eyebrow="Hablemos" title="Contacto">
      <div className="contact" ref={root}>
        <div className="contact-info">
          <p>¿Tienes una oportunidad o quieres conocer más de mi trabajo? Escríbeme.</p>
          <a className="mail" href={`mailto:${links.email}`}>{links.email}</a>
          <div className="contact-links">
            <Button onClick={copy} variant="ghost">{copied ? '¡Copiado!' : 'Copiar correo'}</Button>
            <Button href={links.github} variant="ghost">GitHub</Button>
            <Button href={links.linkedin} variant="ghost">LinkedIn</Button>
            {cv.url && <Button href={cv.url} download>{cv.label}</Button>}
          </div>
          <p className="sr-only" aria-live="polite">{copied ? 'Correo copiado' : ''}</p>
        </div>
        <ContactForm email={links.email} />
      </div>
    </Section>
  )
}
