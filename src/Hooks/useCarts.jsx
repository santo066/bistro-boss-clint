import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";
import UseAuth from "./UseAuth";

export default function useCarts() {
    const axiossecure = useAxiossecure();
    const { user } = UseAuth();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiossecure.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
}
