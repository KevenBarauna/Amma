import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import tooltipAjuda from './../../Helpers/Const/TooltipAjuda';
import "./TopFivePerfil.css";

const ListTopFive = (props) => {
  const { tipoTicket, titulo, data } = props;

  function buscarClasse(id) {
    switch (id) {
      case 1:
        return "ListTopFive-simbolo ListTopFive-Amar";
      case 2:
        return "ListTopFive-simbolo ListTopFive-Manter";
      case 3:
        return "ListTopFive-simbolo ListTopFive-Melhorar";
      case 4:
        return "ListTopFive-simbolo ListTopFive-Abandonar";
      default:
        return "ListTopFive-simbolo";
    }
  }

  return (
    <Row className="ListTopFive-row">
      <OverlayTrigger overlay={<Tooltip>{tooltipAjuda.getTituloTicket(tipoTicket)}</Tooltip>}>
        <div className={buscarClasse(tipoTicket)}> </div>
      </OverlayTrigger>
      <Col>
        <div className="ListTopFive-titulo">{titulo}</div>
        <div className="ListTopFive-sub-titulo"> {data}</div>
      </Col>
    </Row>
  );
};

export default ListTopFive;
