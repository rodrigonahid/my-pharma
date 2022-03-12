const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// Port ready for heroku
const port = process.env.PORT || 4000;

// Mongoose Connection
mongoose.connect("mongodb://localhost/mypharma");
// BodyParser Defaults
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Using routes.js
app.use(routes);

app.listen(port, () => console.log("Server running on port " + port));
