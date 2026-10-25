// Divide el texto en palabras/letras para animarlas con GSAP (sin plugins de pago).
export default function SplitText({ text }) {
  return (
    <span aria-label={text}>
      {text.split(' ').map((word, i) => (
        <span className="word" aria-hidden="true" key={i}>
          {[...word].map((ch, j) => <span className="char" key={j}>{ch}</span>)}
        </span>
      ))}
    </span>
  )
}
