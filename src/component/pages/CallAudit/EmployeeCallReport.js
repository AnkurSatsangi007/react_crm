import React from "react";
import { Link } from "react-router-dom";
import TableTemplate from "../../Ui/TableTemplate";


const EmployeeCallReport =(props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <TableTemplate title={"Employee Call Report"}>
                        <thead>
                            <tr key="">
                                <th>Sno</th>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Call Audit</th>
                                <th>Agent Performance</th>
                                <th>View Clients</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="">
                                <td>1</td>
                                <td>admin000</td>
                                <td>Admin </td>
                                <td>100000</td>
                                <td>100%</td>
                                <td><Link to="" className="btn btn-primary">View Calls</Link></td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCallReport