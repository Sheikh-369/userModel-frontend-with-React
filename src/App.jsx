import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CreatePage from "./Pages/CreateUser"

const App=()=>{
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create-page" element={<CreatePage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
