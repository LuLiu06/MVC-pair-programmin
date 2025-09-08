const Tour = require("../models/tourModel");

// GET /tours
const getAllTours = (req, res) => {
  const tours = Tour.getAll();
  res.json(tours);
};

// POST /tours
const createTour = (req, res) => {
  const newTour = Tour.addOne({ ...req.body });

  if (newTour) {
    res.status(200).json(newTour);
  } else {
    res.status(400).json({ message: "Missing required fields" });
  }
};

// GET /tours/:tourId
const getTourById = (req, res) => {
  const tour = Tour.findById(req.params.tourId);
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

// PUT /tours/:tourId
const updateTour = (req, res) => {
  const updated = Tour.updateOneById(req.params.tourId, { ...req.body });

  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

// DELETE /tours/:tourId
const deleteTour = (req, res) => {
  const deleted = Tour.deleteOneById(req.params.tourId);
  if (deleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Tour not found" });
  }
};

module.exports = {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
};
