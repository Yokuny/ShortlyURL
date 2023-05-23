import db from "../database/db.database.js";
import bcrypt from "bcrypt";
const checkUser = async (req, res, next) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email = $1";

  try {
    const { rows: user } = await db.query(query, [email]);

    if (!user.length || !(await bcrypt.compare(password, user[0].password))) {
      return res.status(401).send("Email or password incorrect");
    }
    res.locals.user = user[0].id;
    next();
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
export default checkUser;
