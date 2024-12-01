import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  const connection = await createConnection();

  try {
    if (req.method === 'GET') {
      const { id } = req.query;

      if (id) {
        // Fetch a specific brand by ID
        const [rows] = await connection.execute('SELECT * FROM brands WHERE id = ?', [id]);
        if (rows.length > 0) {
          res.status(200).json({ data: rows[0] });
        } else {
          res.status(404).json({ message: 'Brand not found' });
        }
      } else {
        // Fetch all brands
        const [rows] = await connection.execute('SELECT * FROM brands');
        res.status(200).json({ data: rows });
      }
    } else {
      // Handle unsupported HTTP methods
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    // Handle server errors
    res.status(500).json({ message: error.message });
  } finally {
    // Ensure the database connection is closed
    await connection.end();
  }
}
