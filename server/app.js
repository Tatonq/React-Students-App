const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
const mongoose = require('mongoose');
const database = require('./database/database')
const app = express();
const PORT = process.env.PORT || 4040

app.use(express.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(morgan('combined'))
app.use(cors());

mongoose.Promise = global.Promise
mongoose.connect(da)

app.get("/", (req, res) => {
    res.send("First Pages");
})

app.listen(PORT, () => {
    debug("Listening on port " + PORT);
})