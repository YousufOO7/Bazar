import axios from "axios";
import { useEffect, useState } from "react";
import { BiSolidMemoryCard } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa";
import { FaSimCard } from "react-icons/fa6";
import { Md5G, MdFingerprint } from "react-icons/md";

const DetailsPage = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("./details.json")
            .then(res => {
                setDetails(res.data)
            })
    }, [])

    return (
        <div className="bg-gray-200">
            <div className="bg-white border max-w-6xl mx-auto h-full py-5">
                {/* name and btn */}
                <div className="flex justify-between my-2 px-4 md:px-6 lg:px-10">
                    <h2 className="text-[16px] md:text-2xl font-semibold">Samsung Galaxy A35 5G</h2>
                    <div className="flex space-x-4">
                        <button className="px-2 md:px-4 py-1 text-xs md:text-[16px] border hover:bg-[#ff882a] hover:text-white border-[#ff882a]">Add To Cart</button>
                        <button className="px-2 md:px-4 py-1 text-xs md:text-[16px] border hover:bg-[#ff882a] hover:text-white border-[#ff882a]">Add To Cart</button>
                    </div>
                </div>

                <div className="mt-10"><hr /></div>
                {/* ph image */}
                <section className="md:flex">
                    <div className=" md:h-[72vh]">
                        <div className="flex justify-center md:flex-col py-2">
                            <img src="https://www.91-img.com/pictures/166095-v1-iqoo-neo-10-pro-mobile-phone-large-1.jpg" alt="image" className="border md:border-r border-t-0 border-b-0 w-[36vw]" />
                        </div>

                        <div className="lg:hidden">
                            <div className="flex justify-center gap-4 mt-5 md:mt-20">
                                <div><img src="" alt="" className="w-12 h-12" /></div>
                                <div><img src="" alt="" className="w-12 h-12" /></div>
                                <div><img src="" alt="" className="w-12 h-12" /></div>
                            </div>
                        </div>
                    </div>

                    <section className="w-full px-4 md:px-5 mt-10 md:mt-0 lg:px-10">
                        <div className="flex justify-between ">
                            <h2 className="text-xl font-semibold">Key Feature</h2>
                            <a href="#">See Full Feature</a>
                        </div>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <h3 className="text-lg text-gray-500">Performance</h3>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                            </div>
                            <div className="border border-l-2 border-t-0 border-b-0 border-r-0 pl-3">
                                <h3 className="text-lg text-gray-500">Display</h3>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                            </div>
                            <div className="border border-l-2 border-t-0 border-b-0 border-r-0 pl-3">
                                <h3 className="text-lg text-gray-500">Camera</h3>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                            </div>
                            <div className="border border-l-2 border-t-0 border-b-0 border-r-0 pl-3">
                                <h3 className="text-lg text-gray-500">Battery</h3>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing </p>
                            </div>
                        </div>
                        <div className="mt-5"><hr /></div>

                        <ul className="grid grid-cols-2 md:grid-cols-3 pt-5 lg:pt-0 lg:mt-5 gap-5 lg:gap-0 lg:space-y-5">
                            <li className="flex items-center"><BiSolidMemoryCard className="text-3xl text-gray-500" /> <span className="text-xs">256 GB, <span className="text-red-600">Non Expandable</span></span></li>

                            <li className="flex items-center"><FaSimCard className="text-2xl text-gray-500" /> <span className="text-xs">Dual SIM: Nano + Nano</span></li>

                            <li className="flex items-center"><Md5G className="text-3xl text-gray-500" /> <span className="text-xs">Supported</span></li>

                            <li className="flex items-center"><FaPhoneVolume className="text-3xl text-gray-500" /> <span className="text-xs">VOLTE</span></li>

                            <li className="flex items-center"><MdFingerprint className="text-3xl text-gray-500" /> <span className="text-xs">Fingerprint sensor</span></li>
                        </ul>

                        <div className="mt-5"><hr /></div>
                        {/* ph extra image */}
                        <div className="hidden lg:block">
                            <div className="lg:flex gap-4 mt-5">
                                <div className="border"><img src="" alt="" className="w-24 h-24" /></div>
                                <div className="border"><img src="" alt="" className="w-24 h-24" /></div>
                                <div className="border"><img src="" alt="" className="w-24 h-24" /></div>
                            </div>
                        </div>

                    </section>
                </section>
            </div>
        </div>
    );
};

export default DetailsPage;