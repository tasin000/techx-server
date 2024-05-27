const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Welcome to TechX Server!");
});

app.listen(port, () => {
  console.log("TechX Server is Running at port:", port);
});
