import db from "../database/db.database.js";
import bcrypt from "bcrypt";

const signup = async ({ name, email, password }) => {
  const hashPass = await bcrypt.hash(password, 10);
  const query = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
  try {
    await db.query(query, [name, email, hashPass]);
  } catch (err) {
    throw new Error(err.message);
  }
};

const signin = async (id) => {
  const query = `INSERT INTO tokens ("userId", token) VALUES ($1, gen_random_uuid()) ON CONFLICT ("userId") DO UPDATE SET token = gen_random_uuid() RETURNING token;`;
  try {
    const {
      rows: [result],
    } = await db.query(query, [id]);

    if (!result) throw new Error("Error to generate token");
    return result.token;
  } catch (err) {
    throw new Error(err.message);
  }
};
export default { signup, signin };
