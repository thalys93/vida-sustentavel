import type { RefObject } from "react"
import { Leaf, Recycle, Users, type LucideIcon } from "lucide-react"
import { useInViewCountUp } from "@/hooks/useInViewCountUp"

type Stat = {
  target: number
  decimals?: number
  suffix: string
  label: string
  icon: LucideIcon
}

const stats: Stat[] = [
  {
    target: 120,
    suffix: "+",
    label: "Oficinas realizadas",
    icon: Leaf,
  },
  {
    target: 8.5,
    decimals: 1,
    suffix: "k",
    label: "Pessoas engajadas",
    icon: Users,
  },
  {
    target: 42,
    suffix: "t",
    label: "Resíduos evitados",
    icon: Recycle,
  },
]

function ImpactStat({
  stat,
  index,
}: {
  stat: Stat
  index: number
}) {
  const { ref, value } = useInViewCountUp(stat.target, {
    decimals: stat.decimals ?? 0,
  })

  const display =
    stat.decimals && stat.decimals > 0
      ? value.toFixed(stat.decimals)
      : String(value)

  return (
    <li
      ref={ref as RefObject<HTMLLIElement>}
      className={
        index > 0
          ? "flex flex-col items-center gap-2 border-t border-white/15 pt-8 text-center md:border-l md:border-t-0 md:pt-0"
          : "flex flex-col items-center gap-2 text-center"
      }
    >
      <stat.icon className="h-5 w-5 text-lime" aria-hidden />
      <p className="font-display text-4xl font-bold tabular-nums md:text-5xl">
        {display}
        {stat.suffix}
      </p>
      <p className="text-sm text-white/70">{stat.label}</p>
    </li>
  )
}

export function Impact() {
  return (
    <section id="impacto" className="bg-cream pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          Nosso impacto local
        </h2>
        <div className="rounded-[2rem] bg-forest px-6 py-10 text-white shadow-lg md:px-4 md:py-12">
          <ul className="grid gap-8 md:grid-cols-3 md:gap-0">
            {stats.map((stat, index) => (
              <ImpactStat key={stat.label} stat={stat} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
