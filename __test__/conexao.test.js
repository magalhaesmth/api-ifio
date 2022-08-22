
require("../config");
const FabricaConexao = require("../src/conexao/FabricaConexao");

test('Conexão bem-sucedida!!', async () => {
    let conexao = await FabricaConexao.obterConexao();
    expect(conexao.connections).not.toBeNull()
}, 100000)