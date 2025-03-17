import { Link, useParams } from "react-router";
import ReactImageMagnify from 'react-image-magnify';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const BluetoothDetails = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { id } = useParams();

    const axiosPublic = useAxiosPublic();

    const { data: bluetoothDetails = [] } = useQuery({
        queryKey: ["bluetoothDetails", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`bluetoothDetails/${id}`)
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
                                    src: bluetoothDetails?.mainImage
                                },
                                largeImage: {
                                    src: bluetoothDetails?.mainImage,
                                    width: 518,
                                    height: 518
                                }
                            }} />
                        </div>

                        {/* main image show only sm device */}
                        <div className="md:hidden">
                            <img src={bluetoothDetails?.mainImage} alt="" />
                        </div>

                        <div className="flex gap-4 justify-center mt-10">
                            <img src={bluetoothDetails?.imageOne} className="w-20 h-20 border lg:-mt-10" alt="" />
                            <img src={bluetoothDetails?.imageTwo} className="w-20 h-20 border lg:-mt-10" alt="" />
                        </div>

                    </div>

                    <div key={bluetoothDetails._id} className="mt-5 space-y-5">
                        <h2 className="text-[16px] md:text-2xl font-semibold bg-gray-50 px-2 py-1 rounded-md">{bluetoothDetails?.model}</h2>
                        <div className="flex gap-5">
                            <h2 className="bg-gray-50 px-2 py-1">Cash Discount Price: <span>${bluetoothDetails?.cashDiscountPrice}</span></h2>
                            <h2 className="bg-gray-50 px-2 py-1">In-Stock: <span>{bluetoothDetails?.inStock}</span></h2>
                        </div>
                        <h3 className="bg-gray-50 px-2 py-1">Product Code: {bluetoothDetails?.productCode}</h3>


                        <div className="flex space-x-4">
                            <button className="px-2 md:px-4 py-1 text-xs md:text-[16px] border hover:bg-[#ff882a] hover:text-white border-[#ff882a]">Add To Cart</button>
                            <button className="px-2 md:px-4 py-1 text-xs md:text-[16px] border hover:bg-[#ff882a] hover:text-white border-[#ff882a]">Add To Cart</button>
                        </div>
                    </div>
                </section>


                {/* specification */}
                <div className="bg-white my-10  px-4 ">
                    <div>
                        <Box sx={{ width: '100%' }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="secondary tabs example"
                            >
                                <Tab value="one" label="Specification" />
                                <Tab value="two" label="Description" />
                                <Tab value="three" label="Review" />
                            </Tabs>
                        </Box>
                    </div>
                    <section className='border mt-5 px-5'>
                        <h2 className="text-2xl font-bold py-3 underline">Specification</h2>
                        <div className='border my-5 px-2'>
                            {/* brand */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Brand</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.brand}</h2>
                            </div>
                            <div><hr /></div>
                            {/* model */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Model</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.model}</h2>
                            </div>
                            <div><hr /></div>
                            {/* network */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">ChargingInterface</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.chargingInterface}</h2>
                            </div>
                            <div><hr /></div>
                            {/* dimension */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Compatibility</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.compatibility}</h2>
                            </div>
                            <div><hr /></div>
                            {/* weight */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Bluetooth</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.bluetooth}</h2>
                            </div>
                            <div><hr /></div>
                            {/* sim */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Calling</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.calling}</h2>
                            </div>
                            <div><hr /></div>
                            {/* display type */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">DriverSize</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.driverSize}</h2>
                            </div>
                            <div><hr /></div>
                            {/* display size */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">WaterResistance</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.waterResistance}</h2>
                            </div>
                            <div><hr /></div>
                            {/* display resolution */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Play Time</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.playTime}</h2>
                            </div>
                            <div><hr /></div>
                            {/* main camera */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Battery Info</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.batteryInfo}</h2>
                            </div>
                            <div><hr /></div>
                            {/* battery */}
                            <div className='grid grid-cols-6'>
                                <h2 className="col-span-2 text-2xl py-1">Other Features</h2>
                                <h2 className="border-l col-span-4  md:text-xl py-1 pl-3">{bluetoothDetails?.otherFeatures}</h2>
                            </div>
                        </div>
                    </section>
                </div>


                {/* description */}

                <div className="bg-white my-10  px-4">
                    <div className="border px-2">
                        <h2 className="text-2xl font-bold py-3 underline">Description</h2>
                        <div className="w-4/6 mb-5">
                            <img src={bluetoothDetails?.descriptionImage} alt="" />
                        </div>
                        <div className="space-y-3 ">
                            <h3 className="text-2xl font-bold">{bluetoothDetails?.descriptionTitleOne}</h3>
                            <p>{bluetoothDetails?.descriptionTextOne}</p>

                            <h3 className="text-2xl font-bold">{bluetoothDetails?.descriptionTitleTwo}</h3>
                            <p>{bluetoothDetails?.descriptionTextTwo}</p>

                            <h3 className="text-2xl font-bold">{bluetoothDetails?.descriptionTitleThree} </h3>
                            <p>{bluetoothDetails?.descriptionTextThree}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BluetoothDetails;