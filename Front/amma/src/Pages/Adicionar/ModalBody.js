import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import Select from 'react-select';
import { useSelector } from 'react-redux';

const ModalBody = () => {

    const tiposCategoria = useSelector(
        state => state.TicketReducer.tipoTicket
    );

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState({ value: '0', label: 'carregando...' });
    const [descricao, setDescricao] = useState('');
    const [exibirNome, setExibirNome] = useState(false);

    const handleCategoria = (value) => {
        console.log(value);
        setCategoria(value)
    }

    const handleSubmit = () => {
        console.log('$ SUBMIT');
        console.log('$ titulo ', titulo);
        console.log('$ categoria ', categoria);
        console.log('$ descricao ', descricao);
        console.log('$ exibirNome ', exibirNome);
    }

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nome do card"
                        onChange={e => setTitulo(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Categoria</Form.Label>
                    <Select
                        id='select-categoria'
                        placeholder='Selecione'
                        isSearchable={false}
                        label
                        //value={}
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
                <Form.Control as="textarea" rows="4" onChange={e => setDescricao(e.target.value)} />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Mostrar meu nome" onChange={e => setExibirNome(e.target)} />
            </Form.Group>

            <Button variant="primary" onClick={() => handleSubmit()}>
                Salvar
            </Button>
        </Form>
    );
}

export default ModalBody;