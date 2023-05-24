import db from "../database/db.database.js";

const ranking = async () => {
  const query = `
    SELECT
      u.id,
      u.name,
      COUNT(ur.id) AS "linksCount",
      COALESCE(SUM(ur."visitCount"), 0) AS "visitCount"
    FROM
      users u
    LEFT JOIN
      urls ur ON u.id = ur."userId"
    GROUP BY
      u.id,
      u.name
    ORDER BY
     "visitCount" DESC
    LIMIT 10;
  `;

  try {
    const { rows: rankingData } = await db.query(query);

    return rankingData;
  } catch (err) {
    throw new Error(err.message);
  }
};
export default { ranking };
