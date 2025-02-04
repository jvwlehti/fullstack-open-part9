import express from "express";
import { Response } from "express";
import patientService from "../services/patientService";
import { NonSensitivePatientInfo } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatientInfo[]>) => {
    res.send(patientService.getNonSensitivePatientInfo());
})

router.post("/", (_req, res) => {
    res.send("Saving to Patients");
})

export default router;