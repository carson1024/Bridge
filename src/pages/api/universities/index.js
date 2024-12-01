import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { location } = req.query; // Get the country from the query parameter
    const connection = await createConnection();
    try {
      const [rows] = await connection.execute(
        "SELECT * FROM universities WHERE location = ?",
        [location]
      );
      res.status(200).json({ universities: rows });
    } catch (error) {
      res.status(500).json({ message: "Error occurred while fetching universities" });
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
