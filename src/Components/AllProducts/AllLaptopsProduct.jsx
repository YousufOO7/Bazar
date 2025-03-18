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

const AllLaptopsProduct = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useAuth();

    const { data: allLaptops = [] } = useQuery({
        queryKey: ["laptops"],
        queryFn: async () => {
            const res = await axiosPublic.get("/laptops")
            return res.data
        }
    });

    // add cart 
        const handleAddToCard = laptops => {
            if(user && user?.email){
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

// md:flex | md:mt-20

    return (
        <div className=" mt-5  px-4 md:px-8 lg:px-16 gap-5">
            <h2 className="text-4xl text-center font-bold mb-10 underline">All Laptop's</h2>
            {/* <div className='md:hidden mb-5'>
                <Drawer />
            </div>
            <div className="w-52 bg-white hidden md:block">
                
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

               
                <div className="bg-gray-100 rounded-md p-2 my-5">
                    <h3 className="text-xl font-semibold mt-2">Category</h3>
                    <p><hr className="border-[1px] border-[#ff882a] mt-2 mb-5" /></p>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Apple" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Laptop" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Samsung" />
                    </FormGroup>
                </div>

                
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

            </div> */}

            <div className="w-full flex-1 max-w-5xl mx-auto">
                <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10 ">
                    {
                        allLaptops.map(laptops => (
                             <div key={laptops._id} className="w-[190px] md:w-[220px] lg:w-[190px] rounded-2xl p-1 border-2 shadow-xl">
                                <div className="flex justify-center">
                                    <img src={laptops?.mainImage} alt="" className="h-[180px] bg-cover" />
                                </div>

                                <div className="items-center text-center mb-5">
                                    <h3 className="text-semibold mb-5">{laptops?.model.slice(0, 20)}</h3>
                                    <p> $ {laptops?.cashDiscountPrice}</p>
                                </div>

                                <div className="flex justify-evenly pb-3">
                                    <Link to={`/laptopDetails/${laptops._id}`}>  <button className="px-2 p-1  text-xs lg:text-sm bg-[#ff882a] text-white rounded-md hover:bg-white hover:text-[#ff882a] transition duration-700 ease-in-out hover:border hover:border-[#ff882a]">Details</button></Link>

                                    <button onClick={() => handleAddToCard(laptops)} className="px-2 p-1 border border-[#ff882a] text-[#ff882a] text-xs lg:text-sm rounded-md hover:bg-[#ff882a] hover:text-white transition duration-700 ease-in-out">Add To Cart</button>
                                </div>

                            </div>
                        ))
                    }
                </section>
            </div>
        </div>
    );
};

export default AllLaptopsProduct;