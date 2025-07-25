import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CreatePage from "./Pages/CreateUser"
import SingleUser from "./Pages/SingleUser"
import EditUser from "./Pages/EditUser"

const App=()=>{
  return (
    <>
    <div className="bg-blue-200">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create-page" element={<CreatePage/>}/>
        <Route path="/single-page/:id" element={<SingleUser/>}/>
        <Route path="/edit-page/:id" element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
