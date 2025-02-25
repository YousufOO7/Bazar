import axios from "axios";
import { useEffect, useState } from "react";
import { BiSolidMemoryCard } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa";
import { FaSimCard } from "react-icons/fa6";
import { Md5G, MdFingerprint } from "react-icons/md";
import DetailsInfo from "./DetailsInfo";
import ReactImageMagnify from 'react-image-magnify';
import DetailsGallery from "./DetailsGallery";

const DetailsPage = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("./details.json")
            .then(res => {
                setDetails(res.data)
            })
    }, [])

    const { Key_Specs, Performance, Images, Display, Design, Camera, Battery, Storage, Network_Connectivity, Multimedia } = details;


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
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: Images?.First_View
                                },
                                largeImage: {
                                    src: Images?.First_View,
                                    width:  618,
                                    height: 418,
                                }
                            }} />
                            {/* <img src={Images?.First_View} alt="image" className="border md:border-r border-t-0 border-b-0 w-[36vw]" /> */}
                        </div>

                        <div className="lg:hidden">
                            <div className="flex justify-center gap-4 ">
                                <div><img src={Images?.First_View} alt="" className="w-12 h-12" /></div>
                                <div><img src={Images?.Second_View} alt="" className="w-12 h-12" /></div>
                                <div><img src={Images?.Group_View} alt="" className="w-12 h-12" /></div>
                            </div>
                        </div>
                    </div>

                    <section className="w-full px-4 md:px-5 mt-10 md:mt-0 lg:px-10">
                        <div className="flex justify-between ">
                            <h2 className="text-xl font-semibold">Key Feature</h2>
                            <a href="#">See Full Feature</a>
                        </div>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Performance */}
                            <div className="space-y-2">
                                <h3 className="text-lg text-gray-500">Performance</h3>
                                <p className="text-xs">{Performance?.CPU?.slice(0, 24)}...</p>
                                <p className="text-xs">{Performance?.GPU} </p>
                                <p className="text-xs">{Performance?.RAM[2]} RAM</p>
                            </div>
                            {/* Display */}
                            <div className="border border-l-2 border-t-0 border-b-0 border-r-0 pl-3 space-y-2">
                                <h3 className="text-lg text-gray-500">Display</h3>
                                <p className="text-xs">{Display?.Size} </p>
                                <p className="text-xs">{Display?.Type} </p>
                                <p className="text-xs">{Display?.Refresh_Rate} Refresh Rate</p>
                            </div>
                            {/* Camera */}
                            <div className="border border-l-2 border-t-0 border-b-0 border-r-0 pl-3 space-y-2">
                                <h3 className="text-lg text-gray-500">Camera</h3>
                                <p className="text-xs">
                                    <span>{Camera?.Rear_Camera?.Triple[0]?.Sensor}</span>
                                    <span className="ml-2">{Camera?.Rear_Camera?.Triple[0]?.Features.join(" , ").slice(0, 18)}...</span>
                                </p>
                                <p className="text-xs">
                                    <span>{Camera?.Front_Camera?.Single.Sensor}</span>
                                    <span className="ml-2">{Camera?.Front_Camera?.Single.Aperture} Front Camera</span>
                                </p>
                            </div>
                            {/* Battery */}
                            <div className="border border-l-2 border-t-0 border-b-0 border-r-0 pl-3 space-y-2">
                                <h3 className="text-lg text-gray-500">Battery</h3>
                                <p className="text-xs">{Battery?.Capacity} </p>
                                <p className="text-xs">{Battery?.Charging} </p>
                                <p className="text-xs">{Battery?.Battery_Life?.slice(0, 24)}...</p>
                            </div>
                        </div>
                        <div className="mt-5"><hr /></div>

                        <ul className="grid grid-cols-2 md:grid-cols-3 pt-5 lg:pt-0 lg:mt-5 gap-5 lg:gap-0 lg:space-y-5">
                            <li className="flex items-center"><BiSolidMemoryCard className="text-3xl text-gray-500" /> <span className="text-xs">{Storage?.Internal[1]},
                                {
                                    Storage?.Expandable ?
                                        <span>{Storage?.Expandable}</span>
                                        : <span className="text-red-600">Non Expandable</span>
                                }
                            </span></li>

                            <li className="flex items-center"><FaSimCard className="text-2xl text-gray-500" /> <span className="text-xs">{Network_Connectivity?.SIM?.slice(0, 20)}...</span></li>

                            <li className="flex items-center"><Md5G className="text-3xl text-gray-500" /> <span className="text-xs"> {Key_Specs?.fiveG_Support}</span></li>

                            <li className="flex items-center"><FaPhoneVolume className="text-3xl text-gray-500" /> <span className="text-xs">{Multimedia?.Loudspeaker}</span></li>

                            <li className="flex items-center"><MdFingerprint className="text-3xl text-gray-500" /> <span className="text-xs">{Display?.Fingerprint_Sensor}</span></li>
                        </ul>

                        <div className="mt-5"><hr /></div>
                        {/* ph extra image */}
                        <div className="hidden lg:block">
                            <div className="lg:flex gap-4 mt-5">
                                <div><img src={Images?.First_View} alt="" className="w-20 h-24" /></div>
                                <div><img src={Images?.Second_View} alt="" className="w-20 h-24" /></div>
                                <div><img src={Images?.Group_View} alt="" className="w-20 h-24" /></div>
                            </div>
                        </div>

                    </section>
                </section>


            </div>

            <DetailsInfo details={details} />
            <DetailsGallery />
        </div>
    );
};

export default DetailsPage;