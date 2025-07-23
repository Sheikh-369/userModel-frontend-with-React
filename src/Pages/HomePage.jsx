import { useEffect, useState } from "react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import axios from "axios"
import Card from "../Components/Card"

const HomePage=()=>{
    //cariable to store data from backend(hook)
    const [users,setUsers]=useState([])

    //logic to fetch data from backend
    const fetchUsers=async ()=>{
        const response=await axios.get("http://localhost:7500/users")
        setUsers(response.data.datas)
    }


    //logic to render data in webpage(hook)
    useEffect(()=>{
        fetchUsers()
    },[])

    return(
        <>
            <Navbar/>
            <div className="grid grid-cols-6 gap-5 px-4 py-5">
                {
                users.map((user)=>{
                    return(
                        <Card user={user} key={user.id}/>
                    )
                })
            }
            </div>
            <Footer/>
        </>
    )
}
export default HomePage