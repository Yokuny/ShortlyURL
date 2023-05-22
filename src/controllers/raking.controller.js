import db from "../database/db.database.js";

const rank = (req, res) => {
  
const getRanking = async (req, res) => {
  const query = `
    SELECT
      u.id,
      u.name,
      COUNT(ur.id) AS linksCount,
      SUM(ur.visitCount) AS visitCount
    FROM
      users u
    LEFT JOIN
      urls ur ON u.id = ur.user_id
    GROUP BY
      u.id,
      u.name
    ORDER BY
      visitCount DESC;
  `;
  try {
    const { rows: rankingData } = await db.query(query);
    return res.status(200).json(rankingData);
  } catch (err) {
    console.error("Error getting ranking", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
};
export default rank;
