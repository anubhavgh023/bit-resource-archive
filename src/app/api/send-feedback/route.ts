// api endpoint to add feedback into the database
import { createFeedbackTable, addFeedback } from "@/db";

export async function POST(request: Request) {
  const { feedback } = await request.json();

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
    const created = await createFeedbackTable(); //ensures that the table exists
    const response = await addFeedback(feedback);

    console.log("created DB", created)
    console.log("Added Data", response)

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
