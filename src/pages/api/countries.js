import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const connection = await createConnection();
    try {
      const [rows] = await connection.execute("SELECT * FROM countries");
      res.status(200).json({ countries: rows });
    } catch (error) {
      res.status(500).json({ message: "Error occurred while fetching countries" });
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
