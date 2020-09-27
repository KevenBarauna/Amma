export function exibirMensagemErro(erro) {
    console.log('$ ERRO: - ', erro)
}

export function exibirMensagemSucesso(msg) {
    console.log('$ SUCESSO: - ', msg)
}

export function exibirDadosRedux(action) {
    console.log(`$ Redux: ${action.type} - `, action.payload)
}