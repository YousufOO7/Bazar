import { FaSearch } from "react-icons/fa";


const Navbar = () => {
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
                        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                {/* image and search */}
                <div className="flex items-center gap-10 w-full lg:w-1/2">
                    <img src="https://www.applegadgetsbd.com/_next/image?url=https%3A%2F%2Fadminapi.applegadgetsbd.com%2Fstorage%2Fmedia%2Fcommon%2Flogo.png&w=256&q=75" className="w-32 md:w-40" alt="image" />

                    <div className="relative w-full">
                        <input type="text" placeholder="Search Here" className="w-full px-4 py-2 rounded-full text-black" />
                        <button className="absolute right-4 top-3"> <FaSearch className="text-orange-500" /></button>
                    </div>
                </div>

                {/* text and icons */}
                <div className="hidden lg:block w-1/2">
                    <div className="flex justify-between gap-10">
                        <div className="flex items-center">
                            <div><img src="https://www.applegadgetsbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgift.347df468.png&w=32&q=75" alt="" /></div>
                            <div>
                                <h4 className="text-bold text-[16px]">Offers</h4>
                                <p className="text-semibold text-xs">Latest Offer</p>
                            </div>
                        </div>
                        {/* shop */}
                        <div className="flex items-center">
                            <div><img src="https://www.applegadgetsbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcart.c2e800a4.png&w=32&q=75" alt="" /></div>
                            <div>
                                <h4 className="text-bold text-[16px]">Cart <span>(0)</span></h4>
                                <p className="text-semibold text-xs">Add Items</p>
                            </div>
                        </div>
                        {/* pre order */}
                        <div className="flex items-center">
                            <div><img src="https://www.applegadgetsbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshop.638fa252.png&w=32&q=75" alt="" /></div>
                            <div>
                                <h4 className="text-bold text-[16px]">Pre-Order</h4>
                                <p className="text-semibold text-xs">Order Today</p>
                            </div>
                        </div>
                        {/* Account */}
                        <div className="flex items-center">
                            <div><img src="https://www.applegadgetsbd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.4115a831.png&w=32&q=75" alt="" /></div>
                            <div>
                                <h4 className="text-bold text-[16px]">Account</h4>
                                <p className="text-semibold text-xs">Register Login</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;