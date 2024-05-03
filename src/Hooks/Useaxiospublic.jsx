import axios from "axios"

const axiospublic=axios.create({
    baseURL: 'http://localhost:5000'
})

export default function useaxiospublic(){
    return axiospublic;
}