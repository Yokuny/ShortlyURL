import db from "../database/db.database.js";
const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");
  if (!token) return res.sendStatus(401);

  try {
    const query = "SELECT * FROM tokens WHERE token = $1";
    const { rows: tokens } = await db.query(query, [token]);
    if (!tokens.length) return res.sendStatus(401);
    res.locals.user = tokens[0].userId;
    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default authenticate;
