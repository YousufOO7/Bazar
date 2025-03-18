import { FaHome, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { NavLink } from "react-router";
import useAdmin from "../../../Hooks/useAdmin";


const DashboardDrawer = () => {
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mt-3 px-4">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn bg-orange-200 text-black drawer-button">Open Menu</label>
            </div>
            <div className="drawer-side z-[999]">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-orange-200 text-base-content min-h-full">
                    <div className="md:w-52 lg:w-72 min-h-screen bg-orange-200">
                        <ul className="menu py-5">

                            {
                                isAdmin ? <>
                                    <li>
                                        <NavLink to="/dashboard/addProduct">
                                            <MdPreview></MdPreview>
                                            Product Management
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/statistic">
                                            <MdPreview></MdPreview>
                                            Statistics
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageUsers">
                                            <FaUsers></FaUsers>
                                            Manage Users
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/manageCoupon">
                                            <RiCoupon2Fill></RiCoupon2Fill>
                                            Manage Coupon
                                        </NavLink>
                                    </li>
                                </>
                                :

                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart
                                    </NavLink>
                                </li>
                            </> 
                            }
                        </ul>
                        <div className="divider"></div>
                        <ul className="menu">
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    Home
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default DashboardDrawer;