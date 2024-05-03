import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuimg from '../../../assets/menu/banner3.jpg'
import dessertimg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../../assets/menu/pizza-bg.jpg'
import saladimg from '../../../assets/menu/salad-bg.jpg'
import soupimg from '../../../assets/menu/soup-bg.jpg'
import PopulerMenu from "../../Home/PopulerMenu/PopulerMenu";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

export default function Menu() {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category == 'dessert')
    const pizza = menu.filter(item => item.category == 'pizza')
    const salad = menu.filter(item => item.category == 'salad')
    const soup = menu.filter(item => item.category == 'soup')
    const offered = menu.filter(item => item.category == 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuimg} title='Our Menu'></Cover>
            <SectionTitle heading={"Today's Offer"} subheading={"Don't Miss This"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} title={'dessert'} coverimg={dessertimg}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title={'pizzas'} coverimg={pizzaimg}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} coverimg={saladimg}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} coverimg={soupimg}></MenuCategory>
        </div>
    )
}