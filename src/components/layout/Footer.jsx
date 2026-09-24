import { Linkedin, ArrowUpRight, Copyright } from "lucide-react"
import { FaGithub, FaInstagram } from "react-icons/fa6"
import { Link } from "react-router-dom"

export function Footer() {
    return (
        <footer className="border-t border-gold/15 bg-forest text-cream">
            <div className="mx-auto max-w-6xl px-6 py-14">
                <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]"></div>
            </div>
        </footer>
    )
}