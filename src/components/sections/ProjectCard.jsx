import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * A lightweight, CSS-drawn "browser window" mockup standing in for a
 * real screenshot. Swap the <div> below for an <img src="..."> of an
 * actual screenshot once you have one — same aspect ratio (16/10).
 */
function PreviewArt({ tone = "dark"}) {
  const isDark = tone === "dark"
  return (
    <div
      className={cn(
        "relative aspect-16/10 overflow-hidden rounded-xl border",
        isDark ? "border-cream/10 bg-forest-soft" : "border-ink/10 bg-cream-soft"
      )}
    >
      <div className="absolute inset-x-0 top-0 flex h-7 items-center gap-1.5 border-b border-current/10 px-3">
        <span className="size-1.5 rounded-full bg-gold" />
        <span className="size-1.5 rounded-full bg-gold/50" />
        <span className="size-1.5 rounded-full bg-gold/25" />
      </div>
    </div>
  )
}