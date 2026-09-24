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
}