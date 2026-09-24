import { Link } from "react-router-dom"
import { ArrowRight, BookOpen, Code2, Heart, Palette, MapPin, Briefcase, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { principles } from "@/data/content"

const habits = [
  { icon: BookOpen, title: "Keep learning", text: "Courses, projects, docs, experiments, repeat." },
  { icon: Palette, title: "Design with intent", text: "Visual choices should support the user's goals." },
  { icon: Code2, title: "Build with structure", text: "Reusable components, clean data flow, sensible APIs." },
  { icon: Heart, title: "Care about the details", text: "The little things are often where trust is won." },
]

const facts = [
  { icon: MapPin, label: "Based in", value: "Nairobi, Kenya" },
  { icon: Briefcase, label: "Availability", value: "Open to internships & freelance work" },
  { icon: Sparkles, label: "Open to", value: "New ideas & collaborations" },
]

export default function About() {
  return (
    <>
      {/* INTRO */}
      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow text-gold">About me</p>
          <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            I'm learning to turn <em className="italic text-gold">curiosity</em> into useful software.
          </h1>
          <p className="mt-6 max-w-xl text-cream/60">
            I'm a Kenyan developer with a background that took a few scenic detours before arriving at technology.
            Today, I'm focused on frontend development, UI/UX, and growing into full stack engineering.
          </p>
        </div>
      </section>

      {/* THE STORY */}
      <section className="bg-cream py-24 text-ink">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading number="01" label="The Story" />
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="font-display text-2xl leading-snug sm:text-3xl">
                  A career pivot can be a feature, not a bug.
                </h2>
                <p className="mt-4 text-sm leading-7 text-ink/60">
                  I made the jump into tech from a food science background, and that shift taught me to enjoy
                  learning things from the ground up. I'm training as a Full Stack Web Developer at Moringa
                  School, with a particular pull toward UI/UX design and front-end development. My path has made
                  me interested in both sides of the product: how something should feel, and how it should
                  actually work.
                </p>
                <div className="mt-6 space-y-3">
                  {facts.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3 text-sm">
                      <Icon size={16} className="mt-0.5 shrink-0 text-gold-dark" />
                      <p>
                        <span className="text-ink/45">{label}:</span> {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                {habits.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4 rounded-xl border border-ink/10 p-4">
                    <Icon size={18} className="mt-1 shrink-0 text-gold-dark" />
                    <div>
                      <h3 className="font-display text-lg">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-ink/60">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}