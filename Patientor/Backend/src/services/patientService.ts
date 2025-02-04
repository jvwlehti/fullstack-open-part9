import patients from "../../data/patients";
import { Patient, NonSensitivePatientInfo } from "../types";

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

export default {
    getPatients,
    getNonSensitivePatientInfo,
};