import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#pilares", label: "Pilares" },
  { href: "#urgencia", label: "Cenário" },
  { href: "#impacto", label: "Impacto" },
  { href: "#autor", label: "Autor" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#inicio"
          className="font-display text-lg font-bold tracking-tight text-white"
        >
          Vida Sustentável
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="outline" size="sm">
            <a href="#contato">Fale conosco</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-white/10 bg-forest/95 px-6 py-4 md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="default" size="sm" className="mt-2 w-fit">
            <a href="#contato" onClick={() => setOpen(false)}>
              Fale conosco
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
