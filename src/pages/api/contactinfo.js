import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  const connection = await createConnection();

  try {
    if (req.method === "GET") {
      const { locale } = req.query;
      const suffix_locale = (!locale || locale == 'en') ? '' : '_' + locale;
      const select = `title${suffix_locale} as title, content${suffix_locale} as content, icon`;

      const [rows] = await connection.execute(`SELECT ${select} FROM contact_us`);
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
