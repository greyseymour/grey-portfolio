"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal } from "@/components/Terminal"
import { GlassCard } from "@/components/GlassCard"
import { MatrixRain } from "@/components/MatrixRain"
import { AsciiSprite } from "@/components/AsciiSprite"
import { GlitchText } from "@/components/GlitchText"
import { Gremlin } from "@/components/Gremlin"
import { 
  Linkedin, 
  ExternalLink, 
  Code, 
  Palette, 
  Users,
  Calendar,
  Skull,
  Activity,
  ShieldAlert,
  Bug,
  Mail
} from "lucide-react"
import Image from "next/image"

// ASCII Art Constants
const GROWTH_CULT_ART = "     .---.\n    /     \\\n    | () () |\n    \\  ^  /\n     '---'";

const ENGINE_ART = "      .--------.\n    / .------. \\\n   / /        \\ \\\n   | |        | |\n  _| |________| |_\n.' |_|        |_| '.\n'._____ ____ _____.'\n|     .'    '.     |\n'----|        |----'\n     |        |\n     |        |\n     '--------'";

const HACK_BANNER = "    ________________________________________________\n   /                                                \\\n  |    HACK THE PLANET. GROW THE CULT. ONCHAIN.      |\n   \\________________________________________________/";

const FOOTER_ART = "      _\n     | |\n   __| | __ _  __| |\n  / _` |/ _` |/ _` |\n | (_| | (_| | (_| |\n  \\__,_|\\__,_|\\__,_|";

export default function Home() {
  const [logoClicks, setLogoClicks] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const handleLogoClick = () => {
    setLogoClicks(prev => prev + 1)
    if (logoClicks + 1 >= 3) {
      setShowEasterEgg(true)
      setTimeout(() => setShowEasterEgg(false), 5000)
      setLogoClicks(0)
    }
  }

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto space-y-16 relative overflow-hidden bg-black">
      <MatrixRain />
      <Gremlin />
      
      {/* Background Sprites */}
      <AsciiSprite art="(^._.^)" className="fixed top-10 left-10 text-green-500/10 text-[12px] z-[-1]" animate="bounce" />
      <AsciiSprite art={'<(")'} className="fixed top-40 right-10 text-blue-500/10 text-[12px] z-[-1]" animate="float" />
      <AsciiSprite art="(O_O)" className="fixed bottom-20 left-20 text-red-500/10 text-[12px] z-[-1]" animate="glitch" />
      <AsciiSprite art="[###]" className="fixed bottom-40 right-40 text-purple-500/10 text-[12px] z-[-1]" animate="slide" />
      <AsciiSprite art="{~_~}" className="fixed top-1/2 right-4 text-yellow-500/10 text-[12px] z-[-1]" animate="bounce" />

      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
        <div className="flex items-center gap-8">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLogoClick}
            className="relative w-24 h-24 md:w-32 md:h-32 cursor-pointer group"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <Image 
              src="/images/pfp.gif" 
              alt="Grey's PFP" 
              fill 
              className="object-cover rounded-full border-2 border-white/20 shadow-[0_0_40px_rgba(74,222,128,0.6)] z-10"
            />
          </motion.div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 h-[1.2em] relative w-full justify-center md:justify-start">
              <h1 className="text-3xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] italic uppercase">
                <GlitchText text="GREY G. SEYMOUR" />
              </h1>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="hidden md:block h-1 w-12 bg-green-500 animate-pulse" />
              <p className="text-green-400 font-mono text-sm md:text-2xl terminal-text font-black tracking-tight text-center md:text-left">
                onchain growth guy of your dreams
              </p>
              <span className="terminal-cursor" />
            </div>
          </div>
        </div>
        
        {/* Social Links - 3 on top, 1 on bottom layout */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-3">
            <SocialLink href="http://farcaster.xyz/greyseymour" icon={<FarcasterIcon />} />
            <SocialLink href="https://x.com/gogokikaider" icon={<XIcon />} />
            <SocialLink href="https://www.linkedin.com/in/ggseymour" icon={<Linkedin size={20} />} />
          </div>
          <SocialLink href="mailto:grey@greyseymour.com" icon={<Mail size={20} />} />
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
        <div className="lg:col-span-2 space-y-16">
          <div className="relative">
            <div className="absolute -top-4 -left-4 z-30">
              <AsciiSprite art="[ SYSTEM_CORE: ACTIVE ]" className="text-[10px] text-green-400 bg-black px-2 border border-green-500" animate="glitch" />
            </div>
            <Terminal />
          </div>
          
          <div className="relative">
            <div className="absolute -top-8 right-10 opacity-30">
              <AsciiSprite art="(^._.^)" animate="bounce" className="text-blue-400" />
            </div>
            <GlassCard delay={0.2} className="border-l-8 border-l-blue-600 bg-black/60">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6">
                  <div className="p-3 bg-blue-600/20 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                    <Users className="text-blue-400" size={32} />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter italic">THE GROWTH CULT</h2>
                </div>
                <AsciiSprite art={GROWTH_CULT_ART} className="text-blue-400/40 hidden md:block" animate="float" />
              </div>
              <p className="text-white/90 text-lg md:xl leading-relaxed mb-10 font-bold">
                We&apos;ve driven growth for <span className="text-blue-400 underline decoration-double underline-offset-8">&gt;80 onchain projects</span> in the last year. 
                Specializing in Onchain Launch Strategy, Base L2 ecosystem growth, 
                and Onchain Media concept-to-creation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <Stat label="Projects" value="80+" color="blue" />
                <Stat label="Mints" value="50k+" color="blue" />
                <Stat label="Music Mints" value="15k+" color="blue" />
                <Stat label="Ecosystem" value="Base" color="blue" />
              </div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <GlassCard delay={0.4} className="relative overflow-hidden border-t-8 border-t-purple-600 bg-black/60 h-full">
              <div className="flex items-center gap-4 mb-8">
                <Palette className="text-purple-400" size={28} />
                <h3 className="text-2xl md:text-3xl font-black text-white italic">Artist & Degen</h3>
              </div>
              <p className="text-white/80 text-base md:text-lg mb-10 font-bold">
                Concept to publication of NFTs, onchain music, and video/animations 
                across Zora, OpenSea, and Blur.
              </p>
            </GlassCard>

            <GlassCard delay={0.6} className="relative overflow-hidden border-t-8 border-t-green-600 bg-black/60 h-full">
              <div className="flex items-center gap-4 mb-8">
                <Code className="text-green-400" size={28} />
                <h3 className="text-2xl md:text-3xl font-black text-white italic">Web3 Dev</h3>
              </div>
              <p className="text-white/80 text-base md:text-lg mb-10 font-bold">
                Building token utilities, presale sites, custom mint pages, 
                and complex staking mechanics.
              </p>
            </GlassCard>
          </div>
        </div>

        <div className="space-y-16">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur opacity-40 group-hover:opacity-100 transition duration-1000 animate-gradient-x" />
            <GlassCard className="bg-black border-4 border-blue-500 relative overflow-hidden" delay={0.8}>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <AsciiSprite art="(O_O)" animate="glitch" className="text-white" />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <Calendar className="text-blue-400" size={36} />
                <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter">LET&apos;S CHAT</h2>
              </div>
              <p className="text-white text-lg md:text-xl mb-10 font-black leading-tight">
                Building onchain? Let&apos;s find a time to discuss your growth strategy.
              </p>
              
              <div className="relative p-[4px] rounded-2xl overflow-hidden group/btn">
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#ff0000,#ff8000,#ffff00,#00ff00,#00ffff,#0000ff,#8000ff,#ff00ff,#ff0000)] animate-[spin_1.5s_linear_infinite] opacity-100" />
                
                <a 
                  href="https://cal.com/growth" 
                  target="_blank"
                  className="relative flex items-center justify-center gap-4 w-full py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-black text-xl md:text-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] border-b-[10px] border-blue-900 active:border-b-0 active:translate-y-2 z-10 uppercase tracking-tighter"
                >
                  <span>BOOK A CALL</span>
                  <ExternalLink size={28} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                </a>
              </div>

              <div className="mt-6 flex justify-center">
                <AsciiSprite art="~~ ESTABLISHING_CONNECTION ~~" className="text-[10px] text-blue-400 font-black" animate="slide" />
              </div>
            </GlassCard>
          </div>

          <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-green-500 text-black px-4 py-1 font-black text-xs skew-x-[-12deg] shadow-[5px_5px_0_rgba(0,0,0,1)]">
                ENGINE_STATUS: OVERDRIVE
              </div>
            </div>
            <GlassCard className="h-[400px] md:h-[500px] flex flex-col items-center justify-center text-center bg-black border-4 border-green-500 shadow-[inset_0_0_100px_rgba(0,255,0,0.2)] relative" delay={1}>
              <motion.pre 
                animate={{ 
                  y: [0, -20, 0],
                  filter: ["drop-shadow(0 0 10px #4ade80)", "drop-shadow(0 0 40px #4ade80)", "drop-shadow(0 0 10px #4ade80)"],
                  scale: [1, 1.1, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-[16px] leading-[14px] text-green-400 font-black font-mono"
              >
                {ENGINE_ART}
              </motion.pre>
              <p className="mt-10 text-green-400 text-base md:text-lg uppercase tracking-[0.6em] font-black animate-pulse drop-shadow-[0_0_10px_#4ade80]">
                ONCHAIN GROWTH ENGINE
              </p>
            </GlassCard>
          </div>
          
          <div className="flex flex-col items-center gap-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
            <AsciiSprite art={HACK_BANNER} className="text-[10px] md:text-[12px] text-white font-black" animate="glitch" />
            <div className="flex gap-8 md:gap-12">
              <Skull className="text-red-500 animate-pulse" size={32} />
              <Activity className="text-green-500 animate-bounce" size={32} />
              <ShieldAlert className="text-yellow-500 animate-ping" size={32} />
              <Bug className="text-blue-500 animate-pulse" size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Easter Egg Overlay */}
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none bg-black/95 backdrop-blur-3xl"
          >
            <div className="text-center space-y-12">
              <h2 className="text-6xl md:text-9xl font-black text-green-400 animate-glitch drop-shadow-[0_0_50px_#4ade80] italic">
                SYSTEM_OVERRIDE
              </h2>
              <pre className="text-green-400 text-lg md:text-2xl font-black tracking-widest">
{`
   [ 01010101 01010101 01010101 ]
   [ GROWTH   CULT     ONCHAIN  ]
   [ PROTOCOL: COMPROMISED      ]
   [ ACCESS: GRANTED            ]
`}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="pt-32 pb-16 text-center text-white/50 text-sm md:text-base font-mono flex flex-col items-center gap-12 relative">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        <AsciiSprite art={FOOTER_ART} className="text-white/30 text-xs md:text-sm" animate="float" />
        <p className="font-black tracking-[0.5em] text-lg md:text-xl">© 2026 GREY G. SEYMOUR // THE GROWTH CULT</p>
      </footer>
    </main>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      whileHover={{ 
        scale: 1.2, 
        backgroundColor: "rgba(255,255,255,0.2)", 
        color: "#fff",
        boxShadow: "0 0 20px rgba(255,255,255,0.3)",
        rotate: [0, 5, -5, 0]
      }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-white/10 text-white/50 hover:text-white transition-all bg-black/40 backdrop-blur-md flex-shrink-0"
    >
      {icon}
    </motion.a>
  )
}

function Stat({ label, value, color = "blue" }: { label: string, value: string, color?: string }) {
  const colors: Record<string, string> = {
    blue: "border-blue-500 text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.4)]",
    green: "border-green-500 text-green-400 shadow-[0_0_25px_rgba(34,197,94,0.4)]",
  }
  
  return (
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 2 }}
      className={`text-center p-4 md:p-6 rounded-3xl bg-black border-4 transition-all ${colors[color]}`}
    >
      <div className="text-xl md:text-3xl font-black tracking-tighter mb-1">{value}</div>
      <div className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black opacity-60">{label}</div>
    </motion.div>
  )
}

function FarcasterIcon() {
  return (
    <div className="relative w-5 h-5 md:w-6 md:h-6">
      <Image 
        src="/images/farcaster.png" 
        alt="Farcaster" 
        fill 
        className="object-contain invert opacity-50"
      />
    </div>
  )
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
    </svg>
  )
}
