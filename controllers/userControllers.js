const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  res.json(User.getAll());
};

// POST /users
const createUser = (req, res) => {
  const newUser = User.addOne({ ...req.body });

  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: "Missing required fields" });
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  const user = User.findById(req.params.userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const updated = User.updateOneById(req.params.userId, { ...req.body });

  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const deleted = User.deleteOneById(req.params.userId);
  if (deleted) {
    res.status(204).send(); // No Content
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
