import pg from "pg";
import { config } from "dotenv";
config();

const dbName = "shortly_db";

const connection = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  database: dbName,
});

export default connection;
