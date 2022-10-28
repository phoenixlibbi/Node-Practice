const express = require('express');
const app = express();

const fs = require('fs');
const tourData = JSON.parse(
  fs.readFileSync('${__dirname}/../dev-data/data/tours-simple.json', 'utf-8')
);

exports.checkId = (req, res, next, value) => {
  console.log(`Tour id is: ${value}`);
  if (tourData.length < req.params.id * 1) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID to get tour',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid data!',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tourData.length,
    data: {
      tourData,
    },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params.tourData);

  const tourId = req.params.id * 1;
  const tour = tourData.find((el) => el.id === tourId);
  res.status(200).json({
    status: 'success',
    results: tourData,
    data: {
      tour,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tourData[tourData.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    './dev-data/data/tours-simple.json',
    JSON.stringify(tourData),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  res.status(204).json({
    status: 'success',
    message: 'Success',
  });
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;

  //tour[id].difficulty = req.difficulty;
  res.status(200).json({
    status: 'success',
    message: 'Success',
    data: tourData[id],
  });
};
