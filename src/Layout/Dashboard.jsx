import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaPhone, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";
import Useadmin from "../Hooks/Useadmin";

export default function Dashboard() {
    const [isadmin] = Useadmin();
    const [cart] = useCarts()
    return (
        <div className="md:flex">
            <div className="md:w-60 bg-amber-500 md:min-h-screen">
                <ul className="menu p-3">
                    {
                        isadmin ? <>

                            <li><NavLink to={'/dashboard/adminhome'}><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/additem'}><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manageitem'}><FaList></FaList> manage Items</NavLink></li>
                            <li><NavLink to={'/dashboard/booking'}><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to={'/dashboard/users'}><FaUser></FaUser> All Users</NavLink></li>
                        </>
                            : <>
                                <li><NavLink to={'/dashboard/userhome'}><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar> Reservation</NavLink></li>
                                 <li><NavLink to={'/dashboard/review'}><FaAd></FaAd> Add Review</NavLink></li>
                                <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My carts({cart.length})</NavLink></li>
                                <li><NavLink to={'/dashboard/booking'}><FaList></FaList> My Booking</NavLink></li>
                            </>                 
                    }
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to={'/order/salad'}><FaSearch></FaSearch> Menu</NavLink></li>
                    <li><NavLink to={'/order/contact'}><FaEnvelope></FaEnvelope> Contacts</NavLink></li>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    )
}