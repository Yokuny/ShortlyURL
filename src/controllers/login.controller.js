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

    // verificando se o email existe e se a senha coencide com a senha do banco de dados
    if (!user.length || !(await bcrypt.compare(password, user[0].password))) {
      return res.status(401).send("Email or password incorrect");
    }
    //inserir o token em uma tablea de tokens
    const newToken = token();
    res.status(200).send({ token: newToken });
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: err.message });
  }
};
export default { signup, signin };
