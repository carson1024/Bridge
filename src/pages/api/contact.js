import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  const connection = await createConnection();
    console.log('Here!')
  try {
    if (req.method === "POST") {
      const {
        firstName,
        lastName,
        email,
        mobileNumber,
        studyDestination,
        studyPlan,
        counselingMode,
        funding,
        studyLevel,
        additionalNotes,
      } = req.body;

      // Insert into users_message table
      console.log(req.body);
      const [result] = await connection.execute(
        `INSERT INTO user_messages 
         (first_name, last_name, email_address, mobile, 
          \`Preferred Study Destination\`, \`Plan to Study\`, 
          \`Preferred Mode of Counseling\`, \`Education Fund\`, 
          \`Preferred Study Level\`, \`Additional Notes\`, created_at) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          firstName,
          lastName,
          email,
          mobileNumber,
          studyDestination,
          studyPlan,
          counselingMode,
          funding,
          studyLevel,
          additionalNotes,
          new Date(),
        ]
      );

      res.status(201).json({ message: "Message sent successfully!", id: result.insertId });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  } finally {
    await connection.end();
  }
}
