const express = require('express');
const app = express();
const fs = require('fs');

const tour = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

app.delete('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1;
  if (id > tour.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  res.status(204).json({
    status: 'success',
    message: 'Success',
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
