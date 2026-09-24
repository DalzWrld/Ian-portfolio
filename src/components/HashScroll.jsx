import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function HashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return undefined
    // Wait a tick for the route/page to render before measuring position
    const timer = window.setTimeout(() => {
      const el = document.getElementById(hash.replace("#", ""))
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 400)
    return () => window.clearTimeout(timer)
  }, [hash, pathname])

  return null
}