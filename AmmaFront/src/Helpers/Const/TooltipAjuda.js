export default class TooltipAjuda {

    static get anomino() {
        return 'A aplicação não exibe seu nome, porém esse registro permanecerá salvo no banco de dados';
    }

    static getTituloTicket(idTicket) {
        switch (idTicket) {
            case 1:
              return "Adicionar";
            case 2:
              return "Manter";
            case 3:
              return "Melhorar";
            case 4:
              return "Abandonar";
            default:
              return " ";
          }
    }


}