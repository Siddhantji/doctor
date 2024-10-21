import { useContext } from "react"
import { AdminContext } from "../../context/AdminContext"
import { useEffect } from "react"

const DoctorsList = () => {
  
 const {doctor, aToken,getAllDoctors,changeAvailability} =useContext(AdminContext)
 
 useEffect(()=>{
  if(aToken){
    getAllDoctors()
  }
 },[aToken])

  return (

    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-2xl font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {
          doctor.map((item,index)=>(
            <div className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group" key={index}>
              <img className="bg-indigo-50 group-hover:bg-primary transition-all duration-500" src={item.image} />
              <div className="p-4">
                <p className="text-lg text-gray-800 font-medium">{item.name}</p>
                <p className="tex-sm text-gray-600">{item.speciality}</p>
                <div className="flex gap-1 mt-2 items-center text-sm">
                  <input type="checkbox" onChange={()=>changeAvailability(item._id)} checked={item.available}/>
                  <p>Available</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList