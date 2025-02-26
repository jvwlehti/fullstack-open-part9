import {useEffect, useState} from "react";
import {PatientInformationProp, Patient} from "../../types.ts";
import patients from "../../services/patients.ts";
import {useParams} from "react-router-dom";
import {DiagnosisDetails} from "./DiagnosisDetails.tsx";

const PatientInformation = ({ diagnoses }: PatientInformationProp ) => {

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
          <h3>entries</h3>
          {patient?.entries.length === 0 ? (
              <p>Person has no entries</p>
          ) : (
              patient?.entries.map((entry) => (
                  <DiagnosisDetails key={entry.id} entry={entry} diagnoses={diagnoses} />
              ))
          )}
      </div>
    );
};

export default PatientInformation;
