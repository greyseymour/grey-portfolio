"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, useAnimation } from "framer-motion"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className }: GlitchTextProps) {
  const controls = useAnimation()
  const [displayText, setDisplayText] = useState(text)
  const chars = "!@#$%^&*()_+{}:\"<>?|~`-=[]\\;',./"

  const scramble = useCallback(async () => {
    await controls.start({
      opacity: [1, 0.5, 1, 0.8, 1],
      filter: [
        "drop-shadow(0 0 0px transparent)",
        "drop-shadow(2px 0 5px #f0f) drop-shadow(-2px 0 5px #0ff)",
        "drop-shadow(0 0 0px transparent)"
      ],
      transition: { duration: 0.3 }
    })

    const originalText = text.split("")
    for (let i = 0; i < 5; i++) {
      const scrambled = originalText.map((char) => 
        char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]
      ).join("")
      setDisplayText(scrambled)
      await new Promise(r => setTimeout(r, 60))
    }

    setDisplayText(text)
    await controls.start({
      filter: [
        "drop-shadow(0 0 15px #fff)",
        "drop-shadow(0 0 0px transparent)"
      ],
      transition: { duration: 0.4 }
    })
  }, [text, controls, chars])

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      scramble()
      const interval = setInterval(() => {
        scramble()
      }, 35000)
      return () => clearInterval(interval)
    }, 6000)

    return () => clearTimeout(initialTimeout)
  }, [scramble])

  return (
    <div className="relative inline-flex items-center justify-center overflow-hidden" style={{ minHeight: "1.2em" }}>
      <motion.span
        animate={controls}
        className={className}
        style={{ display: "inline-block", whiteSpace: "pre" }}
      >
        {displayText}
      </motion.span>
    </div>
  )
}
