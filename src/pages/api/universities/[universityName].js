// pages/api/universities/[universityName].js
import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { universityName } = req.query; // Extract the university name from the URL

    const connection = await createConnection();

    try {
      // Fetch the university details by name
      const [rows] = await connection.execute(
        "SELECT * FROM universities WHERE name = ?",
        [universityName]
      );

      if (rows.length === 0) {
        return res.status(404).json({ message: "University not found" });
      }

      res.status(200).json({ university: rows[0] });
    } catch (error) {
      res.status(500).json({ message: "Error occurred while fetching university details" });
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
