// controllers/userController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs')
const path = require('path')
const db = require('../db/db');
// Temporary in-memory store
const users = []

const jwtSecret = 'sahuy7tuetnrcbtr67tqnc67rit7rwkef';

exports.home = (req, res) => {
    res.status(200).send('Home');
};

exports.about = (req, res) => {
    res.status(200).send('Hello from About');
};

exports.contact = (req, res) => {
    res.status(200).send('This is contacts page.');
};

exports.registerUser = async (req, res) => {
    const { username, email, user_password, bio} = req.body;

    const hashedPassword = await bcrypt.hash(user_password, 10);

    const query = `
      INSERT INTO users (username, email, user_password, bio)
      VALUES ($1, $2, $3, $4)
      RETURNING user_id, username, email, bio, joined_at, is_active;
    `;

    const values = [username, email, hashedPassword, bio];

    const result = await db.query(query, values);

    res.status(201).json({
      user: result.rows[0],
      message: 'User registered successfully ✅',
    });

};

exports.getAllUsers = async (req, res) => {
     try {
    const result = await db.query('SELECT * FROM users LIMIT 1000');
    res.json(result.rows);
  } catch (err) {
    console.error('Query error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const findUser = users.find(user => user.email === email);

    if (!findUser) {
        return res.status(404).send('User not found');
    }

    const comparePass = await bcrypt.compare(password, findUser.password);

    if (!comparePass) {
        return res.status(401).send('Unauthorized: Incorrect password');
    }

    const payload = {
        name: `${findUser.first_name} ${findUser.last_name}`,
        email: findUser.email
    };

    const token = jwt.sign(payload, jwtSecret, { expiresIn: '15m' });

    res.status(200).json({
        user: findUser,
        message: "You are successfully logged in",
        token
    });
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await db.query(`
            SELECT * FROM users WHERE user_id = ${id}
        `)
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.rows[0]);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the user exists
    const userResult = await db.query(
      'SELECT * FROM users WHERE user_id = $1',
      [id]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: 'User not found ❌' });
    }

    // Delete the user
    const deleteResult = await db.query(
      'DELETE FROM users WHERE user_id = $1 RETURNING user_id, username, email',
      [id]
    );

    return res.status(200).json({
      message: 'User deleted successfully ✅',
      deletedUser: deleteResult.rows[0],
      rowsAffected: deleteResult.rowCount
    });

  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({
      message: 'Internal server error ❌',
      error: err.message
    });
  }
};



exports.update = async (req, res) => {
  const { id } = req.params;
  const { username, email, bio } = req.body;

  try {
    // Check if user exists
    const userCheck = await db.query(
      'SELECT * FROM users WHERE user_id = $1',
      [id]
    );

    if (userCheck.rows.length === 0) {
      return res.status(404).json({ message: 'User not found ❌' });
    }

    // Update user with provided fields only
    const updateQuery = `
      UPDATE users
      SET
        username = COALESCE($1, username),
        email = COALESCE($2, email),
        bio = COALESCE($3, bio)
      WHERE user_id = $4
      RETURNING user_id, username, email, bio;
    `;

    const values = [username, email, bio, id];

    const result = await db.query(updateQuery, values);

    return res.status(200).json({
      message: 'User updated successfully ✅',
      user: result.rows[0],
    });

  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({
      message: 'Failed to update user ❌',
      error: err.message
    });
  }
};

