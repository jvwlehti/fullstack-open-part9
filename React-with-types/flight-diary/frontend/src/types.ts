import * as React from "react";;

export interface Diary {
    diary: DiaryEntry;
}

export interface DiaryEntry {
    id: number;
    date: string;
    weather: string;
    visibility: string;
    comment?: string;
}

export interface RadioButtonProps {
    button: string;
    selectedValue: string;
    handleSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const VisibilityOptions =  ["great", "good", "ok", "poor"]

export const WeatherOptions = ["sunny", "rainy", "cloudy", "stormy", "windy"]

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

export interface Diaries {
    diaries: DiaryEntry[];
}