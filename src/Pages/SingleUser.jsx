import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const SingleUser=()=>{
    const navigate=useNavigate()
    const {id}=useParams()
    const [user,setUser]=useState({})

    const fetchSingleUser=async()=>{
        const response=await axios.get("http://localhost:7500/users/"+id)
        setUser(response.data.datas)
    }

    const deleteUser=async()=>{
        const response=await axios.delete("http://localhost:7500/users/"+id)
        if(response.status===200){
            alert("User Deleted Successfully!")
            navigate("/")
        }else{
            alert("Something Went Wrong!")
        }
    }

    useEffect(()=>{
        fetchSingleUser()
    },[])
    return(
        <>
        <Navbar/>
        {/* for image */}
        {user.userImage &&(
            <img
            src={user.userImage}
            alt="User" className="w-full mt-8 object-contain h-64 bg-gray-100"/>
        )}
        {/* for Information */}
        
          <div className="max-w-md mx-auto bg-white shadow-md rounded p-6 mt-6 text-center">
            <h2 className="text-xl font-semibold mb-2">{user.userName}</h2>
            <p><strong>Age:</strong>{user.userAge}</p>
            <p><strong>Address:</strong>{user.userAddress}</p>
            {/* <p>{user.userName}</p>
            <p>{user.userAge}</p>
            <p>{user.userAddress}</p> */}
            {/* for buttons */}
            <div className="flex justify-around mt-4">
            <Link to={`/edit-page/${user.id}`}><button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button></Link>
            <button onClick={deleteUser} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default SingleUser