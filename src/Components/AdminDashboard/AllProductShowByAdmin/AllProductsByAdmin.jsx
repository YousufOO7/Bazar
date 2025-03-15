import TabShare from "../../../Shared/TabShare/TabShare";
import ShowLaptopsByTable from "./ShowLaptopsByTable";
import ShowPhonesByTable from "./ShowPhonesByTable";


const AllProductsByAdmin = () => {
    return (
        <div>
            <TabShare 
            TabOne={<ShowPhonesByTable />}
            TabTwo={<ShowLaptopsByTable />}
            ></TabShare>
        </div>
    );
};

export default AllProductsByAdmin;