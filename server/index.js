const express = require("express");
const app = express();

const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
connectDB();

app.listen(5000, () => {
  console.log(`backend server started at port 6000}`);
});
