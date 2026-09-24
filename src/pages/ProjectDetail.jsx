import { Link, useParams } from "react-router-dom"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { getProject } from "@/lib/projectStore"

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return (
      <div className="grid min-h-[60vh] place-items-center px-6 py-24 text-center text-ink">
        <div>
          <p className="eyebrow text-gold-dark">404</p>
          <h1 className="mt-3 font-display text-4xl">Project not found.</h1>
          <Link to="/work" className="mt-6 inline-flex items-center gap-2 eyebrow text-gold-dark hover:underline">
            Back to work <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* HEADER */}
      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 eyebrow text-cream/55 hover:text-gold"
            >
              <ArrowLeft size={14} /> Back to work
            </Link>
            <Badge className="border-gold/40 text-gold">{project.category}</Badge>
          </div>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-xl text-cream/60">{project.description}</p>

          {/* Cover preview placeholder — swap for a real screenshot */}
          <div className="mt-10 aspect-16/7 rounded-2xl border border-gold/15 bg-linear-to-br from-gold/10 via-forest-soft to-forest-soft" />
        </div>
      </section>
    </>
  )
}