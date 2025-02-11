import patients from "../../data/patients";
import { v1 as uuid } from 'uuid';
const id = uuid();
import { Patient, NonSensitivePatientInfo, NewPatientEntry } from "../types";

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatientInfo = (): NonSensitivePatientInfo[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) =>({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
  }));
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
    getPatients,
    getNonSensitivePatientInfo,
    addPatient,
};