import Task from '../models/tasks.js';
import moment from 'moment/moment.js';

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find()
      .select('-description')
      .limit(3)
      .sort('-name');

    const count = await Task.count();

    return res.status(200).json({ success: true, count: count, data: task });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findById(taskID);

    if (!task) {
      return res.status(404).json({
        status: 404,
        message: `No task id with : ${taskID}`,
      });
    }

    return res.status(200).json({
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    //const task = await Task.create(req.body;)

    const task = new Task(req.body);
    const saved = await task.save();

    return res.status(201).json({
      task,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({
        status: 404,
        message: `No task id with : ${taskID}`,
      });
    }

    return res.status(200).json({ id: taskID, data: req.body });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({
        status: 404,
        message: `No task id with : ${taskID}`,
      });
    }

    return res.status(200).json({
      data: task,
      status: 'Task deleted',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export { getAllTasks, createTask, updateTask, deleteTask, getTask };
