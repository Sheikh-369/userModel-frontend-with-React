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
        <div className="flex justify-center items-center min-h-screen flex-col">
            <p>{user.userName}</p>
            <p>{user.userAge}</p>
            <p>{user.userAddress}</p>
            <Link to={`/edit-page/${user.id}`}><button>Edit</button></Link>
            <button onClick={deleteUser}>Delete</button>
        </div>
        
        <Footer/>
        </>
    )
}
export default SingleUser