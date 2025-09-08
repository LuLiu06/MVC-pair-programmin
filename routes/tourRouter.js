const express = require('express');
const router = express.Router();
const auth=require('../middleware/auth');
const {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
} = require('../controllers/tourControllers');

router.get('/', getAllTours);

router.use(auth);

router.post('/', createTour);
router.get('/:tourId', getTourById);
router.put('/:tourId', updateTour);
router.delete('/:tourId', deleteTour);

module.exports = router;
