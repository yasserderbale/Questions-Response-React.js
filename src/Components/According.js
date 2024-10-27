import React from "react";
import { Accordion, Button, Row } from "react-bootstrap";
import { Data } from "../data/Data";
export const According = ({ data, clearoneitems }) => {
  const storages = JSON.parse(localStorage.getItem("item"));
  const clearfirst = (ID) => {
    const index = Data.findIndex((item) => item.id === ID);
    Data.splice(index, 1);
    clearoneitems([...Data]);
  };
  return (
    <Row>
      {storages != null ? (
        storages.map((item) => {
          return (
            <Accordion className="mb-3" defaultActiveKey="0">
              <Accordion.Item eventKey={item.id}>
                <Accordion.Header>
                  <div className="text-center">First questions {item.q}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="mr-auto d-flex justify-content-center align-items-center">
                    The Responses {item.r}
                    <Button
                      onClick={() => clearfirst(item.id)}
                      className="btn btn-primary m-3"
                    >
                      Clear First
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })
      ) : (
        <h5 className="my-5 fs-8 text-center">Ther isn't Questions</h5>
      )}
    </Row>
  );
};
