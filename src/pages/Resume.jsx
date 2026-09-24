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
    </div>
  )
}