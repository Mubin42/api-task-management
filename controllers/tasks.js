import Task from '../models/tasks.js';

const getAllTasks = (req, res) => {
  return res.status(200).json({
    message: 'Get All tasks',
  });
};

const getTask = (req, res) => {
  return res.status(200).json({
    id: req.params.id,
    message: 'Get task',
  });
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({
      task,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

const updateTask = (req, res) => {
  return res.status(200).json({
    id: req.params.id,
    message: 'Update tasks',
  });
};

const deleteTask = (req, res) => {
  return res.status(200).json({
    id: req.params.id,
    message: 'Delete tasks',
  });
};

export { getAllTasks, createTask, updateTask, deleteTask, getTask };
