import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const EditUser=()=>{
    const navigate=useNavigate()
    const {id}=useParams()
    const [user,setUser]=useState({
        userName:"",
        userAge:"",
        userAddress:"",
        userImage:""
    })

    const fetchSingleUsre=async()=>{
        const response=await axios.get("http://localhost:7500/users/"+id)
        setUser(response.data.datas)
    }

    useEffect(()=>{
        fetchSingleUsre()
    },[id])

    const handleChange=(e)=>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const editSubmission=async(e)=>{
        e.preventDefault()
        const response=await axios.patch("http://localhost:7500/users/"+id,user)
        if(response.status===200){
            alert("User Updated Successfully!")
            navigate("/")
        }else{
            alert("Something Went Wrong!")
        }
    }

    return (
        <>
        <Navbar/>
            <div className="container mx-auto p-10">
  <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
    <div className="md:flex">
      <div className="w-full px-6 py-8 md:p-8">
        <h2 className="text-2xl font-bold text-gray-800">Create User</h2>
        <p className="mt-4 text-gray-600">Please fill out the form below to complete your Information.</p>
        <form onSubmit={editSubmission} className="mt-6">
          <div className="mb-6">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="name">
              User Name
            </label>
            <input 
            onChange={handleChange}
            type="text"
            name="userName"
            value={user.userName}
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name"  placeholder="Enter Your Name..." />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="email">
              User Age
            </label>
            <input
                onChange={handleChange}
                name="userAge"
                type="number"
                value={user.userAge}
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email"  placeholder="20" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="card_number">
              User Address
            </label>
            <input 
            onChange={handleChange}
            name="userAddress"
            type="text"
            value={user.userAddress} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number"  placeholder="Kathmandu" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-bold mb-2" htmlFor="card_number">
              User Image
            </label>
            <input 
            onChange={handleChange}
            name="userImage"
            type="text"
            value={user.userImage} 
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
export default EditUser