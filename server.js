const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE_URL;

mongoose.connect(DB).then(() => {
  console.log('DB connected!');
});

const port = process.env.PORT || 3000;
app.listen({ port }, () => {
  console.log(`Listen to port ${port}`);
});
