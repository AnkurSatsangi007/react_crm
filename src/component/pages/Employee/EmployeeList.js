import React from "react";
import TableTemplate from "../../Ui/TableTemplate";

const EmployeeList = (props) =>{
    const employeeDataRecord=(props)=>{}
    const employeeDetail =(event)=>{

    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <TableTemplate>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Employee Id</th>
                                <th>Name</th>
                                <th>D.O.B</th>
                                <th>Mobile No.</th>
                                <th>Status</th>
                                <th>Joining Date</th>
                                <th>Resign Date</th>
                                <th>Make User</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Action</th>
                            </tr>
                                
                        </thead>
                        <tbody>
                            <tr key="">
                                <td>1</td>
                                <td>Admin</td>
                                <td>Admin User</td>
                                <td>01/01/2023</td>
                                <td>00000000000</td>
                                <td>admin</td>
                                <td>00/00/0000</td>
                                <td>yes</td>
                                <td> </td>
                                <td>IT</td>
                                <td>Admin</td>
                                <td><button onClick={employeeDetail} className="btn btn-primary">Edit</button></td>                                
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    );
}

export default EmployeeList