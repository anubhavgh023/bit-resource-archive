import { NextRequest,NextResponse } from "next/server";

const quesPaper = [
    {
        course: "bca",
        year: 2023,
        subject: "mathematics",
        paperLink: "#"
    }
];

export async function POST(request: NextRequest) {
    const reqBody = await request.json();

    console.log(reqBody);

    return NextResponse.json({
        message: "received request"
    })
}