import { Navigate, Outlet } from "react-router-dom"

export default function RequireAuth() {

  const authUser = false

  if(!authUser) return <Navigate to='/login'/>

  return <Outlet />
}
