import { useState } from "react"
import { Trash2, Pencil, Plus, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { LogOut } from "lucide-react"
import { Select } from "@/components/ui/select"
import { slugify } from "@/lib/utils"
import { adminLogout } from "@/lib/adminAuth"
import { useProjects, addProject, updateProject, deleteProject, resetProjects } from "@/lib/projectStore"
import { notifyProjectAdded, notifyProjectUpdated, notifyProjectDeleted } from "@/lib/toast"

const CATEGORY_OPTIONS = ["Full Stack", "Frontend", "Backend", "Mobile", "Other"]
const STATUS_OPTIONS = ["Live", "In Progress", "Completed", "Concept"]

const emptyForm = {
  title: "",
  category: "",
  description: "",
  stack: "",
  status: "",
  link: "",
  repo: "",
  image: "",
  challenge: "",
  approach: "",
  outcome: "",
}

export default function Admin() {
  const [projects, setProjects] = useProjects()
  const [editingSlug, setEditingSlug] = useState(null)
  const [form, setForm] = useState(emptyForm)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function startEdit(project) {
    setEditingSlug(project.slug)
    setForm({
      title: project.title,
      category: project.category,
      description: project.description,
      stack: project.stack.join(", "),
      status: project.status,
      link: project.link,
      repo: project.repo || "",
      image: project.image || "",
      challenge: project.details?.challenge ?? "",
      approach: project.details?.approach ?? "",
      outcome: project.details?.outcome ?? "",
    })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function cancelEdit() {
    setEditingSlug(null)
    setForm(emptyForm)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const payload = {
      title: form.title,
      category: form.category,
      description: form.description,
      stack: form.stack.split(",").map((s) => s.trim()).filter(Boolean),
      status: form.status,
      link: form.link || "#",
      repo: form.repo || null,
      image: form.image || null,
      details: {
        challenge: form.challenge,
        approach: form.approach,
        outcome: form.outcome,
      },
    }

    if (editingSlug) {
      const next = updateProject(editingSlug, payload)
      setProjects(next)
      notifyProjectUpdated(payload.title)
    } else {
      const slug = slugify(form.title)
      const next = addProject({ slug, ...payload })
      setProjects(next)
      notifyProjectAdded(payload.title)
    }
    cancelEdit()
  }

  function handleDelete(project) {
    if (!window.confirm(`Delete "${project.title}"? This can't be undone.`)) return
    const next = deleteProject(project.slug)
    setProjects(next)
    notifyProjectDeleted(project.title)
    if (editingSlug === project.slug) cancelEdit()
  }

  function handleReset() {
    if (!window.confirm("Reset to the default project list? This discards anything you've added or edited here.")) return
    const next = resetProjects()
    setProjects(next)
    cancelEdit()
  }

  return (
    <section className="bg-cream px-6 py-24 text-ink">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow text-gold-dark">Private</p>
        <h1 className="mt-3 font-display text-3xl sm:text-4xl">Manage Projects</h1>
        <p className="mt-3 max-w-xl text-sm text-ink/60">
          This page isn't linked anywhere in the site's nav — it's your own workspace. Changes save to this
          browser's local storage only, so they won't appear for visitors on the live deployed site until you
          copy the finished details into <code className="text-ink/80">src/data/content.js</code> by hand.
        </p>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="mt-4"
          onClick={() => {
            adminLogout()
            window.location.reload()
          }}
        >
          <LogOut size={14} /> Lock this page
        </Button>
      </div>
    </section>
  )
}