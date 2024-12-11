const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mobileModel = require('../models/mobileModel');

dotenv.config({ path: '../config.env' });

const DB = process.env.DATABASE_URL;

mongoose.connect(DB).then(() => {
  console.log('DB connected!');
});

// Read File
const mobileProducts = JSON.parse(fs.readFileSync('./product.json', 'utf-8'));

const importData = async () => {
  try {
    await mobileModel.create(mobileProducts);
    console.log('data created');
  } catch (error) {
    console.error(error);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await mobileModel.deleteMany();
    console.log('data deleted');
  } catch (error) {
    console.error(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
    importData();
}

if (process.argv[2] === '--delete') {
    deleteData();
}