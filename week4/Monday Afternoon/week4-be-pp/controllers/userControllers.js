const User = require("../models/userModel");

const  getAllUsers = (req, res) => {
  const users = User.getAll();
  res.status(200).json(users);
};

const createUser = (req, res) => {

  const {name, email, password, phone_number, gender, date_of_birth, membership_status} = req.body;
  //console.log("BODY:", req.body);
  //console.log("PARAMS:", {name, email, password, phone_number, gender, date_of_birth, membership_status}); 
  if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status) {
    return res.status(400).json({ message: "Bad Request: Missing required fields" });
  }

  const newUser = User.addOne({name, email, password, phone_number, gender, date_of_birth, membership_status});

  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(500).json({ message: "Failed to create User" });
  }
};

const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = User.findById(userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const updateUser = (req, res) => {
  const userId = req.params.userId;
  const {name, email, password, phone_number, gender, date_of_birth, membership_status} = req.body;

if (Object.keys(req.body).length === 0) {
  return res.status(400).json({ message: "Bad Request: No fields to update" });
}

  const updatedUser = User.updateOneById(userId, {
  name,
  email,
  password,
  phone_number,
  gender,
  date_of_birth,
  membership_status
});

  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId);

  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};