const express = require("express");
const cors = require("cors");
const porta = process.env.PORT || 3000;

class App {
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json());

        app.get("/", (req, res) => {
            res.json({
                name: "ifio-api-2022",
                version: "1.0.0",
                description: "Projeto para fins didáticos",
                author: "Marcelo F. Terenciani"
            })
        })

        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
    }
}
App.init();