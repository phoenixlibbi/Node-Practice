const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");

const tourRoutes = require("./routes/tourRoutes.js");

if (process.env.NODE_ENV === "development") {
  console.log(process.env.NODE_ENV);
  app.use(morgan("dev"));
}
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
//middleware
app.use("/api/v1/tours", tourRoutes);

module.exports = app;
