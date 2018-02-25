export function csrfToken(): string |null {
  const csrfToken = document.querySelector('meta[name="csrf-token"]')
  if (csrfToken) { return csrfToken.getAttribute('content') }
  return null
}
