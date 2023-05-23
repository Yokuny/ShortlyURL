import db from "../database/db.database.js";
import { nanoid } from "nanoid";

const registerUrl = async (id, url) => {
  const shortUrl = nanoid(8);
  const query = `INSERT INTO urls ("userId", url, "shortUrl") VALUES ($1, $2, $3) RETURNING *`;

  try {
    const { rows: line } = await db.query(query, [id, url, shortUrl]);
    if (!line.length) throw new Error("Error to insert url");

    return line[0];
  } catch (err) {
    throw new Error(err.message);
  }
};
