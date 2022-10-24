const fs = require('fs');
const express = require('express');
const app = express();

const tour = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

app.patch('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1;

  if (id > tour.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  //tour[id].difficulty = req.difficulty;
  res.status(200).json({
    status: 'success',
    message: 'Success',
    data: tour[id],
  });
});
const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
