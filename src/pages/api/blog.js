import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { search, page = 1 } = req.query;
    const limit = 10; // Define the number of blogs per page
    const offset = (page - 1) * limit;

    const connection = await createConnection();

    try {
      // Construct SQL with filtering conditions
      let query = "SELECT * FROM articles WHERE 1=1";
      const queryParams = [];

      // Check if search query is provided
      if (search && search.trim() !== "") {
        query += " AND title LIKE ?";
        queryParams.push(`%${search}%`);
      }

      // Directly append limit and offset
      query += ` LIMIT ${limit} OFFSET ${offset}`;

      // Log the query and parameters for debugging
      console.log("Executing query:", query);
      console.log("With parameters:", queryParams);

      const [rows] = await connection.execute(query, queryParams);

      // Get the total count for pagination
      const countQuery = search && search.trim() !== "" 
        ? "SELECT COUNT(*) as total FROM articles WHERE title LIKE ?"
        : "SELECT COUNT(*) as total FROM articles";

      const countParams = search && search.trim() !== "" 
        ? [`%${search}%`]
        : [];

      const [countRows] = await connection.execute(countQuery, countParams);

      res.status(200).json({ blogs: rows, total: countRows[0].total, perPage: limit });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({ message: "Error fetching blogs" });
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
