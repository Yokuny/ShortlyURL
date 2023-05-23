import db from "../database/db.database.js";
const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  const query = "SELECT * FROM users WHERE email = $1";

  try {
    const { rows: user } = await db.query(query, [email]);

    if (user.length) {
      return res.status(409).send({ message: "Email already exists" });
    }
    next();
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
export default checkEmail;
