import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const Navbar = () => {
    const { user, Logout } = useAuth();
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const axiosPublic = useAxiosPublic();
    const [search, setSearch] = useState("");

    const { data: products = [] } = useQuery({
        queryKey: ["products", search],
        queryFn: async () => {
            if (!search) return [];
            const { data } = await axiosPublic.get(`/products?search=${search}`);
            return data;
        },
        enabled: !!search,
    });

    return (
        <div className="bg-[black] text-white py-4 px-2 md:px-5 lg:px-10">
            <div className="flex items-center gap-5 justify-between">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white text-black rounded-box  mt-3 w-52 p-2 shadow z-50">
                        <li><NavLink to="/">Home</NavLink></li>
                        {
                            user && isAdmin && <li><NavLink to="/dashboard/manageUsers">Dashboard</NavLink></li>
                        }
                        {
                            user && !isAdmin && <li><NavLink to="/dashboard/cart">Dashboard</NavLink></li>
                        }
                        <li><NavLink to="/dashboard/cart">Cart {cart?.length}</NavLink></li>
                        <li><NavLink to="/tab">Account</NavLink></li>
                    </ul>
                </div>
                {/* image and search */}
                <div className="flex items-center gap-10 w-full lg:w-1/2">
                    <Link to="/"><img src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Fcommon%2Flogo.png&w=256&q=75" className="w-32 md:w-40" alt="image" /></Link>

                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search by brand name"
                            className="w-full px-4 py-2 rounded-full text-black border"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        {/* Show search results in dropdown */}
                        {search && products.length > 0 && (
                            <ul className="absolute top-full left-0 w-full bg-white text-black border rounded-md z-50">
                            {products.map((product) => {
                                // Determine the correct link based on category/type
                                let productType = "";
                                if (product.category === "phone") {
                                    productType = "phoneDetails";
                                } else if (product.category === "laptop") {
                                    productType = "laptopDetails";
                                } else if (product.category === "bluetooth") {
                                    productType = "bluetoothDetails";
                                }
                        
                                return (
                                    <li key={product._id} className="p-2 hover:bg-gray-200">
                                        <Link to={`/${productType}/${product._id}`} onClick={() => setSearch("")}>
                                            {product.brand} - {product.model}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        
                        )}

                        <button className="absolute right-4 top-3"> <FaSearch className="text-orange-500" /></button>
                    </div>
                </div>

                {/* text and icons */}
                <div className="hidden lg:block w-1/2">
                    <div className="flex justify-between gap-5">
                        <Link to="/dashboard"> <div className="flex items-center space-x-1">
                            <div><img src="https://www.applegadgetsbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgift.347df468.png&w=32&q=75" alt="" /></div>
                            <div>
                                <h4 className="text-bold text-[16px]">Dashboard</h4>
                                <p className="text-semibold text-xs">{user && user?.displayName}</p>
                            </div>
                        </div></Link>
                        {/* shop */}
                        <div className="flex items-center space-x-1">
                            <div><img src="https://www.applegadgetsbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcart.c2e800a4.png&w=32&q=75" alt="" /></div>
                            <div>
                                <Link to="/dashboard/cart"><h4 className="text-bold text-[16px]">Cart <span>{cart.length}</span></h4></Link>
                                <p className="text-semibold text-xs">Add Items</p>
                            </div>
                        </div>
                        {/* pre order */}
                        {/* <div className="flex items-center">
                            <div><img src="https://www.applegadgetsbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.638fa252.png&w=32&q=75" alt="" /></div>
                            <div>
                                <h4 className="text-bold text-[16px]">Pre-Order</h4>
                                <p className="text-semibold text-xs">Order Today</p>
                            </div>
                        </div> */}
                        {/* Account */}
                        <Link to="tab"> <div className="flex items-center space-x-1">
                            <div><img src="https://www.applegadgetsbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.4115a831.png&w=32&q=75" alt="" /></div>
                            <div>
                                <h4 className="text-bold text-[16px]">Account</h4>
                                <p className="text-semibold text-xs">Register Login</p>
                            </div>
                        </div></Link>

                        {/* log out */}
                        <div>
                            {
                                user && user?.email ? <Link to="/"><button onClick={Logout} className="btn btn-sm btn-error text-white">Log-Out</button></Link> : <Link to="tab" className="btn btn-sm">Login</Link>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;