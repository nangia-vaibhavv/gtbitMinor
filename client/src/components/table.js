import React from "react";
import { Row, Col } from "reactstrap";

export default props => {
  const getRow1 = _ => {
    let capacitynumbers = [];
    for (var i = 0; i < Math.ceil(props.capacitynumbers / 2); i++) {
      capacitynumbers.push(
        <span
          key={i}
          className={props.empty ? "empty-cust" : "full-cust"}
        ></span>
      );
    }
    return capacitynumbers;
  };
  const getRow2 = _ => {
    let capacitynumbers2 = [];
    for (var i = 0; i < Math.floor(props.capacitynumbers / 2); i++) {
      capacitynumbers2.push(
        <span
          key={i}
          className={props.empty ? "empty-cust" : "full-cust"}
        ></span>
      );
    }
    return capacitynumbers2;
  };

  return (
    <div className="cust-container">
      <Col
        className={props.empty ? "cust selectable-cust" : "cust"}
        onClick={_ => {
          props.empty
            ? props.selectTable(props.name, props.id)
            : console.log("Tried to select an unavailable custodian");
        }}
      >
        <Row noGutters className="cust-row">
          <Col className="text-center">{getRow1()}</Col>
        </Row>
        <Row noGutters className="cust-row">
          <Col className="text-center">{getRow2()}</Col>
        </Row>

        <p className="text-center cust-name">{props.name}</p>
      </Col>
    </div>
  );
};
