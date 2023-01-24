import React from "react";
import { Link } from "react-router-dom";
import TableTemplate from "../../Ui/TableTemplate";

const PermissionUserList = (props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <TableTemplate title={"User List"}>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Employee Name</th>
                                <th>User Name</th>
                                <th>Department</th>
                                <th>Permission</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="">
                                <td>1</td>
                                <td>Admin</td>
                                <td>Admin@0000</td>
                                <td>It</td>
                                <td>All</td>
                                <td>Enable</td>
                                <td><Link to={""} className="btn btn-primary">Edit</Link></td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}

export default PermissionUserList