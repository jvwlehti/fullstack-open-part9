import express from "express";
import { Response } from "express";
import patientService from "../services/patientService";
import { NonSensitivePatient } from "../types";
import toNewPatientEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
    res.send(patientService.getNonSensitivePatientInfo());
});

router.get("/:id", (req, res) => {
    const patient = patientService.getPatient(req.params.id);
    if (!patient) {
        res.status(404).send({Error: "Patient doesn't exist"});
    }
    res.json(patient);
});

router.post("/", (req, res) => {
    const newPatientEntry = toNewPatientEntry(req.body);
    const newPatient = patientService.addPatient(newPatientEntry);
    res.json(newPatient);
});

export default router;