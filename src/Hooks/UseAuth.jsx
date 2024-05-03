import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

export default function UseAuth() {
    const auth = useContext(AuthContext)
    return auth;
}