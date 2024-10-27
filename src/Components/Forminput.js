import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Data } from "../data/Data";

export const Forminput = ({ onadd,notify }) => {
  const [qu, setqu] = useState("");
  const [re, setre] = useState("");
  const addnewitem = () => {
    Data.push({ id: Math.random(), q: qu, r: re });
    setqu("");
    setre("");
    if(qu=="" || re==""){
      notify("remplire all champ","errore")
      return;
    }
    onadd();
    
  };
      
  return (
    <Row className="mb-3">
      <Col sm="5">
        <Form.Control
          onChange={(e) => {
            setqu(e.target.value);
          }}
          placeholder="Enter your Questions"
          value={qu}
        />
      </Col>
      <Col sm="5">
        <Form.Control
          onChange={(e) => {
            setre(e.target.value);
          }}
          placeholder="Enter your Responses"
          value={re}
        />
      </Col>
      <Col sm="2">
        <Button onClick={addnewitem} className="btn btn-warning">
          Add
        </Button>
      </Col>
    </Row>
  );
};
