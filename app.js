const { application } = require('express');
const express = require('express');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/userRoutes');

const tourData = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);
if (process.env.NODE_ENV === 'development') {
  console.log(process.env.NODE_ENV);
  app.use(morgan('dev'));
}
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
//middleware
app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);
//listening
module.exports = app;
