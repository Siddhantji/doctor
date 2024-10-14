import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props)=>{
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken'):'')

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctor,setDoctors] = useState([])
    const getAllDoctors = async()=>{
        try{
            const {data} = await axios.get(backendUrl+'/api/admin/all-doctors',{ headers: { aToken } })
            if(data.success){
                setDoctors(data.doctors)
                
            }else{
                
                toast.error(data.message)
            }
        }catch(error){
            
            
            toast.error(error.message)
        }
    }
    const changeAvailability = async(id)=>{
        try{
            const {data} = await axios.put(`${backendUrl}/api/admin/changeAvailability/${id}`,{},{headers:{aToken}})
            
            
            if(data.success){
              
                
                toast.success(data.message)
getAllDoctors()
            }else{
                toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
        }
    }
    
    const value={
        aToken,
        setAToken,
        backendUrl,
        getAllDoctors,doctor,
        changeAvailability

    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider