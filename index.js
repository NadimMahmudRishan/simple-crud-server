const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

// rishan35952
// kFEens8Rjmmdwv8h

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SIMPLE CRUD IS RUNNING");
});

app.listen(port, () => {
  console.log(`CRUD in running on port : ${port}`);
});
