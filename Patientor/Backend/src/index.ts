import express from 'express';
import cors from 'cors';
import patientRouter from './routes/patients';
import diagnoseRouter from './routes/diagnoses';

const app = express();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());

const PORT = 3000;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/patients', patientRouter);

app.use('/api/diagnoses', diagnoseRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});