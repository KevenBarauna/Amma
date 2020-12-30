export default class Mensagem {
  //LOGIN
  static get NENHUM_USUARIO() {
    return "Nenhum usuário encontrado";
  }
  static get ERRO_LOGIN() {
    return "Erro na verificação do login";
  }
  static get ERRO_NOVO_USUARIO() {
    return "Erro ao adicionar usuário";
  }
  static get ERRO_TOP_SUGESTOES_USUARIO() {
    return "Erro ao buscar top sugestões";
  }
  static get ERRO_SUGESTOES_FAVORITAS_USUARIO() {
    return "Erro ao buscar sugestões favoritas";
  }
  //TICKET
  static get ERRO_BUSCAR_TIPO_TICKET() {
    return "Erro ao buscar os tipos de tickets";
  }
  //SUGESTAO
  static get SUGESTAO_BUSCAR_ERRO() {
    return "Erro ao pesquisar sugesões";
  }
  static get SUGESTAO_ENVIADA() {
    return "Sugestão enviada com sucesso!";
  }
  static get SUGESTAO_ENVIADA_ERRO() {
    return "Erro ao salvar sugestão";
  }
  static get GRAFICO_PENDENTE_ERRO() {
    return "Erro ao consultar gráfico de pendência";
  }
  static get GRAFICO_CATEGORIA_ERRO() {
    return "Erro ao consultar gráfico por categoria";
  }
  static get GRAFICO_AGUARDANDO_ERRO() {
    return "Erro ao consultar gráfico de pendência de aprovação";
  }
  static get GRAFICO_TOP_SUGESTAO_ERRO() {
    return "Erro em buscar dados do grágicos top sugestões";
  }
  static get SUGESTAO_APROVADA_ERRO() {
    return "Erro ao aprovar sugesões";
  }
  static get SUGESTAO_APROVADA() {
    return "Sugestão aprovada com sucesso!";
  }
  static get FAVORITAR_SUGESTAO() {
    return "Agora essa sugestão tem o seu voto! ;) ";
  }
  static get FAVORITAR_SUGESTAO_ERRO() {
    return "Erro ao favoritar sugestao";
  }
  static get APAGAR_SUGESTAO_ERRO() {
    return "Erro ao apagar sugestao";
  }
  static get APAGAR_SUGESTAO() {
    return "Sugestao apagada";
  }
}
