import {useEffect, useState} from 'react';
import { DiaryEntry } from "./types";
import {DiaryEntries} from "./components/Diaries.tsx";
import {getAllDiaries} from "./services/diaryService.ts";
import {DiaryForm} from "./components/DiaryForm.tsx";

const App = () => {
    const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

    useEffect(() => {
        getAllDiaries().then(data => {
            setDiaries(data);
        })
    }, [])

    return (
        <div>
            <h1>Flight Diary</h1>
            <DiaryForm setDiaries={setDiaries} diaries={diaries} />
            <DiaryEntries diaries={diaries} />
        </div>
    )
}

export default App;