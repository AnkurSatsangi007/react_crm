import { React, useState } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import WhatsappStatus from "../pages/whatsappLead/WhatasppStatus";

const CommonTable = (props) => {

    let headerData = props.header;
  
  return (
    <Card className="mt-3 text-center shadow">
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <div style={props.flow}>
        <Table bordered hover striped>
          <thead>
            <tr>
            
                    <th>{headerData.date}</th>
               
            </tr>
          </thead>
          <tbody>
            <tr>
          
                <td>{props.data}</td>
               
            </tr>
          </tbody>
        </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CommonTable;
