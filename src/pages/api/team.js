import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  const connection = await createConnection();

  try {
    if (req.method === "GET") {
      const { id, locale } = req.query;
      const suffix_locale = (!locale || locale == 'en') ? '' : '_' + locale;
      const select = `name${suffix_locale} as name, position${suffix_locale} as position, image`;

      if (id) {
        const [rows] = await connection.execute(
          `SELECT ${select} FROM team WHERE id = ?`,
          [id]
        );
        if (rows.length > 0) {
          res.status(200).json({ data: rows[0] });
        } else {
          res.status(404).json({ message: "team not found" });
        }
      } else {
        const [rows] = await connection.execute("SELECT * FROM team");
        res.status(200).json({ data: rows });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    await connection.end();
  }
}
