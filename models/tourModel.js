// Sample tour data model
let tours = [];
let nextId = 1;

function getAll() {
  return tours;
}

function addOne(tourData) {
  const { name, location, price } = tourData;
  if (!name || !location || !price) return false;

  const newTour = { id: nextId++, ...tourData };
  tours.push(newTour);
  return newTour;
}

function findById(id) {
  const tour = tours.find((t) => t.id === Number(id));
  return tour || false;
}

function updateOneById(id, updatedData) {
  const tour = findById(id);
  if (tour) {
    Object.assign(tour, updatedData);
    return tour;
  }
  return false;
}

function deleteOneById(id) {
  const initialLength = tours.length;
  tours = tours.filter((t) => t.id !== Number(id));
  return tours.length < initialLength;
}

const Tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Tour;
