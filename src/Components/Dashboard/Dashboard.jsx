import { FaHome, FaUsers } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router";


const Dashboard = () => {
    return (
        <div className="flex bg-pink-50">
        <div className="md:w-72 min-h-screen bg-orange-200">
            <ul className="menu py-5">

                {
                     <>
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
        <div className="w-full flex-1 max-w-4xl mx-auto">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;