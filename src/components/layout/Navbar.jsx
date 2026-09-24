import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { key: "home", to: "/", label: "Home" },
  { key: "about", to: "/about", label: "About" },
  { key: "resume", to: "/resume", label: "Resume" },
  { key: "work", to: "/work", label: "Work" },
  { key: "skills", to: "/#skills", label: "Skills" },
  { key: "process", to: "/#process", label: "Process" },
]

// Section ids on the Home page that should take over the nav's active
// state as they scroll into view (instead of "Home" staying highlighted).
const HOME_SECTIONS = ["skills", "process"]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [activeSection, setActiveSection] = useState(null) // null | "skills" | "process"

  // Scroll-spy: only matters on the homepage, where Skills/Process are
  // sections rather than separate routes. Tracks whichever one is
  // currently centered in the viewport.
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null)
      return undefined
    }

    function handleScroll() {
      const scrollPosition = window.scrollY + 120 // offset for sticky nav height
      let current = null
      for (const id of HOME_SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPosition) {
          current = id
        }
      }
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])
}