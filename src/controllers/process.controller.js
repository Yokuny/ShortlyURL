import e from "cors";
import db from "../database/db.database.js";
import { nanoid } from "nanoid";

const registerUrl = async (req, res) => {
  const { url } = req.body;
  const id = res.locals.user;
  const shortUrl = nanoid(8);
  const query = `INSERT INTO urls (user_id, url, shortUrl) VALUES ($1, $2, $3) RETURNING *`;

  try {
    const { rows: line } = await db.query(query, [id, url, shortUrl]);
    if (!line) throw new Error("Error to insert url");

    res.status(201).send({
      id: line[0].id,
      shortUrl: line[0].shorturl,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getUrl = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM urls WHERE id = $1`;

  try {
    const { rows: line } = await db.query(query, [id]);
    if (!line) return res.status(404).send({ message: "URL not found" });

    res.status(200).send({
      id: line[0].id,
      shortUrl: line[0].shorturl,
      url: line[0].url,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const openUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const query = `UPDATE urls SET visitcount = visitcount + 1 WHERE shorturl = $1 RETURNING url`;

  try {
    const { rows: url } = await db.query(query, [shortUrl]);
    if (!url.length) return res.status(404).send({ message: "URL not found" });

    return res.redirect(302, url[0].url);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteUrl = async (req, res) => {
  const id = req.locals.user;
  const query = "SELECT * FROM urls WHERE id = $1";
  const queryDelete = "DELETE FROM urls WHERE id = $1";

  try {
    const { rows: line } = await db.query(query, [id]);
    if (!line) return res.status(404).send({ message: "URL not found" });
    if (line[0].user_id !== parseInt(id)) return res.status(401).send({ message: "Unauthorized" });

    await db.query(queryDelete, [id]);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default { registerUrl, getUrl, openUrl, deleteUrl };
