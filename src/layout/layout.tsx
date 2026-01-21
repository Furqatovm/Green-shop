import type React from "react"
import Header from "../components/header"
import { Outlet } from "react-router-dom"

const Layout:React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout