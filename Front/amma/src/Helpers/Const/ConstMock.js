export const TOP_TICKET_PERFIL = [
    { tipoTicket: { id: '1', nome: 'Adicionar' }, titulo: 'Vaga interna', data: '13/09/2020' },
    { tipoTicket: { id: '2', nome: 'Manter' }, titulo: 'Home office', data: '07/08/2020' },
    { tipoTicket: { id: '3', nome: 'Melhorar' }, titulo: 'Armazenamento do notbook', data: '10/09/2020' },
    { tipoTicket: { id: '4', nome: 'Abandonar' }, titulo: 'Reunião 8h', data: '11/10/2020' },
];

export const TiposTicketMock = [
    { id: '1', nome: 'Adicionar' },
    { id: '2', nome: 'Manter' },
    { id: '3', nome: 'Melhorar' },
    { id: '4', nome: 'Abandonar' }
]

export const usuarioServiceMock = (user, service) => {
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
        case 'adicionarUsuario':
            return { mensagem: 'Usuário cadastrado com sucesso!' }
        default:
            return null;
    }
}


export default {
    TOP_TICKET_PERFIL,
    TiposTicketMock,
    usuarioServiceMock,
}