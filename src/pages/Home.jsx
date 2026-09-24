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

      {/* ABOUT TEASER */}
      <section className="bg-cream py-24 text-ink">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading number="01" label="About Me" />
            <h2 className="font-display text-3xl leading-snug sm:text-4xl">
              Curious mind. Problem solver. <em className="italic text-gold-dark">Continuous learner.</em>
            </h2>
            <p className="mt-4 max-w-2xl text-ink/60">
              I'm a Software Engineering student who enjoys building things that live on the internet, with a
              particular pull toward accessible, responsive and intuitive applications.
            </p>
            <Link to="/about" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-dark hover:underline">
              More about me <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <SectionHeading number="02" label="Selected Work" inverse className="mb-0" />
              <Link to="/work" className="eyebrow text-gold hover:underline">
                View all projects →
              </Link>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.slug} project={project} inverse />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS + WHAT I DO */}
      <section id="skills" className="scroll-mt-24 bg-cream py-24 text-ink">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <SectionHeading number="03" label="Skills" />
                <h2 className="font-display text-3xl leading-snug">
                  Technologies <em className="italic text-gold-dark">I work with.</em>
                </h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="mt-6 eyebrow text-ink/50">Always exploring, always learning.</p>
              </div>

              <Separator className="md:hidden" />

              <div>
                <SectionHeading number="04" label="What I Do" />
                <div className="space-y-6">
                  {whatIDo.map((item, i) => {
                    const Icon = whatIDoIcons[i] ?? Code2
                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forest text-gold">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="mt-1 text-sm text-ink/60">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Vertical rule between the two columns on desktop only */}
              <Separator
                orientation="vertical"
                className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 md:block"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="scroll-mt-24 bg-forest py-24 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading number="05" label="My Process" inverse />
            <h2 className="font-display text-3xl leading-snug md:text-4xl">How I get from idea to launch.</h2>

            <div className="mt-14 grid gap-8 md:grid-cols-5">
              {process.map((step) => (
                <div key={step.step} className="text-center md:text-left">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-gold text-sm font-semibold text-gold md:mx-0">
                    {step.step}
                  </div>
                  <h3 className="mt-4 font-display text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm text-cream/60">{step.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* KIND WORDS */}
      <section className="bg-cream py-24 text-ink">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <SectionHeading number="06" label="Kind Words" className="mx-auto flex flex-col items-center text-center" />
            {testimonials.map((t) => (
              <blockquote key={t.name}>
                <p className="font-display text-2xl leading-snug">"{t.quote}"</p>
                <footer className="mt-6 flex items-center justify-center gap-3">
                  <Avatar>
                    <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-left text-sm">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-ink/55">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  )
}