import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

export default function Testimonials() {
    const [reviews, setreviews] = useState([])

    useEffect(() => {
        fetch('https://bistro-boss-server-qbx0.onrender.com/review')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subheading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>

                        <div className="flex flex-col items-center m-20">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-7">{review.details}</p>
                            <h3 className="text-orange-500 text-3xl">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    )
}