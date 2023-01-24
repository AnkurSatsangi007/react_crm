import React from "react";
import CommonCard from "../../Ui/CommonCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <CommonCard title={"Create Ticket"}>
            <Form>
              <div className="row">
                <Form.Group
                  className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Ticket Id</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
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
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Relevent Details"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>

                <Form.Group
                  className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Upload Supported Doc:</Form.Label>
                  <Form.Control type="file" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </CommonCard>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
