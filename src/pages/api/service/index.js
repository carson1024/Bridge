import { createConnection } from "../../../lib/db";

export default async function handler(req, res) {
  const connection = await createConnection();

  try {
    if (req.method === "GET") {
      const { id, locale } = req.query;

      const suffix_locale = (!locale || locale == 'en') ? '' : '_' + locale;
      const select = `service_name${suffix_locale} as service_name, description${suffix_locale} as description, image, alt`;

      if (id) {
        const [rows] = await connection.execute(
          `SELECT ${select} FROM services WHERE id = ?`,
          [id]
        );
        if (rows.length > 0) {
          res.status(200).json({ data: rows[0] });
        } else {
          res.status(404).json({ message: "Service not found" });
        }
      } else {
        const [rows] = await connection.execute(`SELECT ${select} FROM services`);
        res.status(200).json({ data: rows });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    await connection.end();
  }
}
