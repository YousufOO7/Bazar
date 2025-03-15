import { Route, Routes } from "react-router"
import Home from "./Components/Home/Home"
import Root from "./Components/Root/Root"
import DetailsPage from "./Components/DetailsPage/DetailsPage"
import Dashboard from "./Components/Dashboard/Dashboard"
import AllProducts from "./Components/AllProducts/AllProducts"
import AuthTabs from "./Social/Tab/AuthTabs"
import ManageUser from "./Components/AdminDashboard/ManageUser/ManageUser"
// import TabShare from "./Shared/TabShare/TabShare"
import AddProduct from "./Components/AdminDashboard/AddProduct"
import AllProductsByAdmin from "./Components/AdminDashboard/AllProductShowByAdmin/AllProductsByAdmin"


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Root></Root>} >
            <Route index element={<Home></Home>}></Route>
            <Route path="details" element={<DetailsPage />}></Route>
            <Route path="allProducts" element={<AllProducts />}></Route>
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
