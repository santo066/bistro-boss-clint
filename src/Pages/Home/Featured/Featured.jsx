import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredimg from '../../../assets/home/featured.jpg'
import './featured.css'

export default function Featured() {
    return (
        <div className="featured-img bg-fixed text-white pt-10 my-20">
            <SectionTitle heading={'Featured items'} subheading={'Check It Out'}></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-60 justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <Link to={'/order/salad'}><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
                </div>
            </div>
        </div>
    )
}