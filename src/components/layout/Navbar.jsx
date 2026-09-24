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

  function isLinkActive(link) {
    if (link.key === "skills" || link.key === "process") {
      return location.pathname === "/" && activeSection === link.key
    }
    if (link.key === "home") {
      return location.pathname === "/" && activeSection === null
    }
    // About / Work (and /work/:slug): ordinary route matching
    return location.pathname === link.to || location.pathname.startsWith(`${link.to}/`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-forest/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-decorative text-2xl tracking-wide text-cream" aria-label="Ian home">
          IWN<span className="text-gold">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-widest md:flex">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.to}
              className={cn(
                "nav-link text-cream/70 transition-colors hover:text-gold",
                isLinkActive(link) && "active text-gold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden md:inline-flex">
          <Link to="/contact">Let's Talk</Link>
        </Button>

        <button
          className="text-cream md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}