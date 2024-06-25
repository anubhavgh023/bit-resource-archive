import { NextRequest,NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { course, year } = await request.json();
    console.log(course, year);

    return NextResponse.json({
        message: "get pdf route"
    })
}