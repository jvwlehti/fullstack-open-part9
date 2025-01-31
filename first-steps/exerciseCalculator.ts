interface ExerciseSummary {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    avg: number;
}

interface ExerciseItem {
    sample: number[],
    target: number,
}

const parseArguments = (args: string[]): ExerciseItem => {
    const data = args.splice(2);
    const exercises: number[] = [];

    for(const number of data) {
        if (isNaN(Number(number))) throw new Error('Provided value should be a number');
        exercises.push(Number(number));
    }
    return {
        sample: exercises.splice(1),
        target: exercises[0],
    };
};

const calculateEx = (sample: number[], goal: number): ExerciseSummary => {
    const periodLength = sample.length;
    const trainingDays = sample.filter(hour => hour > 0).length;
    const avg = sample.reduce((a, b) => a + b, 0) / periodLength;
    const success = avg >= goal;

    const rating = (() => {
        const ratio = avg / goal;
        if (ratio >= 1) return 3;
        if (ratio >= 0.5) return 2;
        return 1;
    })();

    const ratingDescription = (() => {
        switch (rating) {
            case 3:
                return "Great job! Your form and effort are on point. Keep up the hard work and continue challenging yourself!";
            case 2:
                return "Nice work! You’re getting better. Keep refining your technique and stay consistent with your workouts.";
            default:
                return "You're making progress, but there’s room for improvement. Focus on maintaining proper form and consistency. Keep going!";
        }
    })();

    return {
        periodLength,
        trainingDays,
        avg,
        success,
        rating,
        ratingDescription,
        target: goal,
    };
};

if (require.main === module) {
    try {
        const {sample, target} = parseArguments(process.argv);
        console.log(calculateEx(sample, target));
    } catch (error: unknown) {
        let errorMessage = 'something went wrong: ';
        if (error instanceof Error) {
            errorMessage += '\n' + error.message;
        }
        console.log(errorMessage);
    }
}

export default calculateEx;
