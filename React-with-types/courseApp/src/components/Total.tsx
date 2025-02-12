interface ContentProps {
    name: string;
    exerciseCount: number;
}

interface ContentList {
    contents: ContentProps[]
}

export const Total = (props: ContentList) => {
    const totalExercises = props.contents.reduce((sum, part) => sum + part.exerciseCount, 0);

    return (
        <div>
            <p>Number of exercises {totalExercises}</p>
        </div>
    )
}