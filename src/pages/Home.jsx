import { Link } from "react-router-dom"
import { ArrowRight, Download, Code2, PenTool, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { SectionHeading } from "@/components/layout/SectionHeading"
import { Reveal } from "@/components/Reveal"
import { ProjectCard } from "@/components/sections/ProjectCard"
import { skills, whatIDo, process, testimonials } from "@/data/content"
import { useProjects } from "@/lib/projectStore"

const whatIDoIcons = [PenTool, Code2, Lightbulb]