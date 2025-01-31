import express from "express";
import calculateBmi from "./bmiCalculator";
const app = express();

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

})



const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});