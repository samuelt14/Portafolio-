# Portafolio Full Stack Junior

Portafolio personal desarrollado con React, Vite y GSAP. El proyecto presenta información profesional, habilidades, experiencia y proyectos en una interfaz adaptable a diferentes dispositivos.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior.
- npm, incluido con Node.js.
- Git (opcional, para clonar el repositorio).

## Instalación y ejecución

1. Clona o descarga el repositorio.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre la dirección que muestra la terminal. Por defecto, Vite utiliza:

   `http://localhost:5173`

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción en la carpeta `dist/`. |
| `npm run preview` | Sirve localmente la versión compilada para comprobarla. |

## Personalización del contenido

Edita `src/data/portfolio.js` para actualizar el nombre, los enlaces de contacto, los proyectos, las habilidades técnicas y la experiencia profesional.

Los datos incluidos inicialmente son ejemplos. Reemplázalos por tu información antes de publicar el sitio.

### Etiquetas de ejemplo

Si un proyecto contiene la propiedad `sample: true`, se mostrará una etiqueta que indica que es un ejemplo. Elimina esa propiedad o cámbiala a `false` cuando hayas reemplazado los datos por información real.

### Enlaces de proyectos

Si `repo` o `demo` tienen el valor `''`, el botón correspondiente se mostrará deshabilitado. Añade una URL válida para habilitarlo.

## Estructura principal

```text
src/
├── components/       # Componentes de la interfaz
├── data/
│   └── portfolio.js  # Contenido editable del portafolio
├── hooks/
│   ├── useGsapMedia.js
│   └── useInteractive.js
└── lib/
    └── gsap.js       # Registro de plugins de GSAP
```

## Tecnologías

- **React:** construcción de la interfaz mediante componentes.
- **Vite:** servidor de desarrollo y herramienta de compilación.
- **GSAP:** animaciones e interacciones visuales.
- **ScrollTrigger:** animaciones vinculadas al desplazamiento.
- **ScrollToPlugin:** desplazamiento controlado mediante GSAP.

## Animaciones e interacciones

- `src/lib/gsap.js` registra los plugins de GSAP utilizados por el proyecto.
- `src/hooks/useGsapMedia.js` utiliza `gsap.matchMedia()` para adaptar las animaciones a distintas condiciones y gestionar la limpieza al desmontar componentes.
- `src/hooks/useInteractive.js` contiene microinteracciones, como efectos al pasar el cursor o presionar elementos.
- `src/components/` reúne las secciones visuales del sitio, como la navegación, la portada, los proyectos, las habilidades, la información personal, el contacto y el pie de página.

## Compilación para producción

Genera los archivos optimizados:

```bash
npm run build
```

El resultado se guarda en `dist/`. Para probar esa compilación localmente:

```bash
npm run preview
```

Antes de publicar, verifica que los datos personales, los enlaces y los proyectos sean correctos.

## Licencia

No se especifica una licencia en este archivo. Si vas a distribuir el proyecto, añade una licencia adecuada al repositorio.
