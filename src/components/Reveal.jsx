import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

/**
 * Wrap any section (or block) in <Reveal> to have it fade + slide up
 * the first time it scrolls into view. Respects prefers-reduced-motion.
 */
export function Reveal({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  
}