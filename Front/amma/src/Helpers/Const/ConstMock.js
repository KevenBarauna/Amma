
//--------------------------------------------------------------------------------------------\\
export const usuarioServiceMock = (user, service) => {
    let favoritos = [1, 3, 5];
    switch (service) {
        case 'verificarLogin':
            return {
                usuario: {
                    id: '1',
                    tipo: '1',
                    nome: user?.nome,
                    cargo: 'CODER II',
                    email: 'usuario@teste.com.br'
                }
            };
        case 'buscarTodosUsuarios':
            return {
                usuario: [
                    { id: '1', tipo: '1', nome: user?.nome, cargo: 'CODER II', email: 'usuario@teste.com.br' },
                    { id: '2', tipo: '2', nome: user?.nome, cargo: 'Pr Jr', email: 'usuarioTeste@teste.com.br' },

                ]
            };
        case 'buscarTopTicket':
            return [
                { tipoTicket: { id: '1', nome: 'Adicionar' }, titulo: 'Vaga interna', data: '13/09/2020' },
                { tipoTicket: { id: '2', nome: 'Manter' }, titulo: 'Home office', data: '07/08/2020' },
                { tipoTicket: { id: '3', nome: 'Melhorar' }, titulo: 'Armazenamento do notbook', data: '10/09/2020' },
                { tipoTicket: { id: '4', nome: 'Abandonar' }, titulo: 'Reunião 8h', data: '11/10/2020' },
            ];
        case 'buscarTicketsFavoritos':
            return favoritos;
        case 'favoritarTicket':
            favoritos.push(user);
            return favoritos
        case 'adicionarUsuario':
            return { mensagem: 'Usuário cadastrado com sucesso!' }
        default:
            return null;
    }
}

//--------------------------------------------------------------------------------------------\\
export const ticketServiceMock = (service) => {
    switch (service) {
        case 'buscarTiposTicket':
            return [
                { id: '1', nome: 'Adicionar' },
                { id: '2', nome: 'Manter' },
                { id: '3', nome: 'Melhorar' },
                { id: '4', nome: 'Abandonar' }
            ];
        case 'buscarGraficoPendente':
            return [
                { porcentagem: '70', legenda: 'Solucionado' },
                { porcentagem: '30', legenda: 'Pendente' },
            ];

        case 'buscarGraficoCategorias':
            return [
                { porcentagem: '30', legenda: 'Adicionar' },
                { porcentagem: '10', legenda: 'Abandonar' },
                { porcentagem: '50', legenda: 'Melhorar' },
                { porcentagem: '10', legenda: 'Manter' },
            ];
        case 'buscarGraficoSolucionados':
            return [];
        case 'buscarGraficoTopTicket':
            return [
                { votos: '50', titulo: 'Home office', tipo: '1' },
                { votos: '43', titulo: 'Game Changer', tipo: '2' },
                { votos: '41', titulo: 'Microsof Teams', tipo: '1' },
                { votos: '41', titulo: 'Água', tipo: '4' },
                { votos: '30', titulo: 'Hub Salvador', tipo: '2' },
                { votos: '29', titulo: 'Lixeira', tipo: '1' },
                { votos: '28', titulo: 'Mouse', tipo: '4' },
                { votos: '22', titulo: 'Cadeira', tipo: '4' },
                { votos: '20', titulo: 'Monitor', tipo: '1' },
                { votos: '18', titulo: 'Café', tipo: '2' },
            ];
        case 'buscarNovosTickets':
            return [
                { id: 1, titulo: 'Home office', descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s trys standard dummy text ever since the 1500 em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', data: '04/10/2020', votos: 1 },
                { id: 2, titulo: 'Game Changer', descricao: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.', data: '10/12/2020', votos: 0 },
                { id: 3, titulo: 'Microsof Teams', descricao: 'Lorem ing industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500ss', data: '05/08/2020', votos: 6 },
                { id: 4, titulo: 'Água', descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500 em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500ss', data: '01/01/2021', votos: 10 },
                { id: 5, titulo: 'Hub Salvador', descricao: '', data: '12/10/2020', votos: 1 },
                { id: 6, titulo: 'Lixeira', descricao: 'O cuidado em identificar pontos críticos na adoção de políticas descentralizadoras estimula a padronização dos níveis de motivação departamental.', data: '04/10/2021', votos: 35 },
            ];
        default:
            return null;
    }
}


export default {
    ticketServiceMock,
    usuarioServiceMock,
}