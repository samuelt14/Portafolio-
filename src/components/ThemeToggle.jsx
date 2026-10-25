import useTheme from '../hooks/useTheme'

export default function ThemeToggle() {
  const [theme, toggle] = useTheme()
  const light = theme === 'light'
  return (
    <button className="theme-toggle" onClick={toggle} aria-pressed={light}
      aria-label={light ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}>
      <span aria-hidden="true">{light ? '☾' : '☀'}</span>
    </button>
  )
}
