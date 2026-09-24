import { useEffect } from "react"
import { motion } from "framer-motion"

const NAME = "Ian Ng'ang'a..."

export function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1400)
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-forest"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="font-decorative text-2xl tracking-widest text-gold sm:text-4xl" aria-label={NAME}>
        {NAME.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.045, duration: 0.4, ease: "easeOut" }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
    </motion.div>
  )
}