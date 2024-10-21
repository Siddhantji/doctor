import express from 'express'
import { changeDoctorAvailability } from '../controllers/doctorController'
const doctor = express.Router()

doctor.put('/changeAvailability/:id',changeDoctorAvailability)