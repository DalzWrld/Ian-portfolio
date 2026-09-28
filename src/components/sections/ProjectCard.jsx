import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/**
 * A lightweight, CSS-drawn "browser window" mockup standing in for a
 * real screenshot. Swap the <div> below for an <img src="..."> of an
 * actual screenshot once you have one — same aspect ratio (16/10).
 */
function PreviewArt({ tone = "dark" }) {
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
      <div className="absolute inset-x-4 top-11 grid grid-cols-[0.25fr_1fr] gap-3">
        <div className="space-y-2">
          <div className={cn("h-4 w-10 rounded-sm", isDark ? "bg-cream/10" : "bg-ink/10")} />
          <div className={cn("h-1.5 w-full rounded-sm", isDark ? "bg-cream/10" : "bg-ink/10")} />
          <div className={cn("h-1.5 w-4/5 rounded-sm", isDark ? "bg-cream/10" : "bg-ink/10")} />
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className={cn("h-9 rounded-md border", isDark ? "border-cream/10 bg-cream/5" : "border-ink/10 bg-white/60")} />
            ))}
          </div>
          <div className={cn("h-16 rounded-md border", isDark ? "border-cream/10 bg-cream/5" : "border-ink/10 bg-white/60")} />
        </div>
      </div>
      <div className="absolute bottom-2.5 right-3 font-decorative text-[8px] tracking-[0.2em] text-gold/70">
        IWN.
      </div>
    </div>
  )
}

export function ProjectCard({ project, inverse = false }) {
  return (
    <article className="group">
      <Link to={`/work/${project.slug}`} className="block">
        {project.image ? (
          <div className="aspect-16/10 overflow-hidden rounded-xl border border-current/10">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <PreviewArt tone={inverse ? "dark" : "light"} />
        )}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <Badge className={inverse ? "border-gold/40 text-gold" : undefined}>{project.category}</Badge>
            <h3 className={cn("mt-3 font-display text-2xl leading-tight sm:text-3xl", inverse ? "text-cream" : "text-ink")}>
              {project.title}
            </h3>
            <p className={cn("mt-2 max-w-xs text-sm leading-6", inverse ? "text-cream/60" : "text-ink/60")}>
              {project.description}
            </p>
          </div>
          <div
            className={cn(
              "mt-1 flex shrink-0 items-center gap-1 text-xs font-semibold uppercase tracking-widest",
              inverse ? "text-gold" : "text-gold-dark"
            )}
          >
            View
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </article>
  )
}