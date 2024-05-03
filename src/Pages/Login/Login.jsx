

import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import loginimg from"../../assets/others/authentication2.png"

export default function Login() {
    const { signin } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const fromm = location.state?.from?.pathname || "/";

    const hendellogin = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        signin(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                Swal.fire({
                    title: "User Login SuccessFull",
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
                navigate(fromm, { replace: true });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const [disabled, setdisabled] = useState(true)
    const hendelValidateCaptcha = e => {
        const value = e.target.value;
        console.log(value)
        if (validateCaptcha(value)) {
            setdisabled(false)
        }
        else {
            setdisabled(true)
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="text-5xl text-center font-bold mb-10">Login now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <img src={loginimg} alt="" />
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hendellogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={hendelValidateCaptcha} type="text" name="captcha" placeholder="type the text" className="input input-bordered"  />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} type="submit" className="btn btn-primary" value="Login" />
                            </div>
                        </form>
                        <p className='mx-auto'>New User <Link className='text-blue-500  font-bold' to={'/signup'}>Create A Acount</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    )
}