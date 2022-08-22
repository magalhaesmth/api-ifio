"use strict";

const Mongoose = require("mongoose");
const Usuario = Mongoose.model("Usuario");

module.exports = class UsuarioServico {
    static async buscarPorId(idUsuario) {
        try {
            return await Usuario.findById(idUsuario);
        } catch (error) {
            throw new Error('UsuarioServico.buscarPorId: ' + error);
        }
    } // buscarPorId()
    static async buscarTodos() {
        try {
            return await Usuario.find({});
        } catch (error) {
            throw new Error('UsuarioServico.buscarTodos: ' + error);
        }
    } // buscarTodos()
    static async criar(usuario) {
        try {
            return await Usuario.create(usuario)
        } catch (error) {
            throw new Error('UsuarioServico.criar: ' + error);
        }
    } // criar()
    static async deletar(usuario) {
        try {
            if (!usuario._id)
                throw new Error('A identificação do usuário deve ser informada.');

            return await Usuario.findOneAndDelete({ _id: usuario._id });
        } catch (error) {
            throw new Error('UsuarioServico.deletar: ' + error);
        }
    } // deletar()
    static async atualizar(usuario) {
        try {
            return await Usuario.findByIdAndUpdate(usuario._id, usuario);
        } catch (error) {
            throw new Error('UsuarioServico.atualizar: ' + error);
        }
    } // atualizar()
}