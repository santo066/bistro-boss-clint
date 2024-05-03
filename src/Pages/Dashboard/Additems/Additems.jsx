import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useaxiospublic from "../../../Hooks/Useaxiospublic";
import useAxiossecure from "../../../Hooks/useAxiossecure";
import Swal from "sweetalert2";


const image_hosting = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`
export default function Additems() {
    const axiospublic = useaxiospublic()
    const axiossecure = useAxiossecure()


    const { register, handleSubmit,reset } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        //image hosting
        const imagefile = { image: data.image[0] }
        const res = await axiospublic.post(image_hosting_api, imagefile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            //now swnd the data with img url
            const menuitems = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menures = await axiossecure.post('/menu', menuitems);
            console.log(menures.data)
            if (menures.data.insertedId) {
                //massege
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }


    }

    return (
        <div>
            <SectionTitle heading={'add an items'} subheading={"What's New"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-5">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                    </label>
                    <div className="flex gap-6 my-5">
                        {/* category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category Name*</span>
                            </div>
                            <select defaultValue={'default'} {...register("category", { required: true })} className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select A categories</option>
                                <option value="salad">salad</option>
                                <option value="pizza">pizza</option>
                                <option value="soup">soup</option>
                                <option value="dessert">dessert</option>
                                <option value="drink">drink</option>
                            </select>                            </label>
                        {/* price */}

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />
                        </label>
                    </div>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Details Here"></textarea>

                    </label>
                    <input {...register('image', { required: true })} type="file" className="file-input w-full form-control my-6" />

                    <button className="btn ">
                        Add Item<FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    )
}