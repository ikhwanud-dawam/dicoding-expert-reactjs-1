import { Outlet, ScrollRestoration } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <h1>Testing Judul</h1>
      <p>Ini buat komponen header</p>

      <Outlet />

      <ScrollRestoration />
    </div>
  )
}
