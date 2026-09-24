import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Loader } from "@/components/Loader"
import { Layout } from "@/components/layout/Layout"
import { AdminGate } from "@/components/AdminGate"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Work from "@/pages/Work"
import ProjectDetail from "@/pages/ProjectDetail"
import Contact from "@/pages/Contact"
import Resume from "@/pages/Resume"
import Admin from "@/pages/Admin"

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>{loading && <Loader onFinish={() => setLoading(false)} />}</AnimatePresence>
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin" element={<AdminGate><Admin /></AdminGate>} />
        </Route>
      </Routes>
    </>
  )
}