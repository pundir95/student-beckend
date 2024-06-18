const express = require("express");
const cors = require('cors');
require("dotenv").config();
const studentRoutes = require("./routes/student");
const authRoutes = require("./routes/auth");

const app = express();


const connectDb = require("./config/db");
app.use(cors());

app.use(express.json());

connectDb();

app.use("/students", studentRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running ar port ${PORT}`);
});
