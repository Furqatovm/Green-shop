import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token =Cookies.get("token")
  return (
    token ? <Outlet /> : <Navigate to={"/"} replace />
  )
}

export default PrivateRoute