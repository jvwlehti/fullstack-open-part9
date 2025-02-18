import axios from 'axios';
import {DiaryEntry, NewDiaryEntry} from '../types.ts'

const baseUrl = 'http://localhost:3001/api/diaries'

export const getAllDiaries = () => {
    return axios
        .get<DiaryEntry[]>(baseUrl)
        .then(response => response.data)
}

export const createDiaryEntry = (entry: NewDiaryEntry) => {
    return axios
        .post<DiaryEntry>(baseUrl, entry)
        .then(response => response.data)
}