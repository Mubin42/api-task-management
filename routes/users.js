import express from 'express';
import { sort } from '../middleware/sort.js';
import {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../controllers/users.js';

const router = express.Router();

router.get('/users', sort, getAllUser);
router.post('/users', createUser);
router.get('/user/:id', getUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;
