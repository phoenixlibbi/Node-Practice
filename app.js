const { application } = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  //   res.status(200).send('hello world!');
  res.status(200).json({ message: 'hello world!', app: 'nodejs' });
  console.log(app);
});

const port = 8000;
app.listen(port, () => {
  console.log(`listening... from port ${port}`);
});
