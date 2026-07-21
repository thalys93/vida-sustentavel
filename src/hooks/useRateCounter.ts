import { useEffect, useState } from "react"

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function useRateCounter(ratePerSecond: number) {
  const [value, setValue] = useState(0)
  const [staticOnly, setStaticOnly] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setStaticOnly(true)
      setValue(ratePerSecond * 3600)
      return
    }

    let frame = 0
    let start = performance.now()
    let pausedAt = 0
    let elapsedPaused = 0

    const tick = (now: number) => {
      if (document.visibilityState === "hidden") {
        frame = requestAnimationFrame(tick)
        return
      }
      const elapsed = (now - start - elapsedPaused) / 1000
      setValue(elapsed * ratePerSecond)
      frame = requestAnimationFrame(tick)
    }

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        pausedAt = performance.now()
      } else if (pausedAt) {
        elapsedPaused += performance.now() - pausedAt
        pausedAt = 0
      }
    }

    document.addEventListener("visibilitychange", onVisibility)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [ratePerSecond])

  return { value, staticOnly }
}
