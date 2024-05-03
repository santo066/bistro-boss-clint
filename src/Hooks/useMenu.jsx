// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query";
import useaxiospublic from "./Useaxiospublic";

const useMenu = () => {
    const axiospublic = useaxiospublic()
    // const [menu, setMenu] = useState([])
    // const [loading,setloading]=useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setloading(false)
    //         })
    // }, [])

    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: 'menu',
        queryFn: async () => {
            const res = await axiospublic.get('/menu');
            return res.data;
        }
    })

    return [menu, loading ,refetch]
}

export default useMenu;