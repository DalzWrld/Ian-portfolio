import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ProjectThumbnail } from "@/components/sections/ProjectThumbnail"


export function ProjectCard({ project, inverse = false }) {
  return (
    <article className="group">
      <Link to={`/work/${project.slug}`} className="block">
        <ProjectThumbnail project={project} inverse={inverse} />
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