const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Successfully connected to db...'.bgGreen)
}).catch((err)=>{
    console.log('Error connecting to db!')
});