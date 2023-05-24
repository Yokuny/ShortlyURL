import db from "../database/db.database.js";

const getUser = async (id) => {
  const query = `
    SELECT
      u.id,
      u.name,
      COALESCE(SUM(ur."visitCount"), 0) AS "visitCount",
      json_agg(json_build_object(
        'id', ur.id,
        'shortUrl', ur."shortUrl",
        'url', ur.url,
        'visitCount', ur."visitCount"
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
    const {
      rows: [user],
    } = await db.query(query, [id]);

    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};
export default { getUser };
