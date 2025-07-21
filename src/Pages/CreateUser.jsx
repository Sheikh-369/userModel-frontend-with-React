import { useState } from "react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreatePage=()=>{
    const navigate=useNavigate()
    const [user,setUser]=useState({
        userName:"",
        userAge:"",
        userAddress:"",
        userImage:""
    })

    const onUserChange=(e)=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleUserSubmit=async (e)=>{
        e.preventDefault()
        const response=await axios.post("http://localhost:7500/users",user)
        if(response.status===200){
            alert("User Created Successfully!")
            navigate("/")
        }else{
            alert("Something Went Wrong!")
        }

    }
    return(
        <>
            <Navbar/>
            <div className="container mx-auto p4-10">
  <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
    <div className="md:flex">
      <div className="w-full px-6 py-8 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800">Create User</h2>
        <p className="mt-4 text-gray-600">Please fill out the form below to complete your Information.</p>
        <form onSubmit={handleUserSubmit} className="mt-6">
          <div className="mb-6">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="name">
              User Name
            </label>
            <input 
            onChange={onUserChange}
            type="text"
            name="userName"
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name"  placeholder="Enter Your Name..." />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
              User Age
            </label>
            <input
                onChange={onUserChange}
                name="userAge"
                type="number"
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email"  placeholder="20" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="card_number">
              User Address
            </label>
            <input 
            onChange={onUserChange}
            name="userAddress"
            type="text" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number"  placeholder="Kathmandu" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="card_number">
              User Image
            </label>
            <input 
            onChange={onUserChange}
            name="userImage"
            type="text" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number"  placeholder="" />
          </div>
          
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
            </div>

            <Footer/>
        </>
    )
}

export default CreatePage