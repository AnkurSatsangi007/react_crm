import React, {useState} from "react";
import CommonCard from "../../Ui/CommonCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EmployeeForm = () => {
    const [employeData,setEmployeData]=useState({
        employeeId:'',
        employeeName:'',
        gender:'',
        dateOfBirth:'',
        maritalStatus:'',
        pinCode:'',
        address:'',
        city:'',
        state:'',
        phoneNo:'',
        status:'',
        adminUser:'',
        JoinDate:'',
        PanNo:'',
        adharNo:'',
        bankName:'',
        ifscCode:'',
        bankAcc:'',
        motherName:'',
        fatherName:'',
        permanentAddress:'',
        permanentState:'',
        permanentPinCode:'',
        permanentNo:'',
        permanentContact:'',
        relation:'',
    });
    const formHandler =(event)=>{
        const {name,value}=event.target;
        setEmployeData(prevEmployeeData=>{
            return({
                ...prevEmployeeData,
                [name]: value,
              })
        });
        

    }
    const addEmployeehandler =(event)=>{
        event.preventDefault();
        console.log(employeData);
        setEmployeData({
            employeeId:'',
            employeeName:'',
            gender:'',
            dateOfBirth:'',
            maritalStatus:'',
            pinCode:'',
            address:'',
            city:'',
            state:'',
            phoneNo:'',
            status:'',
            adminUser:'',
            JoinDate:'',
            PanNo:'',
            adharNo:'',
            bankName:'',
            ifscCode:'',
            bankAcc:'',
            motherName:'',
            fatherName:'',
            permanentAddress:'',
            permanentState:'',
            permanentPinCode:'',
            permanentNo:'',
            permanentContact:'',
            relation:'',
        })
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <CommonCard title={"Add Employee Details"}>
            <hr/>
            <Form onSubmit={addEmployeehandler}>
                <div className="row">
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Employee Id</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="employeeId" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Empoloyee Name</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="employeeName" />
              </Form.Group> 
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Gender</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="gender" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>D.O.B</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="dateOfBirth" />
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Marital Status</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="maritalStatus" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Pincode</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="pinCode" />
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="address" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="city" />
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="state" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Phone No </Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="phoneNo" />
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Status</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="status" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Make it admin User</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="adminUser" />
              </Form.Group>
              <hr/>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Joining Date</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="JoinDate" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Pan Number.</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="PanNo" />
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Adhar Number</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="adharNo" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="bankName" />
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>IFSC Code</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="ifscCode" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Bank Account Number</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="bankAcc" />
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Mother Name</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="motherName" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Father Name </Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="fatherName" />
              </Form.Group>
              <hr/>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Permanent address:</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="permanentAddress" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="permanentCity" />
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="permanentState" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="permanentPinCode" />
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Phone No</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="permanentNo" />               
              </Form.Group>

              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Contact Name</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Password" name="permanentContact" />
              </Form.Group>
              <Form.Group className="mb-3 col-xl-3 col-md-3 col-sm-3" controlId="formBasicEmail">
                <Form.Label>Relation</Form.Label>
                <Form.Control onChange={formHandler} type="text" placeholder="Enter text" name="relation" />               
              </Form.Group>              
              <hr/>
              <Button className="col-xl-4 col-md-4 col-sm-4" variant="primary" type="submit">
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

export default EmployeeForm;
