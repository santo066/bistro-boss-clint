import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

export default function Updateitem() {
   const items=useLoaderData()
   console.log(items)
    return (
        <div>
            <SectionTitle heading={'Update an item'} subheading={"Refresh"}></SectionTitle>

        </div>
    )
}