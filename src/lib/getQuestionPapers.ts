"use server"
import fs from 'node:fs/promises';
import path from "path";

export default async function getQuestionPapers(course: string, year: string, semester: string) {
    const filePath = path.join(process.cwd(),'src','questionPaperData',course ,year, `sem${semester}_ques.json`);

    const jsonData = await fs.readFile(filePath, {encoding: 'utf-8'});

    const data = JSON.parse(jsonData);

    return data[`semester_${semester}`];
}