import {DiaryItem} from "./DiaryItem.tsx";
import { Diaries } from "../types.ts";

export const DiaryEntries = (props: Diaries)=> {
    const { diaries } = props;

    return (
        <div>
            <h2>Diary entries</h2>
            {diaries.map((entry, index ) => (
                <DiaryItem diary={entry} key={index} />
            ))}
        </div>
    )
}