import { Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { skills, education, workHistory } from "@/data/content"

export default function Resume() {
  return (
    <div id="resume-print-area">
      {/* HEADER */}
      <section className="bg-forest px-6 py-24 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow text-gold">Resume / CV</p>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">My Resume / CV</h1>
          <p className="mt-5 max-w-xl text-cream/65">
            I'm a Software Engineering student building toward full stack development, with a focus on
            frontend craft and UI/UX. On this page you can see the stack I work with and my experience so far.
          </p>
          <Button onClick={() => window.print()} className="no-print mt-8">
            Download PDF <Download size={16} />
          </Button>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-cream px-6 pt-24 pb-12 text-ink">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading number="01" label="Skills" />
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              Technologies <em className="italic text-gold-dark">I work with.</em>
            </h2>
            <p className="mt-4 max-w-xl text-ink/60">
              Frameworks, libraries and tools I have experience with. This isn't a complete list — I'm
              constantly learning new things, so it's a little outdated by design.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-cream px-6 py-24 text-ink">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Separator className="mb-16" />
            <SectionHeading number="02" label="Education" />
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              Where my <em className="italic text-gold-dark">training comes from.</em>
            </h2>

            <ol className="mt-12 space-y-10 border-l border-ink/15 pl-8">
              {education.map((item) => (
                <li key={`${item.degree}-${item.institution}`} className="relative">
                  <span className="absolute -left-9.25 top-1.5 size-2.5 rounded-full bg-gold" />
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
            <SectionHeading number="03" label="Work History" inverse />
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              Where I've <em className="italic text-gold">put it to use.</em>
            </h2>
            <p className="mt-4 max-w-xl text-cream/60">
              Below you'll find a summary of my experience so far.{" "}
              <span className="no-print">
                You can also{" "}
                <button onClick={() => window.print()} className="underline text-gold hover:text-gold-soft">
                  download my resume
                </button>
                .
              </span>
            </p>

            <ol className="mt-12 space-y-10 border-l border-cream/15 pl-8">
              {workHistory.map((job) => (
                <li key={`${job.role}-${job.company}`} className="relative">
                  <span className="absolute -left-9.25 top-1.5 size-2.5 rounded-full bg-gold" />
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
          </Reveal>
        </div>
      </section>
    </div>
  )
}