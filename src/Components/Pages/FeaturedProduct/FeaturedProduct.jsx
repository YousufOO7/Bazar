import { useEffect, useState } from "react";
import TitleShared from "../../../Shared/TitleShared/TitleShared";
import axios from "axios";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link, useLocation, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const FeaturedProduct = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();
    const [activeBtn, setActiveBtn] = useState("phones");

    const { data: allPhones = [] } = useQuery({
        queryKey: ["phones"],
        queryFn: async () => {
            const res = await axiosPublic.get("/phones")
            return res.data
        }
    });


    // add cart phone
    const handleAddToCard = deal => {
        if (user && user?.email) {
            const cartItem = {
                productId: deal._id,
                model: deal?.model,
                email: user?.email,
                price: parseFloat(deal?.cashDiscountPrice),
                image: deal?.mainImage
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    // send to database to the cart
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${deal?.model} added to the cart`,
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
    };


    const { data: allLaptops = [] } = useQuery({
        queryKey: ["laptops"],
        queryFn: async () => {
            const res = await axiosPublic.get("/laptops")
            return res.data
        }
    });

    // add cart 
    const handleAddToCardLaptop = laptops => {
        if (user && user?.email) {
            const cartItem = {
                productId: laptops._id,
                model: laptops?.model,
                email: user?.email,
                price: parseFloat(laptops?.cashDiscountPrice),
                image: laptops?.mainImage
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    // send to database to the cart
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${laptops?.model} added to the cart`,
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
                <TitleShared heading={"Featured Products"} />

                <div className="flex gap-4 justify-center">
                    <button
                        className={`btn ${activeBtn === "phones" ? "bg-[#ff882a] text-white" : ""}`}
                        onClick={() => setActiveBtn("phones")}
                    >
                        Phone's
                    </button>
                    <button className={`btn ${activeBtn === "laptops" ? "bg-[#ff882a] text-white" : ""}`}
                        onClick={() => setActiveBtn("laptops")}
                    >Laptop's</button>
                </div>
            </div>
            {/* Best Deal */}
            {
                activeBtn === "phones" && (
                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 px-4 md:px-8 lg:px-16">
                        {
                            allPhones.slice(0, 12).map(deal => (
                                <div key={deal._id} className="w-[200px] rounded-2xl p-1 border-2 shadow-xl">
                                    <div className="flex justify-center">
                                        <img src={deal?.mainImage} alt="" className="h-[180px]" />
                                    </div>

                                    <div className="items-center text-center mb-5">
                                        <h3 className="text-semibold mb-5">{deal?.model}</h3>
                                        <p>{deal?.cashDiscountPrice}</p>
                                    </div>

                                    <div className="flex justify-evenly pb-3">
                                        <Link to={`/phoneDetails/${deal._id}`}>  <button className="px-2 p-1  text-xs lg:text-sm bg-[#ff882a] text-white rounded-md hover:bg-white hover:text-[#ff882a] transition duration-700 ease-in-out hover:border hover:border-[#ff882a]">Details</button></Link>

                                        <button onClick={() => handleAddToCard(deal)} className="px-2 p-1 border border-[#ff882a] text-[#ff882a] text-xs lg:text-sm rounded-md hover:bg-[#ff882a] hover:text-white transition duration-700 ease-in-out">Add To Cart</button>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                )
            }

            {/* Best laptops */}
            {
                activeBtn === "laptops" && (
                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 px-4 md:px-8 lg:px-16">
                        {
                            allLaptops.slice(0, 6).map(laptops => (
                                <div key={laptops.id} className="w-[200px] rounded-2xl p-1 border-2 shadow-xl">
                                    <div className="flex justify-center">
                                        <img src={laptops?.mainImage} alt="" className="h-[180px]" />
                                    </div>

                                    <div className="items-center text-center mb-5">
                                        <h3 className="text-semibold mb-5">{laptops?.model}</h3>
                                        <p>{laptops?.cashDiscountPrice}</p>
                                    </div>

                                    <div className="flex justify-evenly pb-3">
                                        <Link to={`/laptopDetails/${laptops._id}`}>  <button className="px-2 p-1  text-xs lg:text-sm bg-[#ff882a] text-white rounded-md hover:bg-white hover:text-[#ff882a] transition duration-700 ease-in-out hover:border hover:border-[#ff882a]">Details</button></Link>

                                        <button onClick={() => handleAddToCardLaptop(laptops)} className="px-2 p-1 border border-[#ff882a] text-[#ff882a] text-xs lg:text-sm rounded-md hover:bg-[#ff882a] hover:text-white transition duration-700 ease-in-out">Add To Cart</button>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                )
            }

            {/* images for adds */}

            <div className="flex gap-5 my-10 px-5 md:px-8 lg:px16">
                <div>
                    <img src="https://adminapi.applegadgetsbd.com/storage/media/large/MacBook-Air-M2-7448.png" alt="" />
                </div>
                <div>
                    <img src="https://adminapi.applegadgetsbd.com/storage/media/large/Pixel-9-1243.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default FeaturedProduct;