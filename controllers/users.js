import User from '../models/users.js';

const getAllUser = (req, res) => {
  try {
    return res.status(200).json({
      message: 'Getting All User',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const getUser = (req, res) => {
  try {
    return res.status(200).json({
      message: 'Getting Single User',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const createUser = (req, res) => {
  try {
    return res.status(200).json({
      message: 'Create a new User',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const updateUser = (req, res) => {
  try {
    return res.status(200).json({
      message: 'Update an existing user',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const deleteUser = (req, res) => {
  try {
    return res.status(200).json({
      message: 'Delete a user',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export { getAllUser, getUser, createUser, updateUser, deleteUser };
