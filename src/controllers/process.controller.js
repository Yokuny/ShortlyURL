import process from "../repositories/processRepository.js";

import db from "../database/db.database.js";

const registerUrl = async (req, res) => {
  try {
    const line = await process.registerUrl(res.locals.user, req.body.url);
    console.log("line");
    console.log(line);
    res.status(201).send({
      id: line[0].id,
      shortUrl: line[0].shortUrl,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getUrl = async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM urls WHERE id = $1`;

  try {
    const { rows: line } = await db.query(query, [id]);
    if (!line.length) return res.status(404).send({ message: "URL not found" });

    res.status(200).send({
      id: line[0].id,
      shortUrl: line[0].shortUrl,
      url: line[0].url,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const openUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const query = `UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE "shortUrl" = $1 RETURNING url`;

  try {
    const { rows: url } = await db.query(query, [shortUrl]);
    if (!url.length) return res.status(404).send({ message: "URL not found" });

    return res.redirect(302, url[0].url);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteUrl = async (req, res) => {
  const id = res.locals.user;
  const { id: urlId } = req.params;
  if (!urlId) return res.status(401).send({ message: "Missing url id" });

  const query = "SELECT * FROM urls WHERE id = $1";
  const queryDelete = "DELETE FROM urls WHERE id = $1";

  try {
    const { rows: line } = await db.query(query, [urlId]);
    if (!line.length) return res.status(404).send({ message: "URL not found" });

    if (line[0].userId !== parseInt(id)) return res.status(401).send({ message: "Unauthorized" });

    await db.query(queryDelete, [urlId]);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { registerUrl, getUrl, openUrl, deleteUrl };
