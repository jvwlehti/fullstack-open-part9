import express from "express";
import calculateBmi from "./bmiCalculator";
import calculateEx from "./exerciseCalculator";
const app = express();
app.use(express.json());


app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const {height, weight} = req.query;

    if (!weight || !height ||isNaN(Number(weight)) || isNaN(Number(height)) ) {
        res.status(400).send({ error: 'malformed patterns' });
    }
    const bmi = calculateBmi(Number(height), Number(weight));
    res.json({ height, weight, bmi });

});

// @ts-ignore
app.post('/exercises', (req, res) => {
    const { daily_exercises, target } = req.body as {daily_exercises?: number[], target: number};

    if (!daily_exercises || !target) {
        return res.status(400).json({ error: 'parameters missing' });
    }

    if (!Array.isArray(daily_exercises) || daily_exercises.some(isNaN) || isNaN(target)) {
        return res.status(400).json({ error: 'malformed parameters' });
    }

    return res.json(calculateEx(daily_exercises, target));
});
const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});