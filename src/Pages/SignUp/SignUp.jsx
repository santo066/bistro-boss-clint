import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useaxiospublic from "../../Hooks/Useaxiospublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import signupimg from"../../assets/others/authentication.gif"

export default function SignUp() {
    const axiospublic = useaxiospublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const { createUser, updateuserprofile } = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser)
                updateuserprofile(data.name, data.PhotoUrl)
                    .then(() => {
                        const user = {
                            name: data.name,
                            email: data.email
                        }
                        axiospublic.post('/users', user)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "user created success fully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/contactManagment')
                                }
                            })

                    })
                    .catch(error => { console.log(error) })
            })
    };



    return (
        <>
            <Helmet>
                <title>Bistro Boss | Signup</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-center font-bold mb-10">SignUp now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <img src={signupimg} className="w-full" alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" required />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text"  {...register("PhotoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered" />
                                {errors.PhotoUrl && <span className="text-red-500">Photo Url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 10,
                                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-500">password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-500">6 carecter is required</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-500">max 10 carecter</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-500">password have be strong</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='mx-auto'>Alrady have an acount so <Link className="text-blue-400 font-bold" to={'/login'}>Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    )
}