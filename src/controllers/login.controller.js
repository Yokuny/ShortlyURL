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
    console.log(err.detail);
    return res.sendStatus(409);
  }
};
const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const query = "SELECT * FROM users WHERE email = $1";
    const foundUser = await db.query(query, [email]);
    console.log(foundUser);
  } catch (err) {
    console.log(err);
  }
  const a = "retorno do db";
  console.log(await bcrypt.compare(password, a));
  //Caso o usuário/senha não seja compatível (ou não exista), retornar o status code 401.
  res.status(200).send({ token: "MEUTOKEN" });
};
export default { signup, signin };
