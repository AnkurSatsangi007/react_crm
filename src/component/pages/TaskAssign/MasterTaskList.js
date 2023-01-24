import React from "react";
import TableTemplate from "../../Ui/TableTemplate";

const MasterTaskList = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <TableTemplate title={'Master Tasks List'}>
                        <thead>
                            <tr key="">
                                <th>Sno.</th>
                                <th>Employee Name</th>
                                <th>Assigned By</th>
                                <th>Task</th>
                                <th>Assign Date</th>
                                <th>Target Date</th>
                                <th>Started On</th>
                                <th>Completed On</th>
                                <th>Day Count</th>
                                <th>Deadline Status</th>
                                <th>Status</th>
                                <th>Reject Reason</th>
                                <th>Extend Reason</th>
                                <th>Extend</th>
                                <th>Extend Status</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="">
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </TableTemplate>
                </div>
            </div>
        </div>
    )
}

export default MasterTaskList;