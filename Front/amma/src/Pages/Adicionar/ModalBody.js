import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const ModalBody = () => {

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Nome do card" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Escolha...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descrição</Form.Label>
                <Form.Control as="textarea" rows="4" />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Mostrar meu nome" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Salvar
            </Button>
        </Form>
    );
}

export default ModalBody;