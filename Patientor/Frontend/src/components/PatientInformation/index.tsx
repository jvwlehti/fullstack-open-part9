import {useEffect, useState} from "react";
import {Patient} from "../../types.ts";
import patients from "../../services/patients.ts";
import {useParams} from "react-router-dom";

const PatientInformation = () => {

    const [patient, setPatient] = useState<Patient>();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
       const getPatientById = async () => {
           try {
               const patient = await patients.getById(id);
               setPatient(patient);
           } catch (e) {
               console.error(e);
           }
       };
       getPatientById();
    }, [id]);

    return(
      <div>
          <h2>{patient?.name} </h2>
          <p>ssn: {patient?.ssn}</p>
          <p>occupation: {patient?.occupation}</p>
      </div>
    );
};

export default PatientInformation;
