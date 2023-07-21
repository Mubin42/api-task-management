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

const createTask = (req, res) => {
  return res.status(200).json({
    message: 'Create tasks',
  });
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
