import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 480)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="no-print fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-forest text-gold shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-gold hover:text-forest"
    >
      <ArrowUp size={18} />
    </button>
  )
}