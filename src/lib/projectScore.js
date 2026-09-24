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