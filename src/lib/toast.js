import { toast } from "sonner"

export function notifyProjectAdded(title) {
  toast.success(`"${title}" added`, {
    description: "Your new project is now live on the Work page.",
    className: "!bg-emerald-50 !border-emerald-300 !text-emerald-900",
  })
}

export function notifyProjectUpdated(title) {
  toast(`"${title}" updated`, {
    description: "Your changes have been saved.",
    className: "!bg-amber-50 !border-amber-300 !text-amber-900",
  })
}