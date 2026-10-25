// ============================================================
// Datos del portafolio. Solo información real proporcionada por el propietario.
// - `repo` / `demo` vacíos ('') => el botón no se muestra (no hay enlaces inventados).
// - `links` y `cv` siguen siendo marcadores: reemplázalos por los reales.
// - `cv.url`: pon la ruta de tu hoja de vida (p. ej. '/cv.pdf' con el archivo en /public).
// ============================================================

export const profile = {
  name: 'Samuel Torres',
  role: 'Desarrollador Full Stack Junior',
  tagline: 'Desarrollo interfaces con React, servicios con Python y trabajo con bases de datos Oracle y PostgreSQL.',
}

export const links = {
  github: 'https://github.com/samuelt14',          // PLACEHOLDER
  linkedin: 'https://www.linkedin.com/in/samuel-andres-torres-romero-417356337/', // PLACEHOLDER
  email: 'samuelk9@gmail.com',                    // PLACEHOLDER
}

export const cv = { url: '', label: 'Descargar hoja de vida' }

export const projects = [
  {
    id: 'Now-Playing',
    title: 'Now Playing',
    category: 'Web',
    status: 'En desarrollo',
    hue: 280,
    summary: 'Widget para OBS que detecta y muestra la música que está sonando durante los directos.',
    problem: 'Mostrar en tiempo real el título, el artista y la portada de la canción actual sin interrumpir la transmisión.',
    solution: 'Una extensión de navegador con un servidor local y un widget HTML transparente que obtiene la información musical y la presenta en OBS.',
    features: [
      'Detección y actualización de la canción actual',
      'Visualización del título, artista y portada',
      'Diseño transparente integrado con OBS Studio',
      'Actualización automática de la información musical',
      'Servidor local para gestionar los datos',
      'Interfaz optimizada para directos en vivo'
    ],
    stack: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'OBS Studio'],
    repo: 'https://github.com/samuelt14/Now-Playing',
    demo: '',
  },
  {
    id: 'Nexora-Ecommerce',
    title: 'Nexora E-commerce',
    category: 'Web',
    status: 'En desarrollo',
    hue: 260,
    summary: 'Plataforma de comercio electrónico con una interfaz moderna y una experiencia de compra intuitiva.',
    problem: 'Ofrecer una experiencia de compra en línea organizada, atractiva y adaptable a diferentes dispositivos.',
    solution: 'Desarrollo de una tienda virtual con catálogo de productos, navegación intuitiva y una interfaz responsive orientada a facilitar el proceso de compra.',
    features: [
      'Catálogo y presentación de productos',
      'Interfaz de usuario moderna y responsive',
      'Navegación intuitiva entre secciones',
      'Diseño adaptable a móviles, tabletas y escritorio',
      'Experiencia de compra centrada en el usuario'
    ],
    stack: ['JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/samuelt14/ecommerce-nexora',
    demo: '',
  },
  {
    id: 'portafolio', title: 'Este portafolio', category: 'Web', status: 'En desarrollo', hue: 320,
    summary: 'Sitio personal con temas claro/oscuro, animaciones GSAP y diseño responsive.',
    problem: 'Presentar proyectos y habilidades de forma clara a reclutadores.',
    solution: 'SPA en React con datos separados de los componentes y animaciones que respetan prefers-reduced-motion.',
    features: 
    ['Tema claro/oscuro persistente',
      'Filtros y detalle de proyectos',
      'Formulario con validación',
      'Animaciones con GSAP y ScrollTrigger'],
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'GSAP'], 
    repo: 'https://github.com/samuelt14/Portafolio-', 
    demo: '',
  },
  {
    id: 'comercio', title: 'Base de datos Comercio', category: 'Bases de datos', status: 'Académico', hue: 255,
    summary: 'Base PostgreSQL de comercio (estilo Northwind) con validación de scripts y DML complejo.',
    problem: 'Modificar datos relacionados de forma correcta y verificable.',
    solution: 'Scripts SQL validados con operaciones que respetan el orden de cálculo y las dependencias entre tablas.',
    features: ['Inserciones en varias tablas', 'Actualizaciones condicionales por grupos de proveedores y categorías', 'Actualizaciones secuenciales en dos pasos', 'Borrados en cascada'],
    stack: ['PostgreSQL', 'SQL'], repo: '', demo: '',
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
