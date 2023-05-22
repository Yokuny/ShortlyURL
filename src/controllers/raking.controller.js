import db from "../database/db.database.js";

const rank = async (req, res) => {
  const query = `
    SELECT
      u.id,
      u.name,
      COUNT(ur.id) AS linksCount,
      COALESCE(SUM(ur.visitCount), 0) AS visitCount
    FROM
      users u
    LEFT JOIN
      urls ur ON u.id = ur.user_id
    GROUP BY
      u.id,
      u.name
    ORDER BY
      visitCount DESC
    LIMIT 10;
  `;

  try {
    const { rows: rankingData } = await db.query(query);

    return res.status(200).json(rankingData);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default rank;
