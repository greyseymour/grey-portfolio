"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AsciiSpriteProps {
  art: string
  className?: string
  animate?: "float" | "bounce" | "glitch" | "slide"
}

export function AsciiSprite({ art, className, animate = "float" }: AsciiSpriteProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const variants = {
    float: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    bounce: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "linear" }
    },
    glitch: {
      x: [0, -2, 2, -1, 1, 0],
      opacity: [1, 0.8, 1, 0.9, 1],
      transition: { duration: 0.2, repeat: Infinity }
    },
    slide: {
      x: [-20, 20, -20],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  }

  return (
    <motion.pre
      animate={variants[animate]}
      className={className}
      style={{ fontFamily: "monospace", lineHeight: "1" }}
    >
      {art}
    </motion.pre>
  )
}
