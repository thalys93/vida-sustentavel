import { useEffect, useRef } from "react"
import { mountSilkShader } from "@/lib/silk-shader"
import { cn } from "@/lib/utils"

export function SilkBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const api = mountSilkShader(canvas)

    const io = new IntersectionObserver(
      ([entry]) => api.setVisible(entry.isIntersecting),
      { rootMargin: "80px", threshold: 0 }
    )
    io.observe(canvas)

    return () => {
      io.disconnect()
      api.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  )
}
