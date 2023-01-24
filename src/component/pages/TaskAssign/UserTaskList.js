import React from "react";
import TableTemplate from "../../Ui/TableTemplate";

const UserTaskList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <TableTemplate title={"Nesting Client"}>
            <thead>
              <tr key="">
                <th>Sno.</th>
                <th>Employee Name</th>
                <th>Task</th>
                <th>Asigning Date</th>
                <th>Target Date</th>
                <th>Follow Up Date</th>
                <th>Started On</th>
                <th>Completed On</th>
                <th>Date Diff</th>
                <th>Deadline Status</th>
                <th>Status</th>
                <th>Reject Reasion</th>
                <th>Comments</th>
                <th>Follow Up Comments</th>
                <th>Start</th>
                <th>Complete</th>
                <th>Follow Up</th>
                <th>Extends</th>
                <th>Extends Status</th>
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
  );
};

export default UserTaskList;
