const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
//console.log(app.get('env'));
console.log(process.env);

const port = 8000;
app.listen(port, () => {
  console.log('listening... from port ${port}');
});
