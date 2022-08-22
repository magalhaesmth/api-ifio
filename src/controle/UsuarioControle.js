"use strict";
const UsuarioServico = require("../servico/UsuarioServico")
module.exports = class UsuarioControle {
    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await UsuarioServico.buscarPorId(req.params.idUsuario));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UsuarioControle.buscarPorId ' + e.message);
        }
    } // buscarPorId()

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await UsuarioServico.buscarTodos());
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UsuarioControle.buscarTodos ' + e.message);
        }
    } // buscarTodos()

    static async criar(req, res) {
        try {
            res.status(200).send(await UsuarioServico.criar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UsuarioControle.criar ' + e.message);
        }
    } // criar()

    static async deletar(req, res) {
        try {
            res.status(200).send(await UsuarioServico.deletar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UsuarioControle.deletar ' + e.message);
        }
    } // deletar()

    static async atualizar(req, res) {
        try {
            res.status(200).send(await UsuarioServico.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UsuarioControle.atualizar ' + e.message);
        }
    } // atualizar()
}