
const ContadorServico = require("../servico/ContadorServico")


module.exports = class CounterController {
    static async obterContador(req, res) {
        res.status(200).send(ContadorServico.obterContador())
    }

    static async incrementar(req, res) {
        res.status(200).send(ContadorServico.incrementar())
    }

    static async decrementar(req, res) {
        res.status(200).send(ContadorServico.decrementar())
    }
}