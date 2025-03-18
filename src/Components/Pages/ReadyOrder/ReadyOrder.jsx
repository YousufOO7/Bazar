import TitleShared from "../../../Shared/TitleShared/TitleShared";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';
import { Link, useLocation, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ReadyOrder = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();

    const {data: allPhones = []} = useQuery({
        queryKey: ["phones"],
        queryFn: async () => {
            const res = await axiosPublic.get("/phones")
            console.log(res.data)
            return res.data.slice(0, 8)
        }
    });

    // add cart 
        const handleAddToCard = phone => {
            if(user && user?.email){
                const cartItem = {
                    productId: phone._id,
                    model: phone?.model,
                    email: user?.email,
                    price: parseFloat(phone?.cashDiscountPrice),
                    image: phone?.mainImage
                }
    
                axiosSecure.post('/carts', cartItem)
                    .then(res => {
                        // send to database to the cart
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${phone?.model} added to the cart`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
            else {
                Swal.fire({
                    title: "You are not logged in!",
                    text: "Please login to add to the card!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, login"
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/tab', { state: { from: location } })
                        // Swal.fire({
                        //     title: "Deleted!",
                        //     text: "Your file has been deleted.",
                        //     icon: "success"
                        // });
                    }
                });
            
            }
        }

    return (
        <div>
            <div className="mb-10">
                <TitleShared heading={"Ready Order 🔥"} />
            </div>

            <section className="my-10 px-4 md:px-8 lg:px-16 ">
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
                        allPhones?.map(phone => (
                            <SwiperSlide key={phone._id}>
                                <div className="w-[200px] rounded-md shadow-md">
                                    <div className="flex justify-center">
                                        <img src={phone?.mainImage} className="w-[180px] bg-cover h-[180px]" alt="" />
                                    </div>

                                    <div className="phones-center text-center mb-5">
                                        <h3 className="text-semibold mb-5">{phone?.model}</h3>
                                        <p>$ {phone?.cashDiscountPrice}</p>
                                    </div>

                                    <div className="flex justify-evenly pb-3">
                                        <Link to={`/phoneDetails/${phone._id}`}>  <button className="px-2 p-1  text-xs lg:text-sm bg-[#ff882a] text-white rounded-md hover:bg-white hover:text-[#ff882a] transition duration-700 ease-in-out hover:border hover:border-[#ff882a]">Details</button></Link>

                                        <button onClick={() => handleAddToCard(phone)} className="px-2 p-1 border border-[#ff882a] text-[#ff882a] text-xs lg:text-sm rounded-md hover:bg-[#ff882a] hover:text-white transition duration-700 ease-in-out">Add To Cart</button>
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