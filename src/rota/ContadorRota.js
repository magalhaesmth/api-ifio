
const ContadorControle = require("../controle/ContadorControle")

module.exports = class ContadorRota {
    constructor(app) {
        app.route("/contador").get(ContadorControle.obterContador);

        app.route("/contador/incrementar").post(ContadorControle.incrementar);

        app.route("/contador/decrementar").post(ContadorControle.decrementar);
    }
}