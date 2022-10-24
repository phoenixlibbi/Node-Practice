const { application } = require('express');
const express = require('express');
const fs = require('fs');
const { request } = require('http');
const app = express();

const tours = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

app.get('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((elem) => elem.id === id);

  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Tour not found',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: 'Tour found',
      data: {
        tour,
      },
    });
  }
});

const port = 8000;
app.listen(port, () => {
  console.log('Listening on port ${port}');
});
