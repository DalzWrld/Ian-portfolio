import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { HashScroll } from "@/components/HashScroll"
import { BackToTop } from "@/components/BackToTop"
import { Toaster } from "@/components/ui/sonner"

export function Layout() {
  const location = useLocation()

  // Scroll to top on every route change — unless we're navigating to an
  // in-page anchor (e.g. /#skills), in which case HashScroll handles it.
  useEffect(() => {
    if (location.hash) return
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])
}