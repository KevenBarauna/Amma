import React, { useState } from 'react';
import { Form, Button, Col, OverlayTrigger, Tooltip, Row } from 'react-bootstrap';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import TooltipAjuda from './../../Helpers/Const/TooltipAjuda';
import imagemAjuda from './../../assets/image/ajuda.png';

const ModalBody = () => {

    const tiposCategoria = useSelector(
        state => state.TicketReducer.tipoTicket
    );

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState({ value: '0', label: 'carregando...' });
    const [descricao, setDescricao] = useState('');
    const [exibirNome, setExibirNome] = useState(false);

    const handleCategoria = (value) => {
        setCategoria(value)
    }

    var showUser = document.getElementById("showUser");

    const handleSubmit = () => {
        setExibirNome(showUser.checked ? true : false)
        console.log('$ Submit...');
        console.log('$ titulo: ', titulo);
        console.log('$ categoria: ', categoria);
        console.log('$ descricao: ', descricao);
        console.log('$ exibirNome: ', exibirNome);
    }

    return (
        <Form>
            <Form.Row style={{ marginTop: '30px' }} >
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>* Título</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nome do card"
                        onChange={e => setTitulo(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>* Categoria</Form.Label>
                    <Select
                        id='select-categoria'
                        placeholder='Selecione'
                        isSearchable={false}
                        label
                        noOptionsMessage={() => 'Nenhuma opção disponível'}
                        onChange={handleCategoria}
                        options={tiposCategoria?.map(tipo => {
                            return {
                                value: tipo.id,
                                label: tipo.nome,
                            };
                        })}
                    />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="Fale mais sobre seu ticket.." onChange={e => setDescricao(e.target.value)} />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
                <Row>
                    <Form.Check type="checkbox" label="Anonimato" id="showUser" />
                    <OverlayTrigger overlay={<Tooltip>{TooltipAjuda.anomino}</Tooltip>}>
                        <img src={imagemAjuda} alt='Ajuda' className='tooltipo-ajuda' />
                    </OverlayTrigger>
                </Row>
            </Form.Group>

            <Button variant="danger" className='btn-padrao' style={{ marginBottom: '30px' }} onClick={() => handleSubmit()}>
                Salvar
            </Button>

        </Form>
    );
}

export default ModalBody;