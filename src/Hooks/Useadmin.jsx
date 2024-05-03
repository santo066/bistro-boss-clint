import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiossecure from "./useAxiossecure";

export default function Useadmin() {
    const axiossecure = useAxiossecure()
    const { user } = UseAuth()
    const { data: isadmin,isPending: isadminloading } = useQuery({
        queryKey: [user?.email, 'isadmin'],
        queryFn: async () => {
            const res = await axiossecure.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data.admin;
        }
    })
    return [isadmin,isadminloading]
}