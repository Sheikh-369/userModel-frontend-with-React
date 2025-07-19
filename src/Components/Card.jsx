import { Link } from "react-router-dom"

const Card=({user})=>{
    return(
        <>
  <Link to={`/single-page/${user.id}`}>    
  <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <img src={user.userImage} alt="Product Image" />
  <div className="p-5">
    <h3 className="text-lg font-semibold text-gray-800">{user.userName}</h3>
    <p className="text-gray-600 text-sm mt-2">{user.userAddress}</p>
    <div className="flex items-center justify-between mt-4">
      <span className="text-xl font-bold text-orange-500">{user.userAge}</span>
      
    </div>
  </div>
</div>
</Link>
        </>
    )
}

export default Card