import express from "express";
import { Response } from "express";
import patientService from "../services/patientService";
import { NonSensitivePatientInfo } from "../types";
import toNewPatientEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatientInfo[]>) => {
    res.send(patientService.getNonSensitivePatientInfo());
});

router.post("/", (req, res) => {
    const nePatientEntry = toNewPatientEntry(req.body);
    const newPatient = patientService.addPatient(nePatientEntry);
    res.json(newPatient);
});

export default router;