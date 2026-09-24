import { useState } from "react"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { isAdminAuthed, tryAdminLogin } from "@/lib/adminAuth"

export function AdminGate({ children }) {}