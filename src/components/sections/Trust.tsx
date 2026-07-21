const partners = [
  "EcoNorte",
  "VerdeLab",
  "Raiz Coletiva",
  "Orbit Green",
  "Folha Urbana",
  "Biosfera+",
]

export function Trust() {
  return (
    <section className="border-b border-border bg-cream py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:gap-12">
        <p className="shrink-0 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Quem caminha com a gente
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-start">
          {partners.map((name) => (
            <li
              key={name}
              className="font-display text-sm font-semibold tracking-wide text-foreground/35 md:text-base"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
