import { FaHome, FaUsers } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router";
import DashboardDrawer from "./DashboardDrawer/DashboardDrawer";
import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="md:flex bg-gray-200">
            <div className="md:hidden">
                <DashboardDrawer />
            </div>
        <div className="md:w-52 lg:w-72 min-h-screen bg-[#eb914c] hidden md:block">
            <ul className="menu py-5">

                {
                    isAdmin ? 
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
                :
                <>
                
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