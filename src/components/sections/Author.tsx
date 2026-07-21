import { useEffect, useRef } from "react"
import { SilkBackground } from "@/components/sections/SilkBackground"

const AUTHOR = {
  name: "Thalys Xavier",
  role: "Criador do projeto",
  image:
    "https://res.cloudinary.com/dh39ahmpj/image/upload/v1784670464/1777234931840_wm0jvi.jpg",
  imageAlt: "Retrato do criador do projeto Vida Sustentável",
  paragraphs: [
    "Sou apaixonado por design e por ideias que aproximam pessoas da natureza. O Vida Sustentável nasceu como um exercício de estudo: transformar propósito em interface clara, acessível e com identidade própria.",
    "Aqui, cada seção é um convite a repensar hábitos — da educação ambiental ao engajamento comunitário — sem perder o olhar estético que torna a mensagem memorável.",
  ],
}

export function Author() {
  const sectionRef = useRef<HTMLElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const photo = photoRef.current
    const copy = copyRef.current
    if (!section || !photo || !copy) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    let ticking = false
    const update = () => {
      ticking = false
      const rect = section.getBoundingClientRect()
      const view = window.innerHeight || 1
      const progress = (view * 0.5 - (rect.top + rect.height * 0.5)) / view
      const clamped = Math.max(-1, Math.min(1, progress))
      photo.style.transform = `translate3d(0, ${clamped * -28}px, 0)`
      copy.style.transform = `translate3d(0, ${clamped * 22}px, 0)`
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <section
      id="autor"
      ref={sectionRef}
      className="relative overflow-hidden bg-cream py-20 md:py-28"
    >
      <SilkBackground />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-background to-transparent"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        <div
          ref={photoRef}
          className="will-change-transform overflow-hidden rounded-3xl shadow-xl shadow-forest/15 ring-1 ring-forest/10"
        >
          <img
            src={AUTHOR.image}
            alt={AUTHOR.imageAlt}
            className="aspect-square w-full rounded-3xl object-cover"
            loading="lazy"
          />
        </div>

        <div ref={copyRef} className="space-y-5 will-change-transform">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Quem sou eu
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {AUTHOR.name}
          </h2>
          <p className="text-sm font-medium text-muted-foreground">
            {AUTHOR.role}
          </p>
          {AUTHOR.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="leading-relaxed text-foreground/75"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
