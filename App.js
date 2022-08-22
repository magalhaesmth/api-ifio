"use strict";

require("./config");

const express = require("express");
const cors = require("cors");
const FabricaConexao = require("./src/conexao/FabricaConexao");
const porta = global.config.porta;

class App {
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json());

        // conexão com o banco de dados
        try {
            console.log("Obtendo conexão com o banco de dados...");
            await FabricaConexao.obterConexao();
            console.log("Banco conectado com sucesso!");
        } catch (error) {
            console.log(
                `Erro ao conectar com o banco de dados: ${error.message}`);
            process.exit(1);
        }

        // instanciando os modelos
        const Usuario = require("./src/modelo/Usuario");
        new Usuario();

        //instanciando as rotas
        const UsuarioRota = require("./src/rota/UsuarioRota");
        new UsuarioRota(app)

        const ContadorRota = require("./src/rota/ContadorRota");
        new ContadorRota(app)

        // Rota básica da aplicação
        app.get("/", (req, res) => {
            res.json({
                name: "ifio-api-2022",
                version: "1.0.0",
                description: "Projeto para fins didáticos",
                author: "Marcelo F. Terenciani"
            })
        })

        app.get("/ping", (req, res) => {
            res.json({ "Resposta": "pong" })
        })

        // disponibilização do servidor
        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
    }
}
App.init();