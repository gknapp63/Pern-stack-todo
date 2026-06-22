import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  password: "admin1234",
  host: "localhost",
  port: 5432,
  database: "tododb",
});

export default pool;
