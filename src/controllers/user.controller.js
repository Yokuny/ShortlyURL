import db from "../database/db.database.js";

const getUser = async (req, res) => {
  //receber o token de res.locals.user_id e buscar o usuário no banco de dados,
  // usuario pego anteriormente pelo token
  // const { id } = res.locals.user_id;
  const id = 1;
  const query = `SELECT
    u.id,
    u.name,
    SUM(ur."visitcount") AS "visitcount",
    json_agg(
        json_build_object(
            'id', ur.id,
            'shorturl', ur."shorturl",
            'url', ur.url,
            'visitcount', ur."visitcount"
        )
    ) AS "shortenedUrls"
    FROM
        users u
    JOIN
        urls ur ON u.id = ur."user_id"
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
    return res.status(500).json({ error: "Internal server error" });
  }
};
export default getUser;
