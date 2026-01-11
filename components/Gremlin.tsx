"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const GREMLIN_ART = ["(^._.^)", "<(\")", "(O_O)", "{~_~}", "(>_<)", "(^.^)", "[HACK]", "0101"]
const COLORS = ["text-green-400", "text-blue-400", "text-purple-400", "text-red-400", "text-yellow-400", "text-cyan-400"]

export function Gremlin() {
  const [gremlin, setGremlin] = useState<{ art: string, startX: string, startY: string, endX: string, endY: string, color: string } | null>(null)

  useEffect(() => {
    const spawn = () => {
      const art = GREMLIN_ART[Math.floor(Math.random() * GREMLIN_ART.length)]
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const sides = [
        { sx: "-10%", sy: "10%", ex: "20%", ey: "30%" },
        { sx: "110%", sy: "10%", ex: "80%", ey: "20%" },
        { sx: "-10%", sy: "90%", ex: "15%", ey: "70%" },
        { sx: "110%", sy: "90%", ex: "85%", ey: "80%" }
      ]
      const side = sides[Math.floor(Math.random() * sides.length)]
      setGremlin({ art, startX: side.sx, startY: side.sy, endX: side.ex, endY: side.ey, color })
      setTimeout(() => setGremlin(null), 4000)
    }
    const interval = setInterval(spawn, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {gremlin && (
        <motion.pre
          initial={{ left: gremlin.startX, top: gremlin.startY, opacity: 0, scale: 0 }}
          animate={{ 
            left: [gremlin.startX, gremlin.endX, gremlin.startX],
            top: [gremlin.startY, gremlin.endY, gremlin.startY],
            opacity: [0, 1, 1, 0],
            scale: [0, 1.5, 1.5, 0],
            rotate: [0, 360, 0]
          }}
          transition={{ duration: 4, ease: "linear" }}
          className={`fixed ${gremlin.color} font-black text-lg z-[100] pointer-events-none font-mono`}
        >
          {gremlin.art}
        </motion.pre>
      )}
    </AnimatePresence>
  )
}
