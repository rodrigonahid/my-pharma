const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require("dotenv").config();
// Port ready for heroku
const port = process.env.PORT || 4000;

// Mongoose Connection
mongoose.connect(process.env.MONGODB_ATLAS_KEY);
// BodyParser Defaults
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Using routes.js
app.use(routes);

app.listen(port, () => console.log("Server running on port " + port));
