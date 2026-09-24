import { Link } from "react-router-dom"
import { ArrowRight, Download, Code2, PenTool, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { ProjectCard } from "@/components/sections/ProjectCard"
import { skills, whatIDo, process, testimonials } from "@/data/content"
import { useProjects } from "@/lib/projectStore"

const whatIDoIcons = [PenTool, Code2, Lightbulb]

export default function Home() {
  const [projects] = useProjects()

  return (
    <>
      {/* HERO */}
      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto grid max-w-6xl px-6 items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 eyebrow text-gold">Hi, I'm Ian Ng'ang'a</p>
            <h1 className="font-display text-5xl leading-tight md:text-7xl">
              I build digital <em className="italic text-gold">experiences</em> that make an impact.
            </h1>
            <p className="mt-6 max-w-md text-cream/65">
              I'm a Frontend Developer and UI/UX Designer who's passionate about building clean, user-friendly and
              purposeful web experiences. I turn ideas into elegant solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/work">
                  View my work <ArrowRight size={16} />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <a href="/resume.pdf" download>
                  Download resume <Download size={16} />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-cream/10 bg-forest-soft">
            <div className="flex h-full items-center justify-center p-6 text-center text-sm text-cream/50">
              Add your photo here
              <br />
              (recommended: 800×1000px)
            </div>
          </div>
        </div>
      </section>
    </>
  )
}