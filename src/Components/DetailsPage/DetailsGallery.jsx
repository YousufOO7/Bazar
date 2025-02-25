import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import axios from "axios";

const DetailsGallery = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("./details.json")
            .then(res => {
                setDetails(res.data)
            })
    }, [])

    const { Images } = details;

    return (
        <div className="bg-white mt-10  max-w-6xl mx-auto px-4 lg:px-10">
            <div className='w-full py-10'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="flex justify-center py-5">
                            <img src={Images?.First_View} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center py-5">
                            <img src={Images?.Second_View} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center py-5">
                            <img src={Images?.Group_View} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default DetailsGallery;