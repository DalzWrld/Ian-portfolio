import { ArrowUpRight, Copyright } from "lucide-react"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
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

                    <div>
                        <p className="eyebrow text-gold">Let's connect</p>
                        <a
                          href="mailto:hello@ian.dev"
                          className="mt-4 flex items-center justify-between border-b border-cream/15 pb-3 text-sm text-cream/80 hover:text-gold"
                        >
                          waithakaian49@gmail.com <ArrowUpRight size={14} />
                        </a>
                        <div className="mt-4 flex gap-3">
                            <a
                                href="https://github.com/DalzWrld"
                                target="_blank"
                                rel="noopener"
                                aria-label="GitHub"
                                className="rounded-full border border-cream/15 p-2.5 hover:border-gold hover:text-gold"
                            >
                                <FaGithub size={16} />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/ian-ng%E2%80%99ang%E2%80%99a-9544271b1/" 
                                target="_blank"
                                rel="noopener"
                                aria-label="LinkedIn" 
                                className="rounded-full border border-cream/15 p-2.5 hover:border-gold hover:text-gold"
                            >
                                <FaLinkedin size={16} />
                            </a>
                            <a href="https://www.instagram.com/doitlike.iann/" 
                                target="_blank"
                                rel="noopener"
                                aria-label="Instagram" 
                                className="rounded-full border border-cream/15 p-2.5 hover:border-gold hover:text-gold"
                            >
                                <FaInstagram size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-2 border-t border-cream/10 pt-6 text-[10px] uppercase tracking-widest text-cream/40 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-center gap-1.5">
                        <Copyright size={11} /> {new Date().getFullYear()} Ian. All rights reserved.
                    </p>
                    <p>Built with passion &amp; purpose.</p>
                </div>
            </div>
        </footer>
    )
}