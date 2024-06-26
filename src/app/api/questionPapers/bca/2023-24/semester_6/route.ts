import { NextRequest, NextResponse } from "next/server";
import * as data from '@/app/api/questionPapers/bca/2023-24/semester_6/sem6_ques.json'


export async function POST(request: NextRequest) {
    return NextResponse.json({
        message: "received request",
        data: data
    })
}