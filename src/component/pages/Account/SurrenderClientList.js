import React from "react";
import TableTemplate from "../../Ui/TableTemplate";
const SurrenderClientList =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <TableTemplate title={"Task Info"}>
                        <thead>
                            <tr key="">
                                <th>Sno.</th>
                                <th>Branch Code</th>
                                <th>Client Name</th>
                                <th>Pan no</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>User Status</th>
                                <th>Superviser Status</th>
                                <th>Payment Status</th>
                                <th>Status</th>
                                <th>User Comment</th>
                                <th>Action</th>
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
                                <td></td>
                                <td></td>
                                <td><button className="btn btn-success">View</button></td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}
export default SurrenderClientList