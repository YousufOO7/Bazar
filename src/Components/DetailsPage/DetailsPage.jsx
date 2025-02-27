import { Link } from "react-router";
import DetailsDescription from "./DetailsDescription";
import DetailsSpecification from "./DetailsSpecification";


const DetailsPage = () => {


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
                        <div className="w-full lg:-mt-20">
                            <img src="https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-16-Pro-Max---16-Pro-Desert-Titanium-1929.jpg" alt="" />
                        </div>

                            <div className="flex gap-4 justify-center">
                                <img src="https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-16-Pro-Max---16-Pro-Desert-Titanium-1929.jpg" className="w-20 h-20 border lg:-mt-10" alt="" />
                                <img src="https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-16-Pro-Max---16-Pro-Desert-Titanium-1929.jpg" className="w-20 h-20 border lg:-mt-10" alt="" />
                            </div>

                    </div>

                    <div className="mt-5 space-y-5">
                        <h2 className="text-[16px] md:text-2xl font-semibold bg-gray-50 px-2 py-1 rounded-md">iPhone 16 Pro Max</h2>
                        <div className="flex gap-5">
                            <h2 className="bg-gray-50 px-2 py-1">Cash Discount Price</h2>
                            <h2 className="bg-gray-50 px-2 py-1">In-Stock</h2>
                        </div>
                        <h3 className="bg-gray-50 px-2 py-1">Product Code: sku-16</h3>


                        <div className="flex items-center gap-4">
                            <h3 className="">Storage: </h3>
                            <div className="space-x-2">
                                <button className="px-2 md:px-4 py-1 border">1TB</button>
                                <button className="px-2 md:px-4 py-1 border">256GB</button>
                                <button className="px-2 md:px-4 py-1 border">128GB</button>
                            </div>
                        </div>


                        <div className="flex space-x-4">
                            <button className="px-2 md:px-4 py-1 text-xs md:text-[16px] border hover:bg-[#ff882a] hover:text-white border-[#ff882a]">Add To Cart</button>
                            <button className="px-2 md:px-4 py-1 text-xs md:text-[16px] border hover:bg-[#ff882a] hover:text-white border-[#ff882a]">Add To Cart</button>
                        </div>
                    </div>

                </section>


            </div>

            <DetailsSpecification />
            <DetailsDescription />
        </div>
    );
};

export default DetailsPage;