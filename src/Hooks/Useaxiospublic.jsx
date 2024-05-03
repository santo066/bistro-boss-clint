import axios from "axios"

const axiospublic=axios.create({
    baseURL: 'https://bistro-boss-server-qbx0.onrender.com'
})

export default function useaxiospublic(){
    return axiospublic;
}