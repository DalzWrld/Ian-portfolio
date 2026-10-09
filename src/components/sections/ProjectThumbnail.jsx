// components/sections/ProjectThumbnail.jsx
import { Terminal } from "lucide-react"

export function ProjectThumbnail({ project, className = "" }) {
  // If there's an image, show it
  if (project.image) {
    return (
      <div className={`relative aspect-16/10 overflow-hidden ${className}`}>
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover object-top"
        />
      </div>
    )
  }

  // Fallback: branded solid block
  return (
    <div
      className={`relative aspect-16/10 overflow-hidden bg-forest-soft ${className}`}
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-gold) 1px, transparent 1px),
                            linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-forest text-gold">
          <Terminal size={20} />
        </div>
        <div>
          <p className="font-display text-sm text-cream/80">{project.title}</p>
          <p className="mt-1 eyebrow text-gold/60">{project.category}</p>
        </div>
      </div>
    </div>
  )
}