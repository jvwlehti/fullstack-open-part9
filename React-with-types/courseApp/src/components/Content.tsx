interface ContentProps {
    name: string;
    exerciseCount: number;
}

interface ContentList {
    contents: ContentProps[]
}

export const Content = (props: ContentList) => {
    return (
        <div>
            {props.contents.map((content, index) => (
                <p key={index}>
                    {content.name} {content.exerciseCount}
                </p>
            ))}
        </div>
    );
}