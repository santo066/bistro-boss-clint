
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slid1 from "../../../assets/home/slide1.jpg";
import slid2 from "../../../assets/home/slide2.jpg";
import slid3 from "../../../assets/home/slide3.jpg";
import slid4 from "../../../assets/home/slide4.jpg";
import slid5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

export default function Category() {
    return (
        <section>
            <SectionTitle
            heading={'ORDER ONLINE'}
            subheading={'from 11:00am to 10:00pm'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper  mb-24"
            >
                <SwiperSlide>
                    <img src={slid1} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid2} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>pizzas</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid3} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>soups</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid4} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>cakes</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid5} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid2} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>pizzas</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid3} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>soups</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid4} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>cakes</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid5} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid4} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>cakes</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid5} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid2} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>pizzas</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid3} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>soups</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid4} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>cakes</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid5} alt="" />
                    <h3 className='text-4xl text-center -mt-16 uppercase text-white font-bold'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}