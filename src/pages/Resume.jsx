import { Link } from "react-router-dom"
import { Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { resumeSummary, skillGroups, resumeProjects, education, workHistory } from "@/data/content"

export default function Resume() {
  return (
    <div id="resume-print-area">
      {/* HEADER + SUMMARY */}
      <section className="bg-forest px-6 py-24 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow text-gold">Resume / CV</p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">My Resume / CV</h1>
          <p className="mt-5 max-w-2xl text-cream/65">{resumeSummary}</p>
          <Button onClick={() => window.print()} className="no-print mt-8">
            Download PDF <Download size={16} />
          </Button>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-cream px-6 py-24 text-ink">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading number="01" label="Skills" />
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              Technologies <em className="italic text-gold-dark">I work with.</em>
            </h2>

            <div className="mt-8 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.label} className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:items-start">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-ink/70">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-forest px-6 py-24 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading number="02" label="Projects" inverse />
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              What I've <em className="italic text-gold">built so far.</em>
            </h2>

            <ol className="mt-12 space-y-10 border-l border-cream/15 pl-8">
              {resumeProjects.map((project) => (
                <li key={project.title} className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-gold" />
                  <h3 className="font-display text-2xl font-semibold text-cream">{project.title}</h3>
                  <p className="mt-1 text-sm font-medium text-cream/55">
                    {project.type} · {project.stack.join(", ")}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-cream/70">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-gold">–</span> {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-cream px-6 py-24 text-ink">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading number="03" label="Education" />
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              Where my <em className="italic text-gold-dark">training comes from.</em>
            </h2>

            <ol className="mt-12 space-y-10 border-l border-ink/15 pl-8">
              {education.map((item) => (
                <li key={`${item.degree}-${item.institution}`} className="relative">
                  <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-gold" />
                  <h3 className="font-display text-2xl font-semibold text-ink">{item.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-ink/55">
                    {item.institution} · {item.location}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ink/40">{item.period}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* WORK HISTORY */}
      <section className="bg-forest px-6 py-24 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading number="04" label="Work History" inverse />
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              Where I've <em className="italic text-gold">put it to use.</em>
            </h2>

            {workHistory.length > 0 ? (
              <ol className="mt-12 space-y-10 border-l border-cream/15 pl-8">
                {workHistory.map((job) => (
                  <li key={`${job.role}-${job.company}`} className="relative">
                    <span className="absolute -left-[calc(2rem+5px)] top-1.5 size-2.5 rounded-full bg-gold" />
                    <h3 className="font-display text-2xl font-semibold text-cream">{job.role}</h3>
                    <p className="mt-1 text-sm font-medium text-cream/55">
                      {job.company} · {job.location} · {job.type}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-cream/40">{job.period}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-cream/70">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="text-gold">–</span> {point}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="mt-4 max-w-xl text-cream/60">
                I don't have formal work experience yet. I'm early in my Software Engineering journey and have
                been focused on building real projects instead. Take a look at my{" "}
                <Link to="/work" className="underline text-gold hover:text-gold-soft">
                  work
                </Link>{" "}
                to see what I've built so far.
              </p>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  )
}