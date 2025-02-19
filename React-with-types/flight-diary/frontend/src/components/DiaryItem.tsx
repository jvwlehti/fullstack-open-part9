import { Diary } from "../types.ts";

export const DiaryItem = (props: Diary) =>{
    const { diary } = props;

    return (
        <div>
            <h3>{diary.date}</h3>
            <p>visibility: {diary.visibility}</p>
            <p>weather: {diary.weather}</p>
            {diary.comment && <p>comment: {diary.comment}</p>}
        </div>
    )
}