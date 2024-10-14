import doctorModel from "../models/doctorModel.js"

export const changeAvailability= async(id)=>{
    const doctor = await doctorModel.findById(id)
    if(!doctor){
        throw new Error('Doctor not found')
    }
    doctor.available = !doctor.available
    await doctor.save()
    return { success: true, message: "Availability Changed" }
}