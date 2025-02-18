import Part from "./Part.tsx";
import { ContentList } from "../types.ts";

export const Content = (props: ContentList) => {
    const { contents } = props;
    return (
        <div>
            {contents.map((part, index) => (
                 <Part part={part} key={index} />
            ))}
        </div>
    );
}