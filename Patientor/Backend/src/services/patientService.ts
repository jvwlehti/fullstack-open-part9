import patients from "../../data/patients";
import { v1 as uuid } from 'uuid';
const id = uuid();
import { Patient, NonSensitivePatient, NewPatientEntry } from "../types";

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatientInfo = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) =>({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
  }));
};

const getPatient = (id: string): Patient | undefined => {
    return patients.find((p) => p.id === id);
};

const addPatient = (entry: NewPatientEntry):Patient => {
    const newPatientEntry = {
        id: id,
        ...entry,
    };

    patients.push(newPatientEntry);
    return newPatientEntry;
};
export default {
    getPatient,
    getPatients,
    getNonSensitivePatientInfo,
    addPatient,
};