"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface BeamsBackgroundProps {
  className?: string
  children?: React.ReactNode
  intensity?: "subtle" | "medium" | "strong"
}

interface Beam {
  x: number
  y: number
  width: number
  length: number
  angle: number
  speed: number
  opacity: number
  hue: number
  pulse: number
  pulseSpeed: number
}

export default function BeamsBackground({ className, intensity = "subtle", children }: BeamsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const beamsRef = useRef<Beam[]>([])
  const animationFrameRef = useRef<number>(0)
  const scrollY = useRef<number>(0)
  const MINIMUM_BEAMS = 20

  const opacityMap = {
    subtle: 0.3,
    medium: 0.6,
    strong: 1,
  }

  const createBeam = (width: number, height: number, scrollProgress: number): Beam => {
    const angle = -35 + (70 * scrollProgress)
    return {
      x: Math.random() * width * 1.5 - width * 0.25,
      y: Math.random() * height * 1.5 - height * 0.25,
      width: 30 + Math.random() * 60,
      length: height * 2.5,
      angle,
      speed: 0.6 + Math.random() * 1.2,
      opacity: 0.05 + Math.random() * 0.05,
      hue: 210 + Math.random() * 10,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)

      const scrollProgress = Math.min(scrollY.current / window.innerHeight, 1)
      const totalBeams = MINIMUM_BEAMS * 1.5
      beamsRef.current = Array.from({ length: totalBeams }, () =>
        createBeam(canvas.width, canvas.height, scrollProgress)
      )
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    const resetBeam = (beam: Beam, index: number) => {
      if (!canvas) return beam
      const column = index % 3
      const spacing = canvas.width / 3

      beam.y = canvas.height + 100
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      beam.width = 100 + Math.random() * 100
      beam.speed = 0.5 + Math.random() * 0.4
      beam.hue = 210 + Math.random() * 10
      beam.opacity = 0.05 + Math.random() * 0.05
      return beam
    }

    const drawBeam = (ctx: CanvasRenderingContext2D, beam: Beam) => {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      const pulsingOpacity = beam.opacity * (0.8 + Math.sin(beam.pulse) * 0.2) * opacityMap[intensity]

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)
      const alphaHex = Math.floor(pulsingOpacity * 255).toString(16).padStart(2, "0")

      gradient.addColorStop(0, `#ffffff00`)
      gradient.addColorStop(0.2, `#ffffff${alphaHex}`)
      gradient.addColorStop(0.5, `#084CA1${alphaHex}`)
      gradient.addColorStop(0.8, `#ffffff${alphaHex}`)
      gradient.addColorStop(1, `#ffffff00`)

      ctx.fillStyle = gradient
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    const animate = () => {
      if (!canvas || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.filter = "blur(25px)"

      const scrollProgress = Math.min(scrollY.current / window.innerHeight, 1)

      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed
        beam.angle = -35 + 70 * scrollProgress

        if (beam.y + beam.length < -100) {
          resetBeam(beam, index)
        }

        drawBeam(ctx, beam)
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [intensity])

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 w-full h-full pointer-events-none z-[-10]", className)}
    />
  )
}