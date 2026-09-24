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