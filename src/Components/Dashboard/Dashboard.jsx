import { FaHome, FaUsers } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router";


const Dashboard = () => {
    return (
        <div className="flex bg-gray-200">
        <div className="w-32 overflow-hidden md:w-52 lg:w-72 min-h-screen bg-orange-200">
            <ul className="menu py-5">

                {
                     <>
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

        {/* dashboard main */}
        <div className="w-full flex-1 max-w-5xl mx-auto">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;