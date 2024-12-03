import { createConnection } from "@/src/lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const connection = await createConnection();
    const { locale } = req.query;
    const suffix_locale = (!locale || locale == 'en') ? '' : '_' + locale;
    const select = `name${suffix_locale} as name, image, alt`;

    try {
      const [rows] = await connection.execute(`SELECT ${select} FROM countries`);
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
