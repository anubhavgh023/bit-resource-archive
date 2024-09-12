// api endpoint to add feedback into the database
import { createFeedbackTable, addFeedback } from "@/db";

interface FeedbackType{
  feedback: string,
  email?: string
}

export async function POST(request: Request) {
  const { feedback, email }: FeedbackType = await request.json();

  if (!feedback) {
    return Response.json(
      {
        success: false,
        message: "Feedback Is Required!",
      },
      { status: 400 }
    );
  }

  try {
    await createFeedbackTable(); //ensures that the table exists
    await addFeedback(feedback, email as string);


    return Response.json(
      {
        success: true,
        message: "Feedback added to table",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding messages: ", error);
    return Response.json(
      {
        success: false,
        message: "An unexpected error occured Internally!",
      },
      { status: 500 }
    );
  }
}
