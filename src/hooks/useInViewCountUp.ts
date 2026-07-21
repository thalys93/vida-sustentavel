import { useEffect, useRef, useState, type RefObject } from "react"

type Options = {
  duration?: number
  decimals?: number
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function useInViewCountUp(target: number, options: Options = {}) {
  const { duration = 1400, decimals = 0 } = options
  const ref = useRef<HTMLElement | null>(null)
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    if (prefersReducedMotion()) {
      setValue(target)
      return
    }

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(target * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, target, duration])

  const display =
    decimals > 0 ? Number(value.toFixed(decimals)) : Math.round(value)

  return { ref: ref as RefObject<HTMLElement>, value: display }
}
