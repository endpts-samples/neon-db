import pg from "pg";

// connect to the Neon database with the connection string we copied
const pool = new pg.Pool({
  connectionString: process.env.NEON_DB_CONNECTION_STRING,
  ssl: true, // use an encrypted connection
});

export async function getById(id: string) {
  const { rows: users } = await pool.query(
    "SELECT id, name, email FROM users WHERE id = $1;",
    [id]
  );

  return users[0];
}

export async function getAll() {
  const { rows: users } = await pool.query(
    "SELECT id, name, email FROM users;"
  );

  return users;
}
