const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require('cors')
var bodyParser = require('body-parser')
const port = 8888;
const MANGO_URL = "mongodb://localhost:27017/Url-short";


app.use(cors())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose
  .connect(MANGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
