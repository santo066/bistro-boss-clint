import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import useaxiospublic from "../../Hooks/Useaxiospublic";
import { useNavigate } from "react-router-dom";

export default function SocialLogin() {
    const { googlesignin } = UseAuth();
    const navigate=useNavigate();
    const axiospublic = useaxiospublic()
    const hendelgooglesignin = () => {
        googlesignin()
            .then(res => {
                console.log(res.user)
                const userinfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                }
                axiospublic.post('/users', userinfo)
                    .then(res=>{
                        console.log(res.data)
                        navigate('/')
                    })
            })
    }
    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button onClick={hendelgooglesignin} className="btn">
                    <FaGoogle className="mr-4"></FaGoogle>
                    Sign in With Google
                </button>
            </div>
        </div>
    )
}