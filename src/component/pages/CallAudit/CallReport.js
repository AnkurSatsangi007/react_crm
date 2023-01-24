import React from "react";
import TableTemplate from "../../Ui/TableTemplate";


const CallReport =(props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <TableTemplate title={"Audit Call Record"}>
                        <thead>
                            <tr key="">
                                <th>Sno.</th>
                                <th>Month</th>
                                <th>Call Time</th>
                                <th>Agent Name</th>
                                <th>Crm Id</th>
                                <th>Department</th>
                                <th>Contact No</th>
                                <th>Call Duration</th>
                                <th>Total Mark</th>
                                <th>Total Attempted</th>
                                <th>Status</th>
                                <th>Auditor Id</th>
                                <th>Auditor Remark</th>
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
                                <td></td>
                                <td></td>
                                <td><button>Update</button></td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}

export default CallReport