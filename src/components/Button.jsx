import { useRef } from 'react'
import useInteractive from '../hooks/useInteractive'
import { scrollToSection } from '../lib/scroll'

// Enlace (href), botón (onClick) o nada: sin href ni onClick no se renderiza un control falso.
export default function Button({ href, onClick, download, variant = 'primary', children, ...rest }) {
  const ref = useRef(null)
  useInteractive(ref)
  const cls = `btn btn--${variant}`

  if (!href && onClick) return <button ref={ref} type="button" className={cls} onClick={onClick} {...rest}>{children}</button>
  if (!href) return null

  let extra = {}
  if (href.startsWith('#')) extra = { onClick: (e) => { e.preventDefault(); scrollToSection(href.slice(1)) } }
  else if (download) extra = { download: true }
  else if (!href.startsWith('mailto:')) extra = { target: '_blank', rel: 'noopener noreferrer' }
  return <a ref={ref} className={cls} href={href} {...extra} {...rest}>{children}</a>
}
