const fs = require('fs');
const express = require('express');
const app = express();

const tourData = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tourData.length,
    data: {
      tourData,
    },
  });
});

const port = 8000;
app.listen(port, () => {
  console.log('listening... from port ${port}');
});
