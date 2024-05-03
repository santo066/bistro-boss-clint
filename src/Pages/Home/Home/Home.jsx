import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Call from "../Call/Call";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Call></Call>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    )
}