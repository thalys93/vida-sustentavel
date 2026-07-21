import { Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SOCIAL_LINKS } from "@/constants/social"

const socials = [
  {
    href: SOCIAL_LINKS.email,
    label: "E-mail",
    icon: Mail,
  },
  {
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
  },
] as const

export function ContactCta() {
  return (
    <section id="contato" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Vamos construir o próximo passo{" "}
          <span className="text-primary">juntos</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Este é um projeto fictício de estudo. Mesmo assim, a conversa sobre
          sustentabilidade é real — acompanhe pelas redes e compartilhe sua
          ideia.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" disabled>
            Enviar e-mail
          </Button>
          {socials.map((social) => (
            <Button
              key={social.label}
              asChild
              variant="primary"
              size="icon"
              className="rounded-full"
            >
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
