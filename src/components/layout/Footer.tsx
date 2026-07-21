export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="font-display text-xl font-bold">Vida Sustentável</p>
          <p className="text-sm text-primary-foreground/70">
            Projeto fictício de estudo — conteúdo ilustrativo sobre hábitos e
            comunidades mais conscientes.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#inicio" className="hover:text-accent">
            Início
          </a>
          <a href="#pilares" className="hover:text-accent">
            Pilares
          </a>
          <a href="#impacto" className="hover:text-accent">
            Impacto
          </a>
          <a href="#autor" className="hover:text-accent">
            Autor
          </a>
          <a href="#contato" className="hover:text-accent">
            Contato
          </a>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-4 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Vida Sustentável. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
