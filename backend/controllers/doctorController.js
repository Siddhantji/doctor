import changeAvailability from "../models/doctorModel"

const changeDoctorAvailability= async(req,res)=>{
    try{
        const {id} = req.params
        const result = await changeAvailability(id)
        
        res.json(result)
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

export {changeDoctorAvailability}