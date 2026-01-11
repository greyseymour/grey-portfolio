"use client"

import { useEffect, useRef } from "react"

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~"
    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(-1)
    
    let lastTime = 0
    const fps = 15 // Lower FPS for better performance
    const interval = 1000 / fps

    let animationFrameId: number

    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw)

      const delta = timestamp - lastTime
      if (delta < interval) return
      lastTime = timestamp - (delta % interval)

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0f0"
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] === -1) {
          if (Math.random() > 0.998) {
            drops[i] = 0
          }
          continue
        }

        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.9) {
          drops[i] = -1
        } else {
          drops[i]++
        }
      }
    }

    animationFrameId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1] opacity-20"
    />
  )
}
