import User from '../models/users.js';

const getAllUser = async (req, res) => {
  const { sort, page, perPage, skip } = req.meta;
  try {
    //get all user from db
    const users = await User.find()
      .select('-visibility')
      .sort(sort)
      .limit(perPage)
      .skip(skip);
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



const getUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findById(userID);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `No user id with : ${userID}`,
      });
    }
    return res.status(200).json({
      success: true,
      data: user,
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

const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findByIdAndUpdate(
      {
        _id: userID,
      },
      req.body,
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `No user id with: ${userID}`,
      });
    }

    return res.status(200).json({
      success: true,
      id: userID,
      data: req.body,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await User.findByIdAndUpdate(
      { _id: userID },
      { visibility: false },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `No user id with " ${userID}`,
      });
    }
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export { getAllUser, getUser, createUser, updateUser, deleteUser };
