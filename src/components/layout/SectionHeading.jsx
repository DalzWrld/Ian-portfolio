import { cn } from "@/lib/utils"

/**
 * Numbered section marker — big display numeral + a thin gold rule
 * + an uppercase eyebrow label, stacked above the section's content
 * (never squeezed beside it, which is cramped on smaller screens).
 * The numbers are placeholders — renumber them by hand to match
 * the final order of sections on each page.
 */

export function SectionHeading({ number, label, inverse = false, className }) {
  return (
    <div className={cn("mb-8", className)}>
      {number && (
        <div
          className={cn(
            "font-display text-5xl leading-none sm:text-6xl",
            inverse ? "text-gold/50" : "text-gold-dark/40"
          )}
        >
          {number}
        </div>
      )}
      <div className="mt-3 flex items-center gap-3">
        <span className="h-px w-8 bg-gold" />
        <p className={cn("eyebrow", inverse ? "text-cream/70" : "text-ink/60")}>{label}</p>
      </div>
    </div>
  )
}