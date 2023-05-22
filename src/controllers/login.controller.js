import db from "../database/db.database.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const query = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";

  try {
    const hashPass = await bcrypt.hash(password, 10);
    await db.query(query, [name, email, hashPass]);

    return res.sendStatus(201);
  } catch (err) {
    return res.status(409).send({ message: err.message });
  }
};

const signin = async (req, res) => {
  const id = res.locals.user;
  const query =
    "INSERT INTO tokens (user_id, token) VALUES ($1, gen_random_uuid()) ON CONFLICT (user_id) DO UPDATE SET token = gen_random_uuid() RETURNING token;";

  try {
    const {
      rows: [result],
    } = await db.query(query, [id]);
    const token = result.token;
    res.status(200).send({ token: token });
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: err.message });
  }
};
export default { signup, signin };
