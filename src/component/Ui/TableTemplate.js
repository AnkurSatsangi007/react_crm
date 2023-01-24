import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const TableTemplate = (props) => {
  return (
    <Card className="mt-3 text-center shadow">
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Table bordered hover striped>
          {props.children}
        </Table>
      </Card.Body>
    </Card>
  );
};

export default TableTemplate;
