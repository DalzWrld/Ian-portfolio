import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { toast } from "sonner"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Replace with your own Formspree endpoint from formspree.io
const FORM_ENDPOINT = "https://formspree.io/f/mzezvbka"

export default function Contact() {
  const [status, setStatus] = useState("idle") // idle | sending | sent

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        toast.success("Message sent", {
          description: "Thanks for reaching out — I'll get back to you soon.",
          className: "!bg-emerald-50 !border-emerald-300 !text-emerald-900",
        })
        form.reset()
        setStatus("sent")
      } else {
        throw new Error("Formspree returned an error")
      }
    } catch {
      toast.error("Message failed to send", {
        description: "Something went wrong — try again, or email me directly.",
        className: "!bg-rose-50 !border-rose-300 !text-rose-900",
      })
      setStatus("idle")
    }
  }

  return (
    <section className="bg-cream px-6 py-24 text-ink">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading label="Let's Talk" />
          <h1 className="font-display text-4xl leading-snug md:text-5xl">
            Let's build something <em className="italic text-gold-dark">amazing together.</em>
          </h1>
          <p className="mt-4 max-w-lg text-ink/60">
            Have a project in mind or just want to say hi? I'm always open to discussing new ideas, opportunities and
            collaborations.
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" /> hello@ian.dev
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" /> +254 700 123 456
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-gold" /> Nairobi, Kenya
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required placeholder="Tell me about your project..." />
              </div>
              <Button type="submit" disabled={status === "sending"} className="w-full sm:w-auto">
                {status === "sending" ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}