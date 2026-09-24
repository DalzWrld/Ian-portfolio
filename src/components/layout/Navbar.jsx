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