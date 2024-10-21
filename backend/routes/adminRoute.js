import express from 'express'
import { addDoctor, allDoctors, changeDoctorAvailability, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js';



const adminRouter = express.Router();

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.get('/all-doctors',authAdmin,allDoctors)
adminRouter.put('/changeAvailability/:id',authAdmin,changeDoctorAvailability)


export default adminRouter