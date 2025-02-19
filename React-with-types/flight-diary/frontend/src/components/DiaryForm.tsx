import * as React from "react";
import {useState} from "react";
import {createDiaryEntry} from "../services/diaryService.ts";
import {DiaryEntry, WeatherOptions, VisibilityOptions} from "../types.ts";
import axios from "axios";
import {RadioButton} from "./RadioButton.tsx";

interface DiaryFormProps {
    setDiaries: (value: (((prevState: DiaryEntry[]) => DiaryEntry[]) | DiaryEntry[])) => void,
    diaries: DiaryEntry[]
}

export const DiaryForm = ({setDiaries, diaries}: DiaryFormProps) => {
    const [date, setDate] = useState<string>('');
    const [visibility, setVisibility] = useState<string>('');
    const [weather, setWeather] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [error, setError] = useState<string | undefined>('');

    const submit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        createDiaryEntry({date, visibility, weather, comment})
            .then(data => {
                setDiaries(diaries.concat(data));
                setDate('');
                setVisibility('');
                setWeather('');
                setComment('');
            }).catch((error) => {
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = error.response.data?.error?.[0]?.message;
                setError("Error: " + errorMessage);
                setTimeout(() => {
                    setError("");
                }, 5000);
            } else {
                console.log(error);
            }
        });

    }

    const selectVisibility = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVisibility(event.target.value);
    };

    const selectWeather = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeather(event.target.value);
    };

    return (
        <div>
            <h2>Add new flight diary entry</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </div>
                <div>
                    <span>Visibility </span>
                    {VisibilityOptions.map((item) => (
                        <RadioButton key={item} button={item} selectedValue={visibility} handleSelect={selectVisibility} />
                    ))}
                </div>
                <div>
                    <span>weather </span>
                    {WeatherOptions.map((item) => (
                        <RadioButton key={item} button={item} selectedValue={weather} handleSelect={selectWeather} />
                    ))}
                </div>
                <div>
                    comment
                    <input
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}