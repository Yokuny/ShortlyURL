import db from "../database/db.database.js";
import { nanoid } from "nanoid";

const registerUrl = async (id, url) => {
  const shortUrl = nanoid(8);
  const query = `INSERT INTO urls ("userId", url, "shortUrl") VALUES ($1, $2, $3) RETURNING *`;

  try {
    const {
      rows: [line],
    } = await db.query(query, [id, url, shortUrl]);
    if (!line) throw new Error("Error to insert url");

    return line;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUrl = async (id) => {
  const query = `SELECT * FROM urls WHERE id = $1`;

  try {
    const {
      rows: [line],
    } = await db.query(query, [id]);

    return line;
  } catch (err) {
    throw new Error(err.message);
  }
};

const openUrl = async (shortUrl) => {
  const query = `UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE "shortUrl" = $1 RETURNING url`;

  try {
    const {
      rows: [url],
    } = await db.query(query, [shortUrl]);

    return url.url;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteUrl = async (id) => {
  const query = "DELETE FROM urls WHERE id = $1";

  try {
    await db.query(query, [id]);
  } catch (err) {
    throw new Error(err.message);
  }
};

export default { registerUrl, getUrl, openUrl, deleteUrl };