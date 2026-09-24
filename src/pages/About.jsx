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
    </>
  )
}