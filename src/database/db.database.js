import pg from "pg";
import { config } from "dotenv";
config();

const connection = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export default connection;
