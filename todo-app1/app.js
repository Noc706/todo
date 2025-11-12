const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Todo App 1 is running!");
});

app.listen(3000, () => console.log("Todo App 1 on port 3000"));

