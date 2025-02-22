import TitleShared from "../../../Shared/TitleShared/TitleShared";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";

const ReadyOrder = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("./orders.json")
            .then(res => {
                setOrders(res.data)
            })
    }, [])

    return (
        <div>
            <div className="mb-10">
                <TitleShared heading={"Ready Order 🔥"} />
            </div>

            <section className="my-10 px-4 md:px-8 lg:px-16">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        425: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >

                    {
                        orders.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="w-[200px] rounded-md shadow-md">
                                    <div className="flex justify-center">
                                        <img src={item.image} alt="" />
                                    </div>

                                    <div className="items-center text-center mb-5">
                                        <h3 className="text-semibold mb-5">{item.title}</h3>
                                        <p>{item.price}</p>
                                    </div>
                                    
                                    <div className="flex justify-evenly pb-3">
                                        <button className="lg:px-4 p-1 font-semibold text-xs lg:text-sm bg-[#ff882a] text-white rounded-md">Buy Noe</button>
                                        <button className="lg:px-2 p-1 border border-[#ff882a] text-[#ff882a] text-xs lg:text-sm rounded-md">Add To Cart</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default ReadyOrder;