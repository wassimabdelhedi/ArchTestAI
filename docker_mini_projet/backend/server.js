// backend/server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API is running inside Docker 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});