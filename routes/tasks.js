import express from 'express';
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks.js';

const router = express.Router();

router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.get('/task/:id', getTask);
router.patch('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;
