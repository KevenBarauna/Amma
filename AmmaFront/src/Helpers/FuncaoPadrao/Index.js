import Swal from 'sweetalert2';

export function exibirMensagemErro(erro) {
    console.log('$ ERRO: - ', erro)
}


export function exibirDadosRedux(action) {
    mensagemFlash('info', `${action.type} - ${action.payload}`, 'top')
}

export const AlertaModal = (icone, texto, button, titulo) => {
    let icon = icone || 'info';
    let text = texto || '';
    let confirmButtonText = button || 'Ok';
    let title = titulo || 'Cuidado!';

    return Swal.fire({
        icon, //'info', 'warning', 'error', 'success'
        title,
        text,
        confirmButtonText,
    });
};


export const mensagemFlash = (icon, title, posicao,tempo) => {
    const Toast = Swal.mixin({
        toast: true,
        position: posicao || 'bottom',
        showConfirmButton: false,
        timer: tempo || 3000,
        timerProgressBar: true,
        onOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    Toast.fire({
        icon,//'info', 'warning', 'error', 'success'
        title,
    });
};

