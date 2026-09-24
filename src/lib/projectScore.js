import { projects as defaultProjects } from "@/data/content"
import { useEffect, useState } from "react"

const STORAGE_KEY = "iann-portfolio:projects"

function readStore() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProjects
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultProjects
  } catch {
    return defaultProjects
  }
}

function writeStore(projects) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
}

export function getProjects() {
  return readStore()
}

export function getProject(slug) {
  return readStore().find((p) => p.slug === slug)
}

export function addProject(project) {
  const next = [...readStore(), project]
  writeStore(next)
  return next
}

export function updateProject(slug, updates) {
  const next = readStore().map((p) => (p.slug === slug ? { ...p, ...updates } : p))
  writeStore(next)
  return next
}

export function deleteProject(slug) {
  const next = readStore().filter((p) => p.slug !== slug)
  writeStore(next)
  return next
}

export function resetProjects() {
  writeStore(defaultProjects)
  return defaultProjects
}

// Used by Home/Work so they reflect whatever's in localStorage, and
// stay in sync if you edit projects in another tab.
export function useProjects() {
  const [projects, setProjects] = useState(() => getProjects())

  useEffect(() => {
    function handleStorage(e) {
      if (e.key === STORAGE_KEY) setProjects(getProjects())
    }
    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [])

  return [projects, setProjects]
}