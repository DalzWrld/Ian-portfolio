const AUTH_KEY = "iann-portfolio:admin-auth"
const PASSWORD = "Ng.ashh_396" // change this to your own before using it anywhere

export function isAdminAuthed() {
  return window.sessionStorage.getItem(AUTH_KEY) === "true"
}

export function tryAdminLogin(password) {
  if (password === PASSWORD) {
    window.sessionStorage.setItem(AUTH_KEY, "true")
    return true
  }
  return false
}

export function adminLogout() {
  window.sessionStorage.removeItem(AUTH_KEY)
}