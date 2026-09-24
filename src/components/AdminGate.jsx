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

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-cream px-6 text-ink">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-xl border border-ink/10 p-8 text-center">
        <Lock size={20} className="mx-auto text-gold-dark" />
        <h1 className="mt-4 font-display text-2xl">Private area</h1>
        <p className="mt-2 text-sm text-ink/60">Enter the password to manage projects.</p>
        <div className="mt-6 space-y-2 text-left">
          <Label htmlFor="admin-password">Password</Label>
          <Input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            autoFocus
          />
          {error && <p className="text-xs text-red-600">That's not it — try again.</p>}
        </div>
        <Button type="submit" className="mt-6 w-full">
          Unlock
        </Button>
      </form>
    </section>
  )
}