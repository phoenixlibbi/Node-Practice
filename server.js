const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const main=require('./main.js')

const DB=process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log("DB connected successfully!");
})

const port=8000;
main.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})
