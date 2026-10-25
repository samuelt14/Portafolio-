// Detalle visual con estética de editor. Se construye solo con datos reales del portafolio.
export default function CodeCard({ profile, skills }) {
  const lines = [
    ['const', ' samuel = {'],
    ...[['rol', profile.role], ...skills.map((g) => [g.category.toLowerCase(), g.items.slice(0, 3).join(', ')])]
      .map(([k, v]) => ['row', k, v]),
    ['end', '}'],
  ]
  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-bar"><i /><i /><i /><span>perfil.js</span></div>
      <pre>
        {lines.map((l, i) => (
          <div className="code-line" key={i}>
            {l[0] === 'const' && <><span className="kw">const</span>{l[1]}</>}
            {l[0] === 'row' && <>{'  '}<span className="k">{l[1]}</span>: <span className="s">"{l[2]}"</span>,</>}
            {l[0] === 'end' && l[1]}
          </div>
        ))}
      </pre>
    </div>
  )
}
