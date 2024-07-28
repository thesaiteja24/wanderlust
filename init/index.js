/**
 * @author Sai Teja
 * This is file can be used to intialize the database with some temporary data to work with
 * run this file:
 * cd init
 * node index.js
 * 
 * This will clear all the existing data in the database and inserts the new data 
 * defined in "data.js" file
 */

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();