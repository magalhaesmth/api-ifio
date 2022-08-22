
var contador = 0;

module.exports = class ContadorServico {
    static obterContador() {
        return { contador: contador }
    }

    static incrementar() {
        contador++;
        return { contador: contador }
    }

    static decrementar() {
        if (contador >= 1) {
            contador--;
        }

        return { contador: contador }
    }
}