const express = require("express");
require("dotenv").config();
const studentRoutes = require("./routes/student");

const app = express();

const connectDb = require("./config/db");

app.use(express.json());

connectDb();

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running ar port ${PORT}`);
});
