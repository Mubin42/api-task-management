import User from '../models/users.js';

const getAllUser = async (req, res) => {
  try {
    //get all user from db
    const users = await User.find();
    //count total users
    const count = await User.count();

    return res.status(200).json({ success: true, count: count, data: users });
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

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();

    return res.status(201).json({
      success: true,
      user,
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
