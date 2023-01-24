import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import CardTemplate from "../Ui/CardTemplate";

const DeskOne = () => {
  return (
    <div className="container">
      <div className="row" style={{ padding: "15px" }}>
        {/* Monthly targer */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mr-5">
          <Card className="text-center shadow mt-3">
            <Card.Body>
              <Card.Title>Monthly Target </Card.Title>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Monthly</th>
                    <th>Achieved</th>
                    <th>Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>total</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
        {/* Monthly targer end */}
        {/* Daily targer */}
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <Card className="text-center shadow mt-3">
            <Card.Body>
              <Card.Title>Daily Target </Card.Title>
              <Table bordered>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Daily Target</th>
                    <th>Achieved</th>
                    <th>Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>total</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
        {/* Daily targer end */}
        {/* Upcoming birthday */}
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <Card className="mt-3 text-center shadow">
            <Card.Body>
              <Card.Title className="text-center">Upcoming Birthday</Card.Title>
              <Table bordered hover striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Test</td>
                    <td>Admin</td>
                    <td>25 Dec 2022</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
        {/* Upcoming birthday end */}
        
        {/* card template */}
        <CardTemplate/>
        <CardTemplate/>
        <CardTemplate/>
        {/* card template ends */}
        {/* call data */}
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <Card className="mt-3  shadow">
            <Card.Body>
              <Card.Title className="">Call Data</Card.Title>
              <div style={{ overflowX: "scroll" }}>
                <Table bordered hover striped>
                  <thead>
                    <tr>
                      <th>Call Pending</th>
                      <th>Call Back</th>
                      <th>Closed</th>
                      <th>Do Not Call</th>
                      <th>Follow Up</th>
                      <th>Interested</th>
                      <th>Not Interested</th>
                      <th>Not Responding</th>
                      <th>Switch Off</th>
                      <th>Personal Pan Card</th>
                      <th>Total Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* call data end */}
        {/*  attendance */}
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <Card className="mt-3 shadow">
            <Card.Body>
              <Card.Title className="">Attendance</Card.Title>
              <div style={{ overflowX: "scroll" }}>
                <Table bordered hover striped>
                  <thead>
                    <tr>
                      <th>Mark Attendance</th>
                      <th>Morning Break</th>
                      <th>Lunch BreaK</th>
                      <th>Evening Break</th>
                      <th>Other Break</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Button style={{ marginRight: "5px" }}>Time In</Button>
                        <Button style={{ marginRight: "5px" }}>Time Out</Button>
                      </td>
                      <td>
                        <Button style={{ marginRight: "5px" }}>In</Button>
                        <Button style={{ marginRight: "5px" }}>OUT</Button>
                      </td>
                      <td>
                        <Button style={{ marginRight: "5px" }}>In</Button>
                        <Button style={{ marginRight: "5px" }}>Out</Button>
                      </td>
                      <td>
                        <Button style={{ marginRight: "5px" }}>In</Button>
                        <Button style={{ marginRight: "5px" }}>Out</Button>
                      </td>
                      <td>
                        <Button style={{ marginRight: "5px" }}>In</Button>
                        <Button style={{ marginRight: "5px" }}>Out</Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* attendance end */}
        {/* employee data attendance */}

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <Card className="mt-3 shadow">
            <Card.Body>
              <Card.Title className="">Working Hours.</Card.Title>
              <div style={{ overflowX: "scroll" }}>
                <Table bordered hover striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Time In</th>
                      <th>Time Out</th>
                      <th>Morning Break</th>
                      <th>Lunch BreaK</th>
                      <th>Evening Break</th>
                      <th>Other Break</th>
                      <th>Productive Hours</th>
                      <th>Time Remaining</th>
                      <th>Total Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Test</td>
                      <td>Admin</td>
                      <td>9:30:00</td>
                      <td>6:30:00</td>
                      <td>00:15:00</td>
                      <td>00:30:00</td>
                      <td>00:15:00</td>
                      <td>00:10:00</td>
                      <td>8:00:00</td>
                      <td>00:00:00</td>
                      <td>9:00:00</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </div>
        {/* employee data attendance end */}
      </div>
    </div>
  );
};

export default DeskOne;
