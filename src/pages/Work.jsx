import { SectionHeading } from "@/components/layout/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { ProjectCard } from "@/components/sections/ProjectCard"
import { useProjects } from "@/lib/projectStore"

export default function Work() {
  const [projects] = useProjects()

  return (
    <section className="bg-cream py-24 text-ink">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading number="01" label="My Work" />
          <h1 className="font-display text-3xl leading-snug sm:text-4xl">
            Sites I've <em className="italic text-gold-dark">built.</em>
          </h1>
          <p className="mt-3 max-w-lg text-ink/60">
            Here's a running list of deployed projects.
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}