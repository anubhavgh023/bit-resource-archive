import { NextRequest, NextResponse } from "next/server";
import * as data from '@/app/api/questionPapers/bca/2023-24/semester_1/sem1_ques.json'


export async function POST(request: NextRequest) {
    const reqBody = await request.json();
    console.log(reqBody);
    console.log(data);
    return NextResponse.json({
        message: "received request",
        data: data
    })
}