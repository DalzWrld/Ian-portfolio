import { Linkedin, ArrowUpRight, Copyright } from "lucide-react"
import { FaGithub, FaInstagram } from "react-icons/fa6"
import { Link } from "react-router-dom"

export function Footer() {
    return (
        <footer className="border-t border-gold/15 bg-forest text-cream">
            <div className="mx-auto max-w-6xl px-6 py-14">
                <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
                    <div>
                        <div className="font-decorative text-2xl text-gold">IWN.</div>
                        <p className="mt-4 max-w-sm text-sm leading-6 text-cream/60">
                            Frontend developer and UI/UX designer building clean, useful digital experiences — one project at a
                            time.
                        </p>
                        </div>

                        <div>
                        <p className="eyebrow text-gold">Explore</p>
                        <div className="mt-4 grid gap-2 text-sm text-cream/70">
                            <Link to="/about" className="hover:text-gold">About</Link>
                            <Link to="/work" className="hover:text-gold">Selected Work</Link>
                            <Link to="/contact" className="hover:text-gold">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}