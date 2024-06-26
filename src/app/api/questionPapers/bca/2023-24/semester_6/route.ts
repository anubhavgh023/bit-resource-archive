import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {

    const subjects = [
        {
            courseName: "",
            downloadLink: "#"
        }
    ]

    return NextResponse.json({

        downloadLink: "#"
    })
}