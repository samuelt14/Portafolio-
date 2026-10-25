// ============================================================
// Datos del portafolio. Solo información real proporcionada por el propietario.
// - `repo` / `demo` vacíos ('') => el botón no se muestra (no hay enlaces inventados).
// - `links` y `cv` siguen siendo marcadores: reemplázalos por los reales.
// - `cv.url`: pon la ruta de tu hoja de vida (p. ej. '/cv.pdf' con el archivo en /public).
// ============================================================

export const profile = {
  name: 'Samuel',
  role: 'Desarrollador Full Stack Junior',
  tagline: 'Desarrollo interfaces con React, servicios con Python y trabajo con bases de datos Oracle y PostgreSQL.',
}

export const links = {
  github: 'https://github.com/samuelt14',          // PLACEHOLDER
  linkedin: 'https://www.linkedin.com/in/samuel-torres', // PLACEHOLDER
  email: 'samuelk9@gmail.com',                    // PLACEHOLDER
}

export const cv = { url: '', label: 'Descargar hoja de vida' }

export const projects = [
  {
    id: 'nequi-alerts', title: 'Nequi Stream Alerts', category: 'Web', status: 'En desarrollo', hue: 170,
    summary: 'Widget de alertas animadas para OBS en directos de Kick.',
    problem: 'Mostrar en directo una alerta visual y sonora cuando llega una transferencia, sin exponer datos financieros.',
    solution: 'Un servidor local ligero entrega a OBS un widget transparente; se desarrolla primero con eventos simulados.',
    features: ['Alerta animada y transparente con sonido', 'Servidor solo local', 'No muestra saldos ni datos financieros', 'Sin contraseñas ni tokens en el código'],
    stack: ['Python', 'FastAPI', 'HTML', 'CSS', 'JavaScript'], repo: '', demo: '',
  },
  {
    id: 'edu-tech', title: 'EDU TECH (Oracle 18c)', category: 'Bases de datos', status: 'Académico', hue: 25,
    summary: 'Proyecto final de Administración de Bases de Datos sobre una plataforma educativa ficticia.',
    problem: 'Administrar una base de datos Oracle de punta a punta y documentar cada etapa como evidencia.',
    solution: 'Entorno Oracle Database 18c Express Edition trabajado en siete etapas documentadas, incluido un reto de respaldo con RMAN.',
    features: ['Oracle Database 18c Express Edition', 'Siete etapas con evidencia documental', 'Respaldo con RMAN'],
    stack: ['Oracle 18c', 'SQL', 'RMAN'], repo: '', demo: '',
  },
  {
    id: 'comercio', title: 'Base de datos Comercio', category: 'Bases de datos', status: 'Académico', hue: 255,
    summary: 'Base PostgreSQL de comercio (estilo Northwind) con validación de scripts y DML complejo.',
    problem: 'Modificar datos relacionados de forma correcta y verificable.',
    solution: 'Scripts SQL validados con operaciones que respetan el orden de cálculo y las dependencias entre tablas.',
    features: ['Inserciones en varias tablas', 'Actualizaciones condicionales por grupos de proveedores y categorías', 'Actualizaciones secuenciales en dos pasos', 'Borrados en cascada'],
    stack: ['PostgreSQL', 'SQL'], repo: '', demo: '',
  },
  {
    id: 'portafolio', title: 'Este portafolio', category: 'Web', status: 'En desarrollo', hue: 320,
    summary: 'Sitio personal con temas claro/oscuro, animaciones GSAP y diseño responsive.',
    problem: 'Presentar proyectos y habilidades de forma clara a reclutadores.',
    solution: 'SPA en React con datos separados de los componentes y animaciones que respetan prefers-reduced-motion.',
    features: ['Tema claro/oscuro persistente', 'Filtros y detalle de proyectos', 'Formulario con validación', 'Animaciones con GSAP y ScrollTrigger'],
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'GSAP'], repo: '', demo: '',
  },
]

// Cada habilidad está respaldada por al menos un proyecto de la lista.
export const skills = [
  { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'GSAP'] },
  { category: 'Backend', items: ['Python', 'FastAPI'] },
  { category: 'Bases de datos', items: ['Oracle 18c', 'PostgreSQL', 'SQL', 'RMAN'] },
]

export const about = {
  paragraphs: [
    'Estudiante en la Corporación Unificada Nacional de Educación Superior (CUN), con formación en administración de bases de datos, matemáticas aplicadas y producción de documentos técnicos.',
    'Busco mi primera oportunidad como desarrollador Full Stack Junior para seguir construyendo productos reales.',
  ],
}

export const experience = [
  {
    period: 'En curso',
    title: 'Estudiante',
    place: 'Corporación Unificada Nacional de Educación Superior (CUN)',
    description: 'Administración de bases de datos, matemáticas aplicadas y documentación técnica.',
  },
]
