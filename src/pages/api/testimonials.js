import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  const connection = await createConnection();

  try {
    if (req.method === 'GET') {
      const { id } = req.query;

      if (id) {
        const [rows] = await connection.execute('SELECT * FROM testimonials WHERE id = ?', [id]);
        if (rows.length > 0) {
          res.status(200).json({ data: rows[0] });
        } else {
          res.status(404).json({ message: 'Testimonial not found' });
        }
      } else {
        const [rows] = await connection.execute('SELECT * FROM testimonials');
        res.status(200).json({ data: rows });
      }
    } else if (req.method === 'POST') {
      const { name, message } = req.body;
      const [result] = await connection.execute(
        'INSERT INTO testimonials (name, message) VALUES (?, ?)',
        [name, message]
      );
      res.status(201).json({ id: result.insertId, name, message });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    await connection.end();
  }
}
