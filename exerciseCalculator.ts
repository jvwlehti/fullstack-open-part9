interface ExerciseSummary {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    avg: number;
}

function calculateEx(sample: number[], goal: number): ExerciseSummary {
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
}

console.log(calculateEx([3, 0, 2, 4.5, 0, 3, 1], 2));
