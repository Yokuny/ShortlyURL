import db from "../database/db.database.js";
import bcrypt from "bcrypt";
import { v4 as token } from "uuid";

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 10);
    const query = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
    await db.query(query, [name, email, hashPass]);

    return res.sendStatus(201);
  } catch (err) {
    return res.status(409).send({ message: err.message });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const query = "SELECT * FROM users WHERE email = $1";
    const { rows: user } = await db.query(query, [email]);
    if (!user.length || !(await bcrypt.compare(password, user[0].password))) {
      return res.status(401).send("Email or password incorrect");
    }

    const newToken = token();
    const queryToken = "INSERT INTO users (token) VALUES ($1)";
    await db.query(queryToken, [newToken]);

    res.status(200).send({ token: newToken });
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: err.message });
  }
};
export default { signup, signin };
