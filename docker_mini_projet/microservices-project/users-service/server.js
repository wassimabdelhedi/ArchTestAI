// backend/server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Users Service is running inside Docker 🚀");
});

app.listen(3000, () => {
  console.log("Users Service running on port 3000");
});