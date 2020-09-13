const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    msg: "Server2",
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
