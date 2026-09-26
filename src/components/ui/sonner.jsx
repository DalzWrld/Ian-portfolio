import { Toaster as SonnerToaster } from "sonner"

export function Toaster(props) {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        classNames: {
          toast: "font-sans rounded-xl border shadow-lg px-4 py-3",
          title: "font-display font-semibold text-sm",
          description: "text-xs opacity-80",
          actionButton: "rounded-full",
          cancelButton: "rounded-full",
        },
      }}
      {...props}
    />
  )
}