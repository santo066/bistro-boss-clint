import { useQuery } from "@tanstack/react-query"
import useAxiossecure from "../../../Hooks/useAxiossecure"
import { FaTrash, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AllUsers() {
    const axiossecure = useAxiossecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiossecure.get('/users');
            return res.data;
        }
    })

    const hendelmakeadmin = (user) => {
        axiossecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const hendeldeleteuser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiossecure.delete(`/users/${user._id}`)
                    .then(res => {
                        console.log(res)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All users</h2>
                <h2 className="text-3xl">Total users: {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user.role === 'admin' ? 'admin' : <button onClick={() => hendelmakeadmin(user)} className="btn bg-orange-400 btn-lg"><FaUsers className="text-white text-2xl"></FaUsers></button>}
                                    </td>
                                    <td>
                                        <button onClick={() => hendeldeleteuser(user)} className="btn btn-ghost btn-lg"><FaTrash className="text-red-600"></FaTrash></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}