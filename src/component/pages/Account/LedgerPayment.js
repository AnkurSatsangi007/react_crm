import React,{useState} from "react";
import TableTemplate from "../../Ui/TableTemplate";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const LedgerPayment =()=>{
    const [filterLP, setFilterLP] = useState({
        dateFrom: '',
        dateTo: '',
      });
    
      const FilterLPHandler = (event) => {
        const { name, value } = event.target;
        setFilterLP((prevFilter) => {
          return {
            ...prevFilter,
            [name]: value,
          };
        });
      };
      const filterLPFormHandler=(event)=>{
        event.preventDefault();
        console.log(filterLP);
        setFilterLP({
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
              onSubmit={filterLPFormHandler}
            >
              <Form.Group className="mb-3 mr-3" controlId="formBasicEmail">
                <Form.Label>Date From</Form.Label>
                <Form.Control onChange={FilterLPHandler} type="date" name="dateFrom" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3 mr-3" controlId="formBasicPassword">
                <Form.Label>Date To</Form.Label>
                <Form.Control onChange={FilterLPHandler} type="date" name="dateTo" placeholder="" />
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
                <TableTemplate title={"All Client List"}>
                        <thead>
                            <tr key="">
                                <th>Sno</th>
                                <th>URN</th>
                                <th>URN Creation Date</th>
                                <th>Services</th>
                                <th>Client Name</th>
                                <th>Refrence No</th>
                                <th>Payment Date </th>
                                <th>Payment Slip</th>
                                <th>Amount</th>
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
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}
export default LedgerPayment