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
}