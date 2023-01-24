import React from "react";
import Card from "react-bootstrap/Card";

const CommonCard = (props) => {
  return (
    <Card className="mt-3 shadow">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.children}
      </Card.Body>
    </Card>
  );
};

export default CommonCard;
