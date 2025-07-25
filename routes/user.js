import express from 'express';
import {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
} from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.post('/add/users', addUser);
router.put('/update/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
