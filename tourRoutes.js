const express = require("express");
const app = express();
const tourRoutes = express.Router();
const tourController=require('./../controllers/tourControllers')

//routes
tourRoutes
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);

tourRoutes
  .route("/:id")
  .delete(tourController.deleteTour)
  .get(tourController.getTour)
  .patch(tourController.updateTour);


module.exports = tourRoutes;