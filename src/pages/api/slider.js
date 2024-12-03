import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  const connection = await createConnection();

  try {
    if (req.method === "GET") {
      const [rows] = await connection.execute("SELECT * FROM slider");
      if (rows.length > 0) {
        res.status(200).json({ data: rows });
      } else {
        res.status(404).json({ message: "contact information not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    await connection.end();
  }
}
