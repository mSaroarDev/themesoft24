const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// initialize app
const app = express();

// dotenv
dotenv.config();

// cors enable
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

// routes
app.get("/", (req, res) => {
  res.send("Hello Developer");
});

// start the server
app.listen(process.env.PORT || 5002, () => {
  console.log(`server running on ${process.env.PORT || 5002}`);
});
