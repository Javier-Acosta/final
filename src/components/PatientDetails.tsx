import React from 'react'
import PatientDetaillItem from './PatientDetaillItem'
import { Patient } from '../types'
import { usePatientStore } from "../store"

type PatientDetailProps={
    patient: Patient
}
const PatientDetails = ({patient} : PatientDetailProps )=> {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)
    
    return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
    <PatientDetaillItem label="ID" data={patient.id} />
    <PatientDetaillItem label="Paciente" data={patient.name} />
    <PatientDetaillItem label="Propietario" data={patient.caretaker} />
    <PatientDetaillItem label="Correo" data={patient.email} />
    <PatientDetaillItem label="Fecha" data={patient.date} />
    <PatientDetaillItem label="Sintomas" data={patient.symptoms} />
    

    <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => getPatientById(patient.id)}

        >Editar</button>

        <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
           onClick={()=>deletePatient(patient.id)}
        >Eliminar</button>
    </div>
</div>
  )
}

export default PatientDetails