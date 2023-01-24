import React from "react";
import CommonCard from "../../Ui/CommonCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UploadNeatedTask = () => {
  return (
    <div className="container">
      <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <CommonCard title={"UPLOAD Nesting Data"}>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap",}}>
            <Form>                            
              <Button variant="primary" type="submit">
                Download Sample File
              </Button>
            </Form>
            <Form>                            
              <Button variant="primary" type="submit">
                Download Nested Data
              </Button>
            </Form>
            </div>
          
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Upload File</Form.Label>
                <Form.Control type="file" placeholder="Enter email" />                
              </Form.Group>              
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

export default UploadNeatedTask;
