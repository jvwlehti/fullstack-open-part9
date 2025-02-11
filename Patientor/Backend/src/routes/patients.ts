import express, {NextFunction, Response, Request} from "express";
import { NewPatientEntry, NonSensitivePatientInfo, Patient } from "../types";
import { z } from "zod";

import patientService from "../services/patientService";
import { NewPatientEntrySchema } from "../utils";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatientInfo[]>) => {
    res.send(patientService.getNonSensitivePatientInfo());
});

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
    try {
        NewPatientEntrySchema.parse(req.body);
        next();
    } catch (error: unknown) {
        next(error);
    }
}

const errorMiddleware = (err: unknown, _req: Request, res:Response, next: NextFunction) => {
    if (err instanceof z.ZodError) {
        res.status(400).send({ err: err.issues })
    } else {
        next(err);
    }
}

router.post("/", newPatientParser, (req: Request<unknown, unknown, NewPatientEntry>, res: Response<Patient>) => {
    const newPatient = patientService.addPatient(req.body);
    res.json(newPatient);
});

router.use(errorMiddleware);

export default router;