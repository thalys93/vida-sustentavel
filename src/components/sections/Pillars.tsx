import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const pillars = [
  {
    title: "Educação ambiental",
    description:
      "Oficinas e conteúdos práticos para transformar conhecimento em hábitos do dia a dia.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    alt: "Pessoas em atividade educativa ao ar livre",
  },
  {
    title: "Consumo consciente",
    description:
      "Escolhas que reduzem desperdício, valorizam produtores locais e alongam o ciclo de vida dos produtos.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    alt: "Produtos frescos em mercado local",
  },
  {
    title: "Comunidade ativa",
    description:
      "Redes de mutirão, hortas coletivas e projetos de bairro que multiplicam impacto real.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
    alt: "Horta comunitária com plantas verdes",
  },
]

export function Pillars() {
  return (
    <section id="pilares" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-4xl">
          Soluções para fazer crescer{" "}
          <span className="text-primary">sua consciência</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Três frentes que se reforçam — da sala de aula à calçada do bairro.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-[#d4e8a8]/70 transition-transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-foreground/70">
                  {pillar.description}
                </p>
                <Button
                  asChild
                  size="icon"
                  variant="default"
                  className="mt-2 self-end rounded-full"
                >
                  <a href="#contato" aria-label={`Saiba mais sobre ${pillar.title}`}>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
