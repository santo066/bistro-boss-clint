import { Navigate, useLocation } from "react-router-dom"
import UseAuth from "../Hooks/UseAuth"
import Useadmin from "../Hooks/Useadmin"

export default function AdminRoute({children}) {
    const [isadmin, isadminloading] = Useadmin()

    const { user, loading } = UseAuth()

    const location = useLocation()
    if (loading || isadminloading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user && isadmin) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} replace ></Navigate>
}