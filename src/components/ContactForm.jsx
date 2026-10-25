import { useState } from 'react'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT // p. ej. https://formspree.io/f/xxxx (no es un secreto)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Escribe tu nombre (mínimo 2 caracteres).'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Escribe un correo válido, por ejemplo nombre@dominio.com.'
  if (v.message.trim().length < 10) e.message = 'El mensaje debe tener al menos 10 caracteres.'
  return e
}

export default function ContactForm({ email }) {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | mailto | error

  const set = (k) => (e) => setValues({ ...values, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(`cf-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    if (!ENDPOINT) {
      // Sin servicio conectado: se prepara el correo en el cliente del usuario (alternativa real).
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
      window.location.href = `mailto:${email}?subject=${encodeURIComponent('Contacto desde el portafolio')}&body=${body}`
      setStatus('mailto')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('respuesta no válida')
      setStatus('success'); setValues({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const field = (id, label, props = {}) => (
    <div className="field">
      <label htmlFor={`cf-${id}`}>{label}</label>
      {id === 'message'
        ? <textarea id="cf-message" rows="5" value={values.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined} />
        : <input id={`cf-${id}`} value={values[id]} onChange={set(id)} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `err-${id}` : undefined} {...props} />}
      {errors[id] && <p className="error" id={`err-${id}`}>{errors[id]}</p>}
    </div>
  )

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {field('name', 'Nombre', { autoComplete: 'name' })}
      {field('email', 'Correo', { type: 'email', autoComplete: 'email' })}
      {field('message', 'Mensaje')}
      <button className="btn btn--primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
      <div aria-live="polite" className="form-status">
        {status === 'success' && <p className="ok">¡Mensaje enviado! Te responderé pronto.</p>}
        {status === 'mailto' && <p className="ok">Se abrió tu cliente de correo con el mensaje listo. Si no se abrió, escribe a {email}.</p>}
        {status === 'error' && <p className="error">No se pudo enviar. Inténtalo de nuevo o escribe a {email}.</p>}
      </div>
    </form>
  )
}
