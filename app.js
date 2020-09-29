const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require('path');
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });
connectDB();
const app = express();
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'public')))
app.use('/api/v1/stores',require('./routes/stores'))
const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(
    `server running on port ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
