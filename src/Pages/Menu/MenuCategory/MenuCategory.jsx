import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

export default function MenuCategory({ items, title, coverimg }) {
    return (
        <div className=" mt-10" >
            {title && <Cover img={coverimg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-7 mt-16">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 hover:bg-slate-400  border-b-4 mt-4 bg-slate-200">Order Now</button>
            </Link>
        </div>
    )
}