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
    </div>
  )
}