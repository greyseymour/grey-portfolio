"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react"

interface TerminalProps {
  onCommand?: (cmd: string) => void
}

export function Terminal({ onCommand }: TerminalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase()
      setHistory(prev => [...prev, `> ${input}`])
      processCommand(cmd)
      setInput("")
    }
  }

  const processCommand = (cmd: string) => {
    const helpText = "Available commands: /about, /projects, /contact, /clear, /easter-egg"
    
    // Normalize command (remove leading slash if present)
    const normalized = cmd.startsWith("/") ? cmd.slice(1) : cmd

    switch (normalized) {
      case "help":
        setHistory(prev => [...prev, helpText])
        break
      case "clear":
        setHistory([])
        break
      case "about":
        setHistory(prev => [...prev, "Grey G. Seymour: Onchain growth consultant, artist, degen, & dad."])
        break
      case "projects":
        setHistory(prev => [...prev, "Driven growth for >80 onchain projects. Founder of The Growth Cult."])
        break
      case "contact":
        setHistory(prev => [...prev, "Find me on X: @gogokikaider, Farcaster: @greyseymour, or cal.com/growth"])
        break
      case "easter-egg":
        setHistory(prev => [...prev, "🥚 You found it! Try clicking the logo 3 times..."])
        break
      case "":
      default:
        setHistory(prev => [...prev, helpText])
    }
    if (onCommand) onCommand(normalized)
  }

  return (
    <div 
      className="bg-black border-2 border-green-500/30 rounded-xl p-6 font-mono text-sm h-[450px] flex flex-col shadow-[0_0_30px_rgba(0,255,0,0.1)] relative overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />
      
      <div className="flex items-center justify-between mb-4 border-b border-green-500/20 pb-2 z-20">
        <div className="flex items-center gap-2">
          <TerminalIcon size={18} className="text-green-400 animate-pulse" />
          <span className="text-green-400 font-bold tracking-widest uppercase">WELCOME TO GREYNET (TM) - v1.1.7</span>
        </div>
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-2 no-scrollbar z-20 mb-4">
        {history.map((line, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={i} 
            className={line.startsWith(">") ? "text-white font-bold" : "text-green-400/80"}
          >
            {line}
          </motion.div>
        ))}
      </div>

      <div className="mt-auto z-20 space-y-4">
        <div className="text-green-400/40 text-xs animate-pulse font-bold">
          TRY /PROJECTS, /CONTACT, /ABOUT, or /help if needed... or /easter-egg if you dare!
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-x" />
          
          <div className="relative flex items-center bg-black rounded-lg p-3 border border-green-500/50">
            <ChevronRight size={24} className="text-green-400 animate-bounce" />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 ml-2 text-xl text-white placeholder:text-green-900"
              placeholder="ENTER COMMAND_"
              autoFocus
            />
            <div className="flex items-center gap-2 px-2">
              <span className="text-[10px] text-green-500/30">SECURE_LINK: ESTABLISHED</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
