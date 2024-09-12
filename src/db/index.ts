import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.NEON_DATABASE_URL as string);

//function to create table in neondb
async function createFeedbackTable() {
  await sql`
  CREATE TABLE IF NOT EXISTS messages (
            id SERIAL PRIMARY KEY,
            feedback TEXT NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
}

async function addFeedback(feedback: string) {
  await sql`INSERT INTO messages (feedback) VALUES (${feedback})`;
}

export { createFeedbackTable, addFeedback };
