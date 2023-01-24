import React,{useState} from "react";
import TableTemplate from "../../Ui/TableTemplate";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const QcClientList = (props)=>{
    const [qcFilter, setQcFilter] = useState({
        dateFrom: '',
        dateTo: '',
      });
    
      const FilterHandler = (event) => {
        const { name, value } = event.target;
        setQcFilter((prevQcFilter) => {
          return {
            ...prevQcFilter,
            [name]: value,
          };
        });
      };
      const filterFormHandler=(event)=>{
        event.preventDefault();
        console.log(qcFilter);
        setQcFilter({
            dateFrom: '',
            dateTo: '',
        });
      }
    return(
        <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div>
              <Form
                className=""
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onSubmit={filterFormHandler}
              >
                <Form.Group className="mb-3 mr-3" controlId="formBasicEmail">
                  <Form.Label>Date From</Form.Label>
                  <Form.Control onChange={FilterHandler} type="date" name="dateFrom" placeholder="" />
                </Form.Group>
  
                <Form.Group className="mb-3 mr-3" controlId="formBasicPassword">
                  <Form.Label>Date To</Form.Label>
                  <Form.Control onChange={FilterHandler} type="date" name="dateTo" placeholder="" />
                </Form.Group>
  
                <Button
                  style={{ height: "40px", marginLeft: "10Px" }}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </div>
            <TableTemplate title={"Closure Clients List"}>
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>URN</th>
                  <th>Client Name</th>
                  <th>Services</th>
                  <th>Mobile</th>
                  <th>Email Id</th>
                  <th>Closure Ammount</th>
                  <th>Closure By</th>
                  <th>File Manager</th>
                  <th>Assign Date</th>
                  <th>Doc Verification Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr key="">
                  <td>1</td>
                  <td>IT1111155</td>
                  <td>Admin</td>
                  <td>Crm</td>
                  <td>00000000000</td>
                  <td>OOO@OOO</td>
                  <td>3000</td>
                  <td>Admin</td>
                  <td>Admin</td>
                  <td>04 jan 2023</td>
                  <td>04 jan 2023</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </TableTemplate>
          </div>
        </div>
      </div>
    )
}

export default QcClientList