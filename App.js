"use strict"

const express = require("express");
const cors = require("cors");

let app = express();

app.use(cors());
app.use(express.json);

app.get("/", (req, res) => {
    console.log("Cheguei")
    res.json({
        name: "ifio-api-2022",
        version: "1.0.0",
        description: "Projeto para fins didáticos",
        author: "Marcelo F. Terenciani"
    })
})

const server = app.listen(3000, () => {
    console.log("Startou")
})
module.exports = {app, server}