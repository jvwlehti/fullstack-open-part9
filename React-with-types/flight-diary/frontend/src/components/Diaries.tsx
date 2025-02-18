import {DiaryItem} from "./DiaryItem.tsx";
import { Diaries } from "../types.ts";

export const DiaryEntries = (props: Diaries)=> {
    const { diaries } = props;

    return (
        <div>
            {diaries.map((entry, index ) => (
                <DiaryItem diary={entry} key={index} />
            ))}
        </div>
    )
}