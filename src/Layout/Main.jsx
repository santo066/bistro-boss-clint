import {Outlet, useLocation}  from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
export default function Main(){
    const location=useLocation();
    console.log(location)
    const noheaderfooter=location.pathname.includes('login') || location.pathname.includes('signup')
    return(
        <div>
            {noheaderfooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderfooter || <Footer></Footer>}
        </div>
    )
}