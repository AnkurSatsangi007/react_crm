import React, { useState } from "react";
import TableTemplate from "../../Ui/TableTemplate";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Attendance = (props) => {
  const [filter, setFilter] = useState({
    dateFrom: '',
    dateTo: '',
  });

  const FilterHandler = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => {
      return {
        ...prevFilter,
        [name]: value,
      };
    });
  };
  const filterFormHandler=(event)=>{
    event.preventDefault();
    console.log(filter);
    setFilter({
        dateFrom: '',
        dateTo: '',
    });
  }
  return (
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
          <TableTemplate>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>Date</th>
                <th>Name</th>
                <th>Department</th>
                <th>Time In</th>
                <th>Time Out</th>
                <th>Morning Break</th>
                <th>Lunch Break</th>
                <th>Evening Break</th>
                <th>Other Break</th>
                <th>Production HourS</th>
                <th>Time ReaminIng</th>
                <th>Total Time</th>
              </tr>
            </thead>
            <tbody>
              <tr key="">
                <td>1</td>
                <td>04 jan 2023</td>
                <td>Admin</td>
                <td>IT</td>
                <td>09:30:00</td>
                <td>06:30:00</td>
                <td>00:15:00</td>
                <td>00:30:00</td>
                <td>00:15:00</td>
                <td>00:10:00</td>
                <td>08:00:00</td>
                <td>00:00:00</td>
                <td>09:00:00</td>
              </tr>
            </tbody>
          </TableTemplate>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
