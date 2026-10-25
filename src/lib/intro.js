// Decide una sola vez por carga si se reproduce la intro (la leen Intro, Hero y Navbar).
// Comportamiento: una vez por pestaña/sesión. Recargar en la misma pestaña NO la repite;
// una pestaña nueva sí. Con prefers-reduced-motion no se reproduce.
const KEY = 'intro-seen'
let seen = false
try { seen = sessionStorage.getItem(KEY) === '1' } catch { /* sin almacenamiento: se reproduce */ }
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const PLAY_INTRO = !reduce && !seen
export const INTRO_DELAY = 2.2 // instante en que la intro empieza a revelar la web
export const markIntroSeen = () => { try { sessionStorage.setItem(KEY, '1') } catch { /* ignorar */ } }
