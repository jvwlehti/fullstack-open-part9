
interface BmiValues {
    height: number;
    weight: number;
}

const parseArguments = (args: string[]): BmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            height: Number(args[2]),
            weight: Number(args[3])
        };
    } else {
        throw new Error('Provided values were not numbers!');
    }
};

const calculateBmi = (height: number, weight: number): string => {
    const bmiHeight = (height / 100)**2;
    let bmiMessage = '';

    const bmi = weight / bmiHeight;

    switch(true){
        case (bmi < 16.0):
            bmiMessage += "Underweight (Severe thinness)";
            break;
        case (bmi < 16.9):
            bmiMessage += "Underweight (Moderate thinness)";
            break;
        case (bmi < 18.4):
            bmiMessage += "Underweight (Mild thinness)";
            break;
        case (bmi < 24.9):
             bmiMessage += "Normal range";
             break;
        case (bmi < 29.9):
            bmiMessage += "Overweight (Pre-obese)";
            break;
        case (bmi < 34.9):
            bmiMessage += "Obese (Class I)";
            break;
        case (bmi < 39.9):
            bmiMessage += "Obese (Class II)";
            break;
        default:
            bmiMessage += "Obese (Class III)";
    }
    return bmiMessage + ' ' + bmi.toFixed(2);
};

if (require.main === module) {
    try {
        const {height, weight} = parseArguments(process.argv);
        console.log(calculateBmi(height, weight));
    } catch (error: unknown) {
        let errorMessage = 'something went wrong: ';
        if (error instanceof Error) {
            errorMessage += '\n' + error.message;
        }
        console.log(errorMessage);
    }
}

export default calculateBmi;