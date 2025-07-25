import {
  findAllUsers,
  findUserById,
  createUser,
  updateUserById,
  deleteUserById
} from '../models/userModel.js';

export async function getAllUsers(req, res, next) {
  try {
    const users = await findAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function getUser(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const user = await findUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function addUser(req, res, next) {
  try {
    console.log('Request Body:', req.body); 
    const payload = req.body;

    if (!payload.username || !payload.user_password) {
      return res.status(400).json({ message: 'username and user_password are required' });
    }

    const created = await createUser(payload);
    res.status(201).json(created);
  } catch (err) {
    console.error('Error in addUser:', err); 
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
}

export async function updateUser(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const updated = await updateUserById(id, req.body);
    if (!updated) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function deleteUser(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const deleted = await deleteUserById(id);
    if (!deleted) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(deleted);
  } catch (err) {
    next(err);
  }
}
