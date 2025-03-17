import { Route, Routes, useLoaderData  } from "react-router"
import Home from "./Components/Home/Home"
import Root from "./Components/Root/Root"
import Dashboard from "./Components/Dashboard/Dashboard"
import AuthTabs from "./Social/Tab/AuthTabs"
import ManageUser from "./Components/AdminDashboard/ManageUser/ManageUser"
// import TabShare from "./Shared/TabShare/TabShare"
import AddProduct from "./Components/AdminDashboard/AddProduct"
import AllProductsByAdmin from "./Components/AdminDashboard/AllProductShowByAdmin/AllProductsByAdmin"
import AllPhonesProduct from "./Components/AllProducts/AllPhonesProduct"
import AllLaptopsProduct from "./Components/AllProducts/AllLaptopsProduct"
import AllBluetoothsProduct from "./Components/AllProducts/AllBluetoothsProduct"
import PhoneDetails from "./Components/DetailsPage/PhoneDetails"
import LaptopDetails from "./Components/DetailsPage/LaptopDetails"
import BluetoothDetails from "./Components/DetailsPage/BluetoothDetails"


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Root></Root>} >
            <Route index element={<Home></Home>}></Route>
            <Route path="allPhones" element={<AllPhonesProduct />}></Route>
            <Route path="allLaptops" element={<AllLaptopsProduct />}></Route>
            <Route path="allBluetooth" element={<AllBluetoothsProduct />}></Route>

            <Route path="phoneDetails/:id" element={<PhoneDetails />}></Route>
            <Route path="laptopDetails/:id" element={<LaptopDetails />}></Route>
            <Route path="bluetoothDetails/:id" element={<BluetoothDetails />}></Route>

            <Route path="tab" element={<AuthTabs />}></Route>
          </Route>

          {/* dashboard */}
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route path="addProduct" element={<AddProduct />}></Route>
            <Route path="manageUsers" element={<ManageUser />}></Route>
            <Route path="allProducts" element={<AllProductsByAdmin />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
