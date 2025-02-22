import { Route, Routes } from "react-router"
import Home from "./Components/Home/Home"
import Root from "./Components/Root/Root"
import DetailsPage from "./Components/DetailsPage/DetailsPage"


function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Root></Root>} >
        <Route index element={<Home></Home>}></Route>
        <Route path="details" element={<DetailsPage />}></Route>
        </Route>
      </Routes>
    </div>
    </>
  )
}

export default App
