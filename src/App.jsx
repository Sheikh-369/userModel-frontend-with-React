import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CreatePage from "./Pages/CreateUser"
import SingleUser from "./Pages/SingleUser"

const App=()=>{
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create-page" element={<CreatePage/>}/>
        <Route path="/single-page/:id" element={<SingleUser/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
