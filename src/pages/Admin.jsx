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

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-ink/10 p-6">
            <h2 className="font-display text-xl">{editingSlug ? "Edit project" : "Add a project"}</h2>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" value={form.title} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select id="category" name="category" value={form.category} onChange={handleChange} required>
                <option value="" disabled>Select a category</option>
                {CATEGORY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select id="status" name="status" value={form.status} onChange={handleChange}>
                <option value="" disabled>Select a status</option>
                {STATUS_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Short description</Label>
              <Textarea id="description" name="description" value={form.description} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stack">Tech stack (comma-separated)</Label>
              <Input id="stack" name="stack" value={form.stack} onChange={handleChange} placeholder="React, Flask, SQLite" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="link">Live link</Label>
              <Input id="link" name="link" value={form.link} onChange={handleChange} placeholder="https://..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="repo">Repository link</Label>
              <Input id="repo" name="repo" value={form.repo} onChange={handleChange} placeholder="https://github.com/..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input id="image" name="image" value={form.image} onChange={handleChange} placeholder="https://..." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenge">Challenge</Label>
              <Textarea id="challenge" name="challenge" value={form.challenge} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="approach">Approach</Label>
              <Textarea id="approach" name="approach" value={form.approach} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="outcome">Outcome</Label>
              <Textarea id="outcome" name="outcome" value={form.outcome} onChange={handleChange} />
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="submit">
                {editingSlug ? "Save changes" : "Add project"} {!editingSlug && <Plus size={16} />}
              </Button>
              {editingSlug && (
                <Button type="button" variant="outline" onClick={cancelEdit}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}