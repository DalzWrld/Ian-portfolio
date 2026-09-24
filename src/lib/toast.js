import { toast } from "sonner"

export function notifyProjectAdded(title) {
  toast.success(`"${title}" added`, {
    description: "Your new project is now live on the Work page.",
    className: "!bg-emerald-50 !border-emerald-300 !text-emerald-900",
  })
}