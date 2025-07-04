import app from "./app.js"
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const {DB_HOST, PORT} = process.env

mongoose.connect(DB_HOST).then(() => {
  console.log("DB connect")
  app.listen(PORT);
}).catch((err) => {
  console.log(err.message); 
  process.exit(1)
})

