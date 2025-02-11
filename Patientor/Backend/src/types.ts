import {z} from "zod";
import {NewPatientEntrySchema} from "./utils";



export enum Gender {
    male = "male",
    female = "female",
    other = "other"
}

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}
export type NonSensitivePatientInfo = Omit<Patient, 'ssn'>;

export type NewPatientEntry = z.infer<typeof NewPatientEntrySchema>;

export interface Patient extends NewPatientEntry {
    id: string;
}