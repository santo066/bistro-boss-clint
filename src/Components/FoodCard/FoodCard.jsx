import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiossecure from "../../Hooks/useAxiossecure";
import useCarts from "../../Hooks/useCarts";



export default function FoodCard({ item }) {


    const axiossecure = useAxiossecure();

    const { image, name, recipe, price, _id } = item;
    const { user } = UseAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCarts()


    const hendelAddToCart = () => {
        if (user && user.email) {
            //to do: send item
            // console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price,
            }
            axiossecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Custom animation with Animate.css",
                            showClass: {
                                popup: `
                                animate__animated
                                animate__fadeInUp
                                animate__faster
                              `
                            },
                            hideClass: {
                                popup: `
                                animate__animated
                                animate__fadeOutDown
                                animate__faster
                              `
                            }
                        });
                        refetch();
                    }

                })
        }
        else {
            Swal.fire({
                title: "you are not login",
                text: "please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes: login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card xl:w-96 w-full bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-800 absolute right-0 text-white mr-6 mt-5 px-3">$ {price}</p>
                <div className="card-body flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={hendelAddToCart}
                            className="btn btn-outline border-0 hover:bg-slate-700 hover:border-orange-400 border-orange-400 border-b-4 mt-4 bg-slate-200">
                            Add to cat</button>
                    </div>
                </div>
            </div>
        </div>
    )
}