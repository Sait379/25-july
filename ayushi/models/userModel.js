import pool from '../config/db.js';

export const findAllUsers = async () => {
  const { rows } = await pool.query('SELECT * FROM Users ORDER BY user_id');
  return rows;
};

export const findUserById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
  return rows[0];
};

export const createUser = async ({ username, email, user_password, bio }) => {
  const query =
    'INSERT INTO Users (username, email, user_password, bio) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [username, email, user_password, bio];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const updateUserById = async (id, { username, email, bio }) => {
  const query =
    'UPDATE users SET username = COALESCE($1, username), email = COALESCE($2, email), bio = COALESCE($3, bio) WHERE user_id = $4 RETURNING *';
  const values = [username, email, bio, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const deleteUserById = async (id) => {
  const query = 'DELETE FROM users WHERE user_id = $1 RETURNING *';
  const { rows } = await pool.query(query, [id]);
  return rows[0];
};
