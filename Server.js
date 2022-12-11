const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/TodoRoute");

const app = express();
const connection = mongoose.connect(process.env.mongo_url)
app.use(express.json());
app.use(cors());


app.use(routes);

app.listen(7070, async () => {
    try {
        await connection;
        console.log("Connected to DB Successfully")

    }
    catch (err) {
        console.log("Connection to DB failed")
        console.log(err)
    }
    console.log(`Listening on port 7070`)
})
