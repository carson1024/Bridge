import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  const connection = await createConnection();

  const { locale } = req.query; // Get the country from the query parameter
  const suffix_locale = (!locale || locale == 'en') ? '' : '_' + locale;
  const select = `header${suffix_locale} as header, title${suffix_locale} as title, text_content${suffix_locale} as text_content, video_id`;

  try {
    if (req.method === "GET") {
      const [rows] = await connection.execute(`SELECT ${select} FROM about_us`);
      if (rows.length > 0) {
        res.status(200).json({ data: rows[0] });
      } else {
        res.status(404).json({ message: "about us not found" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    await connection.end();
  }
}
