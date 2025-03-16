import { Link, useParams } from "react-router";
import ReactImageMagnify from 'react-image-magnify';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const PhoneDetails = () => {
    const { id } = useParams();

    const axiosPublic = useAxiosPublic();

    const { data: phoneDetails = [] } = useQuery({
        queryKey: ["phoneDetails", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`phoneDetails/${id}`)
            console.log(res.data)
            return res.data
        }
    });


    return (
        <div className="bg-gray-200">
            <div className="bg-white px-4 lg:px-16 h-full py-5">
                {/* name and btn */}
                <div className="flex justify-between my-2 px-4 md:px-6 lg:px-10">
                    <Link to="/">
                        <button className="px-2 md:px-4 py-1 text-xs md:text-[16px] border hover:bg-[#ff882a] hover:text-white border-[#ff882a]">Back To Home</button>
                    </Link>
                </div>

                <div className="mt-10"><hr /></div>
                {/* ph image */}
                <section className="md:flex gap-5">
                    <div className="md:flex justify-center md:flex-col py-2 w-full px-5 md:px-0 md:w-2/6 md:h-[72vh]">
                        {/* main image hidden only sm device */}
                        <div className="w-full hidden md:block lg:-mt-10">
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: phoneDetails?.mainImage
                                },
                                largeImage: {
                                    src: phoneDetails?.mainImage,
                                    width: 518,
                                    height: 518
                                }
                            }} />
                        </div>

                        {/* main image show only sm device */}
                        <div className="md:hidden">
                            <img src={phoneDetails?.mainImage} alt="" />
                        </div>

                        <div className="flex gap-4 justify-center mt-10">
                            <img src={phoneDetails?.imageOne} className="w-20 h-20 border lg:-mt-10" alt="" />
                            <img src={phoneDetails?.imageTwo} className="w-20 h-20 border lg:-mt-10" alt="" />
                        </div>

                    </div>

                    <div key={phoneDetails._id} className="mt-5 space-y-5">
                        <h2 className="text-[16px] md:text-2xl font-semibold bg-gray-50 px-2 py-1 rounded-md">{phoneDetails?.model}</h2>
                        <div className="flex gap-5">
                            <h2 className="bg-gray-50 px-2 py-1">Cash Discount Price: <span>${phoneDetails?.cashDiscountPrice}</span></h2>
                            <h2 className="bg-gray-50 px-2 py-1">In-Stock: <span>{phoneDetails?.inStock}</span></h2>
                        </div>
                        <h3 className="bg-gray-50 px-2 py-1">Product Code: {phoneDetails?.productCode}</h3>


                        <div className="flex items-center gap-4">
                            <h3 className="">Storage: </h3>
                            <div className="space-x-2 space-y-2">
                                {phoneDetails.storage?.map((size, index) => (
                                    <button key={index} className="px-2 md:px-4 py-1 border">{size}</button>
                                ))}
                            </div>
                        </div>


                        <div className="flex space-x-4">
                            <button className="px-2 md:px-4 py-1 text-xs md:text-[16px] border hover:bg-[#ff882a] hover:text-white border-[#ff882a]">Add To Cart</button>
                            <button className="px-2 md:px-4 py-1 text-xs md:text-[16px] border hover:bg-[#ff882a] hover:text-white border-[#ff882a]">Add To Cart</button>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default PhoneDetails;