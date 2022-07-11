const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.json());
app.use(morgan('combined'))


app.get("/", (req, res) => {
    res.send("First Pages");
})

app.listen(PORT, () => {
    debug("Listening on port " + PORT);
})