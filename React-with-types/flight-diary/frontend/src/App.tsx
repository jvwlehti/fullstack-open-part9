import {useEffect, useState} from 'react';
import { DiaryEntry } from "./types";
import {DiaryEntries} from "./components/Diaries.tsx";
import {getAllDiaries} from "./services/diaryService.ts";
//import * as React from "react";

const App = () => {
    //const [newDiaryEntry, setNewDiaryEntry] = useState('');
    const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

    useEffect(() => {
        getAllDiaries().then(data => {
            setDiaries(data);
        })
    }, [])

    // const diaryCreation = (event: React.SyntheticEvent)=> {
    //     event.preventDefault()
    //     createDiaryEntry({  });
    // }

    return (
        <div>
            <h1>Diary entries</h1>
            <DiaryEntries diaries={diaries} />
        </div>
    )
}

export default App;