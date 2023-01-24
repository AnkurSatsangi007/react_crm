import React,{ useState } from "react";
import CommonCard from "../../Ui/CommonCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PermissionForm = (props) => {
    const [userPermision,satUserPermission] = useState({
        username:'',
        Password:'',
        permission:'',
        status:'',
        addClient:'',
        listClient:'',
        Supervisor:'',
        closerList:'',
        fileList:'',
        documentReceive:'',
        clientInfoUpdate:'',
        paymentStatus:'',
        laserPayment:'',
        processingList:'',
        clientsList:'',
        branchCodeStatus:'',
        activeId:'',
        trainingList:'',
        trainingTracker:'',
        queriesAndComplaintsList:'',
        queriesAndComplaints:'',
        branchMaster:'',
        createTask:'',
        userTaskList:'',
        masterTaskList:'',
        addEmployee:'',
        employeeList:'',
        addUser:'',
        userList:'',
    });

    const userPermissionHandler =(event)=>{
        const {name,value} =event.target;
        satUserPermission(prevUserPermission=>{
            return({
                ...prevUserPermission,
                [name]:value,
            })
        });
    };
    const userPermissionFormHandler =(event)=>{
        event.preventDefault();
        console.log(userPermision);
        satUserPermission({
            username:'',
            Password:'',
            permission:'',
            status:'',
            addClient:'',
            listClient:'',
            Supervisor:'',
            closerList:'',
            fileList:'',
            documentReceive:'',
            clientInfoUpdate:'',
            paymentStatus:'',
            laserPayment:'',
            processingList:'',
            clientsList:'',
            branchCodeStatus:'',
            activeId:'',
            trainingList:'',
            trainingTracker:'',
            queriesAndComplaintsList:'',
            queriesAndComplaints:'',
            branchMaster:'',
            createTask:'',
            userTaskList:'',
            masterTaskList:'',
            addEmployee:'',
            employeeList:'',
            addUser:'',
            userList:'',
        })
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <CommonCard title={"Add User Details"}>
            <hr />
            <Form onSubmit={userPermissionFormHandler}>
              <fieldset className="row">
                <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                  <Form.Label htmlFor="">Username:</Form.Label>
                  <Form.Select onChange={userPermissionHandler} name="username" id="">
                    <option>--- select---</option>
                    <option value="">Admin</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                  <Form.Label htmlFor="">Password</Form.Label>
                  <Form.Control
                    id=""
                    placeholder="Password"
                    type="password"
                    name="Password"
                    onChange={userPermissionHandler}
                  />
                </Form.Group>
                <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                  <Form.Label htmlFor="">Permission</Form.Label>
                  <Form.Select name="permission" onChange={userPermissionHandler} id="">
                    <option>--- select ---</option>
                    <option> All</option>
                    <option> Custom</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
                  <Form.Label htmlFor="">Status</Form.Label>
                  <Form.Select name="status" onChange={userPermissionHandler} id="">
                    <option>--- select ---</option>
                    <option>Enable</option>
                    <option>Disable</option>
                  </Form.Select>
                </Form.Group>
                <hr />
                <h6>BD Team</h6>
                <Form.Group
                  className="mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  style={{ display: "flex" }}
                >
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="addClient"
                    type="checkbox"
                    id=""
                    label="Add Client"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="listClient"
                    type="checkbox"
                    id=""
                    label="List Client's"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="Supervisor"
                    type="checkbox"
                    id=""
                    label="Supervisor"
                    onChange={userPermissionHandler}
                  />
                </Form.Group>
                <hr />
                <h6>Doc. Completion Dep.</h6>
                <Form.Group
                  className="mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  style={{ display: "flex" }}
                >
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="closerList"
                    type="checkbox"
                    id=""
                    label="Closer List"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="fileList"
                    type="checkbox"
                    id=""
                    label="File List"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="documentReceive"
                    type="checkbox"
                    id=""
                    label="Document Receive"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="clientInfoUpdate"
                    type="checkbox"
                    id=""
                    label="Client Info Update"
                    onChange={userPermissionHandler}
                  />
                </Form.Group>
                <hr />
                <h6>Accounts</h6>
                <Form.Group
                  className="mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  style={{ display: "flex" }}
                >
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="paymentStatus"
                    type="checkbox"
                    id=""
                    label="Payment Status"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="laserPayment"
                    type="checkbox"
                    id=""
                    label="Laser Payment"
                    onChange={userPermissionHandler}
                  />
                </Form.Group>
                <hr />
                <h6>Documentation</h6>
                <Form.Group
                  className="mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  style={{ display: "flex" }}
                >
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="processingList"
                    type="checkbox"
                    id=""
                    label="Processing List"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="clientsList"
                    type="checkbox"
                    id=""
                    label="Client's List"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="branchCodeStatus"
                    type="checkbox"
                    id=""
                    label="Branch Code Status"
                    onChange={userPermissionHandler}
                  />
                </Form.Group>
                <hr />
                <h6>Training & Support</h6>
                <Form.Group
                  className="mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  style={{ display: "flex" }}
                >
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="activeId"
                    type="checkbox"
                    id=""
                    label="Active Id's"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="trainingList"
                    type="checkbox"
                    id=""
                    label="Trainee List"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="trainingTracker"
                    type="checkbox"
                    id=""
                    label="Training Tracker"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="queriesAndComplaints"
                    type="checkbox"
                    id=""
                    label="Queries And Complaints"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="branchMaster"
                    type="checkbox"
                    id=""
                    label="Branch Master"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="queriesAndComplaintsList"
                    type="checkbox"
                    id=""
                    label="Queries And Complaints List"
                    onChange={userPermissionHandler}
                  />
                </Form.Group>
                <hr />
                <h6>Task Assign</h6>
                <Form.Group
                  className="mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  style={{ display: "flex" }}
                >
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="createTask"
                    type="checkbox"
                    id=""
                    label="Create Task"
                    onChange={userPermissionHandler}
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="userTaskList"
                    type="checkbox"
                    id=""
                    label="User Task List"
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="masterTaskList"
                    type="checkbox"
                    id=""
                    label="Master Task List"
                  />
                </Form.Group>
                <hr />
                <h6>HR Department</h6>
                <Form.Group
                  className="mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  style={{ display: "flex" }}
                >
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="addEmployee"
                    type="checkbox"
                    id=""
                    label="Add Employee"
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="employeeList"
                    type="checkbox"
                    id=""
                    label="Employee List"
                  />
                </Form.Group>
                <hr />
                <h6>User Permission</h6>
                <Form.Group
                  className="mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  style={{ display: "flex" }}
                >
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="addUser"
                    type="checkbox"
                    id=""
                    label="Add User"
                  />
                  <Form.Check
                    style={{ marginRight: "10px" }}
                    name="userList"
                    type="checkbox"
                    id=""
                    label="User List"
                  />
                </Form.Group>

                <Button type="submit">Submit</Button>
              </fieldset>
            </Form>
          </CommonCard>
        </div>
      </div>
    </div>
  );
};

export default PermissionForm;
