import { useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type ScrollExpandHeroProps = {
  mediaType?: "image" | "video"
  mediaSrc: string
  mediaAlt?: string
  bgImageSrc: string
  title: string
  eyebrow?: string
  scrollHint?: string
  children?: ReactNode
}

function youtubeEmbedSrc(src: string) {
  const idMatch = src.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/
  )
  const id = idMatch?.[1]
  if (!id) return src
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    controls: "0",
    playsinline: "1",
    rel: "0",
    modestbranding: "1",
    disablekb: "1",
    playlist: id,
  })
  return `https://www.youtube.com/embed/${id}?${params.toString()}`
}

export function ScrollExpandHero({
  mediaType = "image",
  mediaSrc,
  mediaAlt = "",
  bgImageSrc,
  title,
  eyebrow,
  scrollHint = "Role para expandir",
  children,
}: ScrollExpandHeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const progressRef = useRef(0)
  const expandedRef = useRef(false)
  const touchStartY = useRef(0)
  const reduceMotion = useRef(false)

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (reduceMotion.current) {
      progressRef.current = 1
      expandedRef.current = true
      setScrollProgress(1)
      setMediaFullyExpanded(true)
      setShowContent(true)
    }
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (reduceMotion.current) return

    const applyProgress = (next: number) => {
      progressRef.current = next
      setScrollProgress(next)
      if (next >= 1) {
        expandedRef.current = true
        setMediaFullyExpanded(true)
        setShowContent(true)
      } else if (next < 0.75) {
        expandedRef.current = false
        setMediaFullyExpanded(false)
        setShowContent(false)
      }
    }

    const onWheel = (e: WheelEvent) => {
      if (expandedRef.current && e.deltaY < 0 && window.scrollY <= 5) {
        e.preventDefault()
        expandedRef.current = false
        setMediaFullyExpanded(false)
        applyProgress(Math.max(progressRef.current + e.deltaY * 0.0009, 0))
        return
      }
      if (!expandedRef.current) {
        e.preventDefault()
        applyProgress(
          Math.min(Math.max(progressRef.current + e.deltaY * 0.0009, 0), 1)
        )
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const onTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY
      const deltaY = touchStartY.current - touchY

      if (expandedRef.current && deltaY < -20 && window.scrollY <= 5) {
        e.preventDefault()
        expandedRef.current = false
        setMediaFullyExpanded(false)
      }

      if (!expandedRef.current) {
        e.preventDefault()
        const factor = deltaY < 0 ? 0.008 : 0.005
        applyProgress(
          Math.min(Math.max(progressRef.current + deltaY * factor, 0), 1)
        )
        touchStartY.current = touchY
      }
    }

    const onScroll = () => {
      if (!expandedRef.current) window.scrollTo(0, 0)
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("scroll", onScroll)
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })

    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
    }
  }, [])

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250)
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400)
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150)
  const words = title.trim().split(/\s+/)
  const firstWord = words[0] ?? ""
  const restOfTitle = words.slice(1).join(" ")

  return (
    <div id="inicio" className="overflow-x-hidden bg-forest">
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-start">
        <div className="relative flex min-h-[100dvh] w-full flex-col items-center">
          <div
            className="absolute inset-0 z-0 h-full"
            style={{ opacity: 1 - scrollProgress }}
          >
            <img
              src={bgImageSrc}
              alt=""
              className="h-screen w-screen object-cover object-center"
              aria-hidden
            />
            <div className="absolute inset-0 bg-forest/40" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6">
            <div className="relative flex h-[100dvh] w-full flex-col items-center justify-center">
              <div
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-2xl shadow-forest/40"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                }}
              >
                {mediaType === "video" ? (
                  <div className="pointer-events-none relative h-full w-full overflow-hidden rounded-xl [container-type:size]">
                    <iframe
                      title={mediaAlt || title}
                      src={youtubeEmbedSrc(mediaSrc)}
                      className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 border-0"
                      style={{
                        width: "max(100cqw, calc(100cqh * 16 / 9))",
                        height: "max(100cqh, calc(100cqw * 9 / 16))",
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div
                      className="absolute inset-0 rounded-xl bg-forest/40"
                      style={{ opacity: 0.55 - scrollProgress * 0.25 }}
                    />
                  </div>
                ) : (
                  <>
                    <img
                      src={mediaSrc}
                      alt={mediaAlt}
                      className="h-full w-full rounded-xl object-cover"
                    />
                    <div
                      className="absolute inset-0 rounded-xl bg-forest/50"
                      style={{ opacity: 0.7 - scrollProgress * 0.3 }}
                    />
                  </>
                )}
              </div>

              <div className="relative z-10 mt-4 flex flex-col items-center text-center">
                {eyebrow && (
                  <p
                    className="text-sm font-semibold uppercase tracking-wider text-lime md:text-base"
                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                  >
                    {eyebrow}
                  </p>
                )}
                {scrollHint && !mediaFullyExpanded && (
                  <p
                    className="mt-2 text-sm font-medium text-white/70"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {scrollHint}
                  </p>
                )}
              </div>

              <h1 className="relative z-10 flex w-full flex-col items-center justify-center gap-2 text-center mix-blend-difference md:gap-4">
                <span
                  className="font-display text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </span>
                {restOfTitle && (
                  <span
                    className="font-display text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {restOfTitle}
                  </span>
                )}
              </h1>
            </div>

            <div
              className="w-full px-2 pb-16 pt-6 transition-opacity duration-700 md:pb-24"
              style={{
                opacity: showContent ? 1 : 0,
                pointerEvents: showContent ? "auto" : "none",
              }}
              aria-hidden={!showContent}
            >
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function Hero() {
  return (
    <ScrollExpandHero
      title="Vida Sustentável"
      eyebrow="Um modelo de vida"
      scrollHint="Role para expandir"
      mediaType="video"
      mediaSrc="https://www.youtube.com/watch?v=RzVvThhjAKw"
      mediaAlt="Vídeo sobre vida sustentável"
      bgImageSrc="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
    >
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <p className="text-lg text-white/80 md:text-xl">
          Educação, hábitos conscientes e comunidade — juntos construímos um
          futuro mais verde, um passo de cada vez.
        </p>
        <Button asChild size="lg">
          <a href="#pilares">
            Conhecer pilares
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </ScrollExpandHero>
  )
}
