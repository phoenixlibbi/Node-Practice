const express = require('express');
const app = express();
const userRoutes = express.Router();
const userController = require('./../controllers/userControllers.js');

userRoutes
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
userRoutes
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRoutes;
