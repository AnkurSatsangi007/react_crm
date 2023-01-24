import React from "react";
import CommonCard from "../../Ui/CommonCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const NintySeriesSerach = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <CommonCard title={"90 Branch Search"}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>90 Series Branch Code</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />               
              </Form.Group>
             
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </CommonCard>
        </div>
        {/* after search form show  */}
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
          <CommonCard title={"90 Series Details"}>
            <hr/>
            <Form>
                <div className="row">
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Branch Status</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>90 Series Branch Code</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Nx Branch Code</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Closure Type</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Client Name</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Contact 1</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Contact 2</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Contact 3</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Email 1</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Email 2</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Email 3</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Surrender Status</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Surrender Remarks</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Conversion Status(Agree For NSDL)</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Activation Status</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Deactivation Status</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Training Status</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Surrender Remarks</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Pending Digitization</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Physical Form</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Outstanding Amount</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Penalty Amount</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>DSC Status</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />                
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Final Comments</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              </div>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </CommonCard>
        </div>
      </div>
    </div>
  );
};

export default NintySeriesSerach;
