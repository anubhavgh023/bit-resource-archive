import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DATABASE_URL as string);

//function to create table in neondb
async function createFeedbackTable() {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS feedback (
              id SERIAL PRIMARY KEY,
              feedback TEXT NOT NULL,
              email TEXT,
              createdAt TIMESTAMP(0) WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP(0)
          )`;
  } catch (error) {
    console.error("Error creating feedback table:", error);
  }
}

async function addFeedback(feedback: string, email: string) {
  try {
    await sql`INSERT INTO feedback (feedback, email) VALUES (${feedback}, ${email})`;

  } catch (error) {
    console.error("Error adding feedback:", error);
  }
}

export { createFeedbackTable, addFeedback };
