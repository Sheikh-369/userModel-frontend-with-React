import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const SingleUser=()=>{
    const {id}=useParams()
    const [user,setUser]=useState({})

    const fetchSingleUser=async()=>{
        const response=await axios.get("http://localhost:7500/users/"+id)
        setUser(response.data.datas)
    }

    useEffect(()=>{
        fetchSingleUser()
    },[])
    return(
        <>
        <Navbar/>
        <div className="display flex">
            <p>{user.userName}</p>
            <p>{user.userAge}</p>
            <p>{user.userAddress}</p>
        </div>
        
        <Footer/>
        </>
    )
}
export default SingleUser