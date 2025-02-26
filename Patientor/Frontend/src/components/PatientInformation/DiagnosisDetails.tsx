import {DiagnosisProps} from "../../types.ts";

export const DiagnosisDetails = ({diagnoses, entry}: DiagnosisProps) => {

    if (!entry.diagnosisCodes || entry.diagnosisCodes.length === 0) return (
         <div>
             <p>{entry.date}: <em>{entry.description}</em></p>
         </div>
    );

    return (
        <div>
            <p>{entry.date}: <em>{entry.description}</em></p>
            <ul>
                {entry.diagnosisCodes?.map(code => (
                    <li key={code}>
                        {code} {diagnoses.find(diagnosis => diagnosis.code === code)?.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};