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

      {/* CASE STUDY */}
      <section className="bg-cream px-6 py-20 text-ink">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionHeading label="Case Study" />
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                ["Challenge", project.details.challenge],
                ["Approach", project.details.approach],
                ["Outcome", project.details.outcome],
              ].map(([title, text]) => (
                <div key={title} className="rounded-xl border border-ink/10 p-5">
                  <h2 className="font-display text-xl">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-ink/60">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-gold-dark">Tech stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item} variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="eyebrow text-gold-dark">Status</p>
                <p className="mt-3 text-sm text-ink/65">{project.status}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}