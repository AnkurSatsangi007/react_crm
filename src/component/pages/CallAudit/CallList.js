import React from "react";
import TableTemplate from "../../Ui/TableTemplate";


const CallList =(props)=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <TableTemplate>
                        <thead>
                            <tr key="">
                                <th>Sno</th>
                                <th>Month</th>
                                <th>Call Time</th>
                                <th>Aggent Name</th>
                                <th>Department</th>
                                <th>Crm Id</th>
                                <th>Contact No</th>
                                <th>Call Duration</th>
                                <th>Total Marks</th>
                                <th>Status</th>
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
                                <td><button className="btn">Update</button></td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}

export default CallList