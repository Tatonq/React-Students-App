const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const PORT = 5000
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.json());
app.use(morgan('combined'))


app.get("/", (req, res) => {
    res.send("First Pages");
})

app.listen(PORT, () => {
    debug("Listening on port " + PORT);
})