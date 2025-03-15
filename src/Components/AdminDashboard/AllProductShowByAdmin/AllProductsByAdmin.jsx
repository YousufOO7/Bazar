import TabShare from "../../../Shared/TabShare/TabShare";
import ShowBluetoothByTable from "./ShowBluetoothByTable";
import ShowLaptopsByTable from "./ShowLaptopsByTable";
import ShowPhonesByTable from "./ShowPhonesByTable";


const AllProductsByAdmin = () => {
    return (
        <div>
            <TabShare 
            TabOne={<ShowPhonesByTable />}
            TabTwo={<ShowLaptopsByTable />}
            TabThree={<ShowBluetoothByTable />}
            ></TabShare>
        </div>
    );
};

export default AllProductsByAdmin;