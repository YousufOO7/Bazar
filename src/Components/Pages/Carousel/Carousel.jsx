// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
    return (
        <div className='container mx-auto lg:flex gap-5 my-10 px-4 md:px-8 lg:0'>
            <div className='w-full lg:w-4/6'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    // navigation={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FSamsung-S25-Ultra-5G-1435.png&w=2048&q=75" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FiPhone-16-Series-9831.png&w=2048&q=75" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FiPad-Air-m2-2788.png&w=2048&q=75" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FMac-mini-M4-Chip-Slider-4626.jpg&w=2048&q=75" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Image */}
            <div className='sm:flex gap-5 lg:gap-0 lg:flex-col mt-5 lg:mt-0 lg:space-y-2'>
                <div>
                    <img src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FTop-Banner--for-Galaxy-fit-3-last-1794.jpg&w=640&q=75" alt="" />
                </div>

                <div>
                    <img src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Flarge%2FApple-Airpod-size-change-3014.jpg&w=640&q=75" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Carousel;