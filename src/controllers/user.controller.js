import db from "../database/db.database.js";

const getUser = async (req, res) => {
  const id = res.locals.user;
  const query = `
    SELECT
      u.id,
      u.name,
      COALESCE(SUM(ur."visitCount"), 0) AS "visitCount",
      json_agg(json_build_object(
        'id', ur.id,
        "shortUrl", ur."shortUrl",
        'url', ur.url,
        "visitCount", ur."visitCount"
      )) AS "shortenedUrls"
    FROM
      users u
    LEFT JOIN
      urls ur ON u.id = ur."userId"
    WHERE
      u.id = $1
    GROUP BY
      u.id,
      u.name;
  `;
  try {
    const { rows: userData } = await db.query(query, [id]);
    console.log(userData[0]);
    return res.status(200).json(userData[0]);
  } catch (err) {
    console.error("Error getting user", err);
    return res.status(500).json({ message: err.message });
  }
};


export default getUser;
