import TabShare from "../../Shared/TabShare/TabShare";
import AddBluetoothByAdmin from "../Dashboard/AddProductsByAdmin/AddBluetoothByAdmin";
import AddLaptopByAdmin from "../Dashboard/AddProductsByAdmin/AddLaptopByAdmin";
import AddProductsByAdmin from "../Dashboard/AddProductsByAdmin/AddProductsByAdmin";



const AddProduct = () => {
    return (
        <div>
            <TabShare
                TabOne={<AddProductsByAdmin />}
                TabTwo={<AddLaptopByAdmin />}
                TabThree={<AddBluetoothByAdmin />}
            ></TabShare>
        </div>
    );
};

export default AddProduct;