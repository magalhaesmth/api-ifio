"use strict"

const express = require("express");
const cors = require("cors");
const http = require("http");

class App{
    static async init(){
        let app = new express();
        app.use(cors());
        app.use(express.json);

        app.get("/endpoint", (req, res) => {
            console.log("Cheguei")
            res.json({
                name: "ifio-api-2022",
                version: "1.0.0",
                description: "Projeto para fins didáticos",
                author: "Marcelo F. Terenciani"
            })
        })

        app.listen(3000, () => {
            console.log("Startou")
        })
    }
}
App.init();