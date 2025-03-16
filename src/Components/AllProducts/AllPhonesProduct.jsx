import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '../../Shared/Drawer/Drawer';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Link } from 'react-router';

const AllPhonesProduct = () => {
    const axiosPublic = useAxiosPublic();

    const {data: allPhones = []} = useQuery({
        queryKey: ["phones"],
        queryFn: async () => {
            const res = await axiosPublic.get("/phones")
            return res.data
        }
    })
    

    return (
        <div className="md:flex mt-5 md:mt-20 px-4 md:px-8 lg:px-16 gap-5">
            <div className='md:hidden mb-5'>
                <Drawer />
            </div>
            <div className="w-52 bg-white hidden md:block">
                {/* price */}
                <div className="bg-gray-100 rounded-md p-2">
                    <h3 className="text-xl font-semibold mt-2">Price Range</h3>
                    <p><hr className="border-[1px] border-[#ff882a] mt-2 mb-5" /></p>
                    <div className="flex gap-5 mb-3">
                        <input className="w-1/2 bg-white text-black border" placeholder='Min'></input>
                        <input className="w-1/2 bg-white text-black border" placeholder='Max'></input>
                    </div>
                    <div className="flex justify-end mb-2">
                        <button className="px-1 text-sm bg-[#ff882a] text-white">Filter</button>
                    </div>
                </div>

                {/* category */}
                <div className="bg-gray-100 rounded-md p-2 my-5">
                    <h3 className="text-xl font-semibold mt-2">Category</h3>
                    <p><hr className="border-[1px] border-[#ff882a] mt-2 mb-5" /></p>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Apple" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Laptop" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Samsung" />
                    </FormGroup>
                </div>

                {/* rating */}
                <div className="bg-gray-100 rounded-md p-2 my-5">
                    <h3 className="text-xl font-semibold mt-2">Rating</h3>
                    <p><hr className="border-[1px] border-[#ff882a] mt-2 mb-5" /></p>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="5" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="4" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="3" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="2" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="1" />
                    </FormGroup>
                </div>

            </div>

            <div className="w-full flex-1 max-w-5xl mx-auto">
                <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10 ">
                    {
                        allPhones.map(phone => (
                          <Link to={`/phoneDetails/${phone._id}`}> <div key={phone._id} className="w-[190px] md:w-[220px] lg:w-[190px] rounded-2xl p-1 border-2 shadow-xl">
                                <div className="flex justify-center">
                                    <img src={phone?.mainImage} alt="" className="h-[180px]" />
                                </div>

                                <div className="items-center text-center mb-5">
                                    <h3 className="text-semibold mb-5">{phone?.model}</h3>
                                    <p> $ {phone?.cashDiscountPrice}</p>
                                </div>

                                <div className="flex justify-evenly pb-3">
                                    <button className="px-2 p-1  text-xs lg:text-sm bg-[#ff882a] text-white rounded-md">Buy Now</button>
                                    <button className="px-2 p-1 border border-[#ff882a] text-[#ff882a] text-xs lg:text-sm rounded-md">Add To Cart</button>
                                </div>
                            </div></Link>
                        ))
                    }
                </section>
            </div>
        </div>
    );
};

export default AllPhonesProduct;