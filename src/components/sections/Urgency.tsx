import { useEffect, useRef, useState } from "react"
import {
  amazonDeforestation,
  urgencyMetrics,
  urgencySources,
  type UrgencyMetric,
} from "@/constants/urgency"
import { useRateCounter } from "@/hooks/useRateCounter"

function formatCount(value: number, metric: UrgencyMetric) {
  if (metric.id === "trees") {
    return new Intl.NumberFormat("pt-BR", {
      maximumFractionDigits: 0,
    }).format(Math.floor(value))
  }

  if (value >= 1000) {
    return new Intl.NumberFormat("pt-BR", {
      maximumFractionDigits: 0,
    }).format(Math.floor(value))
  }

  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 1,
  }).format(value)
}

function MetricCounter({ metric }: { metric: UrgencyMetric }) {
  const { value, staticOnly } = useRateCounter(metric.perSecond)

  return (
    <li className="flex flex-col gap-2 border-t border-forest/10 pt-8 first:border-t-0 first:pt-0 md:border-t-0 md:border-l md:pt-0 md:pl-8 md:first:border-l-0 md:first:pl-0">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-ember">
        {metric.label}
      </p>
      <p className="font-display text-4xl font-bold tabular-nums text-foreground md:text-5xl">
        {formatCount(value, metric)}
      </p>
      <p className="text-sm text-muted-foreground">
        {staticOnly ? (
          <>
            Taxa estimada: <span className="text-foreground/80">{metric.rateHint}</span>
          </>
        ) : (
          <>
            {metric.unit} desde que você abriu esta página
            <span className="mt-1 block text-muted-foreground/70">{metric.rateHint}</span>
          </>
        )}
      </p>
    </li>
  )
}

function AmazonBarChart() {
  const ref = useRef<SVGSVGElement | null>(null)
  const [visible, setVisible] = useState(false)
  const max = Math.max(...amazonDeforestation.map((d) => d.km2))
  const width = 560
  const height = 220
  const padX = 36
  const padY = 28
  const chartW = width - padX * 2
  const chartH = height - padY * 2
  const gap = 12
  const barW = (chartW - gap * (amazonDeforestation.length - 1)) / amazonDeforestation.length

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="mt-16">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
          Desmatamento na Amazônia Legal
        </h3>
        <p className="text-sm text-muted-foreground">km² por ano · PRODES/INPE</p>
      </div>

      <svg
        ref={ref}
        viewBox={`0 0 ${width} ${height}`}
        className="mt-8 h-auto w-full"
        role="img"
        aria-label="Gráfico de barras do desmatamento anual na Amazônia Legal de 2019 a 2024"
      >
        {amazonDeforestation.map((point, index) => {
          const barH = (point.km2 / max) * chartH
          const x = padX + index * (barW + gap)
          const y = padY + chartH - (visible ? barH : 0)
          const isLatest = index === amazonDeforestation.length - 1

          return (
            <g key={point.year}>
              <rect
                x={x}
                y={y}
                width={barW}
                height={visible ? barH : 0}
                rx={4}
                fill={isLatest ? "#E8A05A" : "#0B2E26"}
                opacity={isLatest ? 1 : 0.28}
                style={{
                  transition: "height 0.8s ease-out, y 0.8s ease-out",
                  transitionDelay: `${index * 80}ms`,
                }}
              />
              <text
                x={x + barW / 2}
                y={height - 6}
                textAnchor="middle"
                className="fill-foreground/45"
                fontSize="11"
              >
                {point.year}
              </text>
              <text
                x={x + barW / 2}
                y={y - 8}
                textAnchor="middle"
                className="fill-foreground/65"
                fontSize="10"
                opacity={visible ? 1 : 0}
                style={{ transition: "opacity 0.4s ease-out", transitionDelay: `${index * 80 + 400}ms` }}
              >
                {new Intl.NumberFormat("pt-BR").format(point.km2)}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export function Urgency() {
  return (
    <section
      id="urgencia"
      className="bg-[linear-gradient(to_bottom,transparent_0%,#EAE6DE_18%,#EAE6DE_82%,transparent_100%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl font-display text-3xl font-bold text-foreground md:text-5xl">
          Enquanto você lê…
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
          O planeta não espera. Estes números sobem com base em taxas médias
          globais estimadas — um lembrete do tamanho do desafio.
        </p>

        <ul className="mt-14 grid gap-0 md:grid-cols-3">
          {urgencyMetrics.map((metric) => (
            <MetricCounter key={metric.id} metric={metric} />
          ))}
        </ul>

        <AmazonBarChart />

        <footer className="mt-12 border-t border-forest/10 pt-6">
          <p className="text-xs text-muted-foreground/70">
            Estimativas curadas para ilustração. Fontes:{" "}
            {urgencySources.map((source, index) => (
              <span key={source.url}>
                {index > 0 && " · "}
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-forest/20 underline-offset-2 transition-colors hover:text-ember hover:decoration-ember"
                >
                  {source.label}
                </a>
              </span>
            ))}
            .
          </p>
        </footer>
      </div>
    </section>
  )
}
