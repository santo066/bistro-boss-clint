import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

export default function PopulerMenu() {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category == 'popular')

    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const populer = data.filter(item => item.category == 'popular')
    //             setMenu(populer)
    //         })
    // }, [])


    return (
        <section className="mb-24">
            <SectionTitle
                heading={'populer menu'}
                subheading={'Populer Menu List'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-7">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={'/menu'}><button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button></Link>

        </section>
    )
}