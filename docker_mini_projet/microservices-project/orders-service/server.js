const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Orders Service Running 🛒");
});

app.listen(3000, () => {
    console.log("Orders service on 3000");
});