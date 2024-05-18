const mongoose = require('mongoose');
const Weapons = require('../models/schemas');
const dummyWeapons = require('./dummyWeapons');
require('dotenv').config({ path:'./server/.env' });

console.log(process.env.DB_URI)
mongoose.connect('mongodb+srv://shahafmeron:eRfweMkSM9YVBZ8B@gunstore.1dlyopo.mongodb.net/gunstore?retryWrites=true&w=majority&appName=gunstore', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
    return Weapons.insertMany(dummyWeapons);
  })
  .then((doc) => {
    console.log("Weapons added:", doc);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error adding weapons:", err);
  });
