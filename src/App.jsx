import { Route, Routes } from "react-router"
import Home from "./Components/Home/Home"
import Root from "./Components/Root/Root"
import DetailsPage from "./Components/DetailsPage/DetailsPage"
import Dashboard from "./Components/Dashboard/Dashboard"
import AddProductsByAdmin from "./Components/Dashboard/AddProductsByAdmin/AddProductsByAdmin"


function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Root></Root>} >
            <Route index element={<Home></Home>}></Route>
            <Route path="details" element={<DetailsPage />}></Route>
          </Route>

          {/* dashboard */}
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route path="addProduct" element={<AddProductsByAdmin />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
