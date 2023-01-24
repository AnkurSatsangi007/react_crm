import React from "react";
import { Form } from "react-bootstrap";
import CommonCard from "../../Ui/CommonCard";
import Button from "react-bootstrap/Button";
const WhatappLeadAdd = () =>{

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <CommonCard title={" Whatsapp Lead"}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name *</Form.Label>
                                <Form.Control name="name" placeholder="Enter Customer Name"></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone No *</Form.Label>
                                <Form.Control name="phone" placeholder="Enter Customer Contact No."></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label> Employee Name </Form.Label>
                                <Form.Control name="EmpName" placeholder="Enter Your Name"></Form.Control>
                            </Form.Group>
                            
                            <Form.Group className="mb-3">
                                <h6 className="mt-3">Service Required</h6>
                                <Form.Check type="checkbox" name="irctc" className="mb-3" label="IRCTC"  />
                                <Form.Check type="checkbox" name="pan" className="mb-3" label="PAN"  />
                                <Form.Check type="checkbox" name="dmt" className="mb-3" label="DMT"  />
                            </Form.Group>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </CommonCard>
                </div>
            </div>
        </div>
    )
}

export default WhatappLeadAdd