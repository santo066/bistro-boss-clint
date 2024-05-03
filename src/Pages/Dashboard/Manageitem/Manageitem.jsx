import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiossecure from "../../../Hooks/useAxiossecure";
import { Link } from "react-router-dom";

export default function Manageitem() {
    const [menu, loading, refetch] = useMenu()

    const axiossecure = useAxiossecure()

    const hendeldeleteitem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiossecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "deleted success fully",
                        icon: "success"
                    });
                }
            }
        });
    }
    const hendelUpdate = (item) => {

    }
    return (
        <div>
            <SectionTitle heading={'manage All Items'} subheading={'Hurry Up'}></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className="text-right">$ {item.price}</td>
                                    <td>
                                        <Link to={`/dashboard/updateitem/${item._id}`} ><button onClick={() => hendelUpdate(item)} className="btn bg-orange-400 btn-sm"><FaEdit className="text-white text-2xl"></FaEdit></button></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => hendeldeleteitem(item)} className="btn btn-ghost btn-lg"><FaTrash className="text-red-600"></FaTrash></button>

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