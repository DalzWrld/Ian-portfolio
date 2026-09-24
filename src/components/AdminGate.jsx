import { useState } from "react"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { isAdminAuthed, tryAdminLogin } from "@/lib/adminAuth"

export function AdminGate({ children }) {
  const [authed, setAuthed] = useState(() => isAdminAuthed())
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (tryAdminLogin(password)) {
      setAuthed(true)
    } else {
      setError(true)
    }
  }

  if (authed) return children
}