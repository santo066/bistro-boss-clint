import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../../Provider/AuthProvider"
import { FaCartShopping } from "react-icons/fa6";
import useCarts from "../../../Hooks/useCarts";


export default function Navbar() {

    const [cart] = useCarts()


    const { user, signout } = useContext(AuthContext)
    const hendelLogout = () => {
        signout()
            .then(() => { })
            .catch(error => { console.log(error) })
    }
    const [selectedMenuItem, setselectedMenuItem] = useState('Home');

    const navOption = <>
        <li className={selectedMenuItem === 'Home' ? 'opacity-55 mr-5 mt-2' : 'mr-5 mt-2'}
            onClick={() => setselectedMenuItem('Home')} ><Link to={'/'}>Home</Link></li>
        <li className={selectedMenuItem === 'OurMenu' ? 'opacity-55 mr-5 mt-3' : 'mr-5 mt-2'}
            onClick={() => setselectedMenuItem('OurMenu')} ><Link to={'/menu'}>Our Menu</Link></li>
        <li className={selectedMenuItem === 'OrderFood' ? 'opacity-55 mr-5 mt-3' : 'mr-5 mt-2'}
            onClick={() => setselectedMenuItem('OrderFood')} ><Link to={'/order/salad'}>Order Food</Link></li>
        <li className={selectedMenuItem === 'Secret' ? 'opacity-55 mr-5 mt-3' : 'mr-5 mt-2'}
            onClick={() => setselectedMenuItem('Secret')} ><Link to={'/secret'}>Secret</Link></li>

        <li className={selectedMenuItem === 'cart' ? 'opacity-55' : 'mr-5 mt-3'}
            onClick={() => setselectedMenuItem('cart')} ><Link to={'/dashboard/cart'}>
                <div className="flex flex-row-reverse">
                    <span className="indicator-item ml-1 badge badge-secondary">+{cart.length}</span>
                    <FaCartShopping />
                </div>
            </Link></li>



    </>
    return (
        <>
            <div className="fixed z-10 bg-opacity-45 text-white navbar bg-black max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-red-950 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <p>{user?.displayName}</p>
                    {
                        user ? <> <button onClick={hendelLogout} className="btn btn-active btn-ghost">Logout</button></> : <><li className="btn btn-active btn-ghost"><Link to={'/login'}>Login</Link></li></>
                    }
                </div>
            </div>
        </>
    )
}