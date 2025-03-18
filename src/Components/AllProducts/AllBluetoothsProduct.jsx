import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '../../Shared/Drawer/Drawer';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const AllBluetoothsProduct = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useAuth();

    const { data: allBluetooth = [] } = useQuery({
        queryKey: ["bluetooths"],
        queryFn: async () => {
            const res = await axiosPublic.get("/bluetooths")
            return res.data
        }
    });


     // add cart 
            const handleAddToCard = bluetooth => {
                if(user && user?.email){
                    const cartItem = {
                        productId: bluetooth._id,
                        model: bluetooth?.model,
                        email: user?.email,
                        price: parseFloat(bluetooth?.cashDiscountPrice),
                        image: bluetooth?.mainImage
                    }
        
                    axiosSecure.post('/carts', cartItem)
                        .then(res => {
                            // send to database to the cart
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: `${bluetooth?.model} added to the cart`,
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
                        allBluetooth.map(bluetooth => (
                             <div key={bluetooth._id} className="w-[190px] md:w-[220px] lg:w-[190px] rounded-2xl p-1 border-2 shadow-xl">
                                <div className="flex justify-center">
                                    <img src={bluetooth?.mainImage} alt="" className="h-[180px]" />
                                </div>

                                <div className="items-center text-center mb-5">
                                    <h3 className="text-semibold mb-5">{bluetooth?.model}</h3>
                                    <p> $ {bluetooth?.cashDiscountPrice}</p>
                                </div>

                                <div className="flex justify-evenly pb-3">
                                    <Link to={`/bluetoothDetails/${bluetooth._id}`}>  <button className="px-2 p-1  text-xs lg:text-sm bg-[#ff882a] text-white rounded-md hover:bg-white hover:text-[#ff882a] transition duration-700 ease-in-out hover:border hover:border-[#ff882a]">Details</button></Link>

                                    <button onClick={() => handleAddToCard(bluetooth)} className="px-2 p-1 border border-[#ff882a] text-[#ff882a] text-xs lg:text-sm rounded-md hover:bg-[#ff882a] hover:text-white transition duration-700 ease-in-out">Add To Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </div>
        </div>
    );
};

export default AllBluetoothsProduct;