

import axios from "axios"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider"


const axiossecure = axios.create({
    baseURL: 'https://bistro-boss-server-qbx0.onrender.com'
})
export default function useAxiossecure() {
    const navigate = useNavigate()
    const { signout } = useContext(AuthContext)
    axiossecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stop by token', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error)
    })

    axiossecure.interceptors.response.use(function (response) {
        return response;
    }, async(error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await signout();
            navigate('/login')
        }
        console.log('error ikn the interseptor', error)
        return Promise.reject(error)

    })
    return axiossecure;
}