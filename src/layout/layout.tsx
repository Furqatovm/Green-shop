import type React from "react"
import Header from "../components/header"
import { Outlet } from "react-router-dom"
import Footer from "../components/footer"

const Layout:React.FC = () => {
  return (
    <div>
      <div className="sticky bg-white z-10 top-0 border-b border-[#46A35880]  left-0 right-0">
      <Header />
      </div>
      <main className="w-[90%] mx-auto">
        <Outlet />
      </main>
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default Layout