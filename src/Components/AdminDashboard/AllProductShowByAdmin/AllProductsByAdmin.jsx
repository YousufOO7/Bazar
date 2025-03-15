import TabShare from "../../../Shared/TabShare/TabShare";
import ShowPhonesByTable from "./ShowPhonesByTable";


const AllProductsByAdmin = () => {
    return (
        <div>
            <TabShare 
            TabOne={<ShowPhonesByTable />}
            ></TabShare>
        </div>
    );
};

export default AllProductsByAdmin;