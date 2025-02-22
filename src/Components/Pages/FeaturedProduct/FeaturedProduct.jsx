import { useEffect, useState } from "react";
import TitleShared from "../../../Shared/TitleShared/TitleShared";
import axios from "axios";


const FeaturedProduct = () => {

    const [bestDeal, setBestDeal] = useState([]);
    const [bestSell, setBestSell] = useState([]);

    useEffect(() => {
        axios.get("./bestDeal.json")
            .then(res => {
                setBestDeal(res.data)
            })
    }, []);

    useEffect(() => {
        axios.get("./bestSell.json")
            .then(res => {
                setBestSell(res.data)
            })
    }, []);

    const [activeBtn, setActiveBtn] = useState("bestDeal")

    return (
        <div>
            <div className="mb-10">
                <TitleShared heading={"Featured Products"} />

                <div className="flex gap-4 justify-center">
                    <button
                        className={`btn ${activeBtn === "bestDeal" ? "bg-[#ff882a] text-white" : ""}`}
                        onClick={() => setActiveBtn("bestDeal")}
                    >
                        Best Deal
                    </button>
                    <button className={`btn ${activeBtn === "bestSell" ? "bg-[#ff882a] text-white" : ""}`}
                        onClick={() => setActiveBtn("bestSell")}
                    >Best Sell</button>
                </div>
            </div>
            {/* Best Deal */}
            {
                activeBtn === "bestDeal" && (
                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 px-4 md:px-8 lg:px-16">
                        {
                            bestDeal.map(deal => (
                                <div key={deal.id} className="w-[200px] rounded-2xl p-1 border-2 shadow-xl">
                                    <div className="flex justify-center">
                                        <img src={deal.image} alt="" className="h-[180px]" />
                                    </div>

                                    <div className="items-center text-center mb-5">
                                        <h3 className="text-semibold mb-5">{deal.title}</h3>
                                        <p>{deal.price}</p>
                                    </div>

                                    <div className="flex justify-evenly pb-3">
                                        <button className="lg:px-4 p-1  text-xs lg:text-sm bg-[#ff882a] text-white rounded-md">Buy Noe</button>
                                        <button className="lg:px-2 p-1 border border-[#ff882a] text-[#ff882a] text-xs lg:text-sm rounded-md">Add To Cart</button>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                )
            }

            {/* Best Sell */}
            {
                activeBtn === "bestSell" && (
                    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10 px-4 md:px-8 lg:px-16">
                        {
                            bestSell.map(sell => (
                                <div key={sell.id} className="w-[200px] rounded-2xl p-1 border-2 shadow-xl">
                                    <div className="flex justify-center">
                                        <img src={sell.image} alt="" className="h-[180px]" />
                                    </div>

                                    <div className="items-center text-center mb-5">
                                        <h3 className="text-semibold mb-5">{sell.title}</h3>
                                        <p>{sell.price}</p>
                                    </div>

                                    <div className="flex justify-evenly pb-3">
                                        <button className="lg:px-4 p-1  text-xs lg:text-sm bg-[#ff882a] text-white rounded-md">Buy Noe</button>
                                        <button className="lg:px-2 p-1 border border-[#ff882a] text-[#ff882a] text-xs lg:text-sm rounded-md">Add To Cart</button>
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