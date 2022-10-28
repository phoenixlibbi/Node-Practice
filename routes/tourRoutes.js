const express = require('express');
const morgan = require('morgan');
const app = express();
const tourController = require('./../controllers/tourControllers.js');

const tourRoutes = express.Router();
tourRoutes.use(morgan('dev'));

tourRoutes.param('id', tourController.checkId);

tourRoutes
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
tourRoutes
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = tourRoutes;
