export default function Footer({ name }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {name}. Hecho con React, Vite y GSAP.</p>
      </div>
    </footer>
  )
}
