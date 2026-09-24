import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Wrap any section (or block) in <Reveal> to have it fade + slide up
 * the first time it scrolls into view. Respects prefers-reduced-motion.
 */
export function Reveal({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
}