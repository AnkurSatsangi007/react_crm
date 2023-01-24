import React from "react";
import CommonCard from "../../Ui/CommonCard";
import TableTemplate from "../../Ui/TableTemplate";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import FloatingLabel from "react-bootstrap/FloatingLabel";

const CreateTask = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <CommonCard title={"Task Management"}>
                    <Form>
              <div className="row">
                
                <Form.Group
                  className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Ticket For</Form.Label>
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Ticket Date</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Priority</Form.Label>
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Task</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>               
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
                    </CommonCard>
                    <TableTemplate title={"Recent task"}>
                        <thead>
                            <tr key="">
                                <th>Sno.</th>
                                <th>Employee Name</th>
                                <th>Task</th>
                                <th>Assigning Date</th>
                                <th>Target Date</th>
                                <th>Follow Up Date</th>
                                <th>Started On</th>
                                <th>Completed On</th>
                                <th>Follow Up Comments</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}

export default CreateTask;