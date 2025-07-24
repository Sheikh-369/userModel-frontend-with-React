import { Link } from "react-router-dom"

const Card=({user})=>{
    return(
        <>
  <Link to={`/single-page/${user.id}`}>    
  <div className="bg-blue-100 border rounded-md p-4 w-full style={{height:'350px'}}">
  
  <img src={user.userImage} alt="Product Image" style={{width:'100%',height:'150px',objectFit:'contain'}}/>
  <div className="p-5">
    <h3 className="text-lg font-bold mt-3">{user.userName}</h3>
    <p className="text-sm text-gray-900 mt-1">{user.userAddress}</p>
    <div className="mt-4 text-orange-500 font-semibold">
      {user.userAge}
      
    </div>
  </div>
</div>
</Link>
        </>
    )
}

export default Card